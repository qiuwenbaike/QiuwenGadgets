const CLASS_NAME: string = 'gadget-cookie_warning';

const STORAGE_KEY: string = 'ext.gadget.CookieWarning_cookieConsent';

const COOKIE_CLEARED_KEY: string = `${STORAGE_KEY}__cookieCleared`;

const LAST_STORAGE_VALUE: string | null = mw.storage.get(STORAGE_KEY) as string | null;

const LAST_COOKIE_CLEARED_VALUE: string | null = mw.storage.get(COOKIE_CLEARED_KEY) as string | null;

const URL_CONSENT_READ: string | null = mw.util.getParamValue('consentRead');

const WG_USER_NAME: string | null = mw.config.get('wgUserName');

export {
	CLASS_NAME,
	COOKIE_CLEARED_KEY,
	LAST_COOKIE_CLEARED_VALUE,
	LAST_STORAGE_VALUE,
	STORAGE_KEY,
	URL_CONSENT_READ,
	WG_USER_NAME,
};
