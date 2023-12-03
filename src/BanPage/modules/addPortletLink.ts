import {addListener} from './addListener';
import {getMessage} from './i18n';

const addPortletLink = (): void => {
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', getMessage('Ban'), 't-banpage');
	if (!element) {
		return;
	}

	const $element: JQuery = $(element);
	let $target: JQuery = $element.find('a');
	if (!$target.length) {
		$target = $element;
	}

	addListener($target);
};

export {addPortletLink};
