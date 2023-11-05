const STORAGE_KEY = 'ext.gadget.CookieWarning_cookieConsent';
const LAST_STORAGE_VALUE: string | null = mw.storage.get(STORAGE_KEY) as string | null;

const WG_USER_NAME: string | null = mw.config.get('wgUserName');

export {LAST_STORAGE_VALUE, STORAGE_KEY, WG_USER_NAME};
