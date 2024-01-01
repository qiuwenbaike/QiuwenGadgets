import {PAGE_PERM, WG_PAGE_NAME} from './modules/constant';
import {initDialog} from './modules/core';

(() => {
	if (Object.keys(PAGE_PERM).includes(WG_PAGE_NAME)) {
		$(initDialog);
	}
})();
