const getI18nMessages = () => {
	const {localize} = i18n;

	return {
		Edit0: localize({
			en: 'Edit lead section',
			ja: '最初の段落を編集',
			'zh-hans': '编辑首段',
			'zh-hant': '編輯首段',
		}),
	};
};
const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
