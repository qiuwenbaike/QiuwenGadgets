import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const refresh = ({
	targetPage,
	toastifyInstance,
}: {targetPage?: string; toastifyInstance?: ToastifyInstance} = {}): void => {
	toastifyInstance ||= {
		hideToast: () => {},
	};
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
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
