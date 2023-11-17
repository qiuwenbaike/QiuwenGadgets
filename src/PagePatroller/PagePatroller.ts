import {pagePatroller} from './modules/core';

(() => {
	if (
		mw.config.get('wgNamespaceNumber') < 0 ||
		mw.config.get('wgPageName') === 'Qiuwen:首页' ||
		document.getElementsByClassName('noarticletext').length > 0
	) {
		return;
	}

	$(pagePatroller);
})();
