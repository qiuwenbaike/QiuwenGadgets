import {initMwApi} from '../util';

if (!mw.user.options.get('gadget-ToolsRedirect')) {
	const api = initMwApi(`Qiuwen/1.1 (ToolsRedirect-courtesy-and-art-names/2.0; ${mw.config.get('wgWikiID')})`);

	await api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	});
	mw.loader.using('ext.gadget.ToolsRedirect');
}
