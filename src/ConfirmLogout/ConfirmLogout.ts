import {LOGIN_ELEMENT_SELECTOR, WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';

$(function confirmLogout(): void {
	const $element: JQuery<HTMLAnchorElement> = $<HTMLAnchorElement>(LOGIN_ELEMENT_SELECTOR);
	if (!$element.length || !WG_USER_NAME) {
		return;
	}

	addListener($element);
});
