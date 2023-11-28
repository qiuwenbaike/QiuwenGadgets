const openPage = (url: string): void => {
	const element: HTMLAnchorElement = document.createElement('a');

	element.setAttribute('href', url);
	element.setAttribute('target', '_blank');
	element.setAttribute('rel', 'noopener noreferrer');

	element.click();
};

export {openPage};
