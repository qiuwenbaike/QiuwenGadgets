import {getLink} from './getLink';

// @ts-expect-error TS2503
const getLicense = (fieldSetLayout: OO.ui.FieldsetLayout) => {
	let license: string = '';

	// @ts-expect-error TS2503
	const getSelectedItem = (dropdown: OO.ui.DropdownWidget): OO.ui.OptionWidget | null => {
		// @ts-expect-error TS2503
		const selectedItem: OO.ui.OptionWidget | null = dropdown
			.getMenu()
			// @ts-expect-error TS2503
			.findSelectedItem() as OO.ui.OptionWidget | null;
		return selectedItem;
	};

	// @ts-expect-error TS2503
	const getSelectedValue = (dropdown: OO.ui.DropdownWidget): string | undefined => {
		const selectedItem = getSelectedItem(dropdown);
		return selectedItem ? (selectedItem.getData() as string) : undefined;
	};

	// @ts-expect-error TS2503
	const getSelectedLabel = (dropdown: OO.ui.DropdownWidget): string | undefined => {
		const selectedItem = getSelectedItem(dropdown);
		return selectedItem ? (selectedItem.getLabel() as string) : undefined;
	};

	// @ts-expect-error TS2503
	for (const attributionFieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
		// @ts-expect-error TS2503
		for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
			const field = fieldLayout.getField();

			if (field.supports('getMenu')) {
				// @ts-expect-error TS2503
				const link = getSelectedValue(field as OO.ui.DropdownWidget);

				if (link) {
					// @ts-expect-error TS2503
					const text = getSelectedLabel(field as OO.ui.DropdownWidget);

					if (text) {
						license = getLink({link, text});
					} else {
						license = getLink({link});
					}
				}
			}
		}
	}

	return license;
};

const updateWpLicense = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	// @ts-expect-error TS2503
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	let wpLicense: string = '';

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

	wpLicense = getLicense(parentFieldSet);
	$wpLicense.val(wpLicense);
};

export {getLicense, updateWpLicense};
