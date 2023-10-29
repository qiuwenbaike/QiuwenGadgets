import {gadgetsDefinition} from './core';

(() => {
	// Only operate on [[MediaWiki:Gadgets-definition]] when the text is visible.
	if (
		!(
			mw.config.get('wgCanonicalNamespace') === 'MediaWiki' &&
			mw.config.get('wgTitle') === 'Gadgets-definition' &&
			document.querySelector('.mw-parser-output')
		)
	) {
		return;
	}
	gadgetsDefinition();
})();
