const addEventListenerWithRemover = <
	Target extends Document | HTMLElement | Element | MediaQueryList | Window,
	Type extends Target extends Document
		? keyof DocumentEventMap
		: Target extends HTMLElement
		? keyof HTMLElementEventMap
		: Target extends MediaQueryList
		? keyof MediaQueryListEventMap
		: Target extends Window
		? keyof WindowEventMap
		: keyof GlobalEventHandlersEventMap,
	Listener extends Target extends Document
		? Type extends keyof DocumentEventMap
			? (this: Target, event: DocumentEventMap[Type]) => unknown
			: (this: Target, event: Event) => unknown
		: Target extends HTMLElement
		? Type extends keyof HTMLElementEventMap
			? (this: Target, event: HTMLElementEventMap[Type]) => unknown
			: (this: Target, event: Event) => unknown
		: Target extends Element
		? Type extends keyof ElementEventMap
			? (this: Target, event: ElementEventMap[Type]) => unknown
			: (this: Target, event: Event) => unknown
		: Target extends MediaQueryList
		? Type extends keyof MediaQueryListEventMap
			? (this: Target, event: MediaQueryListEventMap[Type]) => unknown
			: (this: Target, event: Event) => unknown
		: Target extends Window
		? Type extends keyof WindowEventMap
			? (this: Target, event: WindowEventMap[Type]) => unknown
			: (this: Target, event: Event) => unknown
		: (this: Target, event: Event) => unknown,
>({
	target,
	type,
	listener,
	options = {},
}: {
	target: Target;
	type: Type;
	listener: Listener;
	options?: AddEventListenerOptions;
}): {remove: () => void} => {
	target.addEventListener(type, listener as EventListenerOrEventListenerObject, options);
	return {
		remove: (): void => {
			target.removeEventListener(type, listener as EventListenerOrEventListenerObject, options);
		},
	};
};

const checkA11yConfirmKey = (event: KeyboardEvent | MouseEvent | JQuery.ClickEvent | JQuery.KeyDownEvent): boolean => {
	if (['click', 'keydown'].includes(event.type)) {
		if (event.type === 'keydown') {
			return ['Enter', ' '].includes((event as KeyboardEvent).key);
		}
		return true;
	}
	return false;
};

const ding = (value: string, autoHide = false, type: 'default' | 'info' | 'success' | 'warning' = 'default'): void => {
	autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
};

const initMwApi = (userAgent?: string): mw.Api => {
	return new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': userAgent,
			},
		},
	});
};

const oouiConfirmWithStyle = (message: string): JQuery.Promise<boolean> => {
	return OO.ui.confirm(
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
					.text(message)
			)
	);
};

export {addEventListenerWithRemover, checkA11yConfirmKey, ding, initMwApi, oouiConfirmWithStyle};
