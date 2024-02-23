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

const WG_SKIN = mw.config.get('skin');

const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');

const WG_USER_VARIANT: string | null = mw.config.get('wgUserVariant');

export {DATA, WG_SKIN, WG_USER_LANGUAGE, WG_USER_VARIANT};
