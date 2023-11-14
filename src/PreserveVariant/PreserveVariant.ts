import {preserveVariant} from './modules/core';
import {userVariant} from './modules/constant';

(() => {
	if (
		!userVariant ||
		!userVariant.includes('zh-') ||
		!(window.location.pathname.includes(`/${userVariant}/`) && mw.util.getParamValue('variant') !== userVariant)
	) {
		return;
	}
	$(preserveVariant);
})();
