import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Show all': localize({
			en: 'Show all',
			'zh-hans': '显示全部',
			'zh-hant': '顯示全部',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
