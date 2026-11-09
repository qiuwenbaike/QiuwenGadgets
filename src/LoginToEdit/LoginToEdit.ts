import {getBody} from 'ext.gadget.Util';
import {initDialog} from './modules/initDialog';

void getBody().then(function loginToEdit(): void {
	const {wgUserName} = mw.config.get();

	if (wgUserName) {
		return;
	}

	initDialog();
});
