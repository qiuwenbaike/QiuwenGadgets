import {getPermissions} from './modules/core';

const {wgAction, wgNamespaceNumber, wgRelevantUserName} = mw.config.get();

if (wgRelevantUserName && wgNamespaceNumber === 2 && wgAction === 'view') {
	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
	const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();
	if (relevantUserPageName === pageName) {
		void getPermissions(wgRelevantUserName);
	}
}
