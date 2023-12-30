import * as OPTIONS from './options.json';
import {getBody} from '~/util';
import {getMessage} from './modules/i18n';
import {toastify} from 'ext.gadget.Toastify';

(async function didYouMean(): Promise<void> {
	const $body: JQuery<HTMLBodyElement> = await getBody();

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
})();
