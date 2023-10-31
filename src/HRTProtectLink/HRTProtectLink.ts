import {HRTProtectLink} from './modules/core';

(() => {
	if (![10, 828].includes(mw.config.get('wgNamespaceNumber'))) {
		return;
	}
	HRTProtectLink();
})();
