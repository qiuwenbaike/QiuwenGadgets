const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		ToBottom: localize({
			en: 'Scroll to the bottom',
			'zh-hans': '滚动至页底',
			'zh-hant': '滾動至頁底',
		}),
		ToTop: localize({
			en: 'Go back to the top',
			'zh-hans': '滚动至页顶',
			'zh-hant': '滾動至頁頂',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
