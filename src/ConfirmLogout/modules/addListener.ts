import * as OPTIONS from '../options.json';
import {refreshEventListener} from './util/refreshEventListener';

const {skin} = mw.config.get();

const clickListener = (openConfirmDialog: () => void, event: JQuery.ClickEvent): void => {
	event.preventDefault();
	openConfirmDialog();
};

const addListener = ($element: JQuery, openConfirmDialog: () => void): void => {
	refreshEventListener($element, (event: JQuery.ClickEvent): void => {
		clickListener(openConfirmDialog, event);
	});

	if (skin !== 'vector-2022') {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $element.parents('body');

	const observerCallback = (_mutations: MutationRecord[], observer: MutationObserver): void => {
		if (!$body.hasClass('vector-sticky-header-visible')) {
			return;
		}

		const SELECTOR: string = OPTIONS.logoutElementSelectorOfVector2022StickyHeader;
		const element: HTMLAnchorElement | null = document.querySelector(SELECTOR);
		if (!element) {
			return;
		}

		const elementClone: Node = element.cloneNode(true);
		element.replaceWith(elementClone);

		refreshEventListener($body.find(SELECTOR), (event: JQuery.ClickEvent): void => {
			clickListener(openConfirmDialog, event);
		});
		observer.disconnect();
	};
	const mutationObserver: MutationObserver = new MutationObserver(observerCallback);
	mutationObserver.observe($body.get(0) ?? document.documentElement, {
		attributes: true,
		attributeFilter: ['class'],
	});
};

export {addListener};
