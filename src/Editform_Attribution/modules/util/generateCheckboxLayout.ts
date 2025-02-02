import {modifyVisualEditorChangeTag, modifyWikiEditorChangeTag} from './modifyChangeTag';
import {generateTextInputWithDropdown} from './generateTextInputWithDropdown';

const generateVisualEditorCheckboxLayout = ({
	inputId,
	label,
	$body,
	changeTag,
}: {
	inputId?: string;
	label: string;
	$body: JQuery<HTMLElement>;
	changeTag?: string;
}) => {
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	if (inputId) {
		checkbox.setInputId(inputId);
	}

	if (changeTag) {
		modifyVisualEditorChangeTag({changeTag, checkbox});
	}

	const textInputWithDropdown = generateTextInputWithDropdown({$body});

	checkbox.on('change', (selected) => {
		textInputWithDropdown.$element.prop('disabled', !selected);
	});

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
}: {
	inputId?: string;
	label: string;
	changeTag?: string;
	$body: JQuery;
	$editForm: JQuery;
}) => {
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	if (inputId) {
		checkbox.setInputId(inputId);
	}

	if (changeTag) {
		modifyWikiEditorChangeTag({changeTag, checkbox, $editForm});
	}

	const textInputWithDropdown = generateTextInputWithDropdown({$body});

	checkbox.on('change', (selected) => {
		textInputWithDropdown.$element.prop('disabled', !selected);
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	const $layout = $('<div>').attr('id', 'efa-area').append(checkboxLayout.$element, textInputWithDropdown.$element);

	return $layout;
};
export {generateVisualEditorCheckboxLayout, generateWikiEditorCheckboxLayout};
