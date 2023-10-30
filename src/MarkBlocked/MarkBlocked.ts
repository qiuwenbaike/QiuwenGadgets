import {markBlocked} from './modules/core';

(() => {
	if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		return;
	}
	markBlocked();
})();
