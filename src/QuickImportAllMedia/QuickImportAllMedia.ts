import {detectIfFileRedirect, getAllImages, refreshPage} from './modules/quickImportAllMedia';

(function quickImportAllMedia(): void {
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '导入此页面所有文件', 't-import');
	if (!element) {
		return;
	}

	const {wgArticleId} = mw.config.get();
	if (!wgArticleId) {
		return;
	}

	const {wgPageName} = mw.config.get();

	element.addEventListener('click', (): void => {
		void (async () => {
			const fileNames: string[] = await getAllImages(wgPageName);
			for (const fileName of new Set(fileNames)) {
				await detectIfFileRedirect(fileName);
			}
		})().then(() => {
			refreshPage(wgPageName);
		});
	});
})();
