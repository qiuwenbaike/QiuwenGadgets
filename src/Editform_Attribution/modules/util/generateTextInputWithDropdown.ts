import {getLicense, updateWpLicense} from './getLicense';
import {getSource, updateWpSource} from './getSource';
import {LICENSES} from '../constant';
import {appendTextToSummary} from './appendTextToSummary';
import {getMessage} from '../i18n';

const getTextInput = (...onChanges: (() => void)[]) => {
	// @ts-expect-error TS2304
	const textInput = new OO.ui.TextInputWidget({
		placeholder: getMessage('Source'),
	});

	for (const onChange of onChanges) {
		textInput.on('change', onChange);
	}

	return textInput;
};

const getDropDown = (...onSelects: (() => void)[]) => {
	// @ts-expect-error TS2304
	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		label: getMessage('License'),
	});

	// @ts-expect-error TS2304
	const menuOptions: OO.ui.MenuOptionWidget[] = [];

	for (const {data, label} of LICENSES) {
		// @ts-expect-error TS2304
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

// @ts-expect-error TS2503
const getAddItemButton = (...onClicks: (() => void)[]): OO.ui.ButtonInputWidget => {
	// @ts-expect-error TS2304
	const addItemButton = new OO.ui.ButtonInputWidget({
		label: getMessage('Add to Edit Summary'),
	});

	for (const onClick of onClicks) {
		addItemButton.on('click', onClick);
	}

	return addItemButton;
};

const generateTextInputWithDropdown = ({$body, $wpSummary}: {$body: JQuery<HTMLElement>; $wpSummary: JQuery}) => {
	// @ts-expect-error TS2304
	const initialFieldset = new OO.ui.FieldsetLayout();
	// @ts-expect-error TS2304
	const parentFieldSet = new OO.ui.FieldsetLayout({
		label: getMessage('Please Claim Sources and Licenses'),
	});

	const textInputOnChange = () => {
		updateWpSource({$body, parentFieldSet});
	};
	const textInput = getTextInput(textInputOnChange);
	const dropDownOnChange = () => {
		updateWpLicense({$body, parentFieldSet});
	};
	const dropDown = getDropDown(dropDownOnChange);

	const addItemOnClick = () => {
		let wpSource: string = '';
		let wpLicense: string = '';

		const $wpSource: JQuery<HTMLInputElement> =
			$body.find<HTMLInputElement>('input[name=wpSource]') ||
			$('<input>')
				.attr({
					id: 'wpSource',
					name: 'wpSource',
					type: 'hidden',
					value: '',
				})
				.prependTo($body);
		const $wpLicense: JQuery<HTMLInputElement> =
			$body.find<HTMLInputElement>('input[name=wpLicense]') ||
			$('<input>')
				.attr({
					id: 'wpLicense',
					name: 'wpLicense',
					type: 'hidden',
					value: '',
				})
				.prependTo($body);

		wpSource = getSource(parentFieldSet);
		wpLicense = getLicense(parentFieldSet);
		$wpSource.val(wpSource);
		$wpLicense.val(wpLicense);

		if (wpSource.length && wpLicense.length) {
			const attribution = `${getMessage('Source')}: ${wpSource} (${getMessage('License')}: ${wpLicense}) `;

			if ([getMessage('Replace With License'), getMessage('Other License')].includes(wpLicense)) {
				// @ts-expect-error TS2304
				void OO.ui.alert(getMessage('Please replace placeholder with actual license'), {size: 'medium'});
			}

			appendTextToSummary({
				customSummary: attribution ? `[${attribution}]` : '',
				$wpSummary,
			});

			textInput.setValue('');
			dropDown.getMenu().unselectItem();
		} else if (!wpSource.length && wpLicense.length) {
			// @ts-expect-error TS2304
			void OO.ui.alert(getMessage('Source is missing'), {size: 'medium'});
		} else if (wpSource.length && !wpLicense.length) {
			// @ts-expect-error TS2304
			void OO.ui.alert(getMessage('License is missing'), {size: 'medium'});
		} else {
			// @ts-expect-error TS2304
			void OO.ui.alert(getMessage('Both source and License are missing'), {size: 'medium'});
		}
	};

	const addItemButton = getAddItemButton(addItemOnClick);

	initialFieldset.addItems([
		// @ts-expect-error TS2304
		new OO.ui.FieldLayout(textInput, {label: getMessage('Source'), align: 'inline'}),
		// @ts-expect-error TS2304
		new OO.ui.FieldLayout(dropDown, {label: getMessage('License'), align: 'inline'}),
		// @ts-expect-error TS2304
		new OO.ui.FieldLayout(addItemButton, {align: 'inline'}),
	]);

	parentFieldSet.addItems([initialFieldset]);

	return parentFieldSet;
};

export {generateTextInputWithDropdown};
