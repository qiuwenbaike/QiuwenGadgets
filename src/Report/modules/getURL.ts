const getURL = () => {
	const {wgCurRevisionId, wgPageName, wgRevisionId} = mw.config.get();
	const URL: string = mw.util.getUrl('Special:Contact/Report', {
		reporttitle: wgPageName,
		reportrevision: (wgRevisionId || wgCurRevisionId).toString(),
	});

	return URL;
};

export {getURL};
