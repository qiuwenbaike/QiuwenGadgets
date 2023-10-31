// eslint-disable-next-line camelcase
const WG_ACTION: MediaWikiConfigMap_WgAction = mw.config.get('wgAction');
const WG_CANONICAL_NAMESPACE: string = mw.config.get('wgCanonicalNamespace');
const WG_CANONICAL_SPECIAL_PAGE_NAME: string = mw.config.get('wgCanonicalSpecialPageName').toString();

const IS_DIFF_ACTION: boolean = location.href.includes('diff=');
const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);
const IS_WG_HISTORY_ACTION: boolean = WG_ACTION === 'history';
const IS_WG_SPECIAL_PAGE: boolean = [
	'Contributions',
	'Log',
	'Newpages',
	'Recentchanges',
	'Recentchangeslinked',
	'Watchlist',
].includes(WG_CANONICAL_SPECIAL_PAGE_NAME);

const REGEX_INTERNAL_URL = /([^=])([\s"'])((?:\/?w\/index\.php\?|\/?wiki\/)[\w!#%&()+./:=?@\\~-]+)\2/g;
// External links (no wikicode)
const REGEX_IMPORT_SCRIPT =
	/([Ii]mport[Ss]cript(?:<span class="br0">)?\((?:<\/span><span class="st0">)?)('|")([^\n<>[\]{|}]+?)(\2(?:<\/span><span class="br0">)?\)(?:<\/span>)?)/g;
// ImportScript
const REGEX_TL = /([^{]{{2}\s*[Tt]l\|)([^\n:<>[\]{|}]+)/g;
// For {{tl}}
const REGEX_URL =
	/((?:[^"[]|[^=]")(?:<span class="diffchange">)?)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+?)(?=(?:<\/span>)?[\s"')\]|}])/g;

export {
	WG_ACTION,
	WG_CANONICAL_NAMESPACE,
	IS_DIFF_ACTION,
	IS_WG_EDIT_OR_SUBMIT_ACTION,
	IS_WG_HISTORY_ACTION,
	IS_WG_SPECIAL_PAGE,
	REGEX_INTERNAL_URL,
	REGEX_IMPORT_SCRIPT,
	REGEX_TL,
	REGEX_URL,
};
