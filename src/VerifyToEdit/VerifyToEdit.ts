import {getBody, userIsInGroup} from 'ext.gadget.Util';
import {initDialog} from './modules/initDialog';

void getBody().then(function loginToEdit($body: JQuery<HTMLBodyElement>): void {
	const {wgUserName} = mw.config.get();

	if (!wgUserName) {
		return;
	}

	if (userIsInGroup(['rnrsverify-confirmed', 'rnrsverify-exempt', 'steward', 'qiuwen'])) {
		return;
	}

	initDialog($body);
});
