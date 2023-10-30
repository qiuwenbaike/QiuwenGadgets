const LOGIN_ELEMENT_SELECTOR = '#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"]';

const WG_USER_NAME: string | null = mw.config.get('wgUserName');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {LOGIN_ELEMENT_SELECTOR, WG_USER_NAME, WG_WIKI_ID};
