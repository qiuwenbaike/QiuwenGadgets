const getMessage = (key: string, ...args: string[]): string => {
	// Messages that can be used here:
	// * see RefToobarMessages.js
	// * for more information
	return args.length ? mw.message(key, ...args).plain() : mw.message(key).plain();
};

export {getMessage};
