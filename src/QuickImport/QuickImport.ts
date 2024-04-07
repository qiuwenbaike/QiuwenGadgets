import {detectIfFileRedirect, refreshPage} from './modules/quickImport';

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

	element.addEventListener('click', (): void => {
		void (async () => {
			const pageName: string = redirectTextA?.textContent || wgPageName;
			await detectIfFileRedirect(pageName, isFileNS);
		})().then(() => {
			refreshPage(wgPageName);
		});
	});
})();
