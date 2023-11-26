import {IS_EDIT_OR_SUBMIT_ACTION} from './constant';

const displaySummaryInOneLine = ($body: JQuery<HTMLBodyElement>): void => {
	if (!IS_EDIT_OR_SUBMIT_ACTION) {
		return;
	}

	const $element: JQuery = $body.find('span.oo-ui-fieldLayout-header');
	if (!$element.length) {
		return;
	}

	$element.css('max-width', 'none');
};

export {displaySummaryInOneLine};
