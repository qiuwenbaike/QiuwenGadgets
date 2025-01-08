const generateUserLinks = ($content: JQuery): {users: string[]; $userLinks: JQuery<HTMLAnchorElement>[]} => {
	const users: string[] = [];
	const $userLinks: JQuery<HTMLAnchorElement>[] = [];
	const $elements = $content.find<HTMLAnchorElement>('a.mw-userlink:not(.mw-anonuserlink)');

	for (const element of $elements) {
		const $element: JQuery<HTMLAnchorElement> = $(element);
		if (
			$element.parents('li').find('.gadgets-markrights').length ||
			$element.siblings('.gadgets-markrights').length
		) {
			continue;
		}

		$userLinks[$userLinks.length] = $element;

		const {textContent} = element;
		const user: string | undefined = textContent?.toString();

		if (!user) {
			continue;
		}

		users[users.length] = user;
	}

	return {users, $userLinks};
};

export {generateUserLinks};
