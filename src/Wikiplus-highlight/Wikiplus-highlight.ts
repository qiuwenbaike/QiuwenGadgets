import {initMwApi} from 'ext.gadget.Util';

((): void => {
	if (mw.user.options.get('gadget-Wikiplus')) {
		return;
	}

	const api = initMwApi('Wikiplus-highlight/2.0');

	void api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-Wikiplus=1',
	});

	void mw.loader.using(['ext.gadget.Wikiplus']);
})();
