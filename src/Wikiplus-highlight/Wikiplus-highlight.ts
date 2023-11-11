import {initMwApi} from '../util';

if (!mw.user.options.get('gadget-Wikiplus')) {
	const api = initMwApi(`Qiuwen/1.1 (Wikiplus-highlight/2.0; ${mw.config.get('wgWikiID')})`);

	api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-Wikiplus=1',
	}).done(() => {
		mw.loader.using(['ext.gadget.Wikiplus', 'ext.gadget.Wikiplus-pagestyles']);
	});
}
