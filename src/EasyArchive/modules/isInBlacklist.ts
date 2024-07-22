const isInBlacklist = () => {
	const {wgPageName} = mw.config.get();

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

	return false;
};

export {isInBlacklist};
