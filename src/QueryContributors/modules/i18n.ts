import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Based on contributions of': localize({
			en: 'Based on contributions of $1.',
			'zh-hans': '基于$1的贡献。',
			'zh-hant': '基于$1的貢獻。',
		}),
		Seperator: localize({
			en: ', ',
			'zh-hans': '、',
			'zh-hant': '、',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
