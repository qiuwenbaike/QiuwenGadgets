import {shortURL} from './modules/core';

(() => {
	if (
		mw.config.get('wgNamespaceNumber') === -1 ||
		document.querySelectorAll('.noarticletext').length ||
		mw.config.get('wgAction') !== 'view'
	) {
		return;
	}

	$(shortURL);
})();
