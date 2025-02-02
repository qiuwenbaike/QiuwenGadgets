const getAttribution = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	const generateInfoMartix = (fieldSetLayout: OO.ui.FieldsetLayout) => {
		const attributions = [];

		const getSelectedValue = (dropdown: OO.ui.DropdownWidget): string | undefined => {
			const selectedItem: OO.ui.OptionWidget | null = dropdown
				.getMenu()
				.findSelectedItem() as OO.ui.OptionWidget | null;
			return selectedItem ? (selectedItem.getData() as string) : undefined;
		};

		for (const attributionFieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
			const attribution: {source?: string; license?: string} = {};

			for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
				const field = fieldLayout.getField();

				if (field.supports('getValue')) {
					const value = (field as OO.ui.TextInputWidget).getValue();
					if (value) {
						attribution.source = value;
					}
				} else if (field.supports('getMenu')) {
					const value = getSelectedValue(field as OO.ui.DropdownWidget);
					if (value) {
						attribution.license = value;
					}
				}
			}

			if (attribution.source && attribution.license) {
				attributions[attributions.length] = `${attribution.source}, ${attribution.license}`;
			}
		}

		console.log(attributions);

		return attributions.join('; ');
	};

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

	wpAttribution = generateInfoMartix(parentFieldSet);
	$originwpAttribution.val(wpAttribution);
};

export {getAttribution};
