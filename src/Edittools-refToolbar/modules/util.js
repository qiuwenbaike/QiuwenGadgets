export const getMessage = (/** @type {string} */ key, /** @type {string[]} */ ...args) => {
	// Messages that can be used here:
	// * see RefToobarMessages.js
	// * for more information
	return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
