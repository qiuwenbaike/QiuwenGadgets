export const disableTitle = (): void => {
	const $body = $('body');
	// 在提交新段落时，让主题栏在特定情况下失效
	if ($body.find('#no-new-title').length > 0 && $body.find('#editform input[name=wpSection]').val() === 'new') {
		// 传统文本编辑器
		const $wpSummary: JQuery = $body.find('#wpSummary');
		$wpSummary.attr('disabled', 'disabled');
		$wpSummary.val('');
	}
	// 可视化编辑器 / 新wikitext模式
	const noSectionTitlePages: string[] = ['Qiuwen_talk:侵权提报', 'Qiuwen_talk:存废讨论/关注度提报'];
	const noSectionTitlePagesRegex = /^Qiuwen_talk:存废讨论/;
	if (
		(noSectionTitlePages.includes(mw.config.get('wgPageName')) ||
			noSectionTitlePagesRegex.test(mw.config.get('wgPageName'))) &&
		mw.util.getParamValue('section') === 'new'
	) {
		mw.util.addCSS('h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}');
	}
};
