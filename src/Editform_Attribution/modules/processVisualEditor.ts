import * as OPTIONS from '~/Editform_Attribution/options.json';
import {LICENSES} from './constant';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const $target: JQuery = $body.find(`.${OPTIONS.targetClassVe}`);
	if (!$target.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	checkbox.setInputId(OPTIONS.inputId);

	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		$overlay: true,
		disabled: !checkbox.isSelected(),
		menu: {
			items: LICENSES.map(({data, label}): OO.ui.MenuOptionWidget => {
				return new OO.ui.MenuOptionWidget({
					data,
					label,
				});
			}),
		},
	});

	checkbox.on('change', (selected: boolean | string): void => {
		const changeTag: string = OPTIONS.changeTag;
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';
		changeTags = generateChangeTags(window.ve.init.target.saveFields.wpChangeTags?.() ?? '');
		window.ve.init.target.saveFields.wpChangeTags = (): string => {
			return changeTags;
		};

		dropdown.setDisabled(!selected);
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AttributionAdded'),
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append(checkboxLayout.$element);
	}
};

export {processVisualEditor};
