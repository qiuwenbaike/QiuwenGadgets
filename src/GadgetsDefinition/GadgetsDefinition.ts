import {getGadgetName, makeGadgetId, processGadgetDefinition} from './modules/core';

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

	const gadgetsDefinitionLoad = () => {
		const $parserOutput = $('.mw-parser-output');
		// Process gadget definitions in lists.
		$parserOutput.find('li').each((_index, element) => {
			// Add id so that gadget definitions can be highlighted when we click a link
			// to them.
			const gadgetName = getGadgetName(element.innerHTML);
			if (gadgetName) {
				element.id = makeGadgetId(gadgetName);
			}
			element.innerHTML = processGadgetDefinition(element.innerHTML);
		});
		// Process gadget definitions in pre tags.
		$parserOutput.find('pre').each((_index, element) => {
			element.innerHTML = element.innerHTML.replace(/[^\n]+/g, processGadgetDefinition);
		});
	};

	$(gadgetsDefinitionLoad);
})();
