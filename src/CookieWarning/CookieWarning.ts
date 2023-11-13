import {LAST_STORAGE_VALUE, WG_USER_NAME} from './modules/constant';
import {api} from './modules/api';
import {insertElement} from './modules/insertElement';

$(function cookieWarning(): void {
	if (WG_USER_NAME) {
		api.postWithEditToken({
			action: 'options',
			format: 'json',
			change: 'gadget-LoginToEdit=0',
		});
		return;
	}

	if (LAST_STORAGE_VALUE === '1' || location.search.includes('consentRead=')) {
		return;
	}

	insertElement();
});
