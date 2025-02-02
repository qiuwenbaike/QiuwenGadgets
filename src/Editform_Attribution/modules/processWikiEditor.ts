import * as OPTIONS from '~/Editform_Attribution/options.json';
import {generateWikiEditorCheckboxLayout} from './util/generateCheckboxLayout';
import {getMessage} from './i18n';

const processWikiEditor = ({$body, $editForm}: {$body: JQuery<HTMLBodyElement>; $editForm?: JQuery}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const $target: JQuery = ($editForm as JQuery).find(OPTIONS.targetWikiEditor);
	if (!$target.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const checkboxLayout = generateWikiEditorCheckboxLayout({
		inputId: OPTIONS.inputId,
		label: getMessage('ThirdPartyContentContained'),
		$editForm: $editForm as JQuery,
		changeTag: OPTIONS.changeTag,
	});

	const $layout = $('<div>').attr('id', 'efa-area').append(checkboxLayout.$element);

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append($layout);
	}
};

export {processWikiEditor};
