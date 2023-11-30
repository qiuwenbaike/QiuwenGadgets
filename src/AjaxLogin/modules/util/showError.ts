import {getMessage} from '../i18n';

const showError = (error: unknown, toastifyInstance: ToastifyInstance): ToastifyInstance => {
	console.error('[AjaxLogin] Ajax error:', error);
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: getMessage('Network error'),
			close: true,
			duration: -1,
		},
		'error'
	);

	return toastifyInstance;
};

export {showError};
