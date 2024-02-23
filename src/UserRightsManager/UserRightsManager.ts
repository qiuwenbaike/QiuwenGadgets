import {PAGE_PERM} from './modules/constant';
import {getBody} from 'ext.gadget.Util';
import {showDialog} from './modules/core';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgPageName} = mw.config.get();

	if (!Object.keys(PAGE_PERM).includes(wgPageName)) {
		return;
	}

	const permission: string | undefined = PAGE_PERM[wgPageName];

	$body.find('.perm-assign-permissions a').on('click', (event: JQuery.ClickEvent): void => {
		if (permission === 'AutoWikiBrowser') {
			return;
		}

		event.preventDefault();

		const $element: JQuery<HTMLAnchorElement> = $(event.target as HTMLAnchorElement);

		const username: string = mw.util.getParamValue('user', $element.attr('href')) ?? '';
		const sectionId: string = $element.parents('dl').prev('h4').find('.mw-headline').attr('id') ?? '';
		const index: string =
			sectionId === `User:${username}` ? '' : sectionId.replace('User:', '').replace(username, '');

		showDialog({
			$body,
			_index: index,
			_userName: username,
			_permission: permission,
		});
	});
});
