import {floatTOC} from './modules/core';

$((): void => {
	const originToc: HTMLDivElement | null = document.querySelector('#toc');
	if (mw.config.get('wgAction') === 'view' && originToc) {
		floatTOC(originToc);
	}
});
