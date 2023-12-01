const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		':': localize({
			en: ': ',
			ja: '：',
			zh: '：',
		}),
		'(': localize({
			en: '(',
			ja: '（',
			zh: '（',
		}),
		')': localize({
			en: ')',
			ja: '）',
			zh: '）',
		}),
		Report: localize({
			en: 'Report this page',
			ja: 'このページを報告',
			'zh-hans': '报告不良信息',
			'zh-hant': '報告不良資訊',
		}),
		Revision: localize({
			en: 'Revision',
			ja: '版',
			zh: '版本',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
