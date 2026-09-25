import * as OPTIONS from './options.json';
import {getBody, oouiConfirmWithStyle} from 'ext.gadget.Util';
import {addListener} from './modules/addListener';
import {getMessage} from './modules/i18n';
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
