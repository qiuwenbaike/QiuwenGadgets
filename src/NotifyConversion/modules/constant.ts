export const GADGET_NAME = 'ext.gadget.NotifyConversion';

export const SYSTEM_SCRIPT_LIST = [
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

export const WEBMASTER_LIST = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia'];

export const wgUserName: string = mw.config.get('wgUserName') || '';
export const wgUserGroups: string[] = mw.config.get('wgUserGroups') || [];
export const wgUserVariant: string | null = mw.config.get('wgUserVariant');

export const GOOD_VARIANTS = ['zh-cn', 'zh-my', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw'];
