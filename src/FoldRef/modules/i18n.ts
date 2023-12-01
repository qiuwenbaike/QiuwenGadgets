const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		Expand: localize({
			en: 'Expand',
			ja: '展開',
			'zh-hans': '展开',
			'zh-hant': '展開',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
