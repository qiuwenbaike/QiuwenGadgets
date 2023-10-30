import {getMessage} from './i18n';

const insertArea = (): JQuery => {
	const $area: JQuery = $('<div>').addClass('asn__area noprint').attr('id', 'advancedSiteNotices');
	const $currentNotice: JQuery = $('<div>').addClass('asn__notice center');
	const $dismiss: JQuery = $('<div>')
		.addClass('asn__dismiss')
		.append(
			$('<a>')
				.attr({
					href: '#',
					role: 'button',
					title: getMessage('asn__dismiss'),
					'aria-label': getMessage('asn__dismiss'),
				})
				.text(getMessage('asn__dismiss'))
		);
	const $noticeArea: JQuery = $('<div>').addClass('asn__notice__area');
	const $title: JQuery = $('<div>').addClass('asn__title').text(getMessage('asn__title'));

	$area.append($title, $noticeArea.append($currentNotice), $dismiss);

	return $area;
};

export {insertArea};
