import {generateSummaryDropdown} from './util/generateSummaryDropdown';

let isInit: boolean = false;

const processVisualEditor = (): void => {
	if (isInit) {
		return;
	}
	isInit = true;

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
