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

	const {wgPageName} = mw.config.get();
	if (targetPage) {
		location.replace(mw.util.getUrl(targetPage));
	} else {
		location.replace(mw.util.getUrl(wgPageName));
	}
};

export {refresh};
