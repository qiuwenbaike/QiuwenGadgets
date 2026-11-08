import type {HotCatConfig, HotCatMwConfig} from './types';
import {existsNo, existsYes} from './images';

export const createHotCatConfig = (conf: HotCatMwConfig): HotCatConfig => {
	const HC: HotCatConfig = {
		// U+2212 is a minus sign; U+2193 and U+2191 are arrows.
		links: {
			change: '(±)',
			remove: '(\u2212)',
			add: '(+)',
			restore: '(×)',
			undo: '(×)',
			down: '(\u2193)',
			up: '(\u2191)',
		},
		changeTag: 'HotCat',
		// HTML content of the multi-mode link.
		addmulti: '<span>+<sup>+</sup></span>',
		// Return true to disable HotCat.
		disable: (): boolean => {
			const ns = conf.wgNamespaceNumber;
			const nsIds = conf.wgNamespaceIds;
			return (
				ns < 0 ||
				ns === 10 ||
				ns === 828 ||
				ns === 8 ||
				(ns === 6 && !conf.wgArticleId) ||
				(ns === 2 && /\.(js|css)$/.test(conf.wgTitle)) ||
				(nsIds && (ns === nsIds['creator'] || ns === nsIds['timedtext'] || ns === nsIds['institution'])) ||
				false
			);
		},
		// Templates matching this expression mark pages as uncategorized.
		uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
		// Images used by the category existence indicator.
		existsYes,
		existsNo,
		// Category names mapped to template-name regular expressions.
		template_categories: {},
		// Set from siteinfo unless explicitly configured.
		capitalizePageNames: null,
		upload_disabled: false,
		blacklist: null,
		// Background for changed categories in multi-edit mode.
		bg_changed: '#FCA',
		// When enabled, changes open an edit page instead of being submitted automatically.
		no_autocommit: false,
		del_needs_diff: false,
		// Delay before requesting suggestions after input.
		suggest_delay: 1000,
		editbox_width: 40,
		suggestions: 'combined',
		fixed_search: false,
		use_up_down: true,
		listSize: 10,
		single_minor: true,
		dont_add_to_watchlist: false,
		shortcuts: null,
		addShortcuts: (map?: Record<string, string> | null): void => {
			if (!map) {
				return;
			}
			HC.shortcuts ||= {};
			for (let k in map) {
				if (!Object.hasOwn(map, k)) {
					continue;
				}
				let v = map[k];
				if (typeof v !== 'string') {
					continue;
				}
				k = k.trim();
				v = v.trim();
				if (k.length === 0 || v.length === 0) {
					continue;
				}
				HC.shortcuts[k] = v;
			}
		},
		// Filled in from localized MediaWiki namespaces.
		category_canonical: '',
		category_regexp: '',
		template_regexp: '',
	};
	return HC;
};
