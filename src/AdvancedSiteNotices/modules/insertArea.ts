/* eslint-disable mediawiki/class-doc */
import {
	CLASS_NOTICES,
	CLASS_NOTICES_DISMISS,
	CLASS_NOTICES_NOTICE,
	CLASS_NOTICES_NOTICE_CONTENT,
	CLASS_NOTICES_TITLE,
} from './constant';
import {getMessage} from './i18n';

const insertArea = (): JQuery => {
	const $area: JQuery = $('<div>').addClass(`${CLASS_NOTICES} noprint`);
	const $title: JQuery = $('<div>').addClass(CLASS_NOTICES_TITLE).text(getMessage('Title'));
	const $noticeArea: JQuery = $('<div>').addClass(CLASS_NOTICES_NOTICE);
	const $notice: JQuery = $('<div>').addClass(`${CLASS_NOTICES_NOTICE_CONTENT} center`);
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

	$area.append($title, $noticeArea.append($notice), $dismiss);

	return $area;
};

export {insertArea};
