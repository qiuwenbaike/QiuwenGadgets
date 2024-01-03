import {WG_WIKI_ID} from './modules/constant';
import {initMwApi} from 'ext.gadget.Util';

((): void => {
	if (mw.user.options.get('gadget-ToolsRedirect')) {
		return;
	}

	const api = initMwApi(`Qiuwen/1.1 (ToolsRedirect-bio-latin-names/2.0; ${WG_WIKI_ID})`);

	void api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	});

	void mw.loader.using(['ext.gadget.ToolsRedirect']);
})();
