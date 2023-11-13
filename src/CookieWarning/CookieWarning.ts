import {LAST_STORAGE_VALUE, WG_USER_NAME} from './modules/constant';
import {insertElement} from './modules/insertElement';

$(function cookieWarning(): void {
	if (WG_USER_NAME || LAST_STORAGE_VALUE === '1' || location.search.includes('consentRead=')) {
		return;
	}

	insertElement();
});
