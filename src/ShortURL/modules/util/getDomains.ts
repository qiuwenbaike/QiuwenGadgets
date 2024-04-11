const getDomains = (): string[] => {
	const {wgWikiID} = mw.config.get();
	let domains: string[] = [];

	switch (wgWikiID) {
		case 'zhqiuwenbaike':
			domains = ['qwbk.cc', 'qwbk.org', 'bkwz.cn'];
			break;
		case 'licencewiki':
			domains = ['l.qwbk.cc', 'l.bkwz.cn'];
			break;
		case 'mncqiuwenbaike':
			domains = ['mnc.qwbk.cc', 'mnc.bkwz.cn'];
			break;
	}

	return domains;
};

export {getDomains};
