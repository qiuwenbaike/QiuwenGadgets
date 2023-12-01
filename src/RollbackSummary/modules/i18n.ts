const getI18nMessages = () => {
	const {localize} = i18n;

	return {
		Prompt: localize({
			en: 'Please enter a custom rollback summary (leave blank to use the system default summary)',
			'zh-hans': '请输入自定义回退摘要（留空则使用系统默认摘要）',
			'zh-hant': '請輸入自定義回退摘要（留空則使用系統預設摘要）',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
