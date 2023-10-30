import {confirmLogout} from './module/core';

(() => {
	if (
		!document.querySelectorAll('#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a') ||
		!mw.config.get('wgUserName')
	) {
		return;
	}
	confirmLogout();
})();
