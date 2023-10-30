export const addSubpageAndLog = (): void => {
	mw.loader.using(['ext.gadget.i18n']).done(() => {
		/* 向侧边栏添加“子页面”“日志”菜单 */
		const NSWithoutSubpages = [-1, 0, 14];
		if (!NSWithoutSubpages.includes(mw.config.get('wgNamespaceNumber'))) {
			mw.util.addPortletLink(
				'p-tb',
				`/wiki/Special:PrefixIndex/${mw.config.get('wgPageName')}`,
				window.wgULS('子页面', '子頁面'),
				't-subpage'
			);
		}
		const NSWithLog = [-1, 2, 3];
		if (!NSWithLog.includes(mw.config.get('wgNamespaceNumber'))) {
			mw.util.addPortletLink(
				'p-tb',
				`/wiki/Special:Logs?page=${mw.config.get('wgPageName')}`,
				window.wgULS('日志', '日誌'),
				't-log'
			);
		}
	});
};
