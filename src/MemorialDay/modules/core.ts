import {pageList} from './pageList';

const DATENOW: Date = new Date();
const MONTH: number = DATENOW.getMonth() + 1;
const DAY: number = DATENOW.getDate();

const WG_PAGE_NAME: string = mw.config.get('wgPageName');

export const memorialDay = (): void => {
	for (const {title, date} of pageList) {
		if (!((MONTH * 100 + DAY === date || !date) && WG_PAGE_NAME === title)) {
			continue;
		}
		mw.loader.addStyleTag(
			`.skin-citizen .mw-body,
			.skin-vector .mw-body,
			.skin-gongbi #mw-content {
				-webkit-filter: grayscale(1) !important;
				-moz-filter: grayscale(1) !important;
				-ms-filter: grayscale(1) !important;
				-o-filter: grayscale(1) !important;
				filter: grayscale(1) !important;
			}`
		);
	}
};
