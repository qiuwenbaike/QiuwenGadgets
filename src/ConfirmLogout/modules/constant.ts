const LOGOUT_ELEMENT_SELECTOR = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';

const WG_SKIN: string = mw.config.get('skin');
const WG_USER_NAME: string | null = mw.config.get('wgUserName');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {LOGOUT_ELEMENT_SELECTOR, WG_SKIN, WG_USER_NAME, WG_WIKI_ID};
