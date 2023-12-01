const getI18nMessages = () => {
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

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
