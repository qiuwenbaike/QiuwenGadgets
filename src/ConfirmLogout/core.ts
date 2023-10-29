import {ding} from '../util';
import {getMessage} from './i18n';

export const confirmLogout = (): void => {
	const clickListener = (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
		event.preventDefault();
		OO.ui
			.confirm(
				$('<div>')
					.addClass('oo-ui-window-foot')
					.css({
						border: '.1rem solid #0645ad',
						display: 'flex',
						'justify-content': 'space-evenly',
					})
					.append(
						$('<span>')
							.css({
								'font-size': '1.2rem',
								'font-weight': '500',
								'line-height': '1.8',
								padding: '.4em 0',
							})
							.text(getMessage('Confirm'))
					)
			)
			.then((isConfirm: boolean): void => {
				if (!isConfirm) {
					return;
				}
				ding(mw.message('logging-out-notify').toString(), false);
				const api: mw.Api = new mw.Api({
					ajax: {
						headers: {
							'Api-User-Agent': `Qiuwen/1.1 (ConfirmLogout/1.1; ${mw.config.get('wgWikiID')})`,
						},
					},
				});
				api.postWithEditToken({
					action: 'logout',
				})
					.then((): void => {
						location.reload();
					})
					.catch((error: never): void => {
						console.error('[ConfirmLogout] Ajax error:', error);
						ding(getMessage('Network error'), false, 'warning');
					});
			});
	};
	const addEventListener = (_$element: JQuery<HTMLAnchorElement>) => {
		const hoverListener = (): void => {
			_$element.off('click');
			_$element.on('click', clickListener);
		};
		_$element.on('mouseover touchstart', hoverListener);
	};
	const $element: JQuery<HTMLAnchorElement> = $('#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a');
	addEventListener($element);

	if (mw.config.get('skin') !== 'vector-2022') {
		return;
	}
	const observerCallback = (_mutations: MutationRecord[], observer: MutationObserver): void => {
		if (!$(document.body).hasClass('vector-sticky-header-visible')) {
			return;
		}
		const SELECTOR = '#pt-logout-sticky-header>a';
		const element: HTMLAnchorElement | null = document.querySelector(SELECTOR);
		if (!element) {
			return;
		}
		const elementClone: Node = element.cloneNode(true);
		element.replaceWith(elementClone);
		addEventListener($(SELECTOR));
		observer.disconnect();
	};
	const mutationObserver: MutationObserver = new MutationObserver(observerCallback);
	mutationObserver.observe(document.body, {
		attributes: true,
		attributeFilter: ['class'],
	});
};
