import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {foldRef} from './modules/core';

(() => {
	// for article space only
	if (WG_NAMESPACE_NUMBER !== 0) {
		return;
	}

	$(foldRef);
})();
