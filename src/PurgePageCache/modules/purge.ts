import {api} from './api';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const purge = async (title: string): Promise<void> => {
	const toastifyInstance: ToastifyInstance = toastify(
		{
			text: getMessage('Purging'),
			duration: -1,
		},
		'info'
	);

	try {
		const params: ApiPurgeParams = {
			action: 'purge',
			format: 'json',
			formatversion: '2',
			titles: title,
			forcelinkupdate: true,
		};

		await api.post(params);
		localStorage.removeItem(`MediaWikiModuleStore:${mw.config.get('wgWikiID')}`);

		location.reload();
	} catch (error: unknown) {
		console.error('[PurgePageCache] Ajax error:', error);

		toastifyInstance.hideToast();
		toastify(
			{
				text: getMessage('Failed'),
				close: true,
				duration: -1,
			},
			'error'
		);
	}
};

export {purge};
