import {WG_CANONICAL_SPECIAL_PAGE_NAME} from './modules/constant';
import {processElement} from './modules/processElement';

$(function enhancedSpecialSearch(): void {
	if (WG_CANONICAL_SPECIAL_PAGE_NAME !== 'Search') {
		return;
	}

	const searchElement: HTMLElement | null = document.querySelector('#search');
	const targetElement: HTMLElement | null = document.querySelector('#mw-search-top-table');
	if (!searchElement || !targetElement) {
		return;
	}

	processElement(searchElement, targetElement);
});
