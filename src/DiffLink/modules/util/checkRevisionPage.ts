const checkRevisionPage = (): boolean => {
	return !!document.querySelector('#mw-revision-nav');
};

export {checkRevisionPage};
