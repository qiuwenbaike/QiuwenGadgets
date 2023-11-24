import {WG_ACTION, WG_NAMESPACE_NUMBER} from './modules/constant';
import {edit0} from './modules/core';

(() => {
	if (WG_ACTION !== 'view') {
		return;
	}

	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	$(edit0);
})();
