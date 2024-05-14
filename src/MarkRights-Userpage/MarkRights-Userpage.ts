import * as OPTIONS from './options.json';
import {getPermissions} from './modules/core';

(function markRightsUserPage(): void {
	const {wgAction, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();
	if (!wgRelevantUserName || !(wgNamespaceNumber === OPTIONS.userNameSpaceNumber) || !(wgAction === 'view')) {
		return;
	}

	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, OPTIONS.userNameSpaceNumber).toText();
	const pageName: string = new mw.Title(wgPageName).toText();
	if (pageName !== relevantUserPageName) {
		return;
	}

	void getPermissions(wgRelevantUserName);
})();
