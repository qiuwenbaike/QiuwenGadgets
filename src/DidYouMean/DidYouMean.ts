import * as OPTIONS from './options.json';
import {getMessage} from './modules/i18n';
import {toastify} from 'ext.gadget.Toastify';

(function didYouMean(): void {
	const elements = document.querySelectorAll(OPTIONS.targetSelector);
	if (!elements.length) {
		return;
	}

	const [element] = elements;
	const href: string = (element as HTMLAnchorElement)?.href ?? '';
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
