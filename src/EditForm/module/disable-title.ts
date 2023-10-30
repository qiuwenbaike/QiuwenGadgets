export const disableTitle = (): void => {
	// 在提交新段落时，让主题栏在特定情况下失效
	if ($('#no-new-title').length > 0 && $('#editform input[name=wpSection]').val() === 'new') {
		// 传统文本编辑器
		const $wpSummary: JQuery = $('#wpSummary');
		$wpSummary.attr('disabled', 'disabled');
		$wpSummary.val('');
	}
	// 可视化编辑器 / 新wikitext模式
	const noSectionTitlePages: string[] = [];
	if (noSectionTitlePages.includes(mw.config.get('wgPageName')) && mw.util.getParamValue('section') === 'new') {
		mw.util.addCSS('h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}');
	}
};
