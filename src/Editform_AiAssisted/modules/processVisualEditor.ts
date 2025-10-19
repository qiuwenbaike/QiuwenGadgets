import * as OPTIONS from '~/Editform_AiAssisted/options.json';
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

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	checkbox.setInputId(OPTIONS.inputId);

	checkbox.on('change', (): void => {
		const {saveFields} = window.ve.init.target;
		const originalChangeTags = saveFields.wpChangeTags?.() ?? '';
		const newChangeTags = () => {
			return generateChangeTags({
				checkbox,
				originalChangeTags,
				changeTag: OPTIONS.changeTag,
			});
		};
		saveFields.wpChangeTags = (): string => {
			return newChangeTags?.() ?? '';
		};
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append(checkboxLayout.$element);
	}

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
