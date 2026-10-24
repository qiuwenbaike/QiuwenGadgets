import {addTalkPageTemplate} from './utils/addTalkPageTemplate';

const addTranslatedPageTemplate = (): Promise<void> =>
	addTalkPageTemplate({
		name: 'Translated page',
		sourcePrompt: '请输入来源语言（例如zh；必填）：',
		sourceRequiredMessage: '来源语言不能为空！',
		sourceTitlePrompt: '请输入来源页面（例如首页；必填）：',
		sourceTitleRequiredMessage: '来源页面不能为空！',
		insertVersionPrompt: '请输入本地翻译后的特定版本号（例如：12345678）：',
		summary:
			'为导入页面标记{{[[Template:Translated page|Translated page]]}}模板 ([[MediaWiki:Gadget-TranslatedPage.js|tp.js]])',
	});

export {addTranslatedPageTemplate};
