import {shortURL} from './modules/core';

if (
	mw.config.get('wgNamespaceNumber') >= 0 ||
	!document.querySelectorAll('.noarticletext').length ||
	mw.config.get('wgAction') === 'view'
) {
	$(shortURL);
}
