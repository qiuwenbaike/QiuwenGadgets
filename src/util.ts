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

const changeOpacityWhenMouseEnterOrLeave = (event: MouseEvent | JQuery.TriggeredEvent, opacity = 0.7): void => {
	event.currentTarget.style.opacity = event.type === 'mouseenter' ? '1' : opacity.toString();
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

const ding = (
	value: string,
	autoHide = false,
	type: 'default' | 'info' | 'success' | 'warning' | 'error' = 'default'
): void => {
	autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
};

const generateSvgDataUrl = (svg: string): string => {
	/*!
	 * svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
	 *
	 * @author Allan Moreno
	 * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
	 */
	svg = svg.trim();
	// remove xml, doctype, generator...
	svg = svg.slice(svg.indexOf('<svg'));
	// soft validate
	if (!svg.startsWith('<svg') || !svg.endsWith('svg>')) {
		return '';
	}
	// add namespace if necessary
	if (!svg.includes('http://www.w3.org/2000/svg')) {
		svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
	}
	// remove comments
	svg = svg.replace(/<!--.{1,}-->/g, '');
	// remove unnecessary attributes
	svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, '');
	// replace nested quotes
	svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
	// replace double quotes
	svg = svg.replace(/"/g, "'");
	// remove empty spaces between tags
	svg = svg.replace(/>\s{1,}</g, '><');
	// remove duplicate spaces
	svg = svg.replace(/\s{2,}/g, ' ');
	// trim again
	svg = svg.trim();
	// soft validate again
	if (!svg.startsWith('<svg') || !svg.endsWith('svg>')) {
		return '';
	}
	// replace ampersand
	svg = svg.replace(/&/g, '&amp;');
	// encode only unsafe symbols
	svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
	// build data uri
	svg = `data:image/svg+xml,${svg}`;
	// ok, ship it!
	return svg;
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

const scrollTop = (
	targetHeight: number | string,
	// eslint-disable-next-line unicorn/no-object-as-default-parameter
	effectsOptionsOrDuration: JQuery.EffectsOptions<HTMLElement> | number | 'fast' | 'slow' = {
		easing: 'linear',
	}
): void => {
	const options: JQuery.EffectsOptions<HTMLElement> =
		typeof effectsOptionsOrDuration === 'number' || typeof effectsOptionsOrDuration === 'string'
			? {
					duration: effectsOptionsOrDuration,
					easing: 'linear',
			  }
			: {
					duration: 'slow',
					easing: 'linear',
					...effectsOptionsOrDuration,
			  };
	$('html, body').animate(
		{
			scrollTop: targetHeight,
		},
		options
	);
};

export {
	addEventListenerWithRemover,
	changeOpacityWhenMouseEnterOrLeave,
	checkA11yConfirmKey,
	ding,
	generateSvgDataUrl,
	initMwApi,
	oouiConfirmWithStyle,
	scrollTop,
};
