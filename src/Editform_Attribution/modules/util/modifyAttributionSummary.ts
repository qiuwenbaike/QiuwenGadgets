const modifyAttribution = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	const generateInfoMartix = (fieldSetLayout: OO.ui.FieldsetLayout) => {
		const infoMartix = [];

		for (const fieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
			for (const fields of fieldset.getItems() as OO.ui.FieldsetLayout[]) {
				const info = [];

				for (const field of fields.getItems() as OO.ui.FieldsetLayout[]) {
					info[info.length] = field.getData();
				}

				infoMartix[infoMartix.length] = info;
			}
		}

		console.log(infoMartix);

		return infoMartix.join('; ');
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
