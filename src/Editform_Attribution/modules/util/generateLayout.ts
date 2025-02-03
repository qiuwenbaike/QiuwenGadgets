import * as OPTIONS from '~/Editform_Attribution/options.json';
import {generateTextInputWithDropdown} from './generateTextInputWithDropdown';

interface LayoutProps {
	$body: JQuery<HTMLElement>;
}

const generateVisualEditorLayout = ({$body}: LayoutProps): JQuery<HTMLElement> => {
	const {target} = window.ve.init;
	const $wpSummary = target.saveDialog.editSummaryInput.$input;
	const textInputWithDropdown = generateTextInputWithDropdown({$body, $wpSummary});
	const $layout = $('<div>').attr('id', OPTIONS.inputId).append(textInputWithDropdown.$element);

	return $layout;
};

const generateWikiEditorLayout = ({$body, $editForm}: LayoutProps & {$editForm: JQuery}): JQuery<HTMLElement> => {
	const $wpSummary = $editForm.find('input[name=wpSummary]');
	const textInputWithDropdown = generateTextInputWithDropdown({$body, $wpSummary});
	const $layout = $('<div>').attr('id', OPTIONS.inputId).append(textInputWithDropdown.$element);

	return $layout;
};

export {generateVisualEditorLayout, generateWikiEditorLayout};
