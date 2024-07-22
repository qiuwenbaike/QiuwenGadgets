const isNotAllowed = () => {
	const {wgNamespaceNumber, wgRelevantUserName, wgUserName} = mw.config.get();

	if ((wgNamespaceNumber === 2 || wgNamespaceNumber === 3) && !(wgRelevantUserName === wgUserName)) {
		return true;
	}

	return false;
};

export {isNotAllowed};
