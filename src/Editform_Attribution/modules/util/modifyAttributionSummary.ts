const modifyAttribution = ({
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
			const attribution = [];

			for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
				const field = fieldLayout.getField();
				let value: string | undefined;

				if (field.supports('getValue')) {
					value = (field as OO.ui.TextInputWidget).getValue();
				} else if (field.supports('getMenu')) {
					value = getSelectedValue(field as OO.ui.DropdownWidget);
				}

				if (value) {
					attribution[attribution.length] = value;
				}
			}

			attributions[attributions.length] = attribution.join(', ');
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

export {modifyAttribution};
