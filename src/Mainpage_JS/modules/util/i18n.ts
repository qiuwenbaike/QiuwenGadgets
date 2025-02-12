import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Qiuwen Projects': localize({
			en: 'Qiuwen Projects',
			'zh-hans': '“求闻”系列项目',
			'zh-hant': '「求聞」系列項目',
		}),
		'List of Qiuwen Projects': localize({
			en: 'List of Qiuwen Projects',
			'zh-hans': '“求闻”系列项目列表',
			'zh-hant': '「求聞」系列項目列表',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
