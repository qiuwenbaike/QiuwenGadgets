import {background} from './modules/getBackground';
import {disclaimer} from './HistoryDisclaimer.module.less';
import {getBody} from 'ext.gadget.Util';

void getBody().then(function historyDisclaimer(): void {
	const {wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
		return;
	}

	if (document.querySelector(`.${disclaimer}`)) {
		return;
	}

	document.body.append(background());
});
