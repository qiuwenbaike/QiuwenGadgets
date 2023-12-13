import * as OPTIONS from './options.json';
import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';
import {getBody} from '~/util';

(async function confirmLogout(): Promise<void> {
	if (!WG_USER_NAME) {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = await getBody();

	const $element: JQuery = $body.find(OPTIONS.logoutElementSelector);
	if (!$element.length) {
		return;
	}

	addListener($element);
})();
