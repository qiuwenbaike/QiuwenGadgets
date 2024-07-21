const ifArcLocNotAllowed = (arcLoc: string) => {
	const {wgPageName} = mw.config.get();
	const sourceTitle = new mw.Title(wgPageName);
	const arcLocTitle = new mw.Title(arcLoc);

	const arcLocNamespaceId = arcLocTitle.getNamespaceId();
	const arcLocPageName = arcLocTitle.getMain();
	const sourceNamespaceId = sourceTitle.getNamespaceId();
	const sourcePageName = sourceTitle.getMain();

	if (arcLocNamespaceId === 0) {
		return true;
	}

	if (arcLocNamespaceId === sourceNamespaceId && arcLocPageName === sourcePageName) {
		return true;
	}

	return false;
};

export {ifArcLocNotAllowed};
