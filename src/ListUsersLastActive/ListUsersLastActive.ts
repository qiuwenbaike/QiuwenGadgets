import {$body} from '../util';
import {checkLastActive} from './modules/core';

/**
 * @description 于[[Special:Listusers]]显示使用者最后编辑时间
 */
const ListUsersLastActiveLoad = () => {
	if (mw.config.get('wgCanonicalSpecialPageName') === 'Listusers') {
		$body.find('#mw-content-text>ul>li').each((_index: number, element: HTMLElement): void => {
			checkLastActive($(element).find('.mw-userlink>bdi').text(), element);
		});
	}
};

$(ListUsersLastActiveLoad);
