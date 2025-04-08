import * as OPTIONS from '~/Editform_AiAssisted/options.json';
import {generateChangeTags} from './generateChangeTags';
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

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	checkbox.setInputId(OPTIONS.inputId);

	let $wpChangeTags: JQuery = $body.find('input[name=wpChangeTags]');
	if (!$wpChangeTags.length) {
		$wpChangeTags = $('<input>').attr({
			id: 'wpChangeTags',
			name: 'wpChangeTags',
			type: 'hidden',
			value: '',
		});
		$body.prepend($wpChangeTags);
	}

	checkbox.on('change', (): void => {
		$wpChangeTags.val(
			generateChangeTags({
				checkbox,
				originalChangeTags: $wpChangeTags.val()?.toString() ?? '',
				changeTag: OPTIONS.changeTag,
			})
		);
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append(checkboxLayout.$element);
	}
};

export {processWikiEditor};
