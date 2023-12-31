const WG_NAMESPACE_IDS = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

const IS_CATEGORY = WG_NAMESPACE_NUMBER === 14;

const SUFFIX_APPEND = 0;
const SUFFIX_REPLACE = 1;
const SUFFIX_SETDEFAULT = 2;

export {
	IS_CATEGORY,
	SUFFIX_APPEND,
	SUFFIX_REPLACE,
	SUFFIX_SETDEFAULT,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};
