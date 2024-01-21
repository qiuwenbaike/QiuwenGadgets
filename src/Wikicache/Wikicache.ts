import {init} from './modules/core';
import {wgAction} from './modules/constant';

(() => {
	if (!window.localStorage) {
		return;
	}

	if (['edit', 'submit'].includes(wgAction)) {
		init();
	}
})();
