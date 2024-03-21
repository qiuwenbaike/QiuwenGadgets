import {getBody} from 'ext.gadget.Util';
import {getPermissionRequested} from './modules/i18n';
import {showDialog} from './modules/core.js';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgPageName} = mw.config.get();

	if (!getPermissionRequested(wgPageName) || getPermissionRequested(wgPageName) === wgPageName) {
		return;
	}

	const permission: string | undefined = getPermissionRequested(wgPageName);

	if (permission === 'AutoWikiBrowser') {
		return;
	}

	$body.find('.perm-assign-permissions a').on('click', (event: JQuery.ClickEvent): void => {
		event.preventDefault();

		const $element: JQuery<HTMLAnchorElement> = $(event.target as HTMLAnchorElement);

		const userName: string = mw.util.getParamValue('user', $element.attr('href')) ?? '';
		const sectionId: string = $element.parents('dl').prev('h4').find('.mw-headline').attr('id') ?? '';
		const index: string =
			sectionId === `User:${userName}` ? '' : sectionId.replace('User:', '').replace(userName, '');

		showDialog({
			index,
			userName,
			permission,
			$body,
		});
	});
});
