import {modifyVisualEditorChangeTag, modifyWikiEditorChangeTag} from './modifyChangeTag';

const generateVisualEditorCheckboxLayout = ({
	inputId,
	label,
	changeTag,
}: {
	inputId?: string;
	label: string;
	changeTag?: string;
}): OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> => {
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	if (inputId) {
		checkbox.setInputId(inputId);
	}

	if (changeTag) {
		modifyVisualEditorChangeTag({changeTag, checkbox});
	}

	checkbox.on('change', () => {
		
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	return checkboxLayout;
};

const generateWikiEditorCheckboxLayout = ({
	inputId,
	label,
	changeTag,
	$editForm,
}: {
	inputId?: string;
	label: string;
	changeTag?: string;
	$editForm: JQuery;
}): OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> => {
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	if (inputId) {
		checkbox.setInputId(inputId);
	}

	if (changeTag) {
		modifyWikiEditorChangeTag({changeTag, checkbox, $editForm});
	}

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label,
	});

	return checkboxLayout;
};
export {generateVisualEditorCheckboxLayout, generateWikiEditorCheckboxLayout};
