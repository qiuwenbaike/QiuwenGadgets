import type {HotCatConfig} from './types';
import {getMessage} from './getMessage';

export interface HotCatChangeResult {
	text: string;
	summary: string[];
	error: string | null;
}

export type HotCatCategoryMatches = {
	match: RegExpExecArray;
}[] & {
	re?: RegExp;
};

export const createCategoryTextTools = (
	HC: HotCatConfig,
	wikiTextBlank: string,
	wikiTextBlankRE: RegExp,
	wikiTextBlankOrBidi: string,
	escapeRE: (str: string) => string,
	getInterlanguageRE: () => RegExp | null
) => {
	const findCatsRE = new RegExp(
		`\\[\\[${wikiTextBlankOrBidi}(?:${HC.category_regexp})${wikiTextBlankOrBidi}:[^\\]]+\\]\\]`,
		'g'
	);
	const replaceByBlanks = (match: string): string => {
		return match.replace(/(\s|\S)/g, ' ');
	};
	const find_category = (
		wikitext: string,
		category: string,
		once?: boolean
	): RegExpExecArray | HotCatCategoryMatches | null => {
		let cat_regex: RegExp;
		if (HC.template_categories[category]) {
			cat_regex = new RegExp(
				`\\{\\{${wikiTextBlankOrBidi}(${HC.template_regexp}(?=${wikiTextBlankOrBidi}:))?${wikiTextBlankOrBidi}(?:${
					HC.template_categories[category]
				})${wikiTextBlankOrBidi}(\\|.*?)?\\}\\}`,
				'g'
			);
		} else {
			const cat_name = escapeRE(category);
			const initial = cat_name.slice(0, 1);
			cat_regex = new RegExp(
				`\\[\\[${wikiTextBlankOrBidi}(${HC.category_regexp})${wikiTextBlankOrBidi}:${wikiTextBlankOrBidi}${
					initial === '\\' || !HC.capitalizePageNames
						? initial
						: `[${initial.toUpperCase()}${initial.toLowerCase()}]`
				}${cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)}${wikiTextBlankOrBidi}(\\|.*?)?\\]\\]`,
				'g'
			);
		}
		if (once) {
			return cat_regex.exec(wikitext);
		}
		const nowikiRegex = new RegExp('<no'.concat('wiki>', String.raw`(\s|\S)*?</no`, 'wiki', '>'), 'g');
		const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
		const result: HotCatCategoryMatches = [];
		let curr_match: RegExpExecArray | null = null;
		while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
			result[result.length] = {
				match: curr_match,
			};
		}
		result.re = cat_regex;
		return result;
	};
	const change_category = (
		wikitext: string,
		toRemove: string | null,
		toAdd: string | null,
		key: string | null,
		is_hidden?: boolean
	): HotCatChangeResult => {
		const find_insertionpoint = (_wikitext: string): {idx: number; onCat: boolean} => {
			const nowikiRegex = new RegExp('<no'.concat('wiki>', String.raw`(\s|\S)*?</no`, 'wiki', '>'), 'g');
			const copiedtext = _wikitext
				.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks)
				.replace(nowikiRegex, replaceByBlanks);
			let index = -1;
			findCatsRE.lastIndex = 0;
			while (findCatsRE.exec(copiedtext) !== null) {
				index = findCatsRE.lastIndex;
			}
			if (index < 0) {
				let match: RegExpExecArray | null = null;
				const interlanguageRE = getInterlanguageRE();
				if (interlanguageRE) {
					match = interlanguageRE.exec(copiedtext);
				} else {
					// Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
					// a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
					// and "tokipona".
					match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(
						copiedtext
					);
				}
				if (match) {
					index = match.index;
				}
				return {
					idx: index,
					onCat: false,
				};
			}
			return {
				idx: index,
				onCat: index >= 0,
			};
		};
		const summary: string[] = [];
		const nameSpace = HC.category_canonical;
		const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
		let matches: RegExpExecArray | HotCatCategoryMatches | null;
		let cat_point = -1;
		key &&= `|${key}`;
		if (toRemove && toRemove.length > 0) {
			matches = find_category(wikitext, toRemove);
			if (!matches || matches.length === 0) {
				return {
					text: wikitext,
					summary,
					error: getMessage('messages-cat_notFound', toRemove),
				};
			}
			const matchesArray = matches as HotCatCategoryMatches;
			const firstMatch = matchesArray[0]!.match;
			let before = wikitext.slice(0, Math.max(0, firstMatch.index));
			let after = wikitext.slice(Math.max(0, firstMatch.index + firstMatch[0].length));
			if (matchesArray.length > 1) {
				matchesArray.re!.lastIndex = 0;
				after = after.replace(matchesArray.re!, '');
			}
			if (toAdd && key === null) {
				key = firstMatch[2] ?? null;
			}
			let i = before.length - 1;
			while (i >= 0 && before.charAt(i) !== '\n' && before.slice(i, i + 1).search(/\s/) >= 0) {
				i--;
			}
			let j = 0;
			while (j < after.length && after.charAt(j) !== '\n' && after.slice(j, j + 1).search(/\s/) >= 0) {
				j++;
			}
			if (
				i >= 0 &&
				before.charAt(i) === '\n' &&
				(after.length === 0 || (j < after.length && after.charAt(j) === '\n'))
			) {
				i--;
			}
			before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : '';
			after = j < after.length ? after.slice(Math.max(0, j)) : '';
			if (
				before.length > 0 &&
				before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 &&
				after.length > 0 &&
				after.slice(0, 1).search(/\S/) >= 0
			) {
				before += ' ';
			}
			cat_point = before.length;
			if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === '\n') {
				after = after.slice(1);
			}
			wikitext = before + after;
			if (!keyChange) {
				if (HC.template_categories[toRemove]) {
					summary[summary.length] = getMessage('messages-template_removed', toRemove);
				} else {
					summary[summary.length] = getMessage('messages-cat_removed', toRemove);
				}
			}
		}
		if (toAdd && toAdd.length > 0) {
			matches = find_category(wikitext, toAdd);
			if (matches && matches.length > 0) {
				return {
					text: wikitext,
					summary,
					error: getMessage('messages-cat_exists', toAdd),
				};
			}
			let onCat = false;
			if (cat_point < 0) {
				const point = find_insertionpoint(wikitext);
				cat_point = point.idx;
				({onCat} = point);
			} else {
				onCat = true;
			}
			const newcatstring = `[[${nameSpace}:${toAdd}${key || ''}]]`;
			if (cat_point >= 0) {
				const suffix = wikitext.slice(Math.max(0, cat_point));
				wikitext =
					wikitext.slice(0, Math.max(0, cat_point)) +
					(cat_point > 0 ? '\n' : '') +
					newcatstring +
					(onCat ? '' : '\n');
				wikitext += suffix.length > 0 && suffix.slice(0, 1) !== '\n' ? `\n${suffix}` : suffix;
			} else {
				if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== '\n') {
					wikitext += '\n';
				}
				wikitext += (wikitext.length > 0 ? '\n' : '') + newcatstring;
			}
			if (keyChange) {
				let k = key || '';
				if (k.length > 0) {
					k = k.slice(1);
				}
				summary[summary.length] = getMessage('messages-cat_keychange', toAdd, k);
			} else {
				summary[summary.length] = getMessage('messages-cat_added', toAdd);
			}
			if (HC.uncat_regexp && !is_hidden) {
				const txt = wikitext.replace(HC.uncat_regexp, '');
				if (txt.length !== wikitext.length) {
					wikitext = txt;
					summary[summary.length] = getMessage('messages-uncat_removed');
				}
			}
		}
		return {
			text: wikitext,
			summary,
			error: null,
		};
	};
	return {find_category, change_category};
};
