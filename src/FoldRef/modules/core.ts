import {getMessage} from './i18n';

export const foldRef = (): void => {
	const $body = $('body');
	let $currentToFoldElement;
	// create a div, place {{Reflist}}s inside
	const foldRefMain = (element: JQuery<Element>): void => {
		const newRefFolder: JQuery = $('<div>').addClass('foldref-folded');
		newRefFolder.insertBefore(element);
		element.appendTo(newRefFolder);
		// add an expand button at the bottom
		newRefFolder.after($('<div>').addClass('foldref-expand-button').text(getMessage('Expand')));
	};
	const viewPortHeight: number = window.innerHeight;
	// for articles using <references />, {{Reflist}}s or similar templates
	const toFold: JQuery = $body.find('.refbegin, .mw-references-wrap');
	for (const element of toFold) {
		$currentToFoldElement = $(element);
		if (
			$currentToFoldElement.parent('div').parent('div').hasClass('foldref-folded') ||
			$currentToFoldElement.parent('div').hasClass('foldref-folded')
		) {
			continue;
		}
		const currentToFoldElementHeight: number | undefined = $currentToFoldElement.height();
		if (
			currentToFoldElementHeight !== undefined && // if greater than 90% of the viewport height, fold the references list
			currentToFoldElementHeight > viewPortHeight * 0.9
		) {
			foldRefMain($currentToFoldElement);
		}
	}
	// attach event listener to the expand buttons
	$body.find('.foldref-expand-button').on('click', function (): void {
		const $this: JQuery = $(this);
		$this.prev('.foldref-folded').removeClass('foldref-folded');
		$this.remove();
	});
};
