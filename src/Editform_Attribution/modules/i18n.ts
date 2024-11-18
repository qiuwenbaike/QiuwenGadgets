import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		AttributionAdded: localize({
			en: 'This edited content contains third-party content, or contains any content from other pages of Qiuwen Baike',
			'zh-hans': '本次提交的编辑内容含有来自第三方的内容，或者含有来自求闻百科其他页面的内容',
			'zh-hant': '本次提交的編輯內容含有來自第三方的內容，或者含有來自求聞百科其他頁面的內容',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
