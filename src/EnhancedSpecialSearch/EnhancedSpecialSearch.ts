import {enhancedSpecialSearch} from './module/core';

(() => {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Search') {
		return;
	}

	$(enhancedSpecialSearch);
})();
