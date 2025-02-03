import * as OPTIONS from '~/Editform_Attribution/options.json';
import {generateWikiEditorLayout} from './util/generateLayout';

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

	const $layout = generateWikiEditorLayout({$body, $editForm});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.after($layout);
	}
};

export {processWikiEditor};
