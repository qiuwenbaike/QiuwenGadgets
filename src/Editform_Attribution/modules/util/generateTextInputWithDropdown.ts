import {LICENSES} from '../constant';
import {getAttribution} from './getAttribution';
import {getMessage} from '../i18n';

const generateTextInputWithDropdown = ({$body}: {$body: JQuery<HTMLElement>}) => {
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
			label: getMessage('Add'),
		});

		for (const onClick of onClicks) {
			addItemButton.on('click', onClick);
		}

		return addItemButton;
	};

	const getDeleteItemButton = (...onClicks: (() => void)[]): OO.ui.ButtonInputWidget => {
		const deleteItemButton = new OO.ui.ButtonInputWidget({
			label: getMessage('Delete'),
		});

		for (const onClick of onClicks) {
			deleteItemButton.on('click', onClick);
		}

		return deleteItemButton;
	};

	const parentFieldSet = new OO.ui.FieldsetLayout({
		label: getMessage('Sources and Licenses'),
	});

	const inputOnChange = () => {
		getAttribution({$body, parentFieldSet});
	};

	const addItemOnClick = () => {
		parentFieldSet.addItems([getFollowUpFieldset()]);
	};

	const deleteItemOnClick = (item: OO.ui.FieldsetLayout) => {
		parentFieldSet.removeItems([item]);
	};

	const initialFieldset = new OO.ui.FieldsetLayout();
	initialFieldset.addItems([
		new OO.ui.FieldLayout(getTextInput(inputOnChange), {label: getMessage('Source'), align: 'inline'}),
		new OO.ui.FieldLayout(getDropDown(inputOnChange), {label: getMessage('License'), align: 'inline'}),
		new OO.ui.FieldLayout(getAddItemButton(addItemOnClick, inputOnChange), {align: 'inline'}),
	]);

	const getFollowUpFieldset = () => {
		const followUpFieldset = new OO.ui.FieldsetLayout();
		const deleteThisItem = () => {
			deleteItemOnClick(followUpFieldset);
		};

		followUpFieldset.addItems([
			new OO.ui.FieldLayout(getTextInput(inputOnChange), {label: getMessage('Source'), align: 'inline'}),
			new OO.ui.FieldLayout(getDropDown(inputOnChange), {label: getMessage('License'), align: 'inline'}),
			new OO.ui.FieldLayout(getAddItemButton(addItemOnClick, inputOnChange), {align: 'inline'}),
			new OO.ui.FieldLayout(getDeleteItemButton(deleteThisItem, inputOnChange), {align: 'inline'}),
		]);

		return followUpFieldset;
	};

	parentFieldSet.addItems([initialFieldset]);

	parentFieldSet.on('change', () => {
		getAttribution({$body, parentFieldSet});
	});

	return parentFieldSet;
};

export {generateTextInputWithDropdown};
