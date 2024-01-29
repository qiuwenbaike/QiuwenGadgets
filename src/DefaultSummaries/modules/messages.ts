import {localize} from 'ext.gadget.i18n';

const COMMON_SUMMARIES_LABEL: string = localize({
	'zh-hans': '常用编辑摘要',
	'zh-hant': '常用編輯摘要',
});
const COMMON_SUMMARIES: string[] = [
	localize({
		'zh-hans': '新页面',
		'zh-hant': '新頁面',
	}),
	localize({
		'zh-hans': '修正语法错误',
		'zh-hant': '修正語法錯誤',
	}),
	localize({
		'zh-hans': '修正错别字',
		'zh-hant': '修正錯別字',
	}),
	localize({
		'zh-hans': '修正格式',
		'zh-hant': '修正格式',
	}),
	localize({
		'zh-hans': '移除破坏',
		'zh-hant': '移除破壞',
	}),
	localize({
		'zh-hans': '移除测试编辑',
		'zh-hant': '移除測試編輯',
	}),
	localize({
		'zh-hans': '移除未经解释的内容移除',
		'zh-hant': '移除未經解釋的內容移除',
	}),
];
const ARTICLE_SUMMARIES: string[] = [
	localize({
		'zh-hans': '扩写条目',
		'zh-hant': '擴寫條目',
	}),
	localize({
		'zh-hans': '调整来源',
		'zh-hant': '調整來源',
	}),
	localize({
		'zh-hans': '调整内部链接',
		'zh-hant': '调整內部連結',
	}),
	localize({
		'zh-hans': '调整外部链接',
		'zh-hant': '調整外部連結',
	}),
	localize({
		'zh-hans': '调整格式',
		'zh-hant': '調整格式',
	}),
	localize({
		'zh-hans': '调整分类',
		'zh-hant': '調整分類',
	}),
	localize({
		'zh-hans': '删除无来源内容',
		'zh-hant': '刪除無來源內容',
	}),
];
const TALKPAGE_SUMMARIES: string[] = [
	localize({
		'zh-hans': '回复',
		'zh-hant': '回覆',
	}),
	localize({
		'zh-hans': '评论',
		'zh-hant': '評論',
	}),
	localize({
		'zh-hans': '意见',
		'zh-hant': '意見',
	}),
	localize({
		'zh-hans': '请求',
		'zh-hant': '請求',
	}),
];

export {COMMON_SUMMARIES_LABEL, COMMON_SUMMARIES, ARTICLE_SUMMARIES, TALKPAGE_SUMMARIES};
