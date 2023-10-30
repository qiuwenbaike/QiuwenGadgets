import {pageList} from './pageList';

const dateNow: Date = new Date();
const month: number = dateNow.getMonth() + 1;
const day: number = dateNow.getDate();

const pageName: string = mw.config.get('wgPageName');

export const memorialDay = (): void => {
	for (const {title, date} of pageList) {
		if ((month * 100 + day === date || !date) && pageName === title) {
			mw.util.addCSS(
				'.mw-body{-webkit-filter:grayscale(1)!important;-moz-filter:grayscale(1)!important;-ms-filter:grayscale(1)!important;-o-filter:grayscale(1)!important;filter:grayscale(1)!important}'
			);
		}
	}
};
