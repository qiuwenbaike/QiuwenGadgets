const LOGIN_ELEMENT_SELECTOR = '#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"]';

const WG_USER_NAME: string | null = mw.config.get('wgUserName');

export {LOGIN_ELEMENT_SELECTOR, WG_USER_NAME};
