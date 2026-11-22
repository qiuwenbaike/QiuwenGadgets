import {localize} from 'ext.gadget.i18n';

const uls = (hans: string, hant: string = hans): string => localize({'zh-hans': hans, 'zh-hant': hant, en: hans});

const {wgCurRevisionId} = mw.config.get();

const COMMON_SUMMARIES_LABEL: string = uls('常用编辑摘要', '常用編輯摘要');

let COMMON_SUMMARIES: string[] = [
	uls('修饰语句', '修飾語句'),
	uls('修正语法', '修正語法'),
	uls('修正错字', '修正錯字'),
	uls('扩充内容', '擴充內容'),
	uls('调整格式', '調整格式'),
	uls('调整分类', '調整分類'),
	uls('调整链接', '调整連結'),
	uls('移除破坏', '移除破壞'),
	uls('移除测试', '移除測試'),
	uls('维护清理', '維護清理'),
];

if (!wgCurRevisionId) {
	COMMON_SUMMARIES = [uls('新页面', '新頁面'), ...COMMON_SUMMARIES];
}

const ARTICLE_SUMMARIES: string[] = [
	uls('调整来源', '調整來源'),
	uls('删除无来源内容', '刪除無來源內容'),
	uls('恢复移除的内容', '恢復移除的內容'),
];

const TALKPAGE_SUMMARIES: string[] = [
	uls('回复', '回覆'),
	uls('评论', '評論'),
	uls('意见', '意見'),
	uls('请求', '請求'),
];

export {COMMON_SUMMARIES_LABEL, COMMON_SUMMARIES, ARTICLE_SUMMARIES, TALKPAGE_SUMMARIES};
