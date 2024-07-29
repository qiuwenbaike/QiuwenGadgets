import type {UserRights} from '~/MarkRights/modules/types';

const getPagePermissions = (): UserRights | null => {
	const {wgPageName} = mw.config.get();

	const pagePermissions = {
		'Qiuwen_talk:权限申请/申请巡查回退权': 'patroller',
		'Qiuwen_talk:权限申请/申请巡查豁免权': 'autoreviewer',
		'Qiuwen_talk:权限申请/申请确认用户权': 'confirmed',
		'Qiuwen_talk:权限申请/申请大量消息发送权': 'massmessage-sender',
		'Qiuwen_talk:权限申请/申请活动组织权': 'eventsponsor',
		'Qiuwen_talk:权限申请/申请导入权': 'transwiki',
		'Qiuwen_talk:权限申请/申请模板编辑权': 'templateeditor',
		'Qiuwen_talk:权限申请/申请机器人权限': 'bot',
		'Qiuwen_talk:权限申请/申请实名制验证豁免': 'rnrsverify-exempt',
	} as const satisfies Partial<Record<string, UserRights>>;

	let permission: UserRights | null = null;
	for (const [pageName, pagePermission] of Object.entries(pagePermissions)) {
		if (pageName === wgPageName) {
			permission = pagePermission;
		} else {
			continue;
		}
	}

	return permission;
};

export {getPagePermissions};
