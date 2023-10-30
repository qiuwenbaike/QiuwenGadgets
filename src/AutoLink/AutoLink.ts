import {autoLink, isSpecialPage} from './modules/core';

(() => {
	// Special crono pages where this script is enabled
	if (mw.config.get('wgCanonicalNamespace') === 'Special' && !isSpecialPage) {
		return; // Disabled in the other special pages
	}

	$(autoLink);
})();
