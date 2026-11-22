import {localize} from 'ext.gadget.i18n';

const uls = (hans: string, hant: string = hans): string => localize({'zh-hans': hans, 'zh-hant': hant, en: hans});

const getI18nMessages = () => {
	return {
		editSummary: uls(
			'[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除',
			'[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除'
		),
		errNoRevisionProvided: uls('您没有选择需隐藏的版本！', '您沒有選擇需隱藏的版本！'),
		errNoItemProvided: uls('您没有选择需隐藏的项目！', '您沒有選擇需隱藏的項目！'),
		warnNoReasonProvided: uls('您没有输入任何理由！确定要继续吗？', '您沒有輸入任何理由！確定要繼續嗎？'),
		hideItems: uls('需隐藏的项目：', '需隱藏的項目：'),
		hideContent: uls('编辑内容', '編輯內容'),
		hideLog: uls('日志目标与参数', '日誌目標與參數'),
		hideUsername: uls('编辑者用户名', '編輯者用戶名'),
		hideSummary: uls('编辑摘要', '編輯摘要'),
		hideReason: uls('理据：', '理據：'),
		hideReasonRD1: uls('RD1：条目中明显侵犯著作权的内容', 'RD1：條目中明顯侵犯著作權的內容'),
		hideReasonRD2: uls('RD2：严重侮辱、贬低或攻击性文本', 'RD2：嚴重侮辱、貶低或攻擊性文本'),
		hideReasonRD3: uls('RD3：纯粹扰乱性内容', '純粹擾亂性內容'),
		hideReasonRD4: uls('RD4：明显违反法律法规或违背公序良俗的内容', 'RD4：明顯違反法律法規或違背公序良俗的內容'),
		hideReasonRD5: uls('RD5：其他不宜公开的版本内容', 'RD5：其他不宜公開的版本內容'),
		hideReasonOS1: uls('OS1：未公开的个人资料', 'OS1：未公開的個人資料'),
		hideReasonOS2: uls('OS2：可能影响百科运作的内容', 'OS2：可能影響百科運作的內容'),
		hideReasonOS3: uls('OS3：破坏性、扰乱性用户名', 'OS3：破壞性、擾亂性用戶名'),
		hideReasonOS4: uls(
			'OS4：原页面内容来自外部来源、不符合求闻百科方针，但经过改写后，已符合求闻百科方针的页面',
			'OS4：原頁面內容來自外部來源、不符合求聞百科方針，但經過覆寫後，已符合求聞百科方針的頁面'
		),
		hideReasonOther: uls('仅使用下方的附加理由', '僅使用下方的附加理由'),
		otherReasons: uls('附加理由（可选，不用签名）', '附加理由（可選，不用簽名）'),
		dialogTitle: uls('提报修订版本删除', '提報修訂版本刪除'),
		dialogButtonSubmit: uls('提报', '提報'),
		dialogButtonCancel: uls('取消', '取消'),
		reportButtonTitle: uls('将选中的版本提报到', '將選中的版本提報到'),
		reportButtonText: uls('请求删除被选版本', '請求刪除被選版本'),
		reportButtonLogText: uls('请求删除被选日志', '請求刪除被選日誌'),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
