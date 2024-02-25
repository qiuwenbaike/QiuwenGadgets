import {init} from './modules/core';

let isInit: boolean = false;

if (
	mw.config.get('wgNamespaceNumber') >= 0 ||
	mw.config.get('wgArticleId') > 0 ||
	mw.config.get('wgAction') === 'view'
) {
	// Load main function
	mw.hook('wikipage.content').add(($content): void => {
		// Guard against double inclusions
		if (isInit) {
			return;
		}

		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}

		isInit = true;

		void init({
			diffId: mw.config.get('wgDiffNewId'),
			oldId: mw.config.get('wgDiffOldId'),
			articleId: mw.config.get('wgArticleId'),
			revisionId: mw.config.get('wgRevisionId'),
		});
	});
}
