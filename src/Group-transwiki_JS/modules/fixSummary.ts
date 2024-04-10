const fixSummary = ($body: JQuery<HTMLBodyElement>): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	switch (wgCanonicalSpecialPageName) {
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
			userNamePrefixInput.addEventListener('input', () => {
				const logCommentInput = document.querySelectorAll(
					'#mw-import-upload-form input[name=log-comment]'
				)[0] as HTMLInputElement;
				const importUploadPrefix = userNamePrefixInput?.value;
				const newValue = `导入自[[${importUploadPrefix}:|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］`;
				logCommentInput.value = newValue;
			});
			// #mw-import-interwiki-form
			$body
				.find('#mw-import-interwiki-form input[name=log-comment]')
				.val('［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］');
			$body.find('input[name=assignKnownUsers]').prop('checked', true);
			break;
		}
	}
};

export {fixSummary};
