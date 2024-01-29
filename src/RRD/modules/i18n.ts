import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		editSummary: localize({
			'zh-hans': '[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除',
			'zh-hant': '[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除',
		}),
		errNoRevisionProvided: localize({
			'zh-hans': '您没有选择需隐藏的版本！',
			'zh-hant': '您沒有選擇需隱藏的版本！',
		}),
		errNoItemProvided: localize({
			'zh-hans': '您没有选择需隐藏的项目！',
			'zh-hant': '您沒有選擇需隱藏的項目！',
		}),
		warnNoReasonProvided: localize({
			'zh-hans': '您没有输入任何理由！确定要继续吗？',
			'zh-hant': '您沒有輸入任何理由！確定要繼續嗎？',
		}),
		hideItems: localize({
			'zh-hans': '需隐藏的项目：',
			'zh-hant': '需隱藏的項目：',
		}),
		hideContent: localize({
			'zh-hans': '编辑内容',
			'zh-hant': '編輯內容',
		}),
		hideLog: localize({
			'zh-hans': '日志目标与参数',
			'zh-hant': '日誌目標與參數',
		}),
		hideUsername: localize({
			'zh-hans': '编辑者用户名/IP地址',
			'zh-hant': '編輯者用戶名/IP位址',
		}),
		hideSummary: localize({
			'zh-hans': '编辑摘要',
			'zh-hant': '編輯摘要',
		}),
		hideReason: localize({
			'zh-hans': '理据：',
			'zh-hant': '理據：',
		}),
		hideReasonRD1: localize({
			'zh-hans': 'RD1：条目中明显侵犯著作权的内容',
			'zh-hant': 'RD1：條目中明顯侵犯著作權的內容',
		}),
		hideReasonRD2: localize({
			'zh-hans': 'RD2：严重侮辱、贬低或攻击性文本',
			'zh-hant': 'RD2：嚴重侮辱、貶低或攻擊性文本',
		}),
		hideReasonRD3: localize({
			'zh-hans': 'RD3：纯粹扰乱性内容',
			'zh-hant': '純粹擾亂性內容',
		}),
		hideReasonRD4: localize({
			'zh-hans': 'RD4：明显违反法律法规或违背公序良俗的内容',
			'zh-hant': 'RD4：明顯違反法律法規或違背公序良俗的內容',
		}),
		hideReasonRD5: localize({
			'zh-hans': 'RD5：其他不宜公开的版本内容',
			'zh-hant': 'RD5：其他不宜公開的版本內容',
		}),
		hideReasonOther: localize({
			'zh-hans': '仅使用下方的附加理由',
			'zh-hant': '僅使用下方的附加理由',
		}),
		otherReasons: localize({
			'zh-hans': '附加理由（可选，不用签名）',
			'zh-hant': '附加理由（可選，不用簽名）',
		}),
		dialogTitle: localize({
			'zh-hans': '提报修订版本删除',
			'zh-hant': '提報修訂版本刪除',
		}),
		dialogButtonSubmit: localize({
			'zh-hans': '提报',
			'zh-hant': '提報',
		}),
		dialogButtonCancel: localize({
			'zh-hans': '取消',
			'zh-hant': '取消',
		}),
		reportButtonTitle: localize({
			'zh-hans': '将选中的版本提报到',
			'zh-hant': '將選中的版本提報到',
		}),
		reportButtonText: localize({
			'zh-hans': '请求删除被选版本',
			'zh-hant': '請求刪除被選版本',
		}),
		reportButtonLogText: localize({
			'zh-hans': '请求删除被选日志',
			'zh-hant': '請求刪除被選日誌',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
