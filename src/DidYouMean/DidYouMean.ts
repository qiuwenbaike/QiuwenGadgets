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

	const {wgNamespaceNumber, wgRelevantUserName} = mw.config.get();

	if (wgNamespaceNumber === 2 && wgRelevantUserName) {
		const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
		const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();

		if (relevantUserPageName === pageName) {
			return;
		}
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
