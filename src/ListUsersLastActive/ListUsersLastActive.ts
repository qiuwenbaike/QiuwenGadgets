/**
 * 于[[Special:Listusers]]显示使用者最后编辑时间
 */
import {checkLastActive} from './modules/core';

const ListUsersLastActiveLoad = (): void => {
	if (mw.config.get('wgCanonicalSpecialPageName') === 'Listusers') {
		const $body: JQuery<HTMLBodyElement> = $('body');
		$body.find('#mw-content-text>ul>li').each((_index: number, element: HTMLElement): void => {
			checkLastActive($(element).find('.mw-userlink>bdi').text(), element);
		});
	}
};

$(ListUsersLastActiveLoad);
