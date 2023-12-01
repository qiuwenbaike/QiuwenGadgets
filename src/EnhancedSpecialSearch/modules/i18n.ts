const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		Baidu: localize({
			en: 'Baidu',
			ja: 'Baidu',
			zh: '百度',
		}),
		Bing: localize({
			en: 'Bing',
			'zh-hans': '必应',
			'zh-hant': '必應',
		}),
		Google: localize({
			en: 'Google',
			ja: 'Google',
			zh: '谷歌',
		}),
		Qiuwen: localize({
			en: 'Qiuwen Baike',
			ja: '求聞百科',
			'zh-hans': '求闻百科',
			'zh-hant': '求聞百科',
		}),
		Sogou: localize({
			en: 'Sogou',
			ja: 'Sogou',
			zh: '搜狗',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
