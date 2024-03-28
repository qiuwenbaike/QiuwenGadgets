import {pagePatroller} from './modules/core';

const {wgNamespaceNumber, wgPageName, wgArticleId} = mw.config.get();

if (wgNamespaceNumber >= 0 && wgPageName !== 'Qiuwen:首页' && wgArticleId > 0) {
	void pagePatroller();
}
