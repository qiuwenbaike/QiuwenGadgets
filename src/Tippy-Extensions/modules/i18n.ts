const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		EnableDisableDarkMode: localize({
			en: 'Enable/disable dark mode',
			'zh-hans': '开启/关闭暗色模式',
			'zh-hant': '開啓/關閉暗色模式',
		}),
		CollapseExpandSidebar: localize({
			en: 'Collapse/expand sidebar',
			'zh-hans': '展开/隐藏侧边栏',
			'zh-hant': '展開/隱藏側邊欄',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
