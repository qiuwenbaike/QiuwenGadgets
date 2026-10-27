type Langs = 'zh' | 'zh-hans' | 'zh-cn' | 'zh-my' | 'zh-sg' | 'zh-hant' | 'zh-hk' | 'zh-mo' | 'zh-tw';
const langs: Langs[] = ['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'];
const nameOfLangs = {
	zh: '原始',
	'zh-hans': '简体',
	'zh-cn': '中国大陆简体',
	'zh-my': '马来西亚简体',
	'zh-sg': '新加坡简体',
	'zh-hant': '繁體',
	'zh-hk': '中國香港繁體',
	'zh-mo': '中國澳門繁體',
	'zh-tw': '中國臺灣繁體',
} as const satisfies Record<Langs, string>;

export {type Langs, langs, nameOfLangs};
