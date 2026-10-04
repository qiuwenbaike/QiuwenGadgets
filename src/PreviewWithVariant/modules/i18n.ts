import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Preview Chinese variant conversion': localize({
			en: 'Preview Chinese variant conversion',
			'zh-hans': '预览字词转换',
			'zh-hant': '預覽字詞轉換',
		}),
		'Preview using this variant: ': localize({
			en: 'Preview using this variant: ',
			'zh-hans': '使用该变体显示预览：',
			'zh-hant': '使用該變體顯示預覽：',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};
export {getMessage};
