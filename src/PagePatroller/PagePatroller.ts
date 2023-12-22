import {pagePatroller} from './modules/core';

if (
	mw.config.get('wgNamespaceNumber') >= 0 &&
	mw.config.get('wgPageName') !== 'Qiuwen:首页' &&
	!document.querySelectorAll('.noarticletext').length
) {
	$(() => {
		void pagePatroller();
	});
}
