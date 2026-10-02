import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Enhanced: localize({
			en: 'Hide interface elements',
			ja: 'インターフェース要素を非表示',
			'zh-hans': '隐藏界面元素',
			'zh-hant': '隱藏介面元素',
		}),
		NoImages: localize({
			en: 'Hide images',
			ja: '画像を非表示',
			'zh-hans': '隐藏图片',
			'zh-hant': '隱藏圖片',
		}),
		NoReferences: localize({
			en: 'Hide references',
			ja: '脚注を非表示',
			'zh-hans': '隐藏参考文献',
			'zh-hant': '隱藏參考文獻',
		}),
		NoTableOfContents: localize({
			en: 'Hide table of contents',
			ja: '目次を非表示',
			'zh-hans': '隐藏目录',
			'zh-hant': '隱藏目錄',
		}),
		NoBackground: localize({
			en: 'Remove backgrounds (your browser may override this setting)',
			ja: '背景を削除（ブラウザーがこの設定を上書きする場合があります）',
			'zh-hans': '移除背景（您的浏览器或可以覆盖本设置）',
			'zh-hant': '移除背景（您的瀏覽器或可覆蓋此設定）',
		}),
		BlackText: localize({
			en: 'Force all text to black',
			ja: 'すべての文字を黒にする',
			'zh-hans': '强制将所有文字设置为黑色',
			'zh-hant': '強制將所有文字設定為黑色',
		}),
		Print: localize({
			en: 'Print',
			ja: '印刷',
			'zh-hans': '打印',
			'zh-hant': '列印',
		}),
		'Print this page': localize({
			en: 'Print this page',
			ja: 'このページを印刷に',
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
