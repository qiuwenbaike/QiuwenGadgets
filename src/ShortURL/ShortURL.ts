import {checkRevisionPage} from './modules/util/checkRevisionPage';
import {processId} from './modules/processId';

const {wgAction, wgArticleId, wgNamespaceNumber} = mw.config.get();

if (wgAction === 'view' && wgArticleId && wgNamespaceNumber >= 0) {
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
