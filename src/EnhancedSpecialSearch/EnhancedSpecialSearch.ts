import {enhancedSpecialSearch} from './modules/core';

(() => {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Search') {
		return;
	}

	$(enhancedSpecialSearch);
})();
