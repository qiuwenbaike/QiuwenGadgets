const openPage = (url: string): void => {
	const element = document.createElement('a');
	element.href = url;
	element.target = '_blank';
	element.rel = ['noopener', 'noreferrer'].join(' ');

	element.click();
};

export {openPage};
