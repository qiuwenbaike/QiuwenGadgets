const getMessage = (key: string, ...args: string[]): string => {
	// Messages that can be used here:
	// * see messages.ts
	// * for more information
	return mw.message(key, ...args).plain();
};

export {getMessage};
