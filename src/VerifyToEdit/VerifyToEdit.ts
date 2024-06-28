import {getBody, userIsInGroup} from 'ext.gadget.Util';
import {initDialog} from './modules/initDialog';

void getBody().then(function loginToEdit($body: JQuery<HTMLBodyElement>): void {
	const {wgUserName} = mw.config.get();

	if (!wgUserName) {
		return;
	}

	if (userIsInGroup(['bot', 'qiuwen', 'rnrsverify-confirmed', 'rnrsverify-exempt', 'steward'])) {
		return;
	}

	initDialog($body);
});
