import {shortURL} from './modules/core';

(() => {
	if (
		mw.config.get('wgNamespaceNumber') === -1 ||
		document.getElementsByClassName('noarticletext').length > 0 ||
		mw.config.get('wgAction') !== 'view'
	) {
		return;
	}

	$(shortURL);
})();
