import {initDialog} from './core';
import {pagePermissions} from './constant';

(() => {
	const pageName = mw.config.get('wgPageName');
	const permission = pagePermissions[pageName];
	if (!permission) {
		return;
	}
	$(initDialog);
})();
