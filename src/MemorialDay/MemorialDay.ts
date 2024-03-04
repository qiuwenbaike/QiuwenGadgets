import {addStyleTag} from './modules/addStyleTag';
import {generateArray} from 'ext.gadget.Util';
import {pageList} from './modules/pageList';

const DATENOW: Date = new Date();
const YEAR: number = DATENOW.getFullYear();
const MONTH: number = DATENOW.getMonth() + 1;
const DAY: number = DATENOW.getDate();

const {wgPageName} = mw.config.get();

(function memorialDay(): void {
	for (const {title, dates} of pageList) {
		if (!(wgPageName === title)) {
			continue;
		}

		for (const date of generateArray(dates)) {
			if (!(MONTH * 100 + DAY === date || YEAR * 1e4 + MONTH * 100 + DAY === date || !date)) {
				continue;
			}

			addStyleTag();
		}
	}
})();
