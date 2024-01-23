import {WG_NAMESPACE_NUMBER} from './constant';
import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {reportButton} from '../components/button';
import {tippy} from 'ext.gadget.Tippy';

const addButton = (): void => {
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	const $body = $('body');
	const onMouseEnterMouseLeave = (event: JQuery.TriggeredEvent): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	};

	const $element = $(reportButton);
	$element.on('mouseenter mouseleave', onMouseEnterMouseLeave);
	$element.appendTo($body);

	tippy($element.get(0) as HTMLAnchorElement, {
		arrow: true,
		content: $element.attr('aria-label') as string,
		placement: 'left',
	});

	const scrollListener = (): void => {
		let buttonBottom;
		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('.wordcount')
		) {
			buttonBottom = '253px';
		} else {
			buttonBottom = '211px';
		}
		$element.css('bottom', buttonBottom);
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {addButton};
