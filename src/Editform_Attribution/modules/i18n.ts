import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Add to Edit Summary': localize({
			en: 'Add to Edit Summary',
			'zh-hans': '添加至编辑摘要',
			'zh-hant': '添加至編輯摘要',
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
		'Other License': localize({
			en: 'Other license',
			'zh-hans': '其他许可证',
			'zh-hant': '其他許可證',
		}),
		'Please Claim Sources and Licenses': localize({
			en: 'If edit content adds any third-party content, please add the source and license of the third-party content separately to the editing summary.',
			'zh-hans': '若您向编辑内容中添加了第三方撰写的内容，请将相关第三方内容的来源、许可条款在编辑摘要中分条声明',
			'zh-hant': '若您向編輯內容中添加了第三方撰写的內容，請將相关第三方內容的來源、許可條款在編輯摘要中分條聲明',
		}),
		'Replace With License': localize({
			en: ' (Replace with license name and URL)',
			'zh-hans': '（替换为许可证名称和网址）',
			'zh-hant': '（替換爲許可證名稱和網址）',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
