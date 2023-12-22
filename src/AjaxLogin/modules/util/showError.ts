import {getMessage} from '../i18n';

const showError = (error: unknown, toastifyInstance: ToastifyInstance): void => {
	console.error('[AjaxLogin] Ajax error:', error);
	toastifyInstance.hideToast();
	toastify(
		{
			text: getMessage('Network error'),
			close: true,
			duration: -1,
		},
		'error'
	);
};

export {showError};
