import * as OPTIONS from './options.json';
import {WG_USER_NAME} from './modules/constant';
import {ajaxLogin} from './modules/core';
import {checkA11yConfirmKey} from '../util';
import {initWindowManager} from './modules/initWindowManager';

$(function initAutoLogin(): void {
	const $body: JQuery<HTMLBodyElement> = $('body');

	const $loginElement: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>(OPTIONS.loginElementSelector);
	if (WG_USER_NAME || !$loginElement.length) {
		return;
	}

	const windowManager = initWindowManager($body);

	const fakeToastifyInstance: ToastifyInstance = {
		hideToast: () => {},
	};

	const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (!checkA11yConfirmKey(event)) {
			return;
		}

		event.preventDefault();
		ajaxLogin(windowManager, fakeToastifyInstance);
	};
	$loginElement.on('click', eventListener);
	$loginElement.on('keydown', eventListener);
});
