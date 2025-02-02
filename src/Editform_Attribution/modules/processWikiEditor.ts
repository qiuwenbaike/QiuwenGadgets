import * as OPTIONS from '~/Editform_Attribution/options.json';
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

	const get$Layout = () => {
		return generateWikiEditorCheckboxLayout({
			inputId: OPTIONS.inputId,
			label: getMessage('ThirdPartyContentContained'),
			$body,
			$editForm,
			// changeTag: OPTIONS.changeTag,
		});
	};

	const $layout = get$Layout();

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.after($layout);
	}

	$editForm.on('submit', () => {
		$layout.replaceWith(get$Layout());
	});
};

export {processWikiEditor};
