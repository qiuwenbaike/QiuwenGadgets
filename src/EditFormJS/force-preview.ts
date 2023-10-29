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
	mw.hook('wikipage.editform').add(($editForm: JQuery): void => {
		let saveButton: OO.ui.Element;
		try {
			saveButton = OO.ui.infuse($editForm.find('#wpSaveWidget'));
		} catch {
			return;
		}
		if (!$('#wikiPreview, #wikiDiff').is(':visible')) {
			// @ts-ignore
			if (saveButton.isDisabled()) {
				return;
			}
			if (originalLabel === undefined) {
				// @ts-ignore
				originalLabel = saveButton.getLabel();
			}
			saveButton
				// @ts-ignore
				.setDisabled(true)
				.setLabel(`${originalLabel}（${getMessage('Preview')}）`);
		} else if (originalLabel !== undefined) {
			// @ts-ignore
			saveButton.setLabel(originalLabel).setDisabled(false);
		}
	});
};
