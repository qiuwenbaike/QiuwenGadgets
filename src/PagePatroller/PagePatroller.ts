import {pagePatroller} from './modules/pagePatroller';

const {wgNamespaceNumber, wgArticleId, wgIsMainPage} = mw.config.get();

if (wgNamespaceNumber >= 0 && !wgIsMainPage && wgArticleId > 0) {
	void pagePatroller();
}
