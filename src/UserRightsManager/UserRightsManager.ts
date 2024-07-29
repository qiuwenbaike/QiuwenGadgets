import {getBody} from 'ext.gadget.Util';
import {getPagePermissions} from './modules/getPagePermissions';
import {showDialog} from './modules/showDialog';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const permission = getPagePermissions();
	if (!permission) {
		return;
	}

	$body.find('.perm-assign-permissions a').on('click', function (event) {
		event.preventDefault();

		const userName = mw.util.getParamValue('user', $(this).attr('href'));
		if (!userName) {
			return;
		}

		const $element: JQuery<HTMLAnchorElement> = $(event.target as HTMLAnchorElement);
		const sectionId: string = $element.parents('dl').prev('h4').find('.mw-headline').attr('id') ?? '';
		const index: string =
			sectionId === `User:${userName}` || sectionId === `User:${userName}`.replace(/"/g, '.22').replace(/ /g, '_')
				? ''
				: sectionId
						.replace('User:', '')
						.replace(userName, '')
						.replace(userName.replace(/"/g, '.22').replace(/ /g, '_'), '');

		showDialog({$body, userName, permission, index});
	});
});
