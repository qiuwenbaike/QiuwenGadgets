import {processElement} from './util/processElement';

const foldRef = ($body: JQuery<HTMLBodyElement>): void => {
	// for articles using <references />, {{Reflist}}s or similar templates
	const $foldRef: JQuery = $body.find('.mw-references-wrap,.refbegin');
	for (const element of $foldRef) {
		const $element = $(element);
		if (
			$element.parent('div').parent('div').hasClass('foldref-folded') ||
			$element.parent('div').hasClass('foldref-folded')
		) {
			continue;
		}

		const height: number | undefined = $element.height();
		if (!height || height <= window.innerHeight * 0.9) {
			continue;
		}

		// if greater than 90% of the viewport height, fold the references list
		processElement($element);
	}

	// attach event listener to the expand buttons
	$body.find('.foldref-expand-button').on('click', (event: JQuery.ClickEvent<HTMLElement>): void => {
		const $element: JQuery = $(event.currentTarget);

		$element.prev('.foldref-folded').removeClass('foldref-folded');
		$element.remove();
	});
};

export {foldRef};
