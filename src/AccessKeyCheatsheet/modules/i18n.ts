const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Close: localize({
			en: 'Close',
			ja: '閉じる',
			'zh-hans': '关闭',
			'zh-hant': '關閉',
		}),
		Text: localize({
			en: 'Open access keys cheatsheet',
			ja: 'アクセスキーのチートシート',
			'zh-hans': '显示键盘快捷键提示',
			'zh-hant': '顯示鍵盤快速鍵提示',
		}),
		Title: localize({
			en: 'Access keys cheatsheet',
			ja: 'アクセスキーのチートシート',
			'zh-hans': '键盘快捷键提示',
			'zh-hant': '鍵盤快速鍵提示',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
