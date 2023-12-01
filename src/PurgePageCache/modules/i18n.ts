const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		Failed: localize({
			en: 'Failed to purge cache. Please try again later',
			'zh-hans': '清除失败，请稍后重试',
			'zh-hant': '清除失敗，請稍后重試',
		}),
		Purge: localize({
			en: 'Purge cache',
			'zh-hans': '清除缓存',
			'zh-hant': '清除快取',
		}),
		PurgeFromServer: localize({
			en: 'Purge cache from the server',
			'zh-hans': '更新服务器缓存',
			'zh-hant': '更新伺服器快取',
		}),
		Purging: localize({
			en: 'Purging cache...',
			'zh-hans': '正在清除……',
			'zh-hant': '正在清除……',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
