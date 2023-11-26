const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Log: localize({
			en: 'Log',
			ja: '折り畳み',
			'zh-hans': '日志',
			'zh-hant': '日誌',
		}),
		Subpages: localize({
			en: 'Subpage',
			'zh-hans': '子页面',
			'zh-hant': '子頁面',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
