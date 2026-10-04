import * as OPTIONS from '~/Editform_AiAssisted/options.json';
import AssistedCheckbox from './AssistedCheckbox.vue';
import {createApp} from 'vue';
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

	let $wpChangeTags: JQuery = $body.find('input[name=wpChangeTags]');
	if (!$wpChangeTags.length) {
		$wpChangeTags = $('<input>').attr({
			id: 'wpChangeTags',
			name: 'wpChangeTags',
			type: 'hidden',
			value: '',
		});
		$body.find('#editform').append($wpChangeTags);
	}

	const onChange = (selected: boolean): void => {
		$wpChangeTags.val(
			generateChangeTags({
				selected,
				originalChangeTags: $wpChangeTags.val()?.toString() ?? '',
				changeTag: OPTIONS.changeTag,
			})
		);
	};

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		const root = document.createElement('div');
		$target.append(root);
		createApp(AssistedCheckbox, {
			inputId: OPTIONS.inputId,
			label: getMessage('AiAssisted'),
			onChange,
		}).mount(root);
	}
};

export {processWikiEditor};
