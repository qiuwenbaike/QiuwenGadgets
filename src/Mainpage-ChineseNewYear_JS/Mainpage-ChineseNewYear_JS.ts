import {checkDependencies} from 'ext.gadget.Util';
import {loadHolidayStyle} from './modules/loadHolidayStyle';

(function mainpageChineseNewYearJS(): void {
	void checkDependencies('Mainpage-ChineseNewYear', '0');

	const {wgIsMainPage, wgAction} = mw.config.get();

	if (wgAction !== 'view' || !wgIsMainPage) {
		return;
	}

	loadHolidayStyle();
})();
