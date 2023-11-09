import {api} from './api';
import {getMessage} from './i18n';

const logout = async (toastifyInstance: ReturnType<typeof toastify>): Promise<void> => {
	try {
		await api.postWithEditToken({
			action: 'logout',
		});

		toastifyInstance.hideToast();
		toastify(
			{
				text: getMessage('Succeed'),
			},
			'success'
		);

		location.reload();
	} catch (error: unknown) {
		console.error('[ConfirmLogout] Ajax error:', error);
		toastifyInstance.hideToast();
		toastify(
			{
				text: getMessage('Network error'),
			},
			'error'
		);
	}
};

export {logout};
