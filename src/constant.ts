// eslint-disable-next-line camelcase
const WG_ACTION: MediaWikiConfigMap_WgAction = mw.config.get('wgAction');
const WG_CANONICAL_NAMESPACE: string = mw.config.get('wgCanonicalNamespace');
const WG_CANONICAL_SPECIAL_PAGE_NAME: string = mw.config.get('wgCanonicalSpecialPageName').toString();
const WG_FORMATTED_NAMESPACES: Record<number, string> = mw.config.get('wgFormattedNamespaces');
const WG_NAMESPACE_IDS: Record<string, number> = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_SCRIPT: string = mw.config.get('wgScript');
const WG_SKIN: string = mw.config.get('skin');
const WG_TITLE: string = mw.config.get('wgTitle');
const WG_USER_GROUPS: string[] | null = mw.config.get('wgUserGroups');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_USER_NAME: string | null = mw.config.get('wgUserName');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {
	WG_ACTION,
	WG_CANONICAL_NAMESPACE,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
	WG_SCRIPT,
	WG_SKIN,
	WG_TITLE,
	WG_USER_GROUPS,
	WG_USER_NAME,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};
