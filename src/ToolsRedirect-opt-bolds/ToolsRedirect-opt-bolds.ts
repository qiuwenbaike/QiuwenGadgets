import {initMwApi} from '../util';

(async () => {
	if (!mw.user.options.get('gadget-ToolsRedirect')) {
		return;
	}

	const api = initMwApi(`Qiuwen/1.1 (ToolsRedirect-opt-bolds-names/2.0; ${mw.config.get('wgWikiID')})`);

	await api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	});

	mw.loader.using(['ext.gadget.ToolsRedirect']);
})();
