import type {HotCatConfig, HotCatSuggestionConfig, HotCatSuggestionEngine, HotCatSuggestionTitles} from './types';

interface HotCatCategoryMember {
	title: string;
}

interface HotCatSuggestionQueryResponse {
	query?: {
		allpages?: HotCatCategoryMember[];
		categorymembers?: HotCatCategoryMember[];
		pages?: Record<string, {title: string; categories?: HotCatCategoryMember[]}>;
	};
}

/**
 * Create the configured suggestion engines and search presets.
 */
export const createSuggestionData = (
	HC: HotCatConfig
): {
	suggestionEngines: Record<string, HotCatSuggestionEngine>;
	suggestionConfigs: Record<string, HotCatSuggestionConfig>;
} => {
	let catPrefix: RegExp | null = null;
	const toCategoryTitles = (members: HotCatCategoryMember[]): HotCatSuggestionTitles => {
		return members.map((member) => {
			return member.title.slice(Math.max(0, member.title.indexOf(':') + 1));
		}) as HotCatSuggestionTitles;
	};
	const suggestionEngines: Record<string, HotCatSuggestionEngine> = {
		opensearch: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1`,
			// $1 = search term
			// Function to convert result of uri into an array of category names
			handler: (queryResult: unknown, queryKey?: string): HotCatSuggestionTitles | null => {
				const result = queryResult as [string, HotCatSuggestionTitles] | null;
				if (result && result.length >= 2) {
					const key = String(result[0]).slice(Math.max(0, String(result[0]).indexOf(':') + 1));
					const titles = result[1];
					let exists = false;
					catPrefix ||= new RegExp(`^(${HC.category_regexp}):`);
					for (let i = 0; i < titles.length; i++) {
						catPrefix.lastIndex = 0;
						const match = catPrefix.exec(titles[i]!);
						if (match && match.length > 1) {
							titles[i] = titles[i]!.slice(Math.max(0, titles[i]!.indexOf(':') + 1)); // rm namespace
							if (key === titles[i]) {
								exists = true;
							}
						} else {
							titles.splice(i, 1); // Nope, it's not a category after all.
							i--;
						}
					}
					titles.exists = exists;
					if (queryKey !== key) {
						titles.normalized = key;
					}
					// Remember the NFC normalized key we got back from the server
					return titles;
				}
				return null;
			},
		},
		internalsearch: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1`,
			handler: (queryResult: unknown): HotCatSuggestionTitles | null => {
				const allpages = (queryResult as HotCatSuggestionQueryResponse | null)?.query?.allpages;
				return allpages ? toCategoryTitles(allpages) : null;
			},
		},
		exists: {
			uri: `${mw.config.get('wgScriptPath')}/api.php?format=json&action=query&prop=info&titles=Category:$1`,
			handler: (queryResult: unknown, queryKey?: string): HotCatSuggestionTitles | null => {
				const {pages} = (queryResult as HotCatSuggestionQueryResponse | null)?.query ?? {};
				if (!pages || pages['-1']) {
					return null;
				}
				// Should have exactly 1
				for (const p in pages) {
					if (!Object.hasOwn(pages, p)) {
						continue;
					}
					let title: string = pages[p]!.title;
					title = title.slice(Math.max(0, title.indexOf(':') + 1));
					const titles: HotCatSuggestionTitles = [title];
					titles.exists = true;
					if (queryKey !== title) {
						titles.normalized = title;
					}
					// NFC
					return titles;
				}
				return null;
			},
		},
		subcategories: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1`,
			handler: (queryResult: unknown): HotCatSuggestionTitles | null => {
				const categorymembers = (queryResult as HotCatSuggestionQueryResponse | null)?.query?.categorymembers;
				return categorymembers ? toCategoryTitles(categorymembers) : null;
			},
		},
		parentcategories: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max`,
			handler: (queryResult: unknown): HotCatSuggestionTitles | null => {
				const {pages} = (queryResult as HotCatSuggestionQueryResponse | null)?.query ?? {};
				if (!pages) {
					return null;
				}
				for (const p in pages) {
					if (!Object.hasOwn(pages, p)) {
						continue;
					}
					const {categories} = pages[p]!;
					if (categories) {
						return toCategoryTitles(categories);
					}
				}
				return null;
			},
		},
	};
	const suggestionConfigs: Record<string, HotCatSuggestionConfig> = {
		searchindex: {
			name: 'Search index',
			engines: ['opensearch'],
			cache: {},
			show: true,
			temp: false,
			noCompletion: false,
		},
		pagelist: {
			name: 'Page list',
			engines: ['internalsearch', 'exists'],
			cache: {},
			show: true,
			temp: false,
			noCompletion: false,
		},
		combined: {
			name: 'Combined search',
			engines: ['opensearch', 'internalsearch'],
			cache: {},
			show: true,
			temp: false,
			noCompletion: false,
		},
		subcat: {
			name: 'Subcategories',
			engines: ['subcategories'],
			cache: {},
			show: true,
			temp: true,
			noCompletion: true,
		},
		parentcat: {
			name: 'Parent categories',
			engines: ['parentcategories'],
			cache: {},
			show: true,
			temp: true,
			noCompletion: true,
		},
	};
	return {suggestionEngines, suggestionConfigs};
};
