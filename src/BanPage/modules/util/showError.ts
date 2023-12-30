import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const showError = (error: unknown): void => {
	console.error('[BanPage] Ajax error:', error);
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
