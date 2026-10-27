const notify = (message: string, type: 'error' | 'success' | 'warn' = 'error'): void => {
	void mw.notify(message, {tag: 'TranslateVariants', type});
};

export {notify};
