import {WG_SCRIPT} from '../constant';
import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const refresh = (targetPage: string): void => {
	toastify(
		{
			text: getMessage('Refreshing'),
			duration: -1,
		},
		'success'
	);

	location.replace(
		mw.util.getUrl(WG_SCRIPT, {
			title: targetPage,
		})
	);
};

export {refresh};
