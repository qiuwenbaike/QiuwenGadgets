import {STORAGE_KEY} from './modules/constant';
import {cookieWarning} from './modules/core';

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
