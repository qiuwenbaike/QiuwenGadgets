import {$scrollDownButton, $scrollUpButton} from './element';
import {changeOpacityWhenMouseEnterOrLeave} from '../../util';

const insertElementandListener = (): void => {
	for (const $element of [$scrollDownButton, $scrollUpButton]) {
		$element
			.on('mouseenter mouseleave', (event: JQuery.TriggeredEvent<HTMLElement>): void => {
				changeOpacityWhenMouseEnterOrLeave(event);
			})
			.appendTo(document.body);

		setTimeout((): void => {
			window.tippy($element.get(0) as HTMLElement, {
				arrow: true,
				content: $element.attr('alt') as string,
				placement: 'left',
			});
		}, 0);
	}

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

export {insertElementandListener};
