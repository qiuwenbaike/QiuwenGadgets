const checkDiffPage = (): boolean => {
	return (
		(!!document.querySelectorAll('table.diff') && !!mw.config.get('wgCurRevisionId')) ||
		!!document.querySelectorAll('.mw-revslider-container')
	);
};

export {checkDiffPage};
