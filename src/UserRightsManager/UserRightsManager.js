import {initDialog} from './modules/core';
import {pagePermissions} from './modules/constant';

(() => {
	const pageName = mw.config.get('wgPageName');
	const permission = pagePermissions[pageName];
	if (!permission) {
		return;
	}
	$(initDialog);
})();
