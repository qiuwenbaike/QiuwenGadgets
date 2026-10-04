import * as OPTIONS from '~/Editform_AiAssisted/options.json';
import AssistedCheckbox from './AssistedCheckbox.vue';
import {createApp} from 'vue';
import {generateChangeTags} from './generateChangeTags';
import {getMessage} from './i18n';

const processVisualEditor = ($body: JQuery<HTMLBodyElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKeyVe)) {
		return;
	}

	const $target: JQuery = $body.find(`.${OPTIONS.targetClassVe}`);
	if (!$target.length) {
		return;
	}

	// Set guard
	mw.config.set(OPTIONS.configKeyVe, true);

	const onChange = (selected: boolean): void => {
		const {saveFields} = window.ve.init.target;
		const originalChangeTags = saveFields.wpChangeTags?.() ?? '';
		saveFields.wpChangeTags = (): string =>
			generateChangeTags({
				selected,
				originalChangeTags,
				changeTag: OPTIONS.changeTag,
			});
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

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
