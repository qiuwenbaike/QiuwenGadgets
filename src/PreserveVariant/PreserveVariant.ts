import {preserveVariant, userVariant} from './modules/core';

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
