import * as OPTIONS from '~/Editform_Attribution/options.json';
import {generateVisualEditorLayout} from './util/generateLayout';

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

	const $layout = generateVisualEditorLayout({$body});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$saveOptions.append($layout);
	}

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
