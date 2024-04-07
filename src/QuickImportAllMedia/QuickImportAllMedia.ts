import {detectIfFileRedirect, importPage} from './modules/quickImport';
import {api} from './modules/api';

(async function quickImportAllMedia(): Promise<void> {
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '导入文件', 't-import');
	if (!element) {
		return;
	}

	const {wgPageName} = mw.config.get();
	const fileNames: string[] = [];
	const params: ApiQueryImagesParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'images',
		titles: wgPageName,
		imlimit: 5000,
	};

	const data = await api.get(params);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const queryImages: {ns: number; title: string}[] = data['query']?.pages[0].images ?? [];

	for (const imageInfo of queryImages) {
		if (!imageInfo || !imageInfo.title) {
			continue;
		}
		fileNames[fileNames.length] = imageInfo.title;
	}

	element.addEventListener('click', (): void => {
		for (const fileName of new Set(fileNames)) {
			void importPage(fileName, 'zhwiki').then(() => {
				const queryParams: ApiQueryParams = {
					action: 'query',
					format: 'json',
					prop: 'info',
					titles: fileName,
				};

				void api.get(queryParams).then(async (response) => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					for (const [, pageinfo] of Object.entries(response['query'].pages)) {
						if ((pageinfo as Record<string, never>)['missing']) {
							await detectIfFileRedirect(fileName);
						} else {
							await importPage(fileName, 'zhwiki');
							await detectIfFileRedirect(fileName);
						}
					}
				});
			});
		}
	});
})();
