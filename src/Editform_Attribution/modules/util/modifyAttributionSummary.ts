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

			for (const field of attributionFieldset.getItems()) {
				fieldInfo[fieldInfo.length] = String(
					(field as OO.ui.TextInputWidget).getValue() ?? getSelectedValue(field as OO.ui.DropdownWidget)
				);
			}

			fieldsInfo[fieldsInfo.length] = fieldInfo;
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
