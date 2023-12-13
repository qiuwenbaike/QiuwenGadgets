import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './modules/constant';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

(async function defaultSummaries(): Promise<void> {
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		await processWikiEditor();
	} else {
		await mw.loader.using('ext.visualEditor.desktopArticleTarget.init');
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		mw.libs.ve.addPlugin((): void => {
			mw.hook('ve.saveDialog.stateChanged').add(processVisualEditor);
		});
	}
})();
