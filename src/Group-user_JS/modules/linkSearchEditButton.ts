import {$body} from '../../util';

export const linkSearchEditButton = (): void => {
	/* 在[[Special:LinkSearch]]显示“编辑”按钮 */
	if (mw.config.get('wgCanonicalSpecialPageName') === 'LinkSearch') {
		$body.find('.mw-spcontent a[href^="/wiki"]').each((_index, element): void => {
			$('<span>')
				.append($(document.createTextNode(' （')))
				.append($(`<a href="${(element as HTMLAnchorElement).href}?action=edit">编辑</a>`))
				.append($(document.createTextNode('）')))
				.insertAfter(element);
		});
	}
};
