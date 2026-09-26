class I18n {
	language: string;
	i18nData: Record<string, Record<string, string>> = {};
	sessionUpdateLog: string[] = [];
	constructor() {
		let language;
		try {
			language = JSON.parse(localStorage['Wikiplus_Settings'])['language'] || navigator.language.toLowerCase();
		} catch {
			// @ts-expect-error TS2339
			language = (navigator.language || navigator.browserLanguage)
				.replace(/han[st]-?/i, '') // for languages like zh-Hans-CN
				.toLowerCase();
		}
		this.language = language;
		// Merge with localStorage i18n cache
		try {
			const i18nCache = JSON.parse(localStorage.getItem('Wikiplus_i18nCache') as string);
			for (const key of Object.keys(i18nCache)) {
				this.i18nData[key] = i18nCache[key];
			}
		} catch {
			// Fail to parse i18n cache, reset
			localStorage.setItem('Wikiplus_i18nCache', '{}');
		}
	}
	translate(key: string, placeholders?: string[]) {
		let result = '';
		placeholders ||= [];
		if (this.language in this.i18nData) {
			const i18nDataLang = this.i18nData[this.language];
			if (i18nDataLang && key in i18nDataLang) {
				result = i18nDataLang[key] as string;
			} else {
				// try update language verison
				this.loadLanguage(this.language);
				if (this.i18nData['en-us'] && key in this.i18nData['en-us']) {
					// Fallback to English
					result = this.i18nData['en-us'][key] as string;
				} else {
					result = key;
				}
			}
		} else {
			this.loadLanguage(this.language);
		}

		if (placeholders.length > 0) {
			for (const [index, placeholder] of placeholders.entries()) {
				result = result.replace(`$${index + 1}`, placeholder);
			}
		}
		return result;
	}
	async loadLanguage(language: string) {
		if (this.sessionUpdateLog.includes(language)) {
			// Has been updated this session.
			return;
		}
		try {
			const response = await (
				await fetch(
					`https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/${language}.json`
				)
			).json();
			const nowVersion = localStorage.getItem('Wikiplus_LanguageVersion') || '000';
			this.sessionUpdateLog.push(language);
			if (response.__version !== nowVersion || !(language in this.i18nData)) {
				// Language get updated
				console.info(`Update ${language} support to version ${response.__version}`);
				this.i18nData[language] = response;
				// Update localStorage cache
				localStorage.setItem('Wikiplus_i18nCache', JSON.stringify(this.i18nData));
			}
		} catch {
			// Unsupported language
		}
	}
}

export default new I18n();
