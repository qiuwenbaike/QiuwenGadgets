import {getPermissions} from './modules/core';

const {wgRelevantUserName} = mw.config.get();

if (wgRelevantUserName && mw.config.get('wgNamespaceNumber') === 2 && mw.config.get('wgAction') === 'view') {
	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
	const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();
	if (relevantUserPageName === pageName) {
		void getPermissions();
	}
}
