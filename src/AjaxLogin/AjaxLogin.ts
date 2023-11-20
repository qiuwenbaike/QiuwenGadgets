import {$body, checkA11yConfirmKey} from '../util';
import {LOGIN_ELEMENT_SELECTOR, WG_USER_NAME} from './modules/constant';
import {ajaxLogin} from './modules/core';

$(function initAutoLogin(): void {
	const $element: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>(LOGIN_ELEMENT_SELECTOR);
	if (WG_USER_NAME || !$element.length) {
		return;
	}

	const windowManager = new OO.ui.WindowManager();
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
	$element.on('click', eventListener);
	$element.on('keydown', eventListener);
});
