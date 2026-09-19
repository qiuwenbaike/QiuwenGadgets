import {getLink} from './getLink';
import {getMessage} from '../i18n';

// @ts-expect-error TS2503
const getAttribution = (fieldSetLayout: OO.ui.FieldsetLayout) => {
	const attributions = [];

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
		const attribution: {source?: string; license?: string} = {};

		// @ts-expect-error TS2503
		for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
			const field = fieldLayout.getField();

			if (field.supports('getValue')) {
				// @ts-expect-error TS2503
				const link = (field as OO.ui.TextInputWidget).getValue();
				if (link) {
					attribution.source = getLink({link});
				}
			} else if (field.supports('getMenu')) {
				// @ts-expect-error TS2503
				const link = getSelectedValue(field as OO.ui.DropdownWidget);

				if (link) {
					// @ts-expect-error TS2503
					const text = getSelectedLabel(field as OO.ui.DropdownWidget);

					if (text) {
						attribution.license = getLink({link, text});
					} else {
						attribution.license = getLink({link});
					}
				}
			}
		}

		if (attribution.source && attribution.license) {
			attributions[attributions.length] =
				`${getMessage('Source')}: ${attribution.source} (${getMessage('License')}: ${attribution.license}) `;
		}
	}

	return attributions.join(' ');
};

const updateWpAttribution = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	// @ts-expect-error TS2503
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	let wpAttribution: string = '';

	const $wpAttribution: JQuery = $('<input>').attr({
		id: 'wpAttribution',
		name: 'wpAttribution',
		type: 'hidden',
		value: '',
	});
	const $originwpAttribution: JQuery = $body.find('input[name=wpAttribution]');
	if (!$originwpAttribution.length) {
		$body.prepend($wpAttribution);
	}

	wpAttribution = getAttribution(parentFieldSet);
	$originwpAttribution.val(wpAttribution);
};

export {getAttribution, updateWpAttribution};
