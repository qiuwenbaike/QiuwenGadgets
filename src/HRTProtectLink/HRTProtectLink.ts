import {HRTProtectLink} from './modules/core';
import {WG_NAMESPACE_NUMBER} from './modules/constant';

(() => {
	if (![10, 828].includes(WG_NAMESPACE_NUMBER)) {
		return;
	}

	HRTProtectLink();
})();
