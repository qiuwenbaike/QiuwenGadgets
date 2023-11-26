import * as OPTIONS from './options.json';
import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';

$(function confirmLogout(): void {
	if (!WG_USER_NAME) {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $('body');

	const $element: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>(OPTIONS.logoutElementSelector);
	if (!$element.length) {
		return;
	}

	addListener($element);
});
