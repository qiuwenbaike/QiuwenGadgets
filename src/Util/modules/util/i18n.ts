import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Confirm: localize({
			en: 'Confirm',
			ja: '確認',
			'zh-hans': '确认',
			'zh-hant': '確認',
		}),
		Cancel: localize({
			en: 'Cancel',
			ja: 'キャンセル',
			'zh-hans': '取消',
			'zh-hant': '取消',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
