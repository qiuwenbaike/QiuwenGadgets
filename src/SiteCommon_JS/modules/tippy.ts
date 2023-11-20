import {WG_SKIN} from './constant';

const loadTippy = (): void => {
	const getContent = (reference: Element): string => {
		return reference.getAttribute('alt') as string;
	};
	const onCreateCallback = (instance: ReturnType<typeof tippy>[0]): void => {
		instance.reference.removeAttribute('title');
	};
	const onShowCallback = (instance: ReturnType<typeof tippy>[0]): void => {
		onCreateCallback(instance);
		instance.setContent(getContent(instance.reference));
	};

	mw.loader.using('ext.CollapsibleSidebar.js').then((): void => {
		tippy('#sidebarButton', {
			arrow: true,
			content: getContent,
			placement: 'left',
			onCreate: onCreateCallback,
			onShow: onShowCallback,
		});
	});

	if (WG_SKIN === 'vector') {
		mw.loader.using('ext.CollapsibleSidebar.vector').then(() => {
			tippy('#sidebarCollapse', {
				arrow: true,
				content: getContent,
				placement: 'right',
				onCreate: onCreateCallback,
				onShow: onShowCallback,
			});
		});
	}

	mw.loader.using('ext.DarkMode').then((): void => {
		tippy('#darkmode-button', {
			arrow: true,
			content: getContent,
			placement: 'left',
			onCreate: onCreateCallback,
			onShow: onShowCallback,
		});
	});

	$(function tippyForCitizenHeader(): void {
		if (WG_SKIN !== 'citizen') {
			return;
		}

		const $body: JQuery<HTMLBodyElement> = $('body');
		for (const element of $body.find(
			'.citizen-header label[title],.citizen-header .mw-echo-notifications-badge,.citizen-header__logo a,.page-actions>nav>ul>li a,.page-actions__button'
		)) {
			const $element = $(element);
			let title: string | undefined = $element.attr('title');
			if (!title) {
				continue;
			}

			title = title.replace(/\s*?\[.+?]$/, '');

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
