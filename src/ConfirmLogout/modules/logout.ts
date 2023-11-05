import {api} from './api';
import {ding} from '../../util';
import {getMessage} from './i18n';

const logout = async (): Promise<void> => {
	try {
		await api.postWithEditToken({
			action: 'logout',
		});
		location.reload();
	} catch (error: unknown) {
		console.error('[ConfirmLogout] Ajax error:', error);
		ding(getMessage('Network error'), false, 'warning');
	}
};

export {logout};
