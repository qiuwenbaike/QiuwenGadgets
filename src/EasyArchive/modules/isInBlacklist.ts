// ... interface injection - logic
const isInBlacklist = (blacklist: RegExp[]) => {
	for (const element of blacklist) {
		if (element.test(mw.config.get('wgPageName'))) {
			return true;
		}
	}
	return false;
};

export {isInBlacklist};
