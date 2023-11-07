import {changeOpacityWhenMouseEnterOrLeave, generateSvgDataUrl, scrollTop} from '../../util';
import {getMessage} from './i18n';
import scrollButton from '../images/scroll-button.svg';

export const scrollUpButton = (): void => {
	const $scrollButton: JQuery = $('<img>')
		.addClass('noprint')
		.attr({
			draggable: false,
			src: generateSvgDataUrl(scrollButton),
		});
	const $scrollDownButton: JQuery = $scrollButton
		.clone()
		.attr({
			id: 'scrollDownButton',
			alt: getMessage('ToBottom'),
			title: getMessage('ToBottom'),
		})
		.on('click', (): void => {
			scrollTop(($(document).height() ?? 0) - ($(window).height() ?? 0));
		});
	const $scrollUpButton: JQuery = $scrollButton
		.clone()
		.attr({
			id: 'scrollUpButton',
			alt: getMessage('ToTop'),
			title: getMessage('ToTop'),
		})
		.on('click', (): void => {
			scrollTop(0);
		});

	for (const $element of [$scrollDownButton, $scrollUpButton]) {
		$element
			.on('mouseenter mouseleave', (event: JQuery.TriggeredEvent<HTMLElement>): void => {
				changeOpacityWhenMouseEnterOrLeave(event);
			})
			.appendTo(document.body);
	}

	setTimeout((): void => {
		window.tippy($scrollUpButton.get(0) as HTMLElement, {
			arrow: true,
			content: getMessage('ToTop'),
			placement: 'left',
		});
		window.tippy($scrollDownButton.get(0) as HTMLElement, {
			arrow: true,
			content: getMessage('ToBottom'),
			placement: 'left',
		});
	}, 0);

	const scrollListener = (): void => {
		if ($('#cat_a_lot').length || $('#proveit').length || $('.wordcount').length) {
			$scrollDownButton.css('bottom', '78px');
			$scrollUpButton.css('bottom', '120px');
		} else {
			$scrollDownButton.css('bottom', '36px');
			$scrollUpButton.css('bottom', '78px');
		}
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};
