if (!mw.user.options.get('gadget-ToolsRedirect')) {
	const api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (ToolsRedirect-opt-bolds/2.0; ${mw.config.get('wgWikiID')})`,
			},
		},
	});

	api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	}).done(() => {
		mw.loader.using('ext.gadget.ToolsRedirect');
	});
}
