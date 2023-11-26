import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processWikiEditor = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');

	const $editCheckboxes: JQuery = $body.find('.editCheckboxes');
	if (!$editCheckboxes.length) {
		return;
	}

	const $dropdown: JQuery = generateSummaryDropdown($body.find('#wpSummary'));

	$dropdown.css({
		'padding-bottom': '1em',
		width: '48%',
	});
	$editCheckboxes.before($dropdown);
};

export {processWikiEditor};
