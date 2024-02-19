// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import './Wikiplus.less';

(async () => {
	if (!(mw.config.get('wgAction') === 'view' && mw.config.get('wgIsArticle'))) {
		return;
	}

	const wikiplusLoad = () => {
		/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
		import('./modules/core');

		if (!('ontouchstart' in document) && mw.user.options.get('gadget-Wikiplus-highlight')) {
			/*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <https://qwbk.cc/H:GPL-3.0> */
			import('./modules/highlight');
		}
	};

	/* see <https://github.com/Wikiplus/Wikiplus/issues/65> */
	if (mw.user.options.get('visualeditor-enable')) {
		await mw.loader.using('ext.visualEditor.core');
	}

	wikiplusLoad();
})();
