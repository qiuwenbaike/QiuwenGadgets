const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Update: localize({
			en: 'Update IP location information',
			ja: 'IP地域の情報を更新',
			'zh-hans': '更新IP属地信息',
			'zh-hant': '更新IP屬地資訊',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
