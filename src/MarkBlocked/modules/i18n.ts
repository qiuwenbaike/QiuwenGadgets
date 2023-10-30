const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		infinity: localize({
			en: 'infinity',
			'zh-hans': '无限期',
			'zh-hant': '無限期',
		}),
		partial: localize({
			en: 'partial ',
			zh: '部分',
		}),
		Blocked: localize({
			en: '; $5blocked ($1) by $2: $3 ($4 ago)',
			'zh-hans': '；由$2$5封禁$1：$3（$4前）',
			'zh-hant': '；由$2$5封鎖$1：$3（$4前）',
		}),
		d: localize({
			en: 'day',
			zh: '天',
		}),
		s: localize({
			en: 'second',
			zh: '秒',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
