const API_ENTRY_POINT: string = mw.util.wikiScript('api');
const API_TAG = 'Cat-a-lot';
const DEFAULT_SETTING = [
	{
		name: 'watchlist',
		default: 'preferences',
		label_i18n: 'watchlistpref',
		select_i18n: {
			watch_pref: 'preferences',
			watch_nochange: 'nochange',
			watch_watch: 'watch',
			watch_unwatch: 'unwatch',
		},
	},
	{
		name: 'minor',
		default: false,
		label_i18n: 'minorpref',
	},
	{
		name: 'editpages',
		default: true,
		label_i18n: 'editpagespref',
		forcerestart: true,
	},
	{
		name: 'docleanup',
		default: false,
		label_i18n: 'docleanuppref',
	},
	{
		name: 'subcatcount',
		default: 50,
		min: 5,
		max: 500,
		label_i18n: 'subcatcountpref',
		forcerestart: true,
	},
];
const ENABLE_NAMESPACE = 14;
const VERSION = '5.0';

const WG_ACTION: MediaWikiConfigMap_WgAction = mw.config.get('wgAction');
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
	DEFAULT_SETTING,
	ENABLE_NAMESPACE,
	VERSION,
	WG_ACTION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_SCRIPT,
	WG_TITLE,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};
