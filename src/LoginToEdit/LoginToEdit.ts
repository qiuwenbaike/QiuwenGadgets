import {WG_USER_NAME} from './modules/constant';
import {api} from './modules/api';
import {loginToEdit} from './modules/core';

(() => {
	if (WG_USER_NAME) {
		api.saveOption('gadget-LoginToEdit', '0');
		return;
	}

	$(loginToEdit);
})();
