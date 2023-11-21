// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
(() => {
	if (!(mw.config.get('wgAction') === 'view' && mw.config.get('wgIsArticle'))) {
		return;
	}

	/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	import('./modules/core');

	if (!('ontouchstart' in document) && mw.user.options.get('gadget-Wikiplus-highlight')) {
		/*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <qwbk.cc/H:GPL-3.0> */
		import('./modules/highlight');
	}
})();
