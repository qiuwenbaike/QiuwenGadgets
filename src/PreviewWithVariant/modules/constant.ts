const VARIANTS: {
	data: string;
	label: string;
}[] = [
	{
		data: 'zh',
		label: window.wgULS('不转换', '不轉換'),
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

const DATA = [
	{var: 'zh', htmlLang: 'zh', msg: 'pwv-2017-zh'},
	{var: 'zh-hans', htmlLang: 'zh-Hans', msg: 'pwv-2017-zh-hans'},
	{var: 'zh-hant', htmlLang: 'zh-Hant', msg: 'pwv-2017-zh-hant'},
	{var: 'zh-cn', htmlLang: 'zh-Hans-CN', msg: 'pwv-2017-zh-cn'},
	{var: 'zh-hk', htmlLang: 'zh-Hant-HK', msg: 'pwv-2017-zh-hk'},
	{var: 'zh-mo', htmlLang: 'zh-Hant-MO', msg: 'pwv-2017-zh-mo'},
	{var: 'zh-my', htmlLang: 'zh-Hans-MY', msg: 'pwv-2017-zh-my'},
	{var: 'zh-sg', htmlLang: 'zh-Hans-SG', msg: 'pwv-2017-zh-sg'},
	{var: 'zh-tw', htmlLang: 'zh-Hant-TW', msg: 'pwv-2017-zh-tw'},
];

export {DATA, VARIANTS};
