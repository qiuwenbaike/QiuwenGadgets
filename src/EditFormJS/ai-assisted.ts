import {getMessage} from './i18n';

export const AI_assisted = (): void => {
	let isInit = false;
	const statement = (tagName: string, labelName: string) => {
		if (isInit) {
			return;
		}
		// @ts-ignore
		const $layout: JQuery = ve.init
			? $('.ve-ui-mwSaveDialog-checkboxes')
			: $('#editform').find('.editCheckboxes .oo-ui-horizontalLayout');
		if (!$layout.length) {
			return;
		}
		isInit = true;
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
				const $wpChangeTags: JQuery = $('#wpChangeTags');
				if (!$wpChangeTags.length) {
					$('#editform').prepend($tagInput);
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
