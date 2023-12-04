import {getMessage} from '../i18n';

const showError = (error: unknown, toastifyInstance: ToastifyInstance): void => {
	console.error('[ConfirmLogout] Ajax error:', error);
	toastifyInstance.hideToast();
	toastify(
		{
			text: getMessage('Network error'),
		},
		'error'
	);
};

export {showError};
