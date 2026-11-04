/**
 * @summary The little modification links displayed after category names
 */
interface HotCatLinks {
	change: string;
	remove: string;
	add: string;
	restore: string;
	undo: string;
	down: string;
	up: string;
}

/**
 * @summary The global configuration object, exposed as `window.HotCat`
 */
interface HotCatConfig {
	links: HotCatLinks;
	changeTag: string;
	// The HTML content of the "enter multi-mode" link at the front.
	addmulti: string;
	// Return true to disable HotCat.
	disable: () => boolean;
	// A regexp matching a template used to mark uncategorized pages, if your wiki does have that.
	uncat_regexp: RegExp | null;
	// The images used for the little indication icon. Should not need changing.
	existsYes: string;
	existsNo: string;
	// A list of categories which can be removed by removing a template
	// key: the category without namespace
	// value: a regexp matching the template name, again without namespace
	template_categories: Record<string, string | undefined>;
	capitalizePageNames: boolean | null;
	// If upload_disabled is true, HotCat will not be used on the Upload form.
	upload_disabled: boolean;
	// Single regular expression matching blacklisted categories that cannot be changed or added using HotCat.
	blacklist: RegExp | null;
	// Background for changed categories in multi-edit mode.
	bg_changed: string;
	// If true, HotCat will never automatically submit changes.
	no_autocommit: boolean;
	// If true, the "category deletion" link "(-)" will never save automatically but always show an edit page.
	del_needs_diff: boolean;
	// Time, in milliseconds, that HotCat waits after a keystroke before making a request to the server.
	suggest_delay: number;
	// Default width, in characters, of the text input field.
	editbox_width: number;
	// One of the engine names, to be used as the default suggestion engine.
	suggestions: string;
	// If true, always use the default engine, and never display a selector.
	fixed_search: boolean;
	// If false, do not display the "up" and "down" links
	use_up_down: boolean;
	// Default list size
	listSize: number;
	// If true, single category changes are marked as minor edits.
	single_minor: boolean;
	// If true, never add a page to the user's watchlist.
	dont_add_to_watchlist: boolean;
	shortcuts: Record<string, string> | null;
	addShortcuts: (map?: Record<string, string> | null) => void;
	// Filled in at runtime
	category_canonical: string;
	category_regexp: string;
	template_regexp: string;
	started?: boolean;
	start?: (data: HotCatApiQueryResponse) => void;
	runWhenReady?: (callback: () => void) => void;
}

/**
 * @summary The subset of `mw.config.values` used by HotCat
 */
interface HotCatMwConfig {
	wgAction: string;
	wgArticleId: number;
	wgArticlePath: string;
	wgCanonicalSpecialPageName: string | false;
	wgCurRevisionId: number;
	wgFormattedNamespaces: Record<string, string>;
	wgIsArticle: boolean;
	wgNamespaceIds: Record<string, number>;
	wgNamespaceNumber: number;
	wgPageContentModel: string;
	wgPageName: string;
	wgScript: string;
	wgScriptPath: string;
	wgServer: string;
	wgTitle: string;
	wgUserName: string | null;
}

interface HotCatApiRevision {
	slots: {
		main: {
			content: string;
		};
	};
	timestamp?: string;
	revid?: number;
	user?: string;
}

interface HotCatApiPage {
	title: string;
	missing?: string;
	redirect?: string;
	watched?: string;
	lastrevid?: number;
	starttimestamp?: string;
	categoryinfo?: {
		hidden?: string;
	};
	categories?: {
		title: string;
	}[];
	links?: {
		ns: number;
		title: string;
	}[];
	langlinks?: {
		lang: string;
	}[];
	revisions?: HotCatApiRevision[];
}

interface HotCatApiQueryResponse {
	query?: {
		// `formatversion=2` returns an array, the legacy format returns an object
		pages?: HotCatApiPage[] | Record<string, HotCatApiPage>;
		general?: {
			time?: string;
			case?: string;
		};
		tokens?: {
			csrftoken: string;
		};
		userinfo?: {
			options?: {
				watchcreations?: string;
				watchdefault?: string;
				minordefault?: number;
			};
		};
	};
	'query-continue'?: {
		langlinks?: unknown;
	};
}

/**
 * @summary A list of category titles, optionally carrying meta information
 */
type HotCatSuggestionTitles = string[] & {
	exists?: boolean;
	normalized?: string;
};

interface HotCatSuggestionEngine {
	uri: string;
	handler: (queryResult: unknown, queryKey?: string) => HotCatSuggestionTitles | null;
}

interface HotCatSuggestionConfig {
	name: string;
	engines: string[];
	cache: Record<string, HotCatSuggestionTitles | undefined>;
	show: boolean;
	temp: boolean;
	noCompletion: boolean;
}

interface HotCatSuggestionCallback {
	allTitles: HotCatSuggestionTitles | null;
	callsMade: number;
	nofCalls: number;
	noCompletion: boolean | undefined;
	engineName: string;
	exists?: boolean;
	normalized?: string;
	dontCache?: boolean;
	cancelled?: boolean;
}

declare global {
	interface Window {
		readonly HotCatAutoRemoveCheckCatOptOut?: boolean;
		readonly HotCatAutoRemoveCheckCat?: boolean;
		HotCat?: HotCatConfig;
		hotcat_dont_add_to_watchlist?: boolean;
		hotcat_no_autocommit?: boolean;
		hotcat_del_needs_diff?: boolean;
		hotcat_suggestion_delay?: number;
		hotcat_editbox_width?: number;
		hotcat_suggestions?: string;
		hotcat_suggestions_fixed?: boolean;
		hotcat_single_changes_are_minor?: boolean;
		hotcat_changed_background?: string;
		hotcat_use_category_links?: boolean;
		hotcat_list_size?: number;
		hotcat_get_state?: () => string | null;
		hotcat_set_state?: (state: string) => null;
		hotcat_close_form?: () => void;
		UploadForm?: {
			previous_hotcat_state?: string | null;
		};
	}

	interface Document {
		editform:
			| (HTMLFormElement & {
					wpTextbox1?: HTMLTextAreaElement;
					wpSummary?: HTMLInputElement;
					wpAutoSummary?: HTMLInputElement;
					wpSave?: HTMLInputElement;
			  })
			| null;
	}
}

export default global;
export type {
	HotCatApiPage,
	HotCatApiQueryResponse,
	HotCatConfig,
	HotCatLinks,
	HotCatMwConfig,
	HotCatSuggestionCallback,
	HotCatSuggestionConfig,
	HotCatSuggestionEngine,
	HotCatSuggestionTitles,
};
