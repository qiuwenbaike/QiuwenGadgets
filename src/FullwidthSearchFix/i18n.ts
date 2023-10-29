const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		'Redirecting to': localize({
			en: 'Redirecting to',
			'zh-hans': '重定向至',
			'zh-hant': '重新導向至',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
