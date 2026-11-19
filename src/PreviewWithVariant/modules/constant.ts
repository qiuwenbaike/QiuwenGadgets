import {localize} from 'ext.gadget.i18n';

const uls = (hans: string, hant: string = hans): string => {
	return localize({'zh-hans': hans, 'zh-hant': hant, 'zh-my': hant, en: hans});
};

const VARIANTS: {
	data: string;
	label: string;
}[] = [
	{
		data: 'zh',
		label: uls('不转换', '不轉換'),
	},
	{
		data: 'zh-hans',
		label: '简体',
	},
	{
		data: 'zh-hant',
		label: '繁體',
	},
	{
		data: 'zh-cn',
		label: '中国大陆简体',
	},
	{
		data: 'zh-hk',
		label: '中國香港繁體',
	},
	{
		data: 'zh-mo',
		label: '中國澳門繁體',
	},
	{
		data: 'zh-my',
		label: '马来西亚简体',
	},
	{
		data: 'zh-sg',
		label: '新加坡简体',
	},
	{
		data: 'zh-tw',
		label: '中國臺灣繁體',
	},
];

export {VARIANTS};
