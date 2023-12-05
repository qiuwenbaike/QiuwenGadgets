const LOGIN_ELEMENT_SELECTOR: string = '#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"]';

const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_USER_NAME: string | null = mw.config.get('wgUserName');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {LOGIN_ELEMENT_SELECTOR, WG_USER_NAME, IS_WG_EDIT_OR_SUBMIT_ACTION};
