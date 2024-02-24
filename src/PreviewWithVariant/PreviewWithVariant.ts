import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

(function previewWithVariants(): void {
	mw.hook('wikipage.editform').add((): void => {
		processWikiEditor();
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor();
	});
})();
