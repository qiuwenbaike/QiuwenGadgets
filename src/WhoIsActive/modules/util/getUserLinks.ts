/**
 * Collect every user link within the given content.
 *
 * @param content The page content to search in.
 * @returns A map of the user names to the user links pointing to them.
 */
const getUserLinks = (content: HTMLElement): Record<string, HTMLAnchorElement[]> => {
	const userLinks: Record<string, HTMLAnchorElement[]> = {};

	const {wgFormattedNamespaces} = mw.config.get();
	const {2: localizedUserNamespace, 3: localizedUserTalkNamespace} = wgFormattedNamespaces;

	const selector: string = [
		'a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])',
		`a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`,
	].join(',');

	const userRegex: RegExp = new RegExp(
		`((User|User[_ ]talk)|(${localizedUserNamespace}|${localizedUserTalkNamespace})):(.*?)(?=&|$)`
	);
	const namespaceRegex: RegExp = new RegExp(
		`^((User|User[_ ]talk)|(${localizedUserNamespace}|${localizedUserTalkNamespace})):`,
		'i'
	);

	for (const element of content.querySelectorAll<HTMLAnchorElement>(selector)) {
		const href: string = decodeURI(element.getAttribute('href') ?? '');
		const userNameMatchArray: RegExpMatchArray | null = href.match(userRegex);
		if (!userNameMatchArray) {
			continue;
		}

		let [userName] = userNameMatchArray;
		userName = userName.replace(namespaceRegex, '').replace(/#.*$/i, '');
		if (userName.includes('/')) {
			continue;
		}

		const elements = userLinks[userName] ?? [];
		elements[elements.length] = element; // Replace Array#push to avoid core-js polyfilling
		userLinks[userName] = elements;
	}

	return userLinks;
};

export {getUserLinks};
