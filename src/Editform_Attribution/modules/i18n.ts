import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Add: localize({
			en: 'Add',
			zh: '增加',
		}),
		Source: localize({
			en: 'Source',
			'zh-hans': '内容来源',
			'zh-hant': '內容來源',
		}),
		License: localize({
			en: 'License',
			'zh-hans': '许可证',
			'zh-hant': '許可證',
		}),
		'Sources and Licenses': localize({
			en: 'Sources and licenses of third-party content',
			'zh-hans': '第三方内容的来源及许可证',
			'zh-hant': '第三方內容的來源及許可證',
		}),
		'Other License': localize({
			en: 'Other license',
			'zh-hans': '其他许可证',
			'zh-hant': '其他許可證',
		}),
		'Replace With License': localize({
			en: ' (Replace with license name and URL)',
			'zh-hans': '（替换为许可证名称和网址）',
			'zh-hant': '（替換爲許可證名稱和網址）',
		}),
		ThirdPartyContentContained: localize({
			en: 'This editor contains third-party content.',
			'zh-hans': '此编辑含有第三方内容',
			'zh-hant': '此編輯含有第三方內容',
		}),
		QiuwenContentContained: localize({
			en: 'This editor contains content from other pages of Qiuwen Baike.',
			'zh-hans': '此编辑含有求闻百科其他页面的内容',
			'zh-hant': '此編輯含有求聞百科其他頁面的內容',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
