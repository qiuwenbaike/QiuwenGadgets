import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';

$(function confirmLogout(): void {
	if (!WG_USER_NAME) {
		return;
	}

	addListener($('body'));
});
