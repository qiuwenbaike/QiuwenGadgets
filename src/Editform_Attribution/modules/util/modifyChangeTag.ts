const modifyVisualEditorChangeTag = ({
	changeTag,
	checkbox,
}: {
	changeTag: string;
	checkbox: OO.ui.CheckboxInputWidget;
}): void => {
	checkbox.on('change', (): void => {
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';
		changeTags = generateChangeTags(window.ve.init.target.saveFields.wpChangeTags?.() ?? '');
		window.ve.init.target.saveFields.wpChangeTags = (): string => {
			return changeTags;
		};
	});
};

const modifyWikiEditorChangeTag = ({
	changeTag,
	checkbox,
	$editForm,
}: {
	changeTag: string;
	checkbox: OO.ui.CheckboxInputWidget;
	$editForm: JQuery;
}): void => {
	checkbox.on('change', (): void => {
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';

		const $wpChangeTags: JQuery = $('<input>').attr({
			id: 'wpChangeTags',
			name: 'wpChangeTags',
			type: 'hidden',
			value: '',
		});
		const $body = $editForm.parents('body');
		const $originWpChangeTags: JQuery = $body.find('input[name=wpChangeTags]');
		if (!$originWpChangeTags.length) {
			$body.prepend($wpChangeTags);
		}
		changeTags = generateChangeTags($originWpChangeTags.val()?.toString() ?? '');
		$originWpChangeTags.val(changeTags);
	});
};

export {modifyVisualEditorChangeTag, modifyWikiEditorChangeTag};
