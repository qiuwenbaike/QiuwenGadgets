const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Collapse: localize({
			en: 'collapse',
			ja: '折り畳み',
			'zh-hans': '折叠',
			'zh-hant': '折疊',
		}),
		Expand: localize({
			en: 'expand',
			ja: '展開',
			'zh-hans': '展开',
			'zh-hant': '展開',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
