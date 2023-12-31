import {WG_WIKI_ID} from './modules/constant';
import {initMwApi} from '~/util';

((): void => {
	if (mw.user.options.get('gadget-Wikiplus')) {
		return;
	}

	const api = initMwApi(`Qiuwen/1.1 (Wikiplus-highlight/2.0; ${WG_WIKI_ID})`);

	void api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-Wikiplus=1',
	});

	void mw.loader.using(['ext.gadget.Wikiplus']);
})();
