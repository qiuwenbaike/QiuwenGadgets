import {getMessage} from './i18n';

export const cookieWarning = (): void => {
	const $consentText: JQuery = $('<div>')
		.addClass('consent-notice')
		.append(
			$('<p>').html(getMessage('TOSNotice')),
			$('<p>').html(getMessage('CookieNotice')),
			$('<span>').addClass('mw-ui-button mw-ui-progressive').attr('role', 'button').html(getMessage('Agree'))
		);
	$consentText.appendTo('body');
	$consentText.find('span').on('click', (): void => {
		mw.storage.set('cookieConsent', '1', 60 * 60 * 1000 * 24 * 30);
		$consentText.fadeOut().remove();
	});
};
