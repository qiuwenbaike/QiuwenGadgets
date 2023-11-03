export const fixSummary = (): void => {
	switch (mw.config.get('wgCanonicalSpecialPageName')) {
		case 'MassEditRegex':
			// MassEditRegex
			$('#wpSummaryLabel').html(
				$('#wpSummaryLabel')
					.text()
					.replace(/\[\[#\.\|(.+?)]]/g, '$1')
			);
			break;
		// Import
		case 'Import':
			$('input[name=usernamePrefix]').val('zhwiki');
			$('#mw-import-upload-form input[name=log-comment]').val(
				'导入自[[zhwiki:|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］'
			);
			$('#mw-import-interwiki-form input[name=log-comment]').val(
				'［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］'
			);
			$('input[name=assignKnownUsers]').prop('checked', true);
			$('input[name=interwikiHistory], input[name=interwikiTemplates], input[name=assignKnownUsers]').attr(
				'disabled',
				'disabled'
			);
			break;
		// ImportFile
		case 'FileImporter-SpecialPage':
			$('input[name=intendedRevisionSummary]').val(
				`导入自[[commons:File:${$(
					'h2.mw-importfile-header-title'
				).html()}|此处]]［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；文件许可请参见页面描述］`
			);
			break;
		// ReplaceText
		case 'ReplaceText':
			$('input[name=doAnnounce]').removeAttr('checked').attr('disabled', 'disabled');
			break;
	}

	// Delete screen
	if (mw.config.get('wgAction') === 'delete') {
		if (!$('#wpReason').length) {
			return;
		}
		const autoSummaryRegExp = /(内容为|page was empty|content before blanking was)/i;
		if (autoSummaryRegExp.test(String($('#wpReason').val()))) {
			$('#wpReason').val('');
		}
	}
};
