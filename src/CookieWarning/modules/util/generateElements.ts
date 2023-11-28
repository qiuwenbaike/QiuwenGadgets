import {CLASS_NAME} from '../constant';
import {getMessage} from '../i18n';

const generateElements = () => {
	const $agreeButton: JQuery = $('<span>')
		.addClass('mw-ui-button mw-ui-progressive')
		.attr('role', 'button')
		.html(getMessage('Agree'));
	const $consentNotice: JQuery = $('<div>')
		// The following classes are used here:
		// * see ./constant.ts
		// * for more information
		.addClass(`${CLASS_NAME} noprint`)
		.append($('<p>').html(getMessage('TOSNotice')), $('<p>').html(getMessage('CookieNotice')), $agreeButton);

	return {
		$agreeButton,
		$consentNotice,
	};
};

export {generateElements};
