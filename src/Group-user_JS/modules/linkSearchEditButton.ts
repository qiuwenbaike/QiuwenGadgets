import {getMessage} from './i18n';

export const linkSearchEditButton = (): void => {
	/* 在[[Special:LinkSearch]]显示“编辑”按钮 */
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'LinkSearch') {
		return;
	}
	const $body: JQuery<HTMLBodyElement> = $('body');
	$body.find('.mw-spcontent a[href^="/wiki"]').each((_index, element): void => {
		$('<span>')
			.append($(document.createTextNode(' （')))
			.append(
				$('<a>')
					.attr('href', `${(element as HTMLAnchorElement).href}?action=edit`)
					.text(getMessage('Edit'))
			)
			.append($(document.createTextNode('）')))
			.insertAfter(element);
	});
};
