import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processVisualEditor = ($body: JQuery<HTMLBodyElement>): void => {
	// .ve-init-mw-viewPageTarget-saveDialog-checkboxes
	if ($body.data('wppresent')) {
		return;
	}
	$body.data('wppresent', 'true');

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const {target} = ve.init;
	const {$saveOptions} = target.saveDialog;
	if (!$saveOptions.length) {
		return;
	}

	const $dropdown: JQuery = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);

	$saveOptions.before($dropdown);
};

export {processVisualEditor};
