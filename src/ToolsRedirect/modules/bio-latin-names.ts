const toolsRedirect_bio_latin_names = (): void => {
	const REGEX_PREFIX: RegExp = /[学學]名\s*[:：]?\s*$/;
	const REGEX_COLON: RegExp = /^\s*[:：]?\s*$/;

	window.toolsRedirect.findRedirectCallback((_pageName: string, $content: JQuery): string[] => {
		const titles: string[] = [];

		for (const element of $content.find('> p > [lang="la"], > p > i')) {
			const {textContent} = element;
			let {previousSibling: previousNode} = element;

			if (previousNode && REGEX_COLON.test(previousNode.textContent ?? '')) {
				previousNode = previousNode.previousSibling;
			}

			if (previousNode && REGEX_PREFIX.test(previousNode.textContent ?? '')) {
				const title: string | undefined = textContent?.trim();
				if (!title) {
					continue;
				}

				titles[titles.length] = title; // Replace `titles.push(title)` to avoid polyfilling core-js
				window.toolsRedirect.setRedirectTextSuffix(title, '{{学名重定向}}');
			}
		}

		return [...new Set(titles)];
	});
};

export {toolsRedirect_bio_latin_names};
