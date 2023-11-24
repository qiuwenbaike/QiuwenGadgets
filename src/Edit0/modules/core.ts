import {getMessage} from './i18n';

const edit0 = (): void => {
	const $body = $('body');

	const $content: JQuery = $body.find('#content, #mw_content').first();
	const $span1: JQuery = $content.find('span.mw-editsection:not(.plainlinks)').first();
	if (!$span1.length) {
		return;
	}

	const $span0: JQuery = $span1.clone();

	$body.find('body:not(.skin-citizen) #content h1#firstHeading').append($span0);
	$body.find('body.skin-citizen .mw-indicators').prepend($span0);

	for (const element of $span0.find('a')) {
		element.title = getMessage('Edit0');

		const {href} = element;
		const urlSearch = {
			summary: '/* top */ ',
			section: '0',
		};

		if (!/&(?:ve)?section=T/.test(href)) {
			// not transcluded
			element.href = new mw.Uri(href).extend(urlSearch).toString();
		} else if (/&vesection=/.test(href)) {
			// transcluded, VE
			element.href = new mw.Uri(href)
				.extend({
					...urlSearch,
					veaction: 'edit',
					vesection: '0',
				})
				.toString();
		} else {
			// transcluded, not VE
			element.href = new mw.Uri(href)
				.extend({
					...urlSearch,
					action: 'edit',
				})
				.toString();
		}
	}
};

export {edit0};
