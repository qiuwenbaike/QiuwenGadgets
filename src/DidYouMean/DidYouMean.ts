import * as OPTIONS from './options.json';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {toastify} from 'ext.gadget.Toastify';

void getBody().then(function didYouMean($body: JQuery<HTMLBodyElement>): void {
	const $element: JQuery = $body.find(OPTIONS.targetSelector);
	if (!$element.length) {
		return;
	}

	const href: string = $element.attr('href') ?? '';
	if (!href) {
		return;
	}

	toastify(
		{
			text: getMessage('Redirecting'),
			duration: -1,
		},
		'info'
	);

	location.href = href;
});
