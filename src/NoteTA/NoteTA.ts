import {getViewer, resetAllViewer} from './modules/viewer';
import {globalMethods, initGlobalMethods} from './modules/initGlobalMethods';
import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {generatePortletLink} from './modules/util/generatePortletLink';
import {windowManager} from './modules/initWindowManager';

let isInit: boolean = false;

mw.hook('wikipage.content').add(($content): void => {
	const $body: JQuery<HTMLBodyElement> = $content.parents('body');

	if (!isInit) {
		isInit = true;
		windowManager.$element.appendTo($body);
	}

	resetAllViewer();

	initGlobalMethods($body);
	globalMethods.deInit();
	globalMethods.init();

	for (const element of $body.find('.mw-indicator[id^=mw-indicator-noteTA-]')) {
		const hash: string = element.id.replace(/^mw-indicator-noteTA-/, '');

		let $element: JQuery = $(element);
		if (globalMethods.portletId) {
			$element.hide();
			$element = generatePortletLink(hash) ?? $element;
		}

		$element.on(
			'click',
			filterAlteredClicks((event: JQuery.ClickEvent): void => {
				event.preventDefault();
				getViewer($body, hash).open();
			})
		);
	}
});
