export const URL = mw.util.getUrl('Special:Contact/Report', {
	report_title: mw.config.get('wgPageName'),
	report_revision: mw.config.get('wgRevisionId').toString(),
});

export const LINK_TITLE = window.wgULS('报告不良信息', '報告不良資訊');
