/* eslint-disable mediawiki/class-doc */
import {
	CLASS_NAME,
	CLASS_NAME_DISMISS,
	CLASS_NAME_NOTICE,
	CLASS_NAME_NOTICE_CONTENT,
	CLASS_NAME_TITLE,
} from './constant';
import {getMessage} from './i18n';

const insertArea = (): JQuery => {
	const $area: JQuery = $('<div>').addClass(`${CLASS_NAME} noprint`);
	const $title: JQuery = $('<div>').addClass(CLASS_NAME_TITLE).text(getMessage('Title'));
	const $noticeArea: JQuery = $('<div>').addClass(CLASS_NAME_NOTICE);
	const $notice: JQuery = $('<div>').addClass(`${CLASS_NAME_NOTICE_CONTENT} center`);
	const $dismiss: JQuery = $('<div>')
		.addClass(CLASS_NAME_DISMISS)
		.append(
			$('<a>').attr({
				'aria-label': getMessage('Dismiss'),
				role: 'button',
			})
		);

	$area.append($title, $noticeArea.append($notice), $dismiss);

	return $area;
};

export {insertArea};
