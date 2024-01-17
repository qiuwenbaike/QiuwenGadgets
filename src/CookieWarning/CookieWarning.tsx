import {
	CLASS_NAME,
	COOKIE_CLEARED_KEY,
	LAST_COOKIE_CLEARED_VALUE,
	LAST_STORAGE_VALUE,
	STORAGE_KEY,
	URL_CONSENT_READ,
	WG_USER_NAME,
} from './modules/constant';
import AgreeButton from './components/AgreeButton';
import ConsentNotice from './components/ConsentNotice';
import React from 'ext.gadget.React';
import {getBody} from 'ext.gadget.Util';

void getBody().then(function cookieWarning($body: JQuery<HTMLBodyElement>): void {
	if (WG_USER_NAME) {
		return;
	}

	// Temporary: clear old session cookies under `${lang}`.qiuwenbaike.cn
	if (LAST_COOKIE_CLEARED_VALUE !== '1') {
		document.cookie = '';
		mw.storage.set(COOKIE_CLEARED_KEY, '1');
	}

	if (LAST_STORAGE_VALUE === '1' || URL_CONSENT_READ) {
		return;
	}

	const closeWarning = (): void => {
		broadcastChannel.postMessage('close');
		broadcastChannel.close();
		rootElement.remove();
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
	};

	const broadcastChannel: BroadcastChannel = new BroadcastChannel(STORAGE_KEY);
	broadcastChannel.addEventListener('message', closeWarning);

	const rootElement = (
		<div className={[CLASS_NAME, 'noprint']}>
			<ConsentNotice />
			<AgreeButton onClick={closeWarning} />
		</div>
	);

	$body.append(rootElement);
});
