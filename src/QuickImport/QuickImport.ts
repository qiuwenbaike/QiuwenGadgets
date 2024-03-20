import {detectIfFileRedirect, importPage, refreshPage} from './modules/quickImport';
import {api} from './modules/api';

(function quickImport(): void {
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	const [caViewForeignZhwiki] = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']");
	const [redirectTextA] = document.querySelectorAll('.redirectText a');

	const isFileNS: boolean = wgNamespaceNumber === 6;
	const hasMwNoarticletext: boolean = !!document.querySelector('#mw-noarticletext');
	const iwprefix: string = caViewForeignZhwiki ? 'zhwiki' : 'commons';

	const label: string = isFileNS && !hasMwNoarticletext ? iwprefix : '';
	const buttonLabel: string = redirectTextA ? '重定向目标' : '页面';

	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(
		portletId,
		'#',
		`导入${isFileNS ? (label ? `文件（${label}）` : '页面') : buttonLabel}`,
		't-import'
	);
	if (!element) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	element.addEventListener('click', async (): Promise<void> => {
		const pageName: string = redirectTextA?.textContent || wgPageName;

		if (isFileNS && !hasMwNoarticletext) {
			await importPage(pageName, iwprefix, isFileNS);

			const queryParams: ApiQueryParams = {
				action: 'query',
				format: 'json',
				prop: 'info',
				titles: pageName,
			};
			const response = await api.get(queryParams);

			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			for (const [, pageinfo] of Object.entries(response['query'].pages)) {
				if ((pageinfo as Record<string, never>)['missing']) {
					await detectIfFileRedirect(pageName);
				} else {
					await importPage(pageName, 'zhwiki', isFileNS);
					await detectIfFileRedirect(pageName);
				}
			}
		} else {
			await importPage(pageName, 'zhwiki');
			refreshPage(wgPageName);
		}
	});
})();
