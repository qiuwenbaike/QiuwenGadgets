import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processWikiEditor = ($body: JQuery<HTMLBodyElement>): void => {
	const $editCheckboxes: JQuery = $body.find('.editCheckboxes');
	if (!$editCheckboxes.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown($body.find('#wpSummary'));

	$dropdowns.css({
		'padding-bottom': '1em',
		width: '48%',
	});
	$editCheckboxes.before($dropdowns);
};

export {processWikiEditor};
