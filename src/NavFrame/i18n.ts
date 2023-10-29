const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Hide: localize({
			en: 'Hide',
			ja: '非表示',
			'zh-hans': '隐藏',
			'zh-hant': '隱藏',
		}),
		Show: localize({
			en: 'Show',
			ja: '表示',
			'zh-hans': '显示',
			'zh-hant': '顯示',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
