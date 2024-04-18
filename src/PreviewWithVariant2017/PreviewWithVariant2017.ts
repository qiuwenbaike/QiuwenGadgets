import {processVisualEditor} from './modules/processVisualEditor';

(function previewWithVariants2017(): void {
	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor();
	});
})();
