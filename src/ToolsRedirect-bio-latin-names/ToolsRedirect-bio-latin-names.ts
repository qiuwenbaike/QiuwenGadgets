import {initMwApi} from '../util';

if (!mw.user.options.get('gadget-ToolsRedirect')) {
	const api = initMwApi(`Qiuwen/1.1 (ToolsRedirect-bio-latin-names/2.0; ${mw.config.get('wgWikiID')})`);

	api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	}).then(() => {
		mw.loader.using(['ext.gadget.ToolsRedirect', 'ext.gadget.ToolsRedirect-pagestyles']);
	});
}
