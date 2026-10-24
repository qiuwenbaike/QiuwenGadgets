import {addMigratedPageTemplate} from './modules/addMigratedPageTemplate';
import {addTranslatedPageTemplate} from './modules/addTranslatedPageTemplate';
import {getBody} from 'ext.gadget.Util';

// 添加一个按钮到工具栏以便手动触发脚本
void getBody().then(function initTP(): void {
	// 只在非讨论页显示按钮
	if (mw.config.get('wgNamespaceNumber') % 2 !== 0 || mw.config.get('wgNamespaceNumber') === -1) {
		return;
	}

	const portletLinkTP = mw.util.addPortletLink(
		'p-cactions', // 工具栏位置
		'#', // 链接地址
		'添加导入模板（维基百科）', // 按钮名称
		'add-translated-page', // ID
		'为当前页面的讨论页添加{{Translated page}}模板（适用于维基百科等）' // 提示文字
	);

	const portletLinkMP = mw.util.addPortletLink(
		'p-cactions', // 工具栏位置
		'#', // 链接地址
		'添加导入模板（其他站点）', // 按钮名称
		'add-migrated-page', // ID
		'为当前页面的讨论页添加{{Migrated page}}模板（适用于其他站点）' // 提示文字
	);

	if (portletLinkTP) {
		$(portletLinkTP).on('click', (e) => {
			e.preventDefault();
			void addTranslatedPageTemplate();
		});
	}

	if (portletLinkMP) {
		$(portletLinkMP).on('click', (e) => {
			e.preventDefault();
			void addMigratedPageTemplate();
		});
	}
});
