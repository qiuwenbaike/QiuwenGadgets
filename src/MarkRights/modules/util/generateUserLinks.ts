const generateUserLinks = ($content: JQuery): Record<string, JQuery<HTMLAnchorElement>[]> => {
	const userLinks: Record<string, JQuery<HTMLAnchorElement>[]> = {};
	const $elements = $content.find<HTMLAnchorElement>('a.mw-userlink:not(.mw-anonuserlink)');

	for (const element of $elements) {
		const $element: JQuery<HTMLAnchorElement> = $(element);

		// Native `closest()`/`querySelector()` instead of `parents('li').find()`: the latter walks the
		// whole ancestor chain with jQuery and is repeated for every link of every batch.
		const listItem = element.closest('li');
		if ($element.siblings('.gadgets-markrights').length || listItem?.querySelector('.gadgets-markrights')) {
			continue;
		}

		const {textContent} = element;
		const user: string | undefined = textContent?.toString();

		if (!user) {
			continue;
		}

		if (mw.util.isIPv4Address(user) || mw.util.isIPv6Address(user)) {
			continue;
		}

		userLinks[user] ??= [];

		userLinks[user][userLinks[user].length] = $element; // Replace Array#push to avoid core-js polyfilling
	}

	return userLinks;
};

export {generateUserLinks};
