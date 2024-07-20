const isInBlacklist = () => {
	const {wgNamespaceNumber, wgIsMainPage, wgPageName, wgRelevantUserName, wgUserName, wgCurRevisionId, wgRevisionId} =
		mw.config.get();
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

	if (wgNamespaceNumber < 0 || wgIsMainPage) {
		return true;
	}

	if (wgNamespaceNumber === 0 || wgCurRevisionId - wgRevisionId !== 0) {
		return true;
	}

	if (wgNamespaceNumber === 3 && !(wgRelevantUserName === wgUserName)) {
		return true;
	}

	for (const element of blackListRegexArr) {
		if (element.test(wgPageName)) {
			return true;
		}
	}

	return false;
};

export {isInBlacklist};
