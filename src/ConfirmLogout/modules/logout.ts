import {ding, initMwApi} from '../../util';
import {WG_WIKI_ID} from './constant';
import {getMessage} from './i18n';

const logout = async (): Promise<void> => {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (ConfirmLogout/1.1; ${WG_WIKI_ID})`);
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
