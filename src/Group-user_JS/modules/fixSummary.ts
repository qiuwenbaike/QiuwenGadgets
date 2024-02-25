import {WG_ACTION, WG_CANONICAL_SPECIAL_PAGE_NAME} from './constant';

const fixSummary = ($body: JQuery<HTMLBodyElement>): void => {
	switch (WG_CANONICAL_SPECIAL_PAGE_NAME) {
		case 'FileImporter-SpecialPage':
			$body
				.find('input[name=intendedRevisionSummary]')
				.val(
					`导入自[[commons:File:${$body
						.find('h2.mw-importfile-header-title')
						.html()}|此处]]［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；文件许可请参见页面描述］`
				);
			break;
		case 'Import': {
			// #mw-import-upload-form
			const userNamePrefixInput = document.querySelectorAll(
				'#mw-import-upload-form input[name=usernamePrefix]'
			)[0] as HTMLInputElement;
			const logCommentInput = document.querySelectorAll(
				'#mw-import-upload-form input[name=log-comment]'
			)[0] as HTMLInputElement;
			const importUploadPrefix = userNamePrefixInput?.value;
			if (importUploadPrefix) {
				logCommentInput.value = `导入自[[${importUploadPrefix}:|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］`;
			}
			userNamePrefixInput.addEventListener('input', () => {
				const newValue = logCommentInput.value.replace(
					/\[\[.*?:\|此网站\]\]/,
					`[[${userNamePrefixInput.value}:|此网站]]`
				);
				logCommentInput.value = newValue;
			});
			// #mw-import-interwiki-form
			$body
				.find('#mw-import-interwiki-form input[name=log-comment]')
				.val('［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］');
			$body.find('input[name=assignKnownUsers]').prop('checked', true);
			break;
		}
		case 'MassEditRegex':
			$body.find('#wpSummaryLabel').html(
				$body
					.find('#wpSummaryLabel')
					.text()
					.replace(/\[\[#\.\|(.+?)]]/g, '$1')
			);
			break;
		case 'ReplaceText':
			$body.find('input[name=doAnnounce]').prop({
				checked: false,
				disabled: true,
			});
			break;
	}

	if (WG_ACTION === 'delete') {
		const $wpReason: JQuery = $body.find('input[name=wpReason]');
		if (!$wpReason.length) {
			return;
		}

		const autoSummaryRegExp: RegExp = /(内容|page was empty|content before blanking was)/i;
		if (autoSummaryRegExp.test(String($wpReason.val()))) {
			$wpReason.val('');
		}
	}
};

export {fixSummary};
