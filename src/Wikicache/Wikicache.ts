import {init} from './modules/core';
import {wgAction} from './modules/constant';

(() => {
	if (!window.localStorage || !document.querySelector('#wpTextbox1') || !document.querySelector('#wpSummary')) {
		return;
	}

	if (['edit', 'submit'].includes(wgAction)) {
		init();
	}
})();
