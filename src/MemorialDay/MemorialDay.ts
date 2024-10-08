import {generateArray, getBody} from 'ext.gadget.Util';
import {addStyleTag} from './modules/addStyleTag';
import {pageList} from './modules/pageList';

const DATENOW: Date = new Date();
const YEAR: number = DATENOW.getFullYear();
const MONTH: number = DATENOW.getMonth() + 1;
const DAY: number = DATENOW.getDate();

const {wgPageName} = mw.config.get();

for (const {titles, dates} of pageList) {
	if (!titles.includes(wgPageName)) {
		continue;
	}

	const allDates = generateArray(dates);

	if (!allDates.includes(MONTH * 1e2 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 1e2 + DAY)) {
		continue;
	}

	void getBody().then(addStyleTag);
}
