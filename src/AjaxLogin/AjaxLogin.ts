import * as OPTIONS from './options.json';
import {checkA11yConfirmKey, getBody} from '../util';
import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';
import {ajaxLogin} from './modules/core';
import {initWindowManager} from './modules/initWindowManager';

(async function initAutoLogin(): Promise<void> {
	if (WG_USER_NAME) {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = await getBody();

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
})();
