const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		':': localize({
			en: ': ',
			ja: '：',
			zh: '：',
		}),
		Bot: localize({
			en: 'Bot',
			ja: 'ボット',
			'zh-hans': '机器人',
			'zh-hant': '機械人',
		}),
		Unknown: localize({
			en: 'Unknown Location',
			ja: '未知IP地域',
			'zh-hans': '未知IP属地',
			'zh-hant': '未知IP屬地',
		}),
		Webmaster: localize({
			en: 'Webmaster',
			ja: 'ウェブマスター',
			'zh-hans': '站长',
			'zh-hant': '站長',
		}),
		Location: localize({
			en: 'IP Location',
			ja: 'IP地域',
			'zh-hans': 'IP属地',
			'zh-hant': 'IP屬地',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
