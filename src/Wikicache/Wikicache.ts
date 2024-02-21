import {init} from './modules/core';
import {wgAction} from './modules/constant';

$(() => {
	if (
		!window.localStorage ||
		!document.querySelector('input[name=wpTextbox1]') ||
		!document.querySelector('input[name=wpSummary]')
	) {
		return;
	}

	if (['edit', 'submit'].includes(wgAction)) {
		init();
	}
});
