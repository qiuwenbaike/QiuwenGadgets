const isNotSupported = () => {
	const {wgIsMainPage, wgNamespaceNumber, wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (wgNamespaceNumber < 0 || wgCurRevisionId - wgRevisionId !== 0) {
		return true;
	}

	if (wgNamespaceNumber === 0 || wgIsMainPage) {
		return true;
	}

	return false;
};

export {isNotSupported};
