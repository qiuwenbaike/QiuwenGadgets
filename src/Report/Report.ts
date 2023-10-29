$(function report(): void {
	const url = `/wiki/Special:Contact/Report?report_title=${mw.util.rawurlencode(
		mw.config.get('wgPageName')
	)}&report_revision=${mw.util.rawurlencode(mw.config.get('wgRevisionId').toString())}`;
	const reportDesc = window.wgULS('报告不良信息', '報告不良資訊');
	let reportTitle = '';
	if (mw.util.getParamValue('report_title')) {
		reportTitle = mw.util.getParamValue('report_title') ?? '';
	}
	if (mw.util.getParamValue('report_revision')) {
		reportTitle += `（版本${mw.util.getParamValue('report_revision')}）`;
	}
	if (mw.config.get('wgNamespaceNumber') >= 0) {
		mw.util.addPortletLink(
			$('#p-pagemisc').length > 0 ? 'p-pagemisc' : 'p-tb',
			url,
			reportDesc,
			't-report',
			reportDesc
		);
	}
	if (
		`${mw.config.get('wgCanonicalNamespace')}:${mw.config.get('wgCanonicalSpecialPageName')}/Report` ===
			'Special:Contact/Report' &&
		reportTitle
	) {
		$('input[name="wpSubject"]').val(`${reportDesc}：${reportTitle}`);
		$('input[name="wpTitle"]').val(reportTitle);
	}
});
