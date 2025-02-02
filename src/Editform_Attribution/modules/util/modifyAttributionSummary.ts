const modifyAttribution = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	const generateInfoMartix = (fieldSetLayout: OO.ui.FieldsetLayout) => {
		const fieldsInfo = [];

		for (const attributionFieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
			const fieldInfo = [];

			for (const field of attributionFieldset.getItems() as OO.ui.FieldsetLayout[]) {
				fieldInfo[fieldInfo.length] = field.getData();
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
