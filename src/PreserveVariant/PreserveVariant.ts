import {preserveVariant, userVariant} from './modules/core';

(() => {
	if (
		!userVariant ||
		userVariant.indexOf('zh-') !== 0 ||
		(window.location.pathname.indexOf(`/${userVariant}/`) !== 0 && mw.util.getParamValue('variant') !== userVariant)
	) {
		return;
	}
	$(preserveVariant);
})();
