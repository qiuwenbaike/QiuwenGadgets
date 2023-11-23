import {CLASS_NAME, STORAGE_KEY} from './constant';
import {getMessage} from './i18n';

const insertElement = (): void => {
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
	$agreeButton.on('click', (): void => {
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
		$consentNotice.fadeOut().remove();
	});
	$consentNotice.appendTo($('body'));
};

export {insertElement};
