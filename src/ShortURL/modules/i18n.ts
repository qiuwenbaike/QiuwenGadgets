const getI18nMessages = () => {
	const {localize} = i18n;

	return {
		'Short URL': localize({
			en: 'Short URL',
			'zh-hans': '短链接',
			'zh-hant': '短網址',
		}),
		'Short URL copied to clipboard': localize({
			en: 'The short URL has been copied to clipboard:',
			'zh-hans': '已复制本页短链接：',
			'zh-hant': '已復製本頁短網址：',
		}),
		'Show short URL': localize({
			en: 'Show short URL',
			'zh-hans': '显示该页短链接',
			'zh-hant': '顯示該頁短網址',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
