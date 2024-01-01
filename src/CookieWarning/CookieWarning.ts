import {LAST_STORAGE_VALUE, STORAGE_KEY, URL_CONSENT_READ, WG_USER_NAME} from './modules/constant';
import {generateElements} from './modules/util/generateElements';
import {getBody} from '~/util';

void getBody().then(function cookieWarning($body: JQuery<HTMLBodyElement>): void {
	if (WG_USER_NAME || LAST_STORAGE_VALUE === '1' || URL_CONSENT_READ) {
		return;
	}

	const {$agreeButton, $consentNotice} = generateElements();

	const broadcastChannel: BroadcastChannel = new BroadcastChannel(STORAGE_KEY);

	const closeWarning = (): void => {
		broadcastChannel.postMessage('close');
		broadcastChannel.close();
		$consentNotice.remove();
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
	};

	broadcastChannel.addEventListener('message', closeWarning);
	$agreeButton.on('click', closeWarning);

	$consentNotice.appendTo($body);
});
