import {IS_VECTOR, PORTLET_ID} from './modules/constant';
import {getViewer, resetAllViewer} from './modules/viewer';
import {vectorAddItem, vectorInit} from './modules/processVector';
import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {windowManager} from './modules/initWindowManager';

let isInit: boolean = false;

mw.hook('wikipage.content').add(($content): void => {
	const $body: JQuery<HTMLBodyElement> = $content.parents('body');

	if (!isInit) {
		isInit = true;
		windowManager.$element.appendTo($body);
	}

	resetAllViewer();

	if (IS_VECTOR) {
		vectorInit($body);
		mw.util.hidePortlet(PORTLET_ID);
	}

	for (const element of $body.find('.mw-indicator[id^=mw-indicator-noteTA-]')) {
		const hash: string = element.id.replace(/^mw-indicator-noteTA-/, '');

		let $element: JQuery = $(element);
		if (IS_VECTOR) {
			$element.hide();
			$element = vectorAddItem($body, hash) ?? $element;
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
