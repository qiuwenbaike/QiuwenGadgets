import {showPagePatroller} from './modules/showPagePatroller';

const {wgNamespaceNumber, wgArticleId, wgIsMainPage} = mw.config.get();

(function () {
	if (wgNamespaceNumber < 0) {
		return;
	}

	if (wgIsMainPage) {
		return;
	}

	if (!(wgArticleId > 0)) {
		return;
	}

	void showPagePatroller();
})();
