const generateChangeTags = ({
	selected,
	originalChangeTags,
	changeTag,
}: {
	selected: boolean;
	originalChangeTags: string;
	changeTag: string;
}): string => {
	return selected ? `${originalChangeTags},${changeTag}` : originalChangeTags.replace(`,${changeTag}`, '');
};

export {generateChangeTags};
