import {detectIfFileRedirect, refreshPage} from './modules/quickImport';

(function quickImport(): void {
	const {wgNamespaceNumber, wgPageName, wgWikiID} = mw.config.get();

	const caViewForeignZhwiki = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']");
	const redirectTextA = document.querySelectorAll('.redirectText a');

	const isFileNS: boolean = wgNamespaceNumber === 6;
	const hasMwNoarticletext: boolean = !!document.querySelector('#mw-noarticletext');
	const iwprefix: string = caViewForeignZhwiki.length > 0 ? 'zhwiki' : 'commons';

	const label: string = isFileNS && !hasMwNoarticletext ? iwprefix : '';
	const buttonLabel: string = isFileNS
		? label
			? `文件（${label}）`
			: '页面'
		: redirectTextA.length > 0
			? '重定向目标'
			: '页面';

	if (wgWikiID !== 'zhqiuwenbaike' && isFileNS) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', `导入${buttonLabel}`, 't-import');
	if (!element) {
		return;
	}

	element.addEventListener('click', (): void => {
		void (async () => {
			const pageName: string = redirectTextA[0]?.textContent || wgPageName;
			await detectIfFileRedirect(pageName, isFileNS);
		})().then(() => {
			refreshPage(wgPageName);
		});
	});
})();
