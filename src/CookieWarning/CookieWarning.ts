import {LAST_STORAGE_VALUE, STORAGE_KEY, URL_CONSENT_READ, WG_USER_NAME} from './modules/constant';
import {generateElements} from './modules/util/generateElements';

$(function cookieWarning(): void {
	if (WG_USER_NAME || LAST_STORAGE_VALUE === '1' || URL_CONSENT_READ) {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $('body');
	const {$agreeButton, $consentNotice} = generateElements();

	const broadcastChannel: BroadcastChannel = new BroadcastChannel(STORAGE_KEY);

	const closeWarning = (): void => {
		// eslint-disable-next-line unicorn/require-post-message-target-origin
		broadcastChannel.postMessage('close');
		broadcastChannel.close();
		$consentNotice.remove();
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
	};

	broadcastChannel.addEventListener('message', closeWarning);
	$agreeButton.on('click', closeWarning);

	$consentNotice.appendTo($body);
});
