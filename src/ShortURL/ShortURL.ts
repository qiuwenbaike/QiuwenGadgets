import {checkRevisionPage} from './modules/util/checkRevisionPage';
import {getDomains} from './modules/util/getDomains';
import {processId} from './modules/processId';

const {wgAction, wgArticleId, wgNamespaceNumber} = mw.config.get();

const domains = getDomains();

if (domains.length > 0 && wgAction === 'view' && wgArticleId && wgNamespaceNumber >= 0) {
	mw.hook('wikipage.content').add(function shortURL($content): void {
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
