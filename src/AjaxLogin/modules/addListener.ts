const addListener = (
	$element: JQuery,
	eventListener: (event: JQuery.ClickEvent | JQuery.KeyDownEvent) => void
): void => {
	$element.on('click', eventListener);
	$element.on('keydown', eventListener);
};

export {addListener};
