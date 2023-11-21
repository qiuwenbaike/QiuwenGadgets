import {checkDiffPage} from './util/checkDiffPage';
import {checkRevisionPage} from './util/checkRevisionPage';
import {processId} from './processId';

const addHook = (): void => {
	mw.hook('wikipage.content').add(($content): void => {
		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}

		if (!(checkRevisionPage() || checkDiffPage())) {
			return;
		}

		processId({
			diffId: mw.config.get('wgDiffNewId'),
			oldId: mw.config.get('wgDiffOldId'),
			revisionId: mw.config.get('wgRevisionId'),
		});
	});
};

export {addHook};
