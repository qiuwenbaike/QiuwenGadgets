const checkRevisionPage = (): boolean => {
	return (
		($('#contentSub').find('#mw-revision-nav').length || $('main#content>.pre-content #mw-revision-nav').length) > 0
	);
};

export {checkRevisionPage};
