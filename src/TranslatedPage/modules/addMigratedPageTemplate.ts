import {addTalkPageTemplate} from './utils/addTalkPageTemplate';

const addMigratedPageTemplate = (): Promise<void> =>
	addTalkPageTemplate({
		name: 'Migrated page',
		sourcePrompt: '请输入来源网站跨站前缀（例如licencewiki；必填）：',
		sourceRequiredMessage: '来源跨站前缀不能为空！',
		sourceTitlePrompt: '请输入来源页面（例如Project首页；必填）：',
		sourceTitleRequiredMessage: '来源页面不能为空！',
		insertVersionPrompt: '请输入本地搬运后的特定版本号（例如：12345678）：',
		summary:
			'为导入页面标记{{[[Template:Migrated page|Migrated page]]}}模板 ([[MediaWiki:Gadget-MigratedPage.js|tp.js]])',
	});

export {addMigratedPageTemplate};
