const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		'Network error': localize({
			en: 'Network error',
			ja: 'ネットワークエラー',
			'zh-hans': '网络异常',
			'zh-hant': '網路異常',
		}),
		Confirm: localize({
			en: 'Confirm logout?',
			ja: 'ログアウトしますか？',
			'zh-hans': '您确定要退出吗？',
			'zh-hant': '您確定要登出嗎？',
		}),
		Succeed: localize({
			en: 'Logout succeed. Refreshing...',
			ja: 'ログアウトに成功しました。再読み込みします...',
			'zh-hans': '退出成功，即将刷新页面……',
			'zh-hant': '登出成功，即將重新載入……',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
