import {isLog, main} from './core';

(() => {
	if (!(mw.config.get('wgAction') === 'history' || isLog)) {
		return;
	}

	$(main);
})();
