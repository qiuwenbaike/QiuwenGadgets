const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		Ban: localize({
			en: 'Ban this page',
			ja: '現在のページを無効に',
			'zh-hans': '禁用此页面',
			'zh-hant': '禁用此頁',
		}),
		Confirm: localize({
			en: 'Confirm to enforce ban on this page?',
			'zh-hans': '您确定要禁用此页面吗？',
			'zh-hant': '您確定要禁用此頁面嗎？',
		}),
		'Network error': localize({
			en: 'Network error',
			ja: 'ネットワークエラー',
			'zh-hans': '网络异常',
			'zh-hant': '網路異常',
		}),
		Refreshing: localize({
			en: 'Page banned successfully, refreshing...',
			ja: '現在のページを無効になりました。再読み込みします...',
			'zh-hans': '禁用成功，即将刷新当前页面……',
			'zh-hant': '禁用成功，即將重新載入當前頁……',
		}),
		'Ban the $1': localize({
			en: 'Ban the $1',
			ja: '現在の$1を無効に',
			'zh-hans': '禁用此$1',
			'zh-hant': '禁用此$1',
		}),
		Image: localize({
			en: 'image',
			ja: '画像',
			'zh-hans': '图片',
			'zh-hant': '圖片',
		}),
		Page: localize({
			en: 'page',
			ja: 'ページ',
			'zh-hans': '页面',
			'zh-hant': '頁',
		}),
		Template: localize({
			en: 'template',
			ja: 'テンプレート',
			zh: '模板',
		}),
	};
};
const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
