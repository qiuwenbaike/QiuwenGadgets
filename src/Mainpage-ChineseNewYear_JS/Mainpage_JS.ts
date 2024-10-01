import {loadHolidayStyle} from './modules/loadHolidayStyle';

(function mainpageChineseNewYearJS(): void {
	const {wgIsMainPage, wgAction} = mw.config.get();

	if (wgAction !== 'view' || !wgIsMainPage) {
		return;
	}

	loadHolidayStyle();
})();
