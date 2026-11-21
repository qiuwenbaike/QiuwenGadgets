import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {getMessage} from './i18n';

/** Rollback links that already carry the summary prompt, so repeated `wikipage.content` updates stay incremental. */
const boundLinks = new WeakSet<HTMLAnchorElement>();

const bindLink = (element: HTMLAnchorElement): void => {
	if (boundLinks.has(element)) {
		return;
	}
	boundLinks.add(element);

	$(element)
		.on(
			'click',
			filterAlteredClicks((event: JQuery.ClickEvent): void => {
				event.preventDefault();

				let {href} = event.currentTarget as HTMLAnchorElement;

				let summary: string | null = prompt(getMessage('Prompt'));
				if (summary === null) {
					/* empty */
				} else if (summary === '') {
					location.assign(href);
				} else {
					const username: string | null = mw.util.getParamValue('from', href);
					if (username) {
						summary = getMessage('Rollback edits by').replaceAll('$1', username) + summary;
					} else {
						summary = getMessage('Rollback edits by a hidden user') + summary;
					}

					href += `&summary=${encodeURIComponent(summary)}`;

					location.assign(href);
				}
			})
		)
		.css('color', '#099');
};

const updateLinks = ($content: JQuery): void => {
	// Only touch the nodes that were just added: `$content` is what `wikipage.content` passed in, not the whole page.
	const $links: JQuery<HTMLElement> = $content
		.find('.mw-rollback-link a')
		.add($content.filter('.mw-rollback-link a'));

	for (const element of $links) {
		bindLink(element as HTMLAnchorElement);
	}
};

export {updateLinks};
