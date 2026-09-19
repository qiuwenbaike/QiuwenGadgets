const generateChangeTags = ({
	checkbox,
	originalChangeTags,
	changeTag,
}: {
	// @ts-expect-error TS2503
	checkbox: OO.ui.CheckboxInputWidget;
	originalChangeTags: string;
	changeTag: string;
}): string => {
	return checkbox.isSelected()
		? `${originalChangeTags},${changeTag}`
		: originalChangeTags.replace(`,${changeTag}`, '');
};

export {generateChangeTags};
