import './HistoryDisclaimer.less';
import * as OPTIONS from './options.json';
import {Background} from './modules/background';

(function historyDisclaimer(): void {
	const {wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
		return;
	}

	if (document.querySelectorAll(`.${OPTIONS.className}`).length) {
		return;
	}

	document.body.append(Background());
})();
