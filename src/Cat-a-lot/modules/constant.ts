/* eslint-disable camelcase */
import type {Setting} from './types';

const API_ENTRY_POINT: string = mw.util.wikiScript('api');
const API_TAG = 'Cat-a-lot';

const CLASS_NAME_LABEL = 'cat_a_lot__label';
const CLASS_NAME_LABEL_LAST_SELECTED = 'cat_a_lot__label--last-selected';
const CLASS_NAME_LABEL_SELECTED = 'cat_a_lot__label--selected';

const DEFAULT_SETTING: Setting = {
	docleanup: {
		default: false,
		label_i18n: 'docleanuppref',
	},
	editpages: {
		default: true,
		label_i18n: 'editpagespref',
	},
	minor: {
		default: false,
		label_i18n: 'minorpref',
	},
	subcatcount: {
		default: 50,
		label_i18n: 'subcatcountpref',
	},
	watchlist: {
		default: 'preferences',
		label_i18n: 'watchlistpref',
		select_i18n: {
			watch_nochange: 'nochange',
			watch_pref: 'preferences',
			watch_unwatch: 'unwatch',
			watch_watch: 'watch',
		},
	},
};

const ENABLE_NAMESPACE = 14;
const VERSION = '5.0';

const WG_CANONICAL_SPECIAL_PAGE_NAME: string = mw.config.get('wgCanonicalSpecialPageName').toString();
const WG_FORMATTED_NAMESPACES: Record<number, string> = mw.config.get('wgFormattedNamespaces');
const WG_NAMESPACE_IDS: Record<string, number> = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_SCRIPT: string = mw.config.get('wgScript');
const WG_TITLE: string = mw.config.get('wgTitle');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {
	API_ENTRY_POINT,
	API_TAG,
	CLASS_NAME_LABEL,
	CLASS_NAME_LABEL_LAST_SELECTED,
	CLASS_NAME_LABEL_SELECTED,
	DEFAULT_SETTING,
	ENABLE_NAMESPACE,
	VERSION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_SCRIPT,
	WG_TITLE,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};
