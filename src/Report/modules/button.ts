import {LINK_TITLE, URL} from './constant';
import {generateSvgDataUrl} from '../../util';
import reportButton from '../images/report-button.svg';

$(function reportButtonLoad(): void {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}
	const $window: JQuery<Window> = $(window);
	const changeOpacity = (event: JQuery.TriggeredEvent): void => {
		event.currentTarget.style.opacity = event.type === 'mouseenter' ? '1' : '0.7';
	};
	const $reportButton: JQuery = $('<a>')
		.addClass('noprint')
		.attr({
			href: URL,
			target: '_blank',
			rel: 'noopener noreferrer',
			id: 'reportButton',
			draggable: false,
			alt: LINK_TITLE,
			title: LINK_TITLE,
		})
		.append(
			$('<img>')
				.addClass('noprint')
				.attr({
					draggable: false,
					alt: LINK_TITLE,
					title: LINK_TITLE,
					src: generateSvgDataUrl(reportButton),
				})
		);
	$reportButton.on('mouseenter mouseleave', changeOpacity).appendTo(document.body);
	$window.on('scroll selectionchange', (): void => {
		if ($('#cat_a_lot').length || $('#proveit').length || $('.wordcount').length) {
			$reportButton.css('bottom', '246px');
		} else {
			$reportButton.css('bottom', '204px');
		}
	});
});
