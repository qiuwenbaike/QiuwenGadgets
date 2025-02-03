import {getMessage} from './i18n';

const LICENSES = [
	{
		label: 'CC BY-SA 4.0',
		data: 'https://creativecommons.org/licenses/by-sa/4.0/',
	},
	{
		label: 'CC BY-SA 3.0',
		data: 'https://creativecommons.org/licenses/by-sa/3.0/',
	},
	{
		label: 'CC BY-SA 3.0 CN',
		data: 'https://creativecommons.org/licenses/by-sa/3.0/cn/',
	},
	{
		label: 'CC0-1.0',
		data: 'https://creativecommons.org/publicdomain/zero/1.0/',
	},
	{
		label: 'KOGL Type I: Attribution',
		data: 'https://www.kogl.or.kr/info/licenseType1.do',
	},
	{
		label: getMessage('Other License'),
		data: getMessage('Replace With License'),
	},
];

export {LICENSES};
