import type {UserRights} from '~/MarkRights/modules/types';

const getPermissionTemplate = (permission: UserRights): string | null => {
	const permissionTemplates = {
		patroller: 'Patrol granted',
		autoreviewer: 'Autopatrol granted',
		'massmessage-sender': 'MMS granted',
		templateeditor: 'Template editor granted',
		transwiki: 'Transwiki granted',
	} as const satisfies Partial<Record<UserRights, string>>;

	let template: string | null = null;
	for (const [pagePermission, templateName] of Object.entries(permissionTemplates)) {
		if (permission === pagePermission) {
			template = templateName;
		} else {
			continue;
		}
	}

	return template;
};

export {getPermissionTemplate};
