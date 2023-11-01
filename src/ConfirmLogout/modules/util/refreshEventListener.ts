const refreshEventListener = (
	$element: JQuery<HTMLAnchorElement>,
	clickListener: (event: JQuery.ClickEvent<HTMLAnchorElement>) => void
): void => {
	const hoverListener = (): void => {
		$element.off('click');
		$element.on('click', clickListener);
	};
	const hoverListenerWithDebounce: typeof hoverListener = mw.util.debounce(hoverListener, 200, true);

	$element.on('mouseover touchstart', hoverListenerWithDebounce);
};

export {refreshEventListener};
