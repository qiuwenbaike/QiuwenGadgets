import {initMwApi} from '../util';

(async (): Promise<void> => {
	if (!mw.user.options.get('gadget-Wikiplus')) {
		return;
	}

	const api: mw.Api = initMwApi(`Qiuwen/1.1 (Wikiplus-highlight/2.0; ${mw.config.get('wgWikiID')})`);

	await api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-Wikiplus=1',
	});

	mw.loader.using(['ext.gadget.Wikiplus']);
})();
