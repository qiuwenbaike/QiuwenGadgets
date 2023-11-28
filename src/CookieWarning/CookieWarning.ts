import {LAST_STORAGE_VALUE, STORAGE_KEY, URL_CONSENT_READ, WG_USER_NAME} from './modules/constant';
import {generateElements} from './modules/util/generateElements';

$(function cookieWarning(): void {
	if (WG_USER_NAME || LAST_STORAGE_VALUE === '1' || URL_CONSENT_READ) {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $('body');
	const {$agreeButton, $consentNotice} = generateElements();

	$agreeButton.on('click', (): void => {
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
		$consentNotice.fadeOut().remove();
	});
	$consentNotice.appendTo($body);
});
