import {initMwApi} from '~/util';

if (mw.user.options.get('gadget-ToolsRedirect')) {
	initMwApi(`Qiuwen/1.1 (ToolsRedirect-opt-bolds-names/2.0; ${mw.config.get('wgWikiID')})`).postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	});
}
