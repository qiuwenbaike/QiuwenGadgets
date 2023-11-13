import {LAST_STORAGE_VALUE, URL_CONSENT_READ, WG_USER_NAME} from './modules/constant';
import {insertElement} from './modules/insertElement';

$(function cookieWarning(): void {
	if (WG_USER_NAME || LAST_STORAGE_VALUE === '1' || URL_CONSENT_READ) {
		return;
	}

	insertElement();
});
