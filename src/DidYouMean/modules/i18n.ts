const getI18nMessages = () => {
	const {localize} = i18n;

	return {
		Redirecting: localize({
			en: 'Redirecting...',
			ja: 'リダイレクト中...',
			'zh-hans': '重定向中……',
			'zh-hant': '重新導向中……',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
