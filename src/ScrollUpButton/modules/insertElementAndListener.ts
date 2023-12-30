import {$scrollDownButton, $scrollUpButton} from './element';
import {changeOpacityWhenMouseEnterOrLeave} from '~/util';
import {tippy} from 'ext.gadget.Tippy';

const insertElementandListener = (): void => {
	for (const $element of [$scrollDownButton, $scrollUpButton]) {
		$element
			.on('mouseenter mouseleave', (event: JQuery.TriggeredEvent<HTMLImageElement>): void => {
				changeOpacityWhenMouseEnterOrLeave(event);
			})
			.appendTo($('body'));

		tippy($element.get(0) as HTMLImageElement, {
			arrow: true,
			content: $element.attr('alt') as string,
			placement: 'left',
		});
	}

	const scrollListener = (): void => {
		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('.wordcount')
		) {
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

export {insertElementandListener};
