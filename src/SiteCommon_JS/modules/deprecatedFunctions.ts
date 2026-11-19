const deprecatedFunctions = (): void => {
	/*!
	 * maintenance: Some user scripts may be using the following deprecated functions.
	 * These functions are no longer supported and should be updated.
	 */
	const importScript = (title: string): HTMLScriptElement => {
		return mw.loader.addScriptTag(
			mw.util.getUrl(title, {
				action: 'raw',
				ctype: 'text/javascript',
				maxage: '3600',
				smaxage: '3600',
			})
		);
	};
	mw.log.deprecate(window, 'importScript', importScript, 'Use mw.loader.addScriptTag() instead');

	const importStylesheet = (title: string): HTMLLinkElement => {
		return mw.loader.addLinkTag(
			mw.util.getUrl(title, {
				action: 'raw',
				ctype: 'text/css',
				maxage: '3600',
				smaxage: '3600',
			}),
			'text/css'
		);
	};
	mw.log.deprecate(window, 'importStylesheet', importStylesheet, 'Use mw.loader.addLinkTag() instead');

	const importScriptURI = (modules: string): HTMLScriptElement => {
		return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
	};
	mw.log.deprecate(
		window,
		'importScriptURI',
		importScriptURI,
		'Use mw.loader.addScriptTag() or mw.loader.getScript() instead'
	);

	const importStylesheetURI = (modules: string): HTMLLinkElement => {
		return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), 'text/css');
	};
	mw.log.deprecate(window, 'importStylesheetURI', importStylesheetURI, 'Use mw.loader.addLinkTag() instead');

	const importScriptCallback = (title: string, ready: never): void => {
		void mw.loader
			.getScript(
				mw.util.getUrl(title, {
					action: 'raw',
					ctype: 'text/javascript',
					maxage: '3600',
					smaxage: '3600',
				})
			)
			.then(ready);
	};
	// @ts-expect-error TS2345
	mw.log.deprecate(window, 'importScriptCallback', importScriptCallback, 'Use mw.loader.getScript() instead');

	const importScriptURICallback = (url: string, ready: never): void => {
		void mw.loader.getScript(url).then(ready);
	};
	// @ts-expect-error TS2345
	mw.log.deprecate(window, 'importScriptURICallback', importScriptURICallback, 'Use mw.loader.getScript() instead');
	/**
	 * maintenance: Some user scripts may be using the following deprecated functions.
	 * These functions are kept for compability.
	 */
	// mw.log.deprecate(window, 'JSConfig', {}, 'Use {} instead');
	/**
	 * wgU*S functions have been split to a seperate gadget (ext.gadget.i18n).
	 */
};

export {deprecatedFunctions};
