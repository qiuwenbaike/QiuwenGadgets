import {processWikiEditor} from './modules/processWikiEditor';

(function previewWithVariants(): void {
	mw.hook('wikipage.editform').add((): void => {
		processWikiEditor();
	});
})();
