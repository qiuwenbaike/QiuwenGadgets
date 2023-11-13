import {LOGIN_ELEMENT_SELECTOR, WG_USER_NAME} from './modules/constant';
import {ajaxLogin} from './modules/core';
import {checkA11yConfirmKey} from '../util';

$(function initAutoLogin() {
	const $element: JQuery<HTMLAnchorElement> = $(LOGIN_ELEMENT_SELECTOR);
	if (WG_USER_NAME || !$element.length) {
		return;
	}

	const windowManager = new OO.ui.WindowManager();
	windowManager.$element.appendTo($('body'));

	const fakeToastifyInstance: ReturnType<typeof toastify> = {
		hideToast: () => {},
	};

	const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (!checkA11yConfirmKey(event)) {
			return;
		}
		event.preventDefault();
		ajaxLogin(windowManager, fakeToastifyInstance);
	};
	$element.on('click', eventListener);
	$element.on('keydown', eventListener);
});
