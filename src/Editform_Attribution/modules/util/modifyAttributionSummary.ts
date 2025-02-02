const modifyAttribution = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	const generateInfoMartix = (fieldSetLayout: OO.ui.FieldsetLayout) => {
		const fieldsInfo = [];

		const getSelectedValue = (dropdown: OO.ui.DropdownWidget): string | undefined => {
			const selectedItem: OO.ui.OptionWidget | null = dropdown
				.getMenu()
				.findSelectedItem() as OO.ui.OptionWidget | null;
			return selectedItem ? (selectedItem.getData() as string) : undefined;
		};

		for (const attributionFieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
			const fieldInfo = [];

			for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
				const field = fieldLayout.getField();
				let value: string | undefined;

				if (field.supports('getValue')) {
					value = (field as OO.ui.TextInputWidget).getValue();
				} else if (field.supports('getMenu')) {
					value = getSelectedValue(field as OO.ui.DropdownWidget);
				}

				if (value) {
					fieldInfo[fieldInfo.length] = value;
				}
			}

			fieldsInfo[fieldsInfo.length] = fieldInfo.join(', ');
		}

		console.log(fieldsInfo);

		return fieldsInfo.join('; ');
	};

	let attributions: string = '';

	const $wpAttributions: JQuery = $('<input>').attr({
		id: 'wpAttributions',
		name: 'wpAttributions',
		type: 'hidden',
		value: '',
	});
	const $originWpAttributions: JQuery = $body.find('input[name=wpAttributions]');
	if (!$originWpAttributions.length) {
		$body.prepend($wpAttributions);
	}

	attributions = generateInfoMartix(parentFieldSet);
	$originWpAttributions.val(attributions);
};

export {modifyAttribution};
