import type {UserRights} from '~/MarkRights/modules/types';

const getPermissionNames = () => {
	return {
		patroller: '巡查员',
		autoreviewer: '巡查豁免者',
		confirmed: '确认用户',
		'massmessage-sender': '大量消息发送者',
		eventsponsor: '活动组织者',
		transwiki: '导入者',
		templateeditor: '模板编辑员',
		bot: '机器人',
		'rnrsverify-exempt': '实名制验证豁免',
	} as const satisfies Partial<Record<UserRights, string>>;
};

const permissionNames = getPermissionNames();

const getPermissonName: GetMessages<typeof permissionNames> = (key) => {
	return permissionNames[key] || key;
};

const getPermissionByPage = () => {
	return {
		'Qiuwen_talk:权限申请/申请巡查回退权': 'patroller',
		'Qiuwen_talk:权限申请/申请巡查豁免权': 'autoreviewer',
		'Qiuwen_talk:权限申请/申请确认用户权': 'confirmed',
		'Qiuwen_talk:权限申请/申请大量消息发送权': 'massmessage-sender',
		'Qiuwen_talk:权限申请/申请活动组织权': 'eventsponsor',
		'Qiuwen_talk:权限申请/申请导入权': 'transwiki',
		'Qiuwen_talk:权限申请/申请模板编辑权': 'templateeditor',
		'Qiuwen_talk:权限申请/申请机器人权限': 'bot',
		'Qiuwen_talk:权限申请/申请实名制验证豁免': 'rnrsverify-exempt',
	} as Record<string, UserRights>;
};

const permissionRequested = getPermissionByPage();

const getPermissionRequested: GetMessages<typeof permissionRequested> = (key) => {
	return permissionRequested[key] || key;
};

const getPermissionTemplates = () => {
	return {
		patroller: 'Patrolgranted',
		autoreviewer: 'Autopatrolgranted',
		'massmessage-sender': 'MMSgranted',
		templateeditor: 'Template editor granted',
	} as const satisfies Partial<Record<UserRights, string>>;
};

const permissionTemplate = getPermissionTemplates();

const getpermissionTemplate: GetMessages<typeof permissionTemplate> = (key) => {
	return permissionTemplate[key] || key;
};

export {getPermissonName, getPermissionRequested, getpermissionTemplate};
