import {getMessage} from './i18n';

export const loadTippy = (): void => {
	mw.loader.using(['ext.DarkMode']).done(() => {
		tippy(document.getElementById('darkmode-button') as HTMLElement, {
			arrow: true,
			content: getMessage('EnableDisableDarkMode'),
			placement: 'left',
		});
	});

	mw.loader.using(['ext.CollapsibleSidebar.js']).done(() => {
		tippy(document.getElementById('sidebarButton') as HTMLElement, {
			arrow: true,
			content: getMessage('CollapseExpandSidebar'),
			placement: 'left',
		});
	});

	if (mw.config.get('skin') === 'vector') {
		mw.loader.using(['ext.CollapsibleSidebar.vector']).done(() => {
			tippy(document.getElementById('sidebarCollapse') as HTMLElement, {
				arrow: true,
				content: getMessage('CollapseExpandSidebar'),
				placement: 'right',
			});
		});
	}
};
