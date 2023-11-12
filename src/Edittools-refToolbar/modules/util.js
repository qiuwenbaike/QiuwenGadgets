export const getMessages = (key, ...args) => {
	// eslint-disable-next-line mediawiki/msg-doc
	return args.length ? mw.message.apply(mw.message, [key, ...args]).parse() : mw.message(key).plain();
};
