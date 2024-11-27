import {checkDependencies} from 'ext.gadget.Util';

(async function WikiplusHighlight() {
	const {wgAction, wgIsArticle} = mw.config.get();
	if (wgAction !== 'view' || !wgIsArticle) {
		return;
	}

	if ('ontouchstart' in document) {
		return;
	}

	await checkDependencies('Wikiplus');

	const {'visualeditor-enable': isVeEnable} = mw.user.options.get() as Record<string, unknown>;

	/* see <https://github.com/Wikiplus/Wikiplus/issues/65> */
	if (isVeEnable) {
		await mw.loader.using('ext.visualEditor.core');
	}

	await import('./modules/highlight');
})();
