import {Background} from './modules/background';
import {disclaimer} from './HistoryDisclaimer.module.less';

(function historyDisclaimer(): void {
	const {wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
		return;
	}

	if (document.querySelectorAll(`.${disclaimer}`).length) {
		return;
	}

	document.body.append(Background());
})();
