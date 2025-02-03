import {modifyVisualEditorChangeTag, modifyWikiEditorChangeTag} from './modifyChangeTag';
import {generateTextInputWithDropdown} from './generateTextInputWithDropdown';

interface CheckboxLayoutProps {
	inputId?: string;
	label: string;
	$body: JQuery<HTMLElement>;
	changeTag?: string;
}

const generateVisualEditorCheckboxLayout = ({inputId, label, $body, changeTag}: CheckboxLayoutProps) => {
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	if (inputId) {
		checkbox.setInputId(inputId);
	}

	if (changeTag) {
		modifyVisualEditorChangeTag({changeTag, checkbox});
	}

	const {target} = window.ve.init;
	const $wpSummary = target.saveDialog.editSummaryInput.$input;
	const textInputWithDropdown = generateTextInputWithDropdown({$body, $wpSummary});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	const $layout = $('<div>').attr('id', 'efa-area').append(checkboxLayout.$element, textInputWithDropdown.$element);

	return $layout;
};

const generateWikiEditorCheckboxLayout = ({
	inputId,
	label,
	changeTag,
	$body,
	$editForm,
}: CheckboxLayoutProps & {$editForm: JQuery}) => {
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	if (inputId) {
		checkbox.setInputId(inputId);
	}

	if (changeTag) {
		modifyWikiEditorChangeTag({changeTag, checkbox, $editForm});
	}

	const $wpSummary = $editForm.find('input[name=wpSummary]');
	const textInputWithDropdown = generateTextInputWithDropdown({$body, $wpSummary});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	const $layout = $('<div>').attr('id', 'efa-area').append(checkboxLayout.$element, textInputWithDropdown.$element);

	return $layout;
};

export {generateVisualEditorCheckboxLayout, generateWikiEditorCheckboxLayout};
