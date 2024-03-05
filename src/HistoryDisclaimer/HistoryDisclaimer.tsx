import './HistoryDisclaimer.less';
import {Background} from './modules/background';
import {CLASS_NAME} from './modules/constant';

(function historyDisclaimer(): void {
	const {wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
		return;
	}

	if (document.querySelectorAll(`.${CLASS_NAME}`).length) {
		return;
	}

	document.body.append(Background());
})();
