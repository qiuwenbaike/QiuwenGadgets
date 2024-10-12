import * as OPTIONS from '~/DefaultSummaries/options.json';
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processVisualEditor = ($body: JQuery<HTMLBodyElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	// Set guard
	mw.config.set(OPTIONS.configKey, true);

	const {target} = window.ve.init;
	const {$saveOptions} = target.saveDialog;
	if (!$saveOptions.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);

	if ($body.find(`#${OPTIONS.dropdownId}`).length) {
		mw.config.set(OPTIONS.configKey, true);
	} else {
		$saveOptions.before($dropdowns);
	}
};

export {processVisualEditor};
