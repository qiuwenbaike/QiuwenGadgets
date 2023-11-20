const LOGIN_ELEMENT_SELECTOR = '#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"]';

const WG_USER_NAME: string | null = mw.config.get('wgUserName');

const LOGIN_URL = mw.util.getUrl('Special:UserLogin', {
	returnto: mw.config.get('wgPageName'),
});

const REGISTER_URL = mw.util.getUrl('Special:CreateAccount', {
	returnto: mw.config.get('wgPageName'),
});

export {LOGIN_ELEMENT_SELECTOR, LOGIN_URL, REGISTER_URL, WG_USER_NAME};
