import {LICENSES} from '../constant';
import {getMessage} from '../i18n';
import {modifyAttribution} from './modifyAttributionSummary';

const generateTextInputWithDropdown = ({$body}: {$body: JQuery<HTMLElement>}) => {
	const getTextInput = (onChange?: (event?: Event) => void) => {
		const textInput = new OO.ui.TextInputWidget({
			placeholder: getMessage('Source'),
		});

		if (onChange) {
			textInput.on('change', () => {
				onChange();
			});
		}

		return textInput;
	};

	const getDropDown = (onChange?: (event?: Event) => void) => {
		const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget();

		const menuOptions: OO.ui.MenuOptionWidget[] = [];

		for (const {data, label} of LICENSES) {
			menuOptions[menuOptions.length] = new OO.ui.MenuOptionWidget({
				data,
				label,
			});
		}

		dropdown.getMenu().addItems(menuOptions);

		if (onChange) {
			dropdown.on('change', () => {
				onChange();
			});
		}

		return dropdown;
	};

	const getAddItemButton = (...onClicks: ((event?: Event) => void)[]): OO.ui.ButtonInputWidget => {
		const addItemButton = new OO.ui.ButtonInputWidget({
			label: getMessage('Add'),
		});

		if (onClicks) {
			for (const onClick of onClicks) {
				addItemButton.on('click', onClick);
			}
		}

		return addItemButton;
	};

	const getDeleteItemButton = (...onClicks: ((event?: Event) => void)[]): OO.ui.ButtonInputWidget => {
		const deleteItemButton = new OO.ui.ButtonInputWidget({
			label: getMessage('Delete'),
		});

		if (onClicks) {
			for (const onClick of onClicks) {
				deleteItemButton.on('click', onClick);
			}
		}

		return deleteItemButton;
	};

	const parentFieldSet = new OO.ui.FieldsetLayout({
		label: getMessage('Sources and Licenses'),
	});

	const inputOnChange = () => {
		modifyAttribution({$body, parentFieldSet});
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
		modifyAttribution({$body, parentFieldSet});
	});

	return parentFieldSet;
};

export {generateTextInputWithDropdown};
