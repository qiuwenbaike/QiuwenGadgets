import './NoteTA.less';
import {getViewer, resetAllViewer} from './modules/viewer';
import {initGlobalMethods, portletId} from './modules/initGlobalMethods';
import {checkA11yConfirmKey} from 'ext.gadget.Util';
import {generatePortletLink} from './modules/util/generatePortletLink';

/**
 * The NoteTA indicators live in the page header (outside `#mw-content-text`), so they only have to be wired up
 * once. Re-scanning the whole `<body>` for them on every `wikipage.content` update (RCFilters re-renders, VE, …)
 * is wasted work: the per-update handling below is limited to the content that was actually replaced.
 */
let indicatorsInitialized = false;

mw.hook('wikipage.content').add(function noteTA($content): void {
	// The viewers are mounted on the old DOM nodes; rebuild them for the replacement content.
	resetAllViewer();

	const $body: JQuery<HTMLBodyElement> = $content.parents('body');

	const globalMethods = initGlobalMethods($body);
	globalMethods.deInit();
	globalMethods.init();

	if (indicatorsInitialized) {
		return;
	}
	indicatorsInitialized = true;

	for (const element of $body.find('.mw-indicator[id^=mw-indicator-noteTA-]')) {
		const hash: string = element.id.replace(/^mw-indicator-noteTA-/, '');

		let $element: JQuery = $(element);
		if (portletId) {
			$element.hide();

			const $portletLink: JQuery | undefined = generatePortletLink(hash);
			if (!$portletLink) {
				continue;
			}

			$element = $portletLink;
		}

		const openerListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
			if (!checkA11yConfirmKey(event)) {
				return;
			}

			event.preventDefault();

			getViewer($body, hash).open();
		};
		$element.on('click', openerListener);
		$element.on('keydown', openerListener);
	}
});
