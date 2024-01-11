import {CLASS_NAME_BUTTON, URL, WG_NAMESPACE_NUMBER} from '../modules/constant';
import React from 'ext.gadget.React';
import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {getMessage} from '../modules/i18n';
import {tippy} from 'ext.gadget.Tippy';

const addButton = (): void => {
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	const LINK_TITLE: string = getMessage('Report');
	const IMAGE_URI: string =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

	const reportButton = () => (
		<a
			className={[CLASS_NAME_BUTTON, 'noprint']}
			href={URL}
			rel="noopener noreferrer"
			target="_blank"
			aria-label={LINK_TITLE}
		>
			<img src={IMAGE_URI} draggable={false} alt={LINK_TITLE} width="32" height="32" />
		</a>
	);

	const $reportButton = $(reportButton);

	$reportButton.on('mouseenter mouseleave', (event): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	});

	$('body').append($reportButton);

	tippy($reportButton.get(0) as HTMLAnchorElement, {
		arrow: true,
		content: $reportButton.attr('aria-label') as string,
		placement: 'left',
	});

	let buttonBottom;
	const scrollListener = (): void => {
		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('.wordcount')
		) {
			buttonBottom = '246px';
		} else {
			buttonBottom = '204px';
		}
		$reportButton.css('bottom', buttonBottom);
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {addButton};
