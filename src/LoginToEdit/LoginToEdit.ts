import {loginToEdit} from './modules/core';

(() => {
	if (mw.config.get('wgUserName')) {
		return;
	}

	$(loginToEdit);
})();
