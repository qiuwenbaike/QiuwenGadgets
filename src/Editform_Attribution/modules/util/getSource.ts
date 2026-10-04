import {getLink} from './getLink';

// @ts-expect-error TS2503
const getSource = (fieldSetLayout: OO.ui.FieldsetLayout) => {
	let source: string = '';

	// @ts-expect-error TS2503
	for (const attributionFieldset of fieldSetLayout.getItems() as OO.ui.FieldsetLayout[]) {
		// @ts-expect-error TS2503
		for (const fieldLayout of attributionFieldset.getItems() as OO.ui.FieldLayout[]) {
			const field = fieldLayout.getField();

			if (field.supports('getValue')) {
				// @ts-expect-error TS2503
				const link = (field as OO.ui.TextInputWidget).getValue();
				if (link) {
					source = getLink({link});
				}
			}
		}
	}

	return source;
};

const updateWpSource = ({
	$body,
	parentFieldSet,
}: {
	$body: JQuery<HTMLElement>;
	// @ts-expect-error TS2503
	parentFieldSet: OO.ui.FieldsetLayout;
}) => {
	let wpSource: string = '';

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

	wpSource = getSource(parentFieldSet);
	$wpSource.val(wpSource);
};

export {getSource, updateWpSource};
