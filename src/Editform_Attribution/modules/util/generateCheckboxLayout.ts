import {modifyVisualEditorChangeTag, modifyWikiEditorChangeTag} from './modifyChangeTag';
import {appendTextToSummary} from './changeSummary';
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

	const textInputWithDropdown = generateTextInputWithDropdown({$body});
	if (!checkbox.isSelected()) {
		textInputWithDropdown.$element.prop('disabled', true);
		textInputWithDropdown.$element.css('display', 'none');
	}

	checkbox.on('change', (selected) => {
		textInputWithDropdown.$element.prop('disabled', !selected);
		textInputWithDropdown.$element.css('display', selected ? 'block' : 'none');
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	const $layout = $('<div>').attr('id', 'efa-area').append(checkboxLayout.$element, textInputWithDropdown.$element);

	const {target} = window.ve.init;
	const {saveDialog} = target;

	saveDialog.on('save', () => {
		if (checkbox.isSelected()) {
			const customSummary = String($body.find('input[name=wpAttribution]').val());
			const $wpSummary = target.saveDialog.editSummaryInput.$input;
			appendTextToSummary({customSummary, $wpSummary});
			$layout.replaceWith($layout);
		}
	});

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

	const textInputWithDropdown = generateTextInputWithDropdown({$body});
	if (!checkbox.isSelected()) {
		textInputWithDropdown.$element.prop('disabled', true);
		textInputWithDropdown.$element.css('display', 'none');
	}

	checkbox.on('change', (selected) => {
		textInputWithDropdown.$element.prop('disabled', !selected);
		textInputWithDropdown.$element.css('display', selected ? 'block' : 'none');
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	const $layout = $('<div>').attr('id', 'efa-area').append(checkboxLayout.$element, textInputWithDropdown.$element);

	$editForm.on('submit', () => {
		if (checkbox.isSelected()) {
			const customSummary = String($body.find('input[name=wpAttribution]').val());
			const $wpSummary = $editForm.find('input[name=wpSummary]');
			appendTextToSummary({customSummary, $wpSummary});
			$layout.replaceWith($layout);
		}
	});

	return $layout;
};
export {generateVisualEditorCheckboxLayout, generateWikiEditorCheckboxLayout};
