import * as OPTIONS from './options.json';
import {WG_RELEVANT_USER_NAME} from './modules/constant';
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

	const relevantUserPageName: string = new mw.Title(WG_RELEVANT_USER_NAME, 2).toText();
	const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();
	if (
		WG_RELEVANT_USER_NAME &&
		mw.config.get('wgNamespaceNumber') === 2 &&
		mw.config.get('wgAction') === 'view' &&
		relevantUserPageName === pageName
	) {
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
