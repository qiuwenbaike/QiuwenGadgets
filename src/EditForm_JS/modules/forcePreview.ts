import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_USER_GROUPS} from './constant';
import {getMessage} from './i18n';

let originLabel: string | undefined;
let originCaptchaWordLabel: string | undefined;
let saveButton: OO.ui.ButtonWidget;

const forcePreview = ($editForm: JQuery): void => {
	const noNeedPreviewGroups: string[] = ['autoconfirmed', 'confirmed'];
	const checkPermittedGroups = (): boolean => {
		return noNeedPreviewGroups.some((group: string): boolean => {
			return WG_USER_GROUPS?.includes(group) ?? false;
		});
	};
	if (!IS_WG_EDIT_OR_SUBMIT_ACTION || checkPermittedGroups()) {
		return;
	}

	try {
		saveButton = OO.ui.infuse($editForm.find('#wpSaveWidget')) as OO.ui.ButtonWidget;
	} catch {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $editForm.parents('body');
	const $captchaWordButton = $editForm.find('input[name="wpCaptchaWord"]');

	if (!$body.find('#wikiPreview, #wikiDiff').is(':visible')) {
		if (saveButton.isDisabled()) {
			return;
		}

		originLabel ??= saveButton.getLabel()?.toString();

		const previewRequestText = getMessage('Preview');
		saveButton.setDisabled(true).setLabel(originLabel + previewRequestText);

		if (!$captchaWordButton.length) {
			return;
		}

		originCaptchaWordLabel ??= $captchaWordButton.prop('placeholder');
		$captchaWordButton.prop('disabled', true);
		$captchaWordButton.attr('placeholder', originCaptchaWordLabel + previewRequestText);
		$captchaWordButton.val('');
	} else if (originLabel !== undefined) {
		saveButton.setLabel(originLabel).setDisabled(false);

		if (originCaptchaWordLabel === undefined || !$captchaWordButton.length) {
			return;
		}

		$captchaWordButton.prop('disabled', false);
		$captchaWordButton.attr('placeholder', originCaptchaWordLabel);
	}
};

export {forcePreview};
