import {delHCore} from './module/core';

(() => {
	if (!/^qiuwen([_ ]talk)?:存废讨论\//i.test(mw.config.get('wgPageName'))) {
		return;
	}
	$(delHCore);
})();
