import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Search engine': localize({
			en: 'Search engine',
			ja: '検索エンジン',
			zh: '搜索引擎',
		}),
		Baidu: localize({
			en: 'Baidu',
			ja: 'Baidu',
			zh: '百度',
		}),
		Bing: localize({
			en: 'Bing',
			'zh-hans': '必应',
			'zh-hant': '必應',
		}),
		Google: localize({
			en: 'Google',
			ja: 'Google',
			zh: '谷歌',
		}),
		'In-site search': localize({
			en: 'In-site search',
			'zh-hans': '站内搜索',
			'zh-hant': '站內檢索',
		}),
		Sogou: localize({
			en: 'Sogou',
			ja: 'Sogou',
			zh: '搜狗',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
