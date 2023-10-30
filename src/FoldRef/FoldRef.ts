import {foldRef} from './core';

(() => {
	// for article space only
	if (mw.config.get('wgNamespaceNumber') !== 0) {
		return;
	}

	$(foldRef);
})();
