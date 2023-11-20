import {getMessage} from './i18n';

export const edit0 = (): void => {
	const $body = $('body');

	const localTitle: string = getMessage('Edit0');
	const $ourContent: JQuery = $body.find('#content, #mw_content').first();

	const $span1: JQuery = $ourContent.find('span.mw-editsection:not(.plainlinks)').first();
	if (!$span1.length) {
		return;
	}
	const $span0: JQuery = $span1.clone();

	$body.find('body:not(.skin-citizen) #content h1#firstHeading').append($span0);
	$body.find('body.skin-citizen .mw-indicators').prepend($span0);

	$span0.find('a').each((_index: number, element: HTMLAnchorElement): void => {
		const $a: JQuery<HTMLAnchorElement> = $(element);
		const href: string = $a.attr('href') ?? '';
		$a.attr('title', localTitle);
		if (!/&(ve|)section=T/.test(href)) {
			// not transcluded
			$a.attr('href', href.replace(/&(ve|)section=\d+/, '&$1section=0&summary=/*%20top%20*/%20'));
		} else if (/&vesection=/.test(href)) {
			// transcluded, VE
			$a.attr(
				'href',
				`${mw.util.getUrl(mw.config.get('wgPageName'))}?veaction=edit&vesection=0&summary=/*%20top%20*/%20`
			);
		} else {
			// transcluded, not VE
			$a.attr(
				'href',
				`${mw.util.getUrl(mw.config.get('wgPageName'))}?action=edit&section=0&summary=/*%20top%20*/%20`
			);
		}
	});
};
