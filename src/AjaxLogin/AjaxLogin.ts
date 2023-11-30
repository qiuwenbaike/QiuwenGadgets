import * as OPTIONS from './options.json';
import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';
import {ajaxLogin} from './modules/core';
import {checkA11yConfirmKey} from '../util';
import {initWindowManager} from './modules/initWindowManager';

$(function initAutoLogin(): void {
	if (WG_USER_NAME) {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $('body');

	const $loginElement: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>(OPTIONS.loginElementSelector);
	if (!$loginElement.length) {
		return;
	}

	const windowManager: OO.ui.WindowManager = initWindowManager();
	windowManager.$element.appendTo($body);

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
	addListener($loginElement, eventListener);
});
