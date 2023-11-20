import {$body, $window, changeOpacityWhenMouseEnterOrLeave} from '../../util';
import {$scrollDownButton, $scrollUpButton} from './element';

const insertElementandListener = (): void => {
	for (const $element of [$scrollDownButton, $scrollUpButton]) {
		$element
			.on('mouseenter mouseleave', (event: JQuery.TriggeredEvent<HTMLElement>): void => {
				changeOpacityWhenMouseEnterOrLeave(event);
			})
			.appendTo($body);

		tippy($element.get(0) as HTMLElement, {
			arrow: true,
			content: $element.attr('alt') as string,
			placement: 'left',
		});
	}

	const scrollListener = (): void => {
		if ($body.find('#cat_a_lot').length || $body.find('#proveit').length || $body.find('.wordcount').length) {
			$scrollDownButton.css('bottom', '78px');
			$scrollUpButton.css('bottom', '120px');
		} else {
			$scrollDownButton.css('bottom', '36px');
			$scrollUpButton.css('bottom', '78px');
		}
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$window.on('scroll selectionchange', scrollListenerWithThrottle);
};

export {insertElementandListener};
