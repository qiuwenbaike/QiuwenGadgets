import {CLASS_REPORT_BUTTON, URL} from './constant';
import {generateSvgDataUrl} from '../../util';
import {getMessage} from './i18n';
import reportButton from '../images/report-button.svg';

const addButton = (): void => {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}

	const linkTilte: string = getMessage('Report');
	const changeOpacity = (event: JQuery.TriggeredEvent): void => {
		event.currentTarget.style.opacity = event.type === 'mouseenter' ? '1' : '0.7';
	};

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
				src: generateSvgDataUrl(reportButton),
				draggable: false,
				alt: linkTilte,
			})
		);

	$reportButton.on('mouseenter mouseleave', changeOpacity).appendTo(document.body);

	mw.loader.using('ext.gadget.Tippy').then(() => {
		window.tippy($reportButton.get(0) as HTMLElement, {
			arrow: true,
			content: linkTilte,
			placement: 'left',
		});
	});

	const scrollListener = (): void => {
		if ($('#cat_a_lot').length || $('#proveit').length || $('.wordcount').length) {
			$reportButton.css('bottom', '246px');
		} else {
			$reportButton.css('bottom', '204px');
		}
	};
	const scrollListenerWithToggle = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithToggle);
};

export {addButton};
