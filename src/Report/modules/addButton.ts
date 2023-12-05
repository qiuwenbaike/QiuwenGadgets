import {CLASS_NAME_BUTTON, URL, WG_NAMESPACE_NUMBER} from './constant';
import {changeOpacityWhenMouseEnterOrLeave} from '~/util';
import {getMessage} from './i18n';

const addButton = (): void => {
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	const linkTilte: string = getMessage('Report');
	const reportButton: string =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

	const $reportButton: JQuery<HTMLAnchorElement> = $<HTMLAnchorElement>('<a>')
		// The following classes are used here:
		// * see constant.ts
		// * for more information
		.addClass(`${CLASS_NAME_BUTTON} noprint`)
		.attr({
			href: URL,
			rel: 'noopener noreferrer',
			target: '_blank',
			'aria-label': linkTilte,
		})
		.append(
			$('<img>').attr({
				src: reportButton,
				draggable: false,
				alt: linkTilte,
				width: '32',
				height: '32',
			})
		);

	$reportButton
		.on('mouseenter mouseleave', (event: JQuery.TriggeredEvent<HTMLAnchorElement>): void => {
			changeOpacityWhenMouseEnterOrLeave(event);
		})
		.appendTo($('body'));

	tippy($reportButton.get(0) as HTMLAnchorElement, {
		arrow: true,
		content: $reportButton.attr('aria-label') as string,
		placement: 'left',
	});

	const scrollListener = (): void => {
		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('.wordcount')
		) {
			$reportButton.css('bottom', '246px');
		} else {
			$reportButton.css('bottom', '204px');
		}
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {addButton};
