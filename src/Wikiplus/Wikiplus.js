import {Wikiplus} from './modules/core';
import {WikiplusHighlight} from './modules/highlight';

(() => {
	if (!(mw.config.get('wgAction') === 'view' && mw.config.get('wgIsArticle'))) {
		return;
	}

	/*! Wikiplus | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	Wikiplus();

	if (!('ontouchstart' in document) && mw.user.options.get('gadget-Wikiplus-highlight')) {
		/*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <qwbk.cc/H:GPL-3.0> */
		WikiplusHighlight();
	}
})();
