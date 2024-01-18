const USER_SCRIPT_LIST: string[] = [
	'滥用过滤器',
	'求闻编者',
	'求闻百科社区',
	'Example',
	'External contributors',
	'Maintenance script',
	'MediaWiki default',
	'MediaWiki message delivery',
	'New user page',
];
const USER_WEBMASTER_LIST: string[] = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia'];

const WG_SCRIPT: string = mw.config.get('wgScript');
const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];
const WG_USER_NAME: string = mw.config.get('wgUserName') ?? '';

export {USER_SCRIPT_LIST, USER_WEBMASTER_LIST, WG_SCRIPT, WG_USER_GROUPS, WG_USER_NAME};
