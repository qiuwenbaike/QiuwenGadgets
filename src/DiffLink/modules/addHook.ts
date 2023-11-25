import {checkDiffPage} from './util/checkDiffPage';
import {checkRevisionPage} from './util/checkRevisionPage';
import {processId} from './processId';

const addHook = (): void => {
	mw.hook('wikipage.content').add(($content: JQuery): void => {
		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}

		const isDiffPage: boolean = checkDiffPage($content);
		const isRevisionPage: boolean = checkRevisionPage($content);
		if (!isDiffPage && !isRevisionPage) {
			return;
		}

		processId(isRevisionPage, {
			diffId: mw.config.get('wgDiffNewId'),
			oldId: mw.config.get('wgDiffOldId'),
			revisionId: mw.config.get('wgRevisionId'),
		});
	});
};

export {addHook};
