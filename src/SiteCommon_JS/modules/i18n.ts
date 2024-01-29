import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Note: localize({
			en: 'Note: ',
			'zh-hans': '注释：',
			'zh-hant': '注釋：',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
