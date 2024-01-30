import {checkDiffPage} from './modules/util/checkDiffPage';
import {checkRevisionPage} from './modules/util/checkRevisionPage';
import {processId} from './modules/processId';

mw.hook('wikipage.content').add(($content): void => {
	if ($content.attr('id') !== 'mw-content-text') {
		return;
	}

	const isDiffPage: boolean = checkDiffPage($content);
	const isRevisionPage: boolean = checkRevisionPage($content);
	if (!isDiffPage && !isRevisionPage) {
		return;
	}

	const diffId: number | null = mw.config.get('wgDiffNewId');
	const oldId: number | null = mw.config.get('wgDiffOldId');
	if (diffId === null || oldId === null) {
		return;
	}

	processId(isRevisionPage, {
		diffId,
		oldId,
		revisionId: mw.config.get('wgRevisionId'),
	});
});
