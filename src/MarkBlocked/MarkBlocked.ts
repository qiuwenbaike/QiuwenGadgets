import {markBlocked} from './core';

(() => {
	if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		return;
	}
	markBlocked();
})();
