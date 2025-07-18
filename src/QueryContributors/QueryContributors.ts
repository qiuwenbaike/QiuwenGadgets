import {appendElement} from './modules/appendElement';
import {getContributors} from './modules/util/getContributors';

(async function queryContributos() {
	const {wgAction, wgArticleId, wgCurRevisionId, wgPageName, wgRevisionId} = mw.config.get();

	if (wgAction !== 'view' || !wgArticleId || !wgPageName) {
		return;
	}

	if (wgCurRevisionId > wgRevisionId) {
		return;
	}

	const contributors: (string | number)[] = await getContributors(wgPageName);

	appendElement(contributors);
})();
