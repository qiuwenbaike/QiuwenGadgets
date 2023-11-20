import {CLASS_REPORT_BUTTON, URL} from './constant';
import {changeOpacityWhenMouseEnterOrLeave} from '../../util';
import {getMessage} from './i18n';

const addButton = (): void => {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}

	const $body = $('body');

	const linkTilte: string = getMessage('Report');
	const reportButton =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

	const $reportButton: JQuery = $('<a>')
		// The following classes are used here:
		// * see ./constant.ts
		// * for more information
		.addClass(`${CLASS_REPORT_BUTTON} noprint`)
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
		.on('mouseenter mouseleave', (event: JQuery.TriggeredEvent<HTMLElement>): void => {
			changeOpacityWhenMouseEnterOrLeave(event);
		})
		.appendTo(document.body);

	tippy($reportButton.get(0) as HTMLElement, {
		arrow: true,
		content: $reportButton.attr('aria-label') as string,
		placement: 'left',
	});

	const scrollListener = (): void => {
		if ($body.find('#cat_a_lot').length || $body.find('#proveit').length || $body.find('.wordcount').length) {
			$reportButton.css('bottom', '246px');
		} else {
			$reportButton.css('bottom', '204px');
		}
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {addButton};
