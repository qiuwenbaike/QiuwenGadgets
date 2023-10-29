import {enhancedSpecialSearch} from './core';

(() => {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Search') {
		return;
	}

	$(enhancedSpecialSearch);
})();
