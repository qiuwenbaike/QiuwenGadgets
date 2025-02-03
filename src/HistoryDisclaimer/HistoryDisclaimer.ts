import {disclaimer} from './HistoryDisclaimer.module.less';
import {getBackground} from './modules/getBackground';

(function historyDisclaimer(): void {
	const {wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
		return;
	}

	if (document.querySelector(`.${disclaimer}`)) {
		return;
	}

	document.body.append(getBackground());
})();
