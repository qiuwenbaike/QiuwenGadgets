const deprecatedFunctions = (): void => {
	/**
	 * maintenance: Some user scripts may be using the following deprecated functions.
	 * These functions are no longer supported and should be updated to use mw.loader.getScript.
	 *
	 * @deprecated: User mw.loader.load() or mw.loader.getScript() instead.
	 */
	mw.log.deprecate(
		window,
		'importScript',
		(title: string): void => {
			mw.loader.load(
				mw.util.getUrl(title, {
					action: 'raw',
					ctype: 'text/javascript',
					maxage: '3600',
					smaxage: '3600',
				})
			);
		},
		'Use mw.loader.load() or mw.loader.getScript() instead'
	);
	mw.log.deprecate(
		window,
		'importStylesheet',
		(title: string): void => {
			mw.loader.load(
				mw.util.getUrl(title, {
					action: 'raw',
					ctype: 'text/css',
					maxage: '3600',
					smaxage: '3600',
				}),
				'text/css'
			);
		},
		'Use mw.loader.load() instead'
	);
	mw.log.deprecate(
		window,
		'importScriptURI',
		(modules: string): void => {
			mw.loader.load(mw.util.wikiUrlencode(modules));
		},
		'Use mw.loader.load() or mw.loader.getScript() instead'
	);
	mw.log.deprecate(
		window,
		'importStylesheetURI',
		(modules: string): void => {
			mw.loader.load(mw.util.wikiUrlencode(modules), 'text/css');
		},
		'Use mw.loader.load() instead'
	);
	mw.log.deprecate(
		window,
		'importScriptCallback',
		(title: string, ready: never): void => {
			mw.loader
				.getScript(
					mw.util.getUrl(title, {
						action: 'raw',
						ctype: 'text/javascript',
						maxage: '3600',
						smaxage: '3600',
					})
				)
				.then(ready);
		},
		'Use mw.loader.load() or mw.loader.getScript() instead'
	);
	mw.log.deprecate(
		window,
		'importScriptURICallback',
		(url: string, ready: never): void => {
			mw.loader.getScript(url).then(ready);
		},
		'Use mw.loader.getScript() instead'
	);
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
