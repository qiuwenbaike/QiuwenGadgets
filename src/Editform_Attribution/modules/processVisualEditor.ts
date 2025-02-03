import * as OPTIONS from '~/Editform_Attribution/options.json';
import {generateVisualEditorCheckboxLayout} from './util/generateCheckboxLayout';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKeyVe)) {
		return;
	}

	const $target: JQuery = $body.find(`.${OPTIONS.targetClassVe}`);
	if (!$target.length) {
		return;
	}

	mw.config.set(OPTIONS.configKeyVe, true);

	const $layout = generateVisualEditorCheckboxLayout({
		inputId: OPTIONS.inputId,
		label: getMessage('ThirdPartyContentContained'),
		// changeTag: OPTIONS.changeTag,
		$body,
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append($layout);
	}

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
