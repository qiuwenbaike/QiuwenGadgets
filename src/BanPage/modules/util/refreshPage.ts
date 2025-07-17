import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const refresh = (targetPage?: string): void => {
	toastify(
		{
			text: getMessage('Refreshing'),
			duration: -1,
		},
		'success'
	);

	if (targetPage) {
		location.replace(mw.util.getUrl(targetPage));
	} else {
		location.reload();
	}
};

export {refresh};
