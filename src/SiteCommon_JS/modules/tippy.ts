import {WG_SKIN} from './constant';
import {getMessage} from './i18n';

const loadTippy = (): void => {
	mw.loader.using('ext.CollapsibleSidebar.js').then((): void => {
		tippy(document.getElementById('sidebarButton') as HTMLElement, {
			arrow: true,
			content: getMessage('CollapseExpandSidebar'),
			placement: 'left',
		});
	});

	if (WG_SKIN === 'vector') {
		mw.loader.using('ext.CollapsibleSidebar.vector').then(() => {
			tippy(document.getElementById('sidebarCollapse') as HTMLElement, {
				arrow: true,
				content: getMessage('CollapseExpandSidebar'),
				placement: 'right',
			});
		});
	}

	mw.loader.using('ext.DarkMode').then((): void => {
		tippy(document.getElementById('darkmode-button') as HTMLElement, {
			arrow: true,
			content: getMessage('EnableDisableDarkMode'),
			placement: 'left',
		});
	});

	$(function tippyForCitizenHeader(): void {
		if (WG_SKIN !== 'citizen') {
			return;
		}
		for (const element of $(
			'.citizen-header label[title],.citizen-header .mw-echo-notifications-badge,.citizen-header__logo a'
		)) {
			const $element = $(element);
			const title: string | undefined = $element.attr('title');
			if (!title) {
				continue;
			}
			$element.attr({
				'aria-label': title,
				title: '',
			});
			tippy($element.get(0) as HTMLElement, {
				arrow: true,
				content: title,
				placement: 'bottom',
			});
		}
	});
};

export {loadTippy};
