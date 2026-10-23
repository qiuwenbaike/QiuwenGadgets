import * as OPTIONS from '~/Editform_Attribution/options.json';
import {mountAttributionForm} from './util/mountAttributionForm';

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

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		const root = document.createElement('div');
		root.id = OPTIONS.inputId;
		$target.after(root);
		mountAttributionForm({
			root,
			$body,
			$wpSummary: $editForm.find('input[name=wpSummary]'),
		});
	}
};

export {processWikiEditor};
