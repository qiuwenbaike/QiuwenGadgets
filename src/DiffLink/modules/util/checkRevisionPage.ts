const checkRevisionPage = (): boolean => {
	const $body = $('body');
	return (
		($body.find('#contentSub').find('#mw-revision-nav').length ||
			$body.find('main#content>.pre-content #mw-revision-nav').length) > 0
	);
};

export {checkRevisionPage};
