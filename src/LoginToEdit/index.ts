import {loginToEdit} from './core';

(() => {
	if (mw.config.get('wgUserName')) {
		return;
	}

	$(loginToEdit);
})();
