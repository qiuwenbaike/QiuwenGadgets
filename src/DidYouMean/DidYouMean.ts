import * as OPTIONS from './options.json';
import {getMessage} from './modules/i18n';

$(function DidYouMean(): void {
	const $body: JQuery<HTMLBodyElement> = $('body');

	const $element: JQuery = $body.find(OPTIONS.targetSelector);
	if (!$element.length) {
		return;
	}

	const linkHref: string = $element.attr('href') ?? '';
	if (!linkHref) {
		return;
	}

	toastify(
		{
			text: getMessage('Redirecting'),
			duration: -1,
		},
		'info'
	);

	location.href = linkHref;
});
