(function i18n(): void {
	const FALLBACK_TABLE: {
		zh: string[];
		'zh-hans': string[];
		'zh-hant': string[];
		'zh-cn': string[];
		'zh-sg': string[];
		'zh-my': string[];
		'zh-tw': string[];
		'zh-hk': string[];
		'zh-mo': string[];
	} = {
		zh: ['zh', 'zh-hans', 'zh-hant', 'zh-cn', 'zh-tw', 'zh-hk', 'zh-sg', 'zh-mo', 'zh-my'],
		'zh-hans': ['zh-hans', 'zh-cn', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
		'zh-hant': ['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
		'zh-cn': ['zh-cn', 'zh-hans', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
		'zh-sg': ['zh-sg', 'zh-hans', 'zh-cn', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
		'zh-my': ['zh-my', 'zh-hans', 'zh-cn', 'zh-sg', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
		'zh-tw': ['zh-tw', 'zh-hant', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
		'zh-hk': ['zh-hk', 'zh-hant', 'zh-mo', 'zh-tw', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
		'zh-mo': ['zh-mo', 'zh-hant', 'zh-hk', 'zh-tw', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
	};
	const isValidKey = (object: object, key: string | number | symbol): key is keyof typeof object => {
		return key in object;
	};
	const getDefaultFallbackList = (): string[] => {
		const defaultLanguageCode = 'en';
		const getLanguageCodeSplitArray = (originLanguageCode: string): string[] => {
			return originLanguageCode.split('-').map((value: string): string => {
				return value.toLowerCase();
			});
		};
		const documentLanguageSplitArray: string[] = getLanguageCodeSplitArray(document.documentElement.lang);
		const navigatorLanguageSplitArray: string[] = getLanguageCodeSplitArray(navigator.language);
		let languageCode: string = defaultLanguageCode;
		for (const languageCodeSplitArray of [documentLanguageSplitArray, navigatorLanguageSplitArray]) {
			switch (languageCodeSplitArray.length) {
				case 2:
					languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[1]}`;
					break;
				case 3:
					languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[2]}`;
					break;
				default:
					languageCode = languageCodeSplitArray[0] as string;
					break;
			}
			if (isValidKey(FALLBACK_TABLE, languageCode)) {
				break;
			}
		}
		return [...new Set([languageCode, defaultLanguageCode])];
	};
	const i18nMessages = (_defaultFallbackList: string[]): typeof window.i18n => {
		const elect = (candidates: I18nCandidates, locale: string): string => {
			let fallbackList: string[] = _defaultFallbackList;
			for (const key of [locale, ...fallbackList]) {
				if (isValidKey(FALLBACK_TABLE, key)) {
					fallbackList = FALLBACK_TABLE[key];
					break;
				}
			}
			for (const key of new Set([locale, ...fallbackList, ..._defaultFallbackList])) {
				if (isValidKey(candidates, key)) {
					return candidates[key];
				}
			}
			return '';
		};
		return {
			content: (candidates) => {
				return elect(candidates, mw.config.get('wgContentLanguage'));
			},
			localize: (candidates) => {
				return elect(candidates, mw.config.get('wgUserLanguage') ?? mw.config.get('wgContentLanguage'));
			},
			vary: (candidates) => {
				return elect(candidates, mw.config.get('wgUserVariant') ?? mw.config.get('wgContentLanguage'));
			},
		};
	};

	const defaultFallbackList: string[] = getDefaultFallbackList();
	const i18nMethods = i18nMessages(defaultFallbackList);
	window.i18n = i18nMethods;

	/* Deprecated window.wgU*S */
	const wgUXS = (
		hans: unknown,
		hant: unknown,
		cn: unknown,
		tw: unknown,
		hk: unknown,
		sg: unknown,
		zh: unknown,
		mo: unknown,
		my: unknown,
		en: unknown,
		method: 'content' | 'localize' | 'vary'
	): string => {
		zh = String(zh ?? hans ?? hant ?? cn ?? tw ?? hk ?? sg ?? mo ?? my ?? en);
		hans = String(hans ?? cn ?? sg ?? my ?? zh);
		hant = String(hant ?? tw ?? hk ?? mo ?? zh);
		cn = String(cn ?? hans);
		sg = String(sg ?? hans);
		tw = String(tw ?? hant);
		hk = String(hk ?? hant);
		mo = String(mo ?? hant);
		my = String(my ?? hant);
		en = String(en ?? zh);
		return i18nMethods[method]({
			en: en as string,
			zh: zh as string,
			'zh-hans': hans as string,
			'zh-hant': hant as string,
			'zh-cn': cn as string,
			'zh-tw': tw as string,
			'zh-hk': hk as string,
			'zh-sg': sg as string,
			'zh-mo': mo as string,
			'zh-my': my as string,
		});
	};
	window.wgUCS = (
		hans: unknown,
		hant: unknown,
		cn: unknown,
		tw: unknown,
		hk: unknown,
		sg: unknown,
		zh: unknown,
		mo: unknown,
		my: unknown,
		en: unknown
	): string => {
		return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'content');
	};
	window.wgULS = (
		hans: unknown,
		hant: unknown,
		cn: unknown,
		tw: unknown,
		hk: unknown,
		sg: unknown,
		zh: unknown,
		mo: unknown,
		my: unknown,
		en: unknown
	): string => {
		return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'localize');
	};
	window.wgUVS = (
		hans: unknown,
		hant: unknown,
		cn: unknown,
		tw: unknown,
		hk: unknown,
		sg: unknown,
		zh: unknown,
		mo: unknown,
		my: unknown,
		en: unknown
	): string => {
		return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'vary');
	};
})();

/* 用法
	// 定义多条消息
	// 支持多语言，可选值定义在index.d.ts#L-17，可直接添加其他值（RFC 5646）
	const getI18nMessages: GetI18nMessages = () => {
		const {localize} = i18n;
		// i18n的三个方法会匹配当前语言和它所接收对象中的键，对于localize来说，假设已定义zh、en和ja，则
		//   当页面语言（wgUserLanguage ?? wgContentLanguage）为中文/英语/日语时，返回页面语言所对应的值
		//   当页面语言为法语，浏览器语言为中文/英语/日语时，返回浏览器语言所对应的值
		//   当页面语言为法语，且不存在浏览器语言所对应的键，返回L-25定义的键所对应的值。若此键同样没被定义，则返回空字符串
		return {
			Cancel: localize({
				en: 'Cancel',
				ja: 'キャンセル',
				zh: '取消',
			}),
			QiuWen: localize({
				en: 'QiuWen',
				ja: 'ちゅううん',
				'zh-cn': '求闻',
				'zh-hk': '求聞',
			}),
			LongText: localize({
				en: 'This is a very long text',
				ja: 'これは非常に長いテキストです',
				'zh-hans': '这是一段非常长的文本',
				'zh-hant': '這是一段非常長的文字',
			}),
		};
	};
	const i18nMessages = getI18nMessages();
	const getMessage = (key: string): string => {
		return i18nMessages[key] || key;
	};
	// 调用
	getMessage('Cancel'); // en: Cancel, ja: キャンセル, zh: 取消, zh-hans: 取消, zh-hant: 取消, zh-cn: 取消, zh-hk: 取消, zh-tw: 取消
	getMessage('QiuWen'); // en: QiuWen, ja: ちゅううん, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	getMessage('LongText');
		// en: This is a very long text
		// ja: これは非常に長いテキストです
		// zh: 这是一段非常长的文本
		// zh-hans: 这是一段非常长的文本
		// zh-hant: 這是一段非常長的文字
		// zh-cn: 这是一段非常长的文本
		// zh-hk: 這是一段非常長的文字
		// zh-tw: 這是一段非常長的文字

	// 直接转换单条消息
	// 仅支持传递中文和英语。在非中文环境且未传递英语文本时，最终返回zh的值
	wgULS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	wgULS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
*/
