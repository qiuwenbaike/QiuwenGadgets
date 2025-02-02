import {LICENSES} from '../constant';
import {getMessage} from '../i18n';

const generateTextInputWithDropdown = () => {
	const textInput = new OO.ui.TextInputWidget({
		placeholder: getMessage('Source'),
	});

	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		$overlay: true,
		menu: {
			items: LICENSES.map(({data, label}): OO.ui.MenuOptionWidget => {
				return new OO.ui.MenuOptionWidget({
					data,
					label,
				});
			}),
		},
	});

	const getAddItemButton = (onClick?: (event?: Event) => void): OO.ui.ButtonInputWidget => {
		const addItemButton = new OO.ui.ButtonInputWidget({
			label: getMessage('Add'),
			value: 'addItem',
		});

		if (onClick) {
			addItemButton.on('click', onClick);
		}

		return addItemButton;
	};

	const addItemOnClick = (fieldSet: OO.ui.FieldsetLayout) => {
		fieldSet.addItems([getFollowUpFieldset()]);
	};

	const getDeleteItemButton = (onClick?: (event?: Event) => void): OO.ui.ButtonInputWidget => {
		const deleteItemButton = new OO.ui.ButtonInputWidget({
			label: getMessage('Delete'),
			value: 'deleteItem',
		});

		if (onClick) {
			deleteItemButton.on('click', onClick);
		}

		return deleteItemButton;
	};

	const deleteItemOnClick = (fieldSet: OO.ui.FieldsetLayout, item: OO.ui.FieldsetLayout) => {
		fieldSet.removeItems([item]);
	};

	const parentFieldSet = new OO.ui.FieldsetLayout({
		label: getMessage('Sources and Licenses'),
	});

	const initialFieldset = new OO.ui.FieldsetLayout();
	initialFieldset.addItems([
		new OO.ui.FieldLayout(textInput, {label: getMessage('Source'), align: 'inline'}),
		new OO.ui.FieldLayout(dropdown, {label: getMessage('License'), align: 'inline'}),
		new OO.ui.FieldLayout(
			getAddItemButton(() => {
				addItemOnClick(parentFieldSet);
			}),
			{align: 'inline'}
		),
	]);

	const getFollowUpFieldset = () => {
		const followUpFieldset = new OO.ui.FieldsetLayout();
		followUpFieldset.addItems([
			new OO.ui.FieldLayout(textInput, {label: getMessage('Source'), align: 'inline'}),
			new OO.ui.FieldLayout(dropdown, {label: getMessage('License'), align: 'inline'}),
			new OO.ui.FieldLayout(
				getAddItemButton(() => {
					addItemOnClick(parentFieldSet);
				}),
				{align: 'inline'}
			),
			new OO.ui.FieldLayout(
				getDeleteItemButton(() => {
					deleteItemOnClick(parentFieldSet, followUpFieldset);
				}),
				{align: 'inline'}
			),
		]);

		return followUpFieldset;
	};

	parentFieldSet.addItems([initialFieldset]);

	return parentFieldSet;
};

export {generateTextInputWithDropdown};
