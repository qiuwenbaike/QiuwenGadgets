import button from '../images/scroll-button.svg';
import {generateSvgDataUrl} from '../../util';
import {getMessage} from './i18n';

export const scrollUpButton = (): void => {
	const changeOpacity = (event: JQuery.TriggeredEvent): void => {
		event.currentTarget.style.opacity = event.type === 'mouseenter' ? '1' : '0.7';
	};
	const scrollTop = (height: number): void => {
		$('html, body').animate(
			{
				scrollTop: height,
			},
			660
		);
	};

	const $button: JQuery = $('<img>')
		.addClass('noprint')
		.attr({
			draggable: false,
			src: generateSvgDataUrl(button),
		});
	const $downButton: JQuery = $button
		.clone()
		.attr({
			id: 'gadget-scroll_up__button-down',
			class: 'gadget-scroll_up__button-down',
			alt: getMessage('ToBottom'),
			title: getMessage('ToBottom'),
		})
		.on('click', (): void => {
			scrollTop(($(document).height() ?? 0) - ($(window).height() ?? 0));
		});
	const $upButton: JQuery = $button
		.clone()
		.attr({
			id: 'gadget-scroll_up__button-up',
			class: 'gadget-scroll_up__button-up',
			alt: getMessage('ToTop'),
			title: getMessage('ToTop'),
		})
		.on('click', (): void => {
			scrollTop(0);
		});

	for (const $element of [$downButton, $upButton]) {
		$element.on('mouseenter mouseleave', changeOpacity).appendTo(document.body);
	}

	window.tippy($upButton.get(0) as HTMLElement, {
		arrow: true,
		content: getMessage('ToTop'),
		placement: 'left',
	});
	window.tippy($downButton.get(0) as HTMLElement, {
		arrow: true,
		content: getMessage('ToBottom'),
		placement: 'left',
	});

	const scrollListener = (): void => {
		if ($('#cat_a_lot').length || $('#proveit').length || $('.wordcount').length) {
			$downButton.css('bottom', '78px');
			$upButton.css('bottom', '120px');
		} else {
			$downButton.css('bottom', '36px');
			$upButton.css('bottom', '78px');
		}
	};
	const scrollListenerWithToggle = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithToggle);
};
