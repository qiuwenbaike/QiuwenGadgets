import {NS_WITHOUT_SUBPAGES, NS_WITH_LOG} from './constant';
import {getMessage} from './i18n';

/* 向侧边栏添加“子页面”菜单 */
export const addSubpage = (): void => {
	const portletId: string = 'p-tb';

	const prefixIndexURL: string = mw.util.getUrl(`Special:PrefixIndex/${mw.config.get('wgPageName')}`);

	if (!NS_WITHOUT_SUBPAGES.includes(mw.config.get('wgNamespaceNumber'))) {
		mw.util.addPortletLink(portletId, prefixIndexURL, getMessage('Subpages'), 't-subpage');
	}
};

/* 向侧边栏添加“日志”菜单 */
export const addLog = (): void => {
	const portletId: string = 'p-tb';

	const logURL: string = mw.util.getUrl('Special:Logs', {
		page: mw.config.get('wgPageName'),
	});

	if (!NS_WITH_LOG.includes(mw.config.get('wgNamespaceNumber'))) {
		mw.util.addPortletLink(portletId, logURL, getMessage('Log'), 't-log');
	}
};
