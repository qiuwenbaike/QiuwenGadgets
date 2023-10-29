export const toolsRedirect_bio_latin_names = () => {
	const prefixRegex = /[学學]名\s*：?\s*$/;
	const colonRegex = /^\s*[:：]?\s*$/;
	const {toolsRedirect} = window;
	toolsRedirect.findRedirectCallback((_pagename, $content) => {
		const titles = [];
		$content.find('> p > [lang="la"], > p > i').each((_index, element) => {
			let title;
			let previousNode = element.previousSibling;
			if (previousNode && colonRegex.test(previousNode.textContent)) {
				previousNode = previousNode.previousSibling;
			}
			if (previousNode && prefixRegex.test(previousNode.textContent)) {
				title = $(element).trim();
				titles.push(title);
				toolsRedirect.setRedirectTextSuffix(title, '\n{{学名重定向}}');
			}
		});
		return [...new Set(titles)];
	});
};
