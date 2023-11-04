const addLink = (element: Element, targetTitle: string): void => {
	if (!(element instanceof Element)) {
		throw new TypeError('Expected Element object');
	}

	const link: HTMLAnchorElement = document.createElement('a');
	link.href = mw.util.getUrl(targetTitle);

	const {firstChild} = element;
	if (!(firstChild instanceof Text)) {
		throw new TypeError('Expected Text object');
	}

	link.append(firstChild);
	element.append(link);
};

export {addLink};
