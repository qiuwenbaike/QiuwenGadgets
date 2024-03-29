type UserRights =
	// 全站管理型权限
	| 'qiuwen'
	| 'steward'
	| 'checkuser'
	| 'suppress'
	| 'sysop'
	| 'interface-admin'
	| 'templateeditor'
	| 'transwiki'
	// 页面管理型权限
	| 'patroller'
	| 'autoreviewer'
	| 'senioreditor'
	// 大量操作型权限
	| 'eventsponsor'
	| 'massmessage-sender'
	// 确认权限
	| 'confirmed'
	| 'autoconfirmed'
	// 机器权限
	| 'bot'
	| 'flood'
	// 豁免
	| 'ipblock-exempt'
	| 'rnrsverify-exempt';

export {UserRights};
