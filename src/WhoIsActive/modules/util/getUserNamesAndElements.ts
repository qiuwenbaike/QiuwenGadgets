const getUserNamesAndElements = ($content: JQuery) => {
	const usernames: string[] = [];
	const $elements: JQuery<HTMLAnchorElement>[] = [];

	const {wgFormattedNamespaces} = mw.config.get();

	const {2: localizedUserNamespace} = wgFormattedNamespaces;
	for (const element of $content.find<HTMLAnchorElement>(
		[
			'a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])',
			`a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`,
		].join(',')
	)) {
		const $element: JQuery<HTMLAnchorElement> = $(element);

		const userRegex: RegExp = new RegExp(`((User)|(${localizedUserNamespace})):(.*?)(?=&|$)`);
		const usernameMatchArray: RegExpMatchArray | null = decodeURI($element.attr('href') ?? '').match(userRegex);
		if (!usernameMatchArray) {
			continue;
		}

		let [username] = usernameMatchArray;
		username = username.replace(new RegExp(`^((User)|(${localizedUserNamespace})):`, 'i'), '');
		const index: number = username.indexOf('/');
		if (index === -1) {
			$element.data('username', username);
			usernames[usernames.length] = username;
			$elements[$elements.length] = $element;
		}
	}

	return {usernames, $elements};
};

export {getUserNamesAndElements};
