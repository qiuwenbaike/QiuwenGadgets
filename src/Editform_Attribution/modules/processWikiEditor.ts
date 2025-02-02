import * as OPTIONS from '~/Editform_Attribution/options.json';
import {appendTextToSummary} from './util/changeSummary';
import {generateWikiEditorCheckboxLayout} from './util/generateCheckboxLayout';
import {getMessage} from './i18n';

const processWikiEditor = ({$body, $editForm}: {$body: JQuery<HTMLBodyElement>; $editForm: JQuery}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const $target: JQuery = $editForm.find(OPTIONS.targetWikiEditor);
	if (!$target.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const $layout = generateWikiEditorCheckboxLayout({
		inputId: OPTIONS.inputId,
		label: getMessage('ThirdPartyContentContained'),
		$body,
		$editForm,
		changeTag: OPTIONS.changeTag,
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.after($layout);
	}

	$editForm.on('submit', () => {
		const customSummary = String($body.find('input[name=wpAttributions]').val());
		const $wpSummary = $editForm.find('input[name=wpSummary]');
		appendTextToSummary({customSummary, $wpSummary});
	});
};

export {processWikiEditor};
