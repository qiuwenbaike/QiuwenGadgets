import {
	CLASS_NAME,
	CLASS_NAME_DISMISS,
	CLASS_NAME_NOTICE,
	CLASS_NAME_NOTICE_CONTENT,
	CLASS_NAME_TITLE,
} from '../constant';
import {getMessage} from '../i18n';

const generateArea = (): JQuery => {
	const $area = $('<div>')
		.addClass([CLASS_NAME, 'noprint'])
		.append($('<div>').addClass(CLASS_NAME_TITLE).text(getMessage('Title')))
		.append(
			$('<div>')
				.addClass(CLASS_NAME_NOTICE)
				.append($('<div>').addClass([CLASS_NAME_NOTICE_CONTENT, 'center']))
		)
		.append(
			$('<div>')
				.addClass(CLASS_NAME_DISMISS)
				.append($('<a>').attr('role', 'button').attr('aria-label', getMessage('Dismiss')))
		);

	return $area;
};

export {generateArea};
