import * as OPTIONS from './options.json';
import {addListener} from './modules/addListener';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {showConfirmDialog} from './modules/showConfirmDialog';
import {toastify} from 'ext.gadget.Toastify';
import {tryLogout} from './modules/tryLogout';

const {wgUserName} = mw.config.get();

void getBody().then(function confirmLogout($body: JQuery<HTMLBodyElement>): void {
	if (!wgUserName) {
		return;
	}

	const $element: JQuery = $body.find(OPTIONS.logoutElementSelector);
	if (!$element.length) {
		return;
	}

	const openConfirmDialog = showConfirmDialog(
		(): void => {
			const toastifyInstance: ToastifyInstance = toastify(
				{
					text: mw.message('logging-out-notify').parse(),
					duration: -1,
				},
				'info'
			);
			void tryLogout(toastifyInstance);
		},
		$body,
		getMessage('Confirm')
	);

	addListener($element, openConfirmDialog);
});
