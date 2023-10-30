if (!mw.user.options.get('gadget-Wikiplus')) {
	const api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (Wikiplus-highlight/2.0; ${mw.config.get('wgWikiID')})`,
			},
		},
	});

	api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-Wikiplus=1',
	}).done(() => {
		mw.loader.using('ext.gadget.Wikiplus');
	});
}
