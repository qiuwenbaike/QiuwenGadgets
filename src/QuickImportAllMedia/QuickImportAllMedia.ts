import {detectIfFileRedirect, refreshPage} from '~/QuickImport/modules/core';
import {getAllImages} from './modules/core';

(function quickImportAllMedia(): void {
	const {wgCanonicalSpecialPageName, wgCurRevisionId} = mw.config.get();
	if (!(wgCurRevisionId || ['Prefixindex', 'BrokenRedirects'].includes(wgCanonicalSpecialPageName || ''))) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '导入此页面所有文件', 't-import');
	if (!element) {
		return;
	}

	element.addEventListener('click', (): void => {
		const {wgPageName} = mw.config.get();

		void (async () => {
			const fileNames: string[] = await getAllImages(wgPageName);
			await detectIfFileRedirect([...new Set(fileNames)], true);
		})().then(() => {
			refreshPage(wgPageName);
		});
	});
})();
