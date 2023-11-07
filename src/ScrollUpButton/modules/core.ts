import {generateSvgDataUrl} from '../../util';
import {getMessage} from './i18n';
import scrollButton from '../images/scroll-button.svg';

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
		$element.on('mouseenter mouseleave', changeOpacity).appendTo(document.body);
	}

	mw.loader.using('ext.gadget.Tippy').then(() => {
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
	});

	const scrollListener = (): void => {
		if ($('#cat_a_lot').length || $('#proveit').length || $('.wordcount').length) {
			$scrollDownButton.css('bottom', '78px');
			$scrollUpButton.css('bottom', '120px');
		} else {
			$scrollDownButton.css('bottom', '36px');
			$scrollUpButton.css('bottom', '78px');
		}
	};
	const scrollListenerWithToggle = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithToggle);
};
