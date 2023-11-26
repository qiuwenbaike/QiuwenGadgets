import {getMessage} from './i18n';

export const addSubpageAndLog = (): void => {
	/* 向侧边栏添加“子页面”菜单 */
	const portletId = 'p-tb';
	const NSWithoutSubpages = [-1, 0, 14];
	const prefixIndexURL = mw.util.getUrl(`Special:PrefixIndex/${mw.config.get('wgPageName')}`);
	if (!NSWithoutSubpages.includes(mw.config.get('wgNamespaceNumber'))) {
		mw.util.addPortletLink(portletId, prefixIndexURL, getMessage('Subpages'), 't-subpage');
	}
	/* 向侧边栏添加“日志”菜单 */
	const NSWithLog = [-1, 2, 3];
	const logURL = mw.util.getUrl('Special:Logs', {
		page: mw.config.get('wgPageName'),
	});
	if (!NSWithLog.includes(mw.config.get('wgNamespaceNumber'))) {
		mw.util.addPortletLink(portletId, logURL, getMessage('Log'), 't-log');
	}
};
