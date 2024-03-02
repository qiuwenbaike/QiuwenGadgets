import {detectIfFileRedirect, importPage, refreshPage} from './modules/quickImport';
import {api} from './modules/api';
import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	const caViewForeignZhwiki: HTMLElement | undefined = $body
		.find("#ca-view-foreign a[href*='zh.wikipedia.org']")
		.get(0);
	const redirectTextA: HTMLElement | undefined = $body.find('.redirectText a').get(0);

	const isFileNS: boolean = wgNamespaceNumber === 6;
	const hasMwNoarticletext: boolean = !!$body.find('#mw-noarticletext').length;
	const iwprefix: string = caViewForeignZhwiki ? 'zhwiki' : 'commons';

	const label: string = isFileNS && !hasMwNoarticletext ? iwprefix : '';
	const buttonLabel: string = redirectTextA ? '重定向目标' : '页面';

	const portletId: 'p-cactions' | 'p-tb' = $body.find('#p-cactions').length ? 'p-cactions' : 'p-tb';
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
});
