import {whoIsActive, whoIsActiveUserPage} from './modules/core';

(function whoIsActiveLoad() {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}

	void whoIsActive();
	void whoIsActiveUserPage();
})();
