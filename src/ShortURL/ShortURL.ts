import {checkRevisionPage} from './modules/util/checkRevisionPage';
import {getShortDomains} from './modules/util/getShortDomains';
import {processId} from './modules/processId';

(function shortURL() {
	const {wgAction, wgArticleId, wgNamespaceNumber} = mw.config.get();

	const domains = getShortDomains();

	if (!domains.length || wgNamespaceNumber < 0) {
		return;
	}

	if (wgAction === 'view' && wgArticleId) {
		mw.hook('wikipage.content').add(($content): void => {
			if ($content.attr('id') !== 'mw-content-text') {
				return;
			}

			const isRevisionPage: boolean = checkRevisionPage($content);

			processId(isRevisionPage, {
				articleId: mw.config.get('wgArticleId'),
				diffId: mw.config.get('wgDiffNewId'),
				oldId: mw.config.get('wgDiffOldId'),
				revisionId: mw.config.get('wgRevisionId'),
			});
		});
	}
})();
