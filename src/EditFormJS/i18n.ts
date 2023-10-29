const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		AiAssisted: localize({
			en: 'This edited content was assisted by artificial intelligence',
			ja: 'この編集内容は人工知能による支援を受けています',
			'zh-hans': '此编辑由人工智能（AI）辅助',
			'zh-hant': '此編輯由人工智能（AI）輔助',
		}),
		ConversionSoftware: localize({
			en: 'The system has detected that you are using a client-side traditional-simplified conversion software, which has converted the content in the text box. Please close this software and reopen the editing interface before making any edits.',
			ja: 'システムは、クライアント側の簡繁体字変換ソフトウェアを検出しました。このソフトウェアがテキストボックス内のコンテンツを変換しています。編集する前に、このソフトウェアを閉じて、編集インターフェースを再度開いてから編集してください。',
			'zh-hans':
				'系统检测到您使用了客户端繁简转换软件，且此软件对文本框中的内容进行了转换。请关闭此软件后重新打开编辑界面，再进行编辑。',
			'zh-hant':
				'系統檢測到您使用了用戶端繁簡轉換軟體，且此軟體對文字方塊中的內容進行了轉換。請關閉此軟體後重新打開編輯介面，再進行編輯。',
		}),
		Preview: localize({
			en: 'Please preview the edited text',
			ja: 'プレビューしてください',
			'zh-hans': '请先预览',
			'zh-hant': '請先預覽',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
