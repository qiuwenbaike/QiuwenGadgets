import {$body} from '../../util';
import {getMessage} from './i18n';

export const forcePreview = (): void => {
	// 强制预览
	const permittedGroups: string[] = ['autoconfirmed', 'confirmed'];
	if (
		mw.config.get('wgAction') !== 'edit' ||
		permittedGroups.some((group: string): boolean => {
			return mw.config.get('wgUserGroups')?.includes(group) ?? false;
		})
	) {
		return;
	}
	let originalLabel: string | undefined;
	let originalCaptchaWordLabel: string | undefined;
	mw.hook('wikipage.editform').add(($editForm: JQuery): void => {
		let saveButton: OO.ui.ButtonWidget;
		try {
			saveButton = OO.ui.infuse($editForm.find('#wpSaveWidget')) as OO.ui.ButtonWidget;
		} catch {
			return;
		}
		const $captchaWordButton = $editForm.find('input[name=wpCaptchaWord]');
		if (!$body.find('#wikiPreview, #wikiDiff').is(':visible')) {
			if (saveButton.isDisabled()) {
				return;
			}
			if (originalLabel === undefined) {
				originalLabel = saveButton.getLabel()?.toString();
			}
			const previewRequestText = getMessage('Preview');
			saveButton.setDisabled(true).setLabel(originalLabel + previewRequestText);
			if ($captchaWordButton) {
				if (originalCaptchaWordLabel === undefined) {
					originalCaptchaWordLabel = $captchaWordButton.prop('placeholder');
				}

				$captchaWordButton.val('');
				$captchaWordButton.prop('disabled', 1);
				$captchaWordButton.attr('placeholder', originalCaptchaWordLabel + previewRequestText);
			}
		} else if (originalLabel !== undefined) {
			saveButton.setLabel(originalLabel).setDisabled(false);
			if ($captchaWordButton && originalCaptchaWordLabel !== undefined) {
				$captchaWordButton.attr('placeholder', originalCaptchaWordLabel);
				$captchaWordButton.prop('disabled', null);
			}
		}
	});
};
