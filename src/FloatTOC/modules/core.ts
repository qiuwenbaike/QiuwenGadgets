import {getMessage} from './i18n';
type State = 'close' | 'open';
interface Config {
	floatTOC: State;
	originTOC: State;
}

export const skin: string = mw.config.get('skin');
export const originToc: HTMLDivElement | null = document.querySelector('#toc');
export const floatTOC = (): void => {
	if (!originToc) {
		return;
	}
	const ID = 'floatTOC';
	let config: Config = mw.storage.getObject(ID);
	if (!config) {
		config = {floatTOC: window.outerHeight < window.outerWidth ? 'open' : 'close', originTOC: 'open'};
	}
	const style: CSSStyleSheet = mw.util.addCSS(
		'.mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{-webkit-transform:translateX(-999px);-moz-transform:translateX(-999px);transform:translateX(-999px)}.mw-notification-visible{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}'
	);
	style.disabled = true;
	const toc: HTMLDivElement = originToc.cloneNode(true) as HTMLDivElement;
	toc.querySelector('input')?.remove();
	toc.querySelector('.toctogglespan')?.remove();
	const $toc: JQuery = $(toc);
	const $floatToc: JQuery = $toc
		.clone()
		.removeAttr('id')
		.prepend(
			$('<span>')
				.addClass('oo-ui-indicatorElement-indicator oo-ui-icon-close')
				.attr({
					id: 'close',
					title: getMessage('Close'),
					role: 'button',
					tabindex: '0',
				})
		);
	const $floatTocOpener: JQuery<HTMLDivElement> = $<HTMLDivElement>('<div>')
		.addClass('noprint')
		.attr({
			id: 'floatToc-opener',
			title: getMessage('Contents'),
			role: 'button',
			tabindex: '0',
		})
		.append(
			$('<span>').addClass('oo-ui-indicatorElement-indicator oo-ui-icon-reference'),
			$('<span>').text(getMessage('Contents'))
		)
		.hide()
		.appendTo(document.body);
	let isShow: boolean;
	let preNotification: ReturnType<typeof mw.notification.notify> | undefined;
	let disableStyleTimer: ReturnType<typeof setTimeout>;
	const checkA11yKey = (
		event: JQuery.ClickEvent | JQuery.KeyDownEvent,
		{preventDefault = false, stopPropagation = false}: {preventDefault?: boolean; stopPropagation?: boolean} = {}
	): boolean => {
		if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
			return true;
		}
		if (preventDefault) {
			event.preventDefault();
		}
		if (stopPropagation) {
			event.stopPropagation();
		}
		return false;
	};
	const disableStyle = (): void => {
		if (disableStyleTimer) {
			clearTimeout(disableStyleTimer);
		}
		disableStyleTimer = setTimeout((): void => {
			if (!isShow) {
				style.disabled = true;
			}
		}, 5000);
	};
	const storeState = (target: keyof Config, state: State): void => {
		config[target] = state;
		mw.storage.setObject(ID, config);
	};
	const collapseOriginToc = (): void => {
		if (skin !== 'citizen') {
			return;
		}
		let isCollapse = config.originTOC === 'close';
		const $originTocTitle: JQuery = $('#toc .toctitle');
		const $originTocItem: JQuery<HTMLUListElement> = $('#toc ul');
		const $tocToggle: JQuery<HTMLSpanElement> = $('<span>').addClass(
			'oo-ui-indicatorElement-indicator oo-ui-icon-downTriangle'
		);
		const getToggleElement = (): JQuery<HTMLSpanElement> => {
			let $element: JQuery<HTMLSpanElement> = $tocToggle.clone();
			$element = isCollapse
				? $element.attr('title', getMessage('Expand'))
				: $element.attr('title', getMessage('Collapse')).addClass('collapse');
			return $element;
		};
		const collapseToggle = (): void => {
			const $element: JQuery<HTMLSpanElement> = $originTocTitle.find('.oo-ui-indicatorElement-indicator');
			$element.toggleClass('collapse');
			if (isCollapse) {
				$element.attr('title', getMessage('Expand'));
			} else {
				$element.attr('title', getMessage('Collapse'));
			}
		};
		$originTocTitle.append(getToggleElement());
		$originTocTitle.on('click', (): void => {
			isCollapse = !isCollapse;
			isCollapse ? storeState('originTOC', 'close') : storeState('originTOC', 'open');
			collapseToggle();
			$originTocItem.fadeToggle();
		});
		if (isCollapse) {
			$originTocItem.fadeOut();
		}
	};
	const smoothScroll = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (skin === 'citizen') {
			return;
		}
		const {target} = event;
		const $target: JQuery = $(target).parent();
		const href: string | undefined = $target.attr('href');
		if (!href) {
			return;
		}
		const anchorOffset: JQuery.Coordinates | undefined = $(href).offset();
		if (!anchorOffset) {
			return;
		}
		event.preventDefault();
		$('html, body').animate(
			{
				scrollTop: `${anchorOffset.top}px`,
			},
			{
				duration: 660,
				easing: 'swing',
			}
		);
	};
	const closeNotification = (notification: ReturnType<typeof mw.notification.notify>): void => {
		notification.close();
		$floatTocOpener.fadeIn();
		storeState('floatTOC', 'close');
		disableStyle();
	};
	const toggleToc = (
		_isShow: boolean | 'open' = true,
		_preNotification: typeof preNotification = undefined
	): typeof preNotification => {
		_preNotification?.close();
		isShow = !!_isShow;
		switch (_isShow) {
			case true:
				if (config.floatTOC === 'close') {
					$floatTocOpener.fadeIn();
					return;
				}
				break;
			case 'open':
				$floatTocOpener.fadeOut();
				storeState('floatTOC', 'open');
				break;
			default:
				$floatTocOpener.fadeOut();
				disableStyle();
				return;
		}
		style.disabled = false;
		if (_preNotification) {
			_preNotification.start();
		} else {
			_preNotification = mw.notification.notify($floatToc, {classes: 'noprint', id: ID, autoHide: false});
			const notificationListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
				if (
					checkA11yKey(event, {
						stopPropagation: true,
					})
				) {
					return;
				}
				const {target}: {target: HTMLElement} = event;
				if (target.id === 'close') {
					closeNotification(_preNotification as ReturnType<typeof mw.notification.notify>);
				} else {
					smoothScroll(event);
				}
			};
			_preNotification.$notification.on('click', notificationListener);
			_preNotification.$notification.on('keydown', notificationListener);
		}
		return _preNotification;
	};
	if ('IntersectionObserver' in window) {
		const observerCallback = (entries: IntersectionObserverEntry[]): void => {
			const [entry] = entries;
			if (!entry) {
				return;
			}
			const {intersectionRatio} = entry;
			preNotification = toggleToc(intersectionRatio === 0, preNotification);
		};
		const intersectionObserver: IntersectionObserver = new IntersectionObserver(observerCallback);
		intersectionObserver.observe(originToc);
	}
	collapseOriginToc();
	const openerListener = (event: JQuery.ClickEvent<HTMLDivElement> | JQuery.KeyDownEvent<HTMLDivElement>): void => {
		if (
			checkA11yKey(event, {
				preventDefault: true,
			})
		) {
			return;
		}
		preNotification = toggleToc('open');
	};
	$floatTocOpener.on('click', openerListener);
	$floatTocOpener.on('keydown', openerListener);
};
