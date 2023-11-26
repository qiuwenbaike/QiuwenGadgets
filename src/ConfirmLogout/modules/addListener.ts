import * as OPTIONS from '../options.json';
import {WG_SKIN} from './constant';
import {getMessage} from './i18n';
import {logout} from './logout';
import {oouiConfirmWithStyle} from '../../util';
import {refreshEventListener} from './util/refreshEventListener';

const addListener = ($element: JQuery<HTMLAnchorElement>): void => {
	const clickListener = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
		event.preventDefault();

		const isConfirm: boolean = await oouiConfirmWithStyle(getMessage('Confirm'));
		if (!isConfirm) {
			return;
		}

		const toastifyInstance: ToastifyInstance = toastify(
			{
				text: mw.message('logging-out-notify').toString(),
				duration: -1,
			},
			'info'
		);
		logout(toastifyInstance);
	};

	refreshEventListener($element, clickListener);

	if (WG_SKIN !== 'vector-2022') {
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

		refreshEventListener($body.find<HTMLAnchorElement>(SELECTOR), clickListener);
		observer.disconnect();
	};
	const mutationObserver: MutationObserver = new MutationObserver(observerCallback);
	mutationObserver.observe($body.get(0) ?? document.documentElement, {
		attributes: true,
		attributeFilter: ['class'],
	});
};

export {addListener};
