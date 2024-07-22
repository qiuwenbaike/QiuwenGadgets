const isNotSupported = () => {
	const {wgIsMainPage, wgNamespaceNumber, wgPageName, wgCurRevisionId, wgRevisionId} = mw.config.get();

	const blackListRegexArr = [
		/^File:.*$/,
		/^MediaWiki:.*$/,
		/^Module:.*$/,
		/^Category:.*$/,
		/^Template:.*$/,
		/^Special:.*$/,
		/^User:.*\/?.*\.js$/,
		/^User:.*\/?.*\.css$/,
		/^User:.*\/?.*\.json$/,
	];

	for (const element of blackListRegexArr) {
		if (element.test(wgPageName)) {
			return true;
		}
	}

	if (wgNamespaceNumber < 0 || wgCurRevisionId - wgRevisionId !== 0) {
		return true;
	}

	if (wgNamespaceNumber === 0 || wgIsMainPage) {
		return true;
	}

	return false;
};

export {isNotSupported};
