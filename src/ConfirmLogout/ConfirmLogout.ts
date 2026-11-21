import * as OPTIONS from './options.json';
import {addListener} from './modules/addListener';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {oouiConfirmWithStyle} from './modules/dialog';
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

	const openConfirmDialog = async () => {
		const isConfirm: boolean = await oouiConfirmWithStyle(getMessage('Confirm'));
		if (!isConfirm) {
			return;
		}

		const toastifyInstance: ToastifyInstance = toastify(
			{
				text: mw.message('logging-out-notify').parse(),
				duration: -1,
			},
			'info'
		);
		void tryLogout(toastifyInstance);
	};

	addListener($element, openConfirmDialog);
});
