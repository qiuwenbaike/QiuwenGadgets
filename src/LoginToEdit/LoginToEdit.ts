import {api} from './modules/api';
import {loginToEdit} from './modules/core';

(() => {
	if (mw.config.get('wgUserName')) {
		api.postWithEditToken({
			action: 'options',
			format: 'json',
			change: 'gadget-LoginToEdit=0',
		});
		return;
	}

	$(loginToEdit);
})();
