/* eslint-disable mediawiki/class-doc */
import {CLASS_NOTICES_AREA, CLASS_NOTICES_DISMISS, CLASS_NOTICES_NOTICE_AREA, CLASS_NOTICES_TITLE} from './constant';
import {getMessage} from './i18n';

const insertArea = (): JQuery => {
	const $area: JQuery = $('<div>').addClass(`${CLASS_NOTICES_AREA} noprint`).attr('id', 'advancedSiteNotices');
	const $currentNotice: JQuery = $('<div>').addClass('gadget-advanced_site_notices__notice center');
	const $dismiss: JQuery = $('<div>')
		.addClass(CLASS_NOTICES_DISMISS)
		.append(
			$('<a>')
				.attr({
					href: '#',
					role: 'button',
					title: getMessage('Dismiss'),
					'aria-label': getMessage('Dismiss'),
				})
				.text(getMessage('Dismiss'))
		);
	const $noticeArea: JQuery = $('<div>').addClass(CLASS_NOTICES_NOTICE_AREA);
	const $title: JQuery = $('<div>').addClass(CLASS_NOTICES_TITLE).text(getMessage('Title'));

	$area.append($title, $noticeArea.append($currentNotice), $dismiss);

	return $area;
};

export {insertArea};
