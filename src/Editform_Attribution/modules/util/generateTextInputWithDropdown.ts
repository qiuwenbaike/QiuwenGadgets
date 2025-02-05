import {getAttribution, updateWpAttribution} from './getAttribution';
import {LICENSES} from '../constant';
import {appendTextToSummary} from './appendTextToSummary';
import {getMessage} from '../i18n';

const getTextInput = (...onChanges: (() => void)[]) => {
	const textInput = new OO.ui.TextInputWidget({
		placeholder: getMessage('Source'),
	});

	for (const onChange of onChanges) {
		textInput.on('change', onChange);
	}

	return textInput;
};

const getDropDown = (...onSelects: (() => void)[]) => {
	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		label: getMessage('License'),
	});

	const menuOptions: OO.ui.MenuOptionWidget[] = [];

	for (const {data, label} of LICENSES) {
		menuOptions[menuOptions.length] = new OO.ui.MenuOptionWidget({
			data,
			label,
		});
	}

	dropdown.getMenu().addItems(menuOptions);

	for (const onSelect of onSelects) {
		dropdown.getMenu().on('select', onSelect);
	}

	return dropdown;
};

const getAddItemButton = (...onClicks: (() => void)[]): OO.ui.ButtonInputWidget => {
	const addItemButton = new OO.ui.ButtonInputWidget({
		label: getMessage('Add to Edit Summary'),
	});

	for (const onClick of onClicks) {
		addItemButton.on('click', onClick);
	}

	return addItemButton;
};

const generateTextInputWithDropdown = ({$body, $wpSummary}: {$body: JQuery<HTMLElement>; $wpSummary: JQuery}) => {
	const initialFieldset = new OO.ui.FieldsetLayout();
	const parentFieldSet = new OO.ui.FieldsetLayout({
		label: getMessage('Please Claim Sources and Licenses'),
	});

	const inputOnChange = () => {
		updateWpAttribution({$body, parentFieldSet});
	};

	const textInput = getTextInput(inputOnChange);
	const dropDown = getDropDown(inputOnChange);

	const addItemOnClick = () => {
		let wpAttribution: string = '';

		const $wpAttribution: JQuery = $('<input>').attr({
			id: 'wpAttribution',
			name: 'wpAttribution',
			type: 'hidden',
			value: '',
		});

		const $originwpAttribution: JQuery<HTMLInputElement> =
			$body.find<HTMLInputElement>('input[name=wpAttribution]');
		if (!$originwpAttribution.length) {
			$body.prepend($wpAttribution);
		}

		wpAttribution = getAttribution(parentFieldSet);
		$originwpAttribution.val(wpAttribution);

		appendTextToSummary({
			customSummary: $originwpAttribution.val()
				? `［${getMessage('Source')}: ${$originwpAttribution.val()}］`
				: '',
			$wpSummary,
		});

		textInput.setValue('');
		dropDown.getMenu().unselectItem();
	};

	const addItemButton = getAddItemButton(addItemOnClick);

	initialFieldset.addItems([
		new OO.ui.FieldLayout(textInput, {label: getMessage('Source'), align: 'inline'}),
		new OO.ui.FieldLayout(dropDown, {label: getMessage('License'), align: 'inline'}),
		new OO.ui.FieldLayout(addItemButton, {align: 'inline'}),
	]);

	parentFieldSet.addItems([initialFieldset]);

	return parentFieldSet;
};

export {generateTextInputWithDropdown};
