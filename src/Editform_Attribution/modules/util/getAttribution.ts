import {getLink} from './getLink';
import {getMessage} from '../i18n';

const getAttribution = (fieldSetLayout: OO.ui.FieldsetLayout) => {
	const attributions = [];

	const getSelectedItem = (dropdown: OO.ui.DropdownWidget): OO.ui.OptionWidget | null => {
		const selectedItem: OO.ui.OptionWidget | null = dropdown
			.getMenu()
			.findSelectedItem() as OO.ui.OptionWidget | null;
		return selectedItem;
	};

	const getSelectedValue = (dropdown: OO.ui.DropdownWidget): string | undefined => {
		const selectedItem = getSelectedItem(dropdown);
		return selectedItem ? (selectedItem.getData() as string) : undefined;
	};

	const getSelectedLabel = (dropdown: OO.ui.DropdownWidget): string | undefined => {
		const selectedItem = getSelectedItem(dropdown);
		return selectedItem ? (selectedItem.getLabel() as string) : undefined;
	};

	for (const attributionFieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
		const attribution: {source?: string; license?: string} = {};

		for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
			const field = fieldLayout.getField();

			if (field.supports('getValue')) {
				const link = (field as OO.ui.TextInputWidget).getValue();
				if (link) {
					attribution.source = getLink({link});
				}
			} else if (field.supports('getMenu')) {
				const link = getSelectedValue(field as OO.ui.DropdownWidget);

				if (link) {
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
