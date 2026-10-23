import * as OPTIONS from '~/Editform_Attribution/options.json';
import {mountAttributionForm} from './util/mountAttributionForm';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKeyVe)) {
		return;
	}

	const {target} = window.ve.init;
	const {saveDialog} = target;
	const {$saveOptions} = saveDialog;
	if (!$saveOptions.length) {
		return;
	}

	// Set guard
	mw.config.set(OPTIONS.configKeyVe, true);

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		const root = document.createElement('div');
		root.id = OPTIONS.inputId;
		$saveOptions.append(root);
		mountAttributionForm({
			root,
			$body,
			$wpSummary: target.saveDialog.editSummaryInput.$input,
		});
	}

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
