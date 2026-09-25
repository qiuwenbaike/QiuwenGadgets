import * as OPTIONS from '../options.json';
import type {Config, State} from './types';
import {type App as VueApp, createApp, reactive} from 'vue';
import App from '../App.vue';
import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {generateTogglerElement} from './util/generateTogglerElement';
import {getConfig} from './getConfig';
import {getMessage} from './i18n';
import {scrollTop} from 'ext.gadget.Util';

interface FloatTocState {
	open: boolean;
	opener: boolean;
}

const floatTOC = ($originToc: JQuery): void => {
	const {skin} = mw.config.get();
	const originToc: HTMLElement = $originToc.get(0) as HTMLElement;
	const $body: JQuery<HTMLBodyElement> = $originToc.parents('body');

	// Clone the origin TOC and clean it up for the floating panel
	const toc: HTMLElement = originToc.cloneNode(true) as HTMLElement;
	toc.querySelector('input')?.remove();
	toc.querySelector('.toctogglespan')?.remove();
	toc.removeAttribute('id');
	const tocHtml: string = toc.outerHTML;

	const config: Config = getConfig(OPTIONS.elementId);

	const state: FloatTocState = reactive({
		open: false,
		opener: false,
	});

	const storeState = (target: keyof Config, value: State): void => {
		config[target] = value;
		mw.storage.setObject(OPTIONS.elementId, config);
	};

	const showPanel = (): void => {
		state.open = true;
		state.opener = false;
	};

	const showOpener = (): void => {
		state.open = false;
		state.opener = true;
	};

	const hideAll = (): void => {
		state.open = false;
		state.opener = false;
	};

	const smoothScroll = (event: MouseEvent): void => {
		if (skin === 'citizen') {
			return;
		}

		const target = event.target as HTMLElement;
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
		scrollTop(`${anchorOffset.top}px`);
	};

	// Ignore altered (Ctrl/Cmd/Shift/Alt or non-primary button) clicks so
	// that they keep their native behavior (e.g. open in a new tab)
	const triggerScroll = filterAlteredClicks(smoothScroll);

	const triggerOpen = (): void => {
		storeState('floatTOC', 'open');
		showPanel();
	};

	const triggerClose = (): void => {
		storeState('floatTOC', 'close');
		showOpener();
	};

	const root: HTMLElement = document.createElement('div');
	$body.append(root);

	const app: VueApp<Element> = createApp(App, {
		state,
		tocHtml,
		triggerOpen,
		triggerClose,
		triggerScroll,
	});
	app.mount(root);

	const observerCallback = (entries: IntersectionObserverEntry[]): void => {
		const [entry] = entries;
		if (!entry) {
			return;
		}
		if (entry.intersectionRatio === 0) {
			if (config.floatTOC === 'close') {
				showOpener();
			} else {
				showPanel();
			}
		} else {
			hideAll();
		}
	};
	const intersectionObserver: IntersectionObserver = new IntersectionObserver(observerCallback);
	intersectionObserver.observe(originToc);

	const collapseOriginToc = (): void => {
		if (skin !== 'citizen') {
			return;
		}

		const isCollapse: boolean = config.originTOC === 'close';

		const $originTocTitle: JQuery = $body.find('#toc .toctitle');
		const $originTocItem: JQuery = $body.find('#toc ul');

		const $toggler: JQuery = generateTogglerElement(isCollapse);
		$originTocTitle.append($toggler);

		const collapseToggle = (): void => {
			const $element: JQuery = $originTocTitle.find('.float-toc__toggler');
			$element.toggleClass('collapse');
			if (isCollapse) {
				$element.attr('title', getMessage('Expand'));
			} else {
				$element.attr('title', getMessage('Collapse'));
			}
		};
		$originTocTitle.on('click', (): void => {
			storeState('originTOC', isCollapse ? 'open' : 'close');
			collapseToggle();
			$originTocItem.fadeToggle();
		});

		if (isCollapse) {
			$originTocItem.fadeOut();
		}
	};
	collapseOriginToc();
};

export {floatTOC};
