import {getMessage} from './i18n';
import {initMwApi} from '~/util';

export const purgePageCache = (): void => {
	const purgePageCacheMain = async (event: Event, title: string): Promise<void> => {
		event.preventDefault();
		const toastifyInstance: ToastifyInstance = toastify(
			{
				text: getMessage('Purging'),
				duration: -1,
			},
			'info'
		);
		const api: mw.Api = initMwApi(`Qiuwen/1.1 (PurgePageCache/1.1; ${mw.config.get('wgWikiID')})`);
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

	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(
		portletId,
		'#',
		getMessage('Purge'),
		'ca-purge',
		getMessage('PurgeFromServer')
	);
	element?.querySelector('a')?.addEventListener('click', (event: MouseEvent): void => {
		void purgePageCacheMain(event, mw.config.get('wgPageName'));
	});

	Array.prototype.forEach.call(
		document.querySelectorAll('a[href*="action=purge"]'),
		(_element: HTMLAnchorElement): void => {
			const title: string = mw.util.getParamValue('title', _element.href) ?? mw.config.get('wgPageName');
			_element.addEventListener('click', (event: MouseEvent): void => {
				void purgePageCacheMain(event, title);
			});
		}
	);
};
