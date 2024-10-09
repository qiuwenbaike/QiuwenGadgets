import {addStyleTag} from './modules/addStyleTag';
import {generateArray} from 'ext.gadget.Util';
import {pageList} from 'ext.gadget.MemorialDay-settings';

(function MemorialDay() {
	const DATENOW: Date = new Date();
	const YEAR: number = DATENOW.getFullYear();
	const MONTH: number = DATENOW.getMonth() + 1;
	const DAY: number = DATENOW.getDate();

	const {wgPageName} = mw.config.get();

	if (!Array.isArray(pageList)) {
		return;
	}

	for (const page of pageList) {
		if (!page.titles || !page.dates) {
			continue;
		}
		const {titles, dates} = page;

		if (!titles.includes(wgPageName)) {
			continue;
		}

		const allDates = generateArray(dates);

		for (let date of allDates) {
			if (typeof date === 'string') {
				date = Number.parseInt(date, 10);
			}

			if (!allDates.includes(MONTH * 1e2 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 1e2 + DAY)) {
				continue;
			}

			addStyleTag();
		}
	}
})();
