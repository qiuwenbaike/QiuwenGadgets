import {IS_EDIT_OR_SUBMIT_ACTION} from './modules/constant';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

if (IS_EDIT_OR_SUBMIT_ACTION) {
	$(processWikiEditor);
} else {
	mw.loader.using('ext.visualEditor.desktopArticleTarget.init').then((): void => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		mw.libs.ve.addPlugin((): void => {
			mw.hook('ve.saveDialog.stateChanged').add(processVisualEditor);
		});
	});
}
