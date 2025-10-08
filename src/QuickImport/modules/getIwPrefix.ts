const getIwPrefix = (): string => {
	const caViewForeignCommons = document.querySelector("#ca-view-foreign a[href*='commons.wikimedia.org']");
	const caViewForeignEnwiki = document.querySelector("#ca-view-foreign a[href*='en.wikipedia.org']");
	const caViewForeignZhwiki = document.querySelector("#ca-view-foreign a[href*='zh.wikipedia.org']");

	if (caViewForeignCommons) {
		return 'commons';
	} else if (caViewForeignZhwiki) {
		return 'zhwiki';
	} else if (caViewForeignEnwiki) {
		return 'enwiki';
	}

	return '';
};

export {getIwPrefix};
