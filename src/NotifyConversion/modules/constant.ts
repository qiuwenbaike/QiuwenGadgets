const GADGET_NAME = 'ext.gadget.NotifyConversion';

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

const wgUserName: string = mw.config.get('wgUserName') || '';
const wgUserGroups: string[] = mw.config.get('wgUserGroups') || [];
const wgUserVariant: string | null = mw.config.get('wgUserVariant');

const GOOD_VARIANTS: string[] = ['zh-cn', 'zh-my', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw'];

export {GADGET_NAME, SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, wgUserName, wgUserGroups, wgUserVariant, GOOD_VARIANTS};
