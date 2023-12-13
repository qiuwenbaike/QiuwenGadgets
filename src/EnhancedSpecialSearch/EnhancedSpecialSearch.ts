import {WG_CANONICAL_SPECIAL_PAGE_NAME} from './modules/constant';
import {getBody} from '~/util';
import {processElement} from './modules/processElement';

(async function enhancedSpecialSearch(): Promise<void> {
	if (WG_CANONICAL_SPECIAL_PAGE_NAME !== 'Search') {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = await getBody();

	const searchElement: HTMLElement | undefined = $body.find('#search').get(0) ?? $body.find('#powersearch').get(0);
	const targetElement: HTMLElement | undefined = $body.find('#mw-search-top-table').get(0);
	if (!searchElement || !targetElement) {
		return;
	}

	processElement(searchElement, targetElement);
})();
