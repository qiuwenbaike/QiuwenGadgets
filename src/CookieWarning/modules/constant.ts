const CLASS_CONSENT_NOTICE = 'gadget-cookie_warning__consent-notice';
const STORAGE_KEY = 'ext.gadget.CookieWarning_cookieConsent';
const LAST_STORAGE_VALUE: string | null = mw.storage.get(STORAGE_KEY) as string | null;

const WG_USER_NAME: string | null = mw.config.get('wgUserName');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {CLASS_CONSENT_NOTICE, LAST_STORAGE_VALUE, STORAGE_KEY, WG_USER_NAME, WG_WIKI_ID};
