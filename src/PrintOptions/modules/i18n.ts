import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Print: localize({
			en: 'Print',
			'zh-hans': 'Api 调用连续失败 $1 次，$1 次调用的错误分别为：',
			'zh-hant': 'Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為：',
		}),
		'Print this page': localize({
			en: 'Print this page',
			'zh-hans': '打印此页面',
			'zh-hant': '列印此頁面',
		}),
		Cancel: localize({
			en: 'Cancel',
			ja: 'キャンセル',
			zh: '取消',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
