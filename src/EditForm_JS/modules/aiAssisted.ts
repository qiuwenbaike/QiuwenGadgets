import {getMessage} from './i18n';

export const AiAssisted = (): void => {
	const $body = $('body');

	mw.config.set('wgEditAiAssistedInitialized', false);

	const statement = (tagName: string, labelName: string) => {
		if (mw.config.get('wgEditAiAssistedInitialized')) {
			return;
		}
		// @ts-ignore
		const $layout: JQuery = ve.init
			? $body.find('.ve-ui-mwSaveDialog-checkboxes')
			: $body.find('#editform').find('.editCheckboxes .oo-ui-horizontalLayout');
		if (!$layout.length) {
			return;
		}
		mw.config.set('wgEditAiAssistedInitialized', true);
		const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
			selected: false,
		});
		const checkboxField: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
			align: 'inline',
			label: labelName,
		});
		checkbox.on('change', (): void => {
			let changeTags: string;
			// @ts-ignore
			if (ve.init) {
				// @ts-ignore
				changeTags = ve.init.target.saveFields.wpChangeTags?.() ?? '';
				changeTags = checkbox.isSelected() ? `${changeTags},${tagName}` : changeTags.replace(`,${tagName}`, '');
				// @ts-ignore
				ve.init.target.saveFields.wpChangeTags = (): string => {
					return changeTags;
				};
			} else {
				const $tagInput: JQuery = $('<input>').attr({
					id: 'wpChangeTags',
					name: 'wpChangeTags',
					type: 'hidden',
					value: '',
				});
				const $wpChangeTags: JQuery = $body.find('#wpChangeTags');
				if (!$wpChangeTags.length) {
					$body.find('#editform').prepend($tagInput);
				}
				changeTags = String($wpChangeTags.val());
				changeTags = checkbox.isSelected() ? `${changeTags},${tagName}` : changeTags.replace(`,${tagName}`, '');
				$wpChangeTags.val(changeTags);
			}
		});
		$layout.append(checkboxField.$element);
	};
	const addStatement = (): void => {
		statement('AI_assisted', getMessage('AiAssisted'));
	};
	mw.hook('wikipage.editform').add(addStatement);
	mw.hook('ve.saveDialog.stateChanged').add(addStatement);
};
