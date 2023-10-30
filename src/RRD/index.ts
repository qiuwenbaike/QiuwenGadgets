import {isLog, main} from './module/core';

(() => {
	if (!(mw.config.get('wgAction') === 'history' || isLog)) {
		return;
	}

	$(main);
})();
