import {scrollTop} from '../../util';

export const smoothTOC = (): void => {
	const checkA11yKey = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): boolean => {
		if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
			return true;
		}
		return false;
	};
	const eventListener = ($element: JQuery, event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (checkA11yKey(event)) {
			return;
		}
		const herf = $element.attr('href');
		if (!herf) {
			return;
		}
		const anchorOffset = $(herf).offset();
		if (!anchorOffset) {
			return;
		}
		event.preventDefault();
		scrollTop(mw.config.get('skin') === 'vector' ? `${anchorOffset.top}px` : `${anchorOffset.top - 60}px`);
	};
	const smoothToc = (): void => {
		$('#toc a, #p-toc a, .sidebar-toc-link').each((_index: number, element: HTMLElement): void => {
			const $element: JQuery = $(element);
			$element.on('click', (event: JQuery.ClickEvent): void => {
				eventListener($element, event);
			});
			$element.on('keydown', (event: JQuery.KeyDownEvent): void => {
				eventListener($element, event);
			});
		});
	};
	setTimeout(smoothToc, 0);
};
