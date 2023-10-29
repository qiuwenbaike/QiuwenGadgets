const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Title: localize({
			en: 'Add topic',
			ja: '話題を追加',
			'zh-hans': '添加话题',
			'zh-hant': '添加話題',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
