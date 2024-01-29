const SYSTEM_SCRIPT_LIST: string[] = [
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
const WEBMASTER_LIST: string[] = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia'];

const WG_SCRIPT: string = mw.config.get('wgScript');
const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];
const WG_USER_NAME: string = mw.config.get('wgUserName') ?? '';

export {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_SCRIPT, WG_USER_GROUPS, WG_USER_NAME};
