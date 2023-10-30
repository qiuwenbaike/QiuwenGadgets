import {STORAGE_KEY} from './module/constant';
import {cookieWarning} from './module/core';

(() => {
	if (mw.config.get('wgUserName') || location.search.includes('consentRead=')) {
		return;
	}
	const storageValue: string | null = mw.storage.get(STORAGE_KEY) as string | null;
	if (storageValue === '1') {
		return;
	}

	$(cookieWarning);
})();
