const editCount = (): void => {
	const editCountNumber: number = mw.config.get('wgUserEditCount') ?? 0;
	mw.util.addCSS(
		`#pt-mycontris>a::after,.menu__item--userContributions>span>span::after{content:" (${editCountNumber})"}`
	);
};

$(editCount);
