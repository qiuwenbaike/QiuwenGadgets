import {floatTOC} from './modules/core';

$((): void => {
	const originToc: HTMLElement | null = document.querySelector('#toc');
	if (!originToc) {
		return;
	}

	floatTOC(originToc);
});
