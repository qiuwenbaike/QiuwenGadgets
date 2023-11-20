import {CLASS_CONSENT_NOTICE, STORAGE_KEY} from './constant';

import {getMessage} from './i18n';

const insertElement = (): void => {
	const $consentNotice: JQuery = $('<div>')
		// The following classes are used here:
		// * see ./constant.ts
		// * for more information
		.addClass(`${CLASS_CONSENT_NOTICE} noprint`)
		.append(
			$('<p>').html(getMessage('TOSNotice')),
			$('<p>').html(getMessage('CookieNotice')),
			$('<span>').addClass('mw-ui-button mw-ui-progressive').attr('role', 'button').html(getMessage('Agree'))
		);
	$consentNotice.find('span').on('click', (): void => {
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
		$consentNotice.fadeOut().remove();
	});
	$consentNotice.appendTo(document.body);
};

export {insertElement};
