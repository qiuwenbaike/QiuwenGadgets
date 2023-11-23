const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Copy: localize({
			en: 'Copy to clipboard',
			ja: 'クリップボードにコピー',
			'zh-hans': '复制至剪贴板',
			'zh-hant': '拷貝至剪貼簿',
		}),
		Copied: localize({
			en: 'Copied',
			ja: 'コピーが成功しました',
			'zh-hans': '已复制',
			'zh-hant': '已拷貝',
		}),
		Failed: localize({
			en: 'Copy failed',
			ja: 'コピーに失敗しました',
			'zh-hans': '复制失败',
			'zh-hant': '拷貝失敗',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
