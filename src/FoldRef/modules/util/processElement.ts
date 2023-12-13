import {getMessage} from '../i18n';

// create a div, place {{Reflist}}s inside
const processElement = ($element: JQuery): void => {
	const $refFolder: JQuery = $('<div>').addClass('foldref-folded');

	$refFolder.insertBefore($element);
	$element.appendTo($refFolder);

	// add an expand button at the bottom
	$refFolder.after($('<div>').addClass('foldref-expand-button').text(getMessage('Expand')));
};

export {processElement};
