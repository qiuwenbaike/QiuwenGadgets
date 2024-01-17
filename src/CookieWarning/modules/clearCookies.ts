import {COOKIE_CLEARED_KEY, LAST_COOKIE_CLEARED_VALUE, WG_WIKI_ID} from './constant';

// Temporary: clear old session cookies under `${lang}.qiuwenbaike.cn`
const clearCookies = () => {
	if (LAST_COOKIE_CLEARED_VALUE !== '1') {
		document.cookie = '';
		localStorage.removeItem(`MediaWikiModuleStore:${WG_WIKI_ID}`);
		mw.storage.set(COOKIE_CLEARED_KEY, '1', 60 * 60 * 1000 * 24 * 184);
	}
};

export {clearCookies};
