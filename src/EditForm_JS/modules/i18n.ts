const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;

	return {
		AiAssisted: localize({
			en: 'This edited content was assisted by artificial intelligence',
			ja: 'この編集内容は人工知能による支援を受けています',
			'zh-hans': '此编辑由人工智能（AI）辅助',
			'zh-hant': '此編輯由人工智能（AI）輔助',
		}),
		Preview: localize({
			en: 'Please preview the edited text',
			ja: 'プレビューしてください',
			'zh-hans': '请先预览',
			'zh-hant': '請先預覽',
		}),
	};
};

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
