import {api} from 'ext.gadget.QuickImport';
import {toastify} from 'ext.gadget.Toastify';

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const getAllImages = async () => {
	toastifyInstance.hideToast();
	toastify(
		{
			text: '正在获取迁移目标',
			duration: -1,
		},
		'info'
	);

	const fileNames: string[] = [];
	const {wgArticlePath, wgNamespaceNumber, wgPageName, wgScript} = mw.config.get();
	const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}(File:[^#]+)`);
	const scriptRegex: RegExp = new RegExp(`^${wgScript}\\?title=(File:[^#&]+)`);

	if (!(wgNamespaceNumber < 0)) {
		const queryImageParams: ApiQueryImagesParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: 'images',
			titles: wgPageName,
			imlimit: 5000,
		};

		const response = await api.get(queryImageParams);

		for (const imageInfo of response['query']?.pages[0].images as {ns: number; title: string}[]) {
			if (!imageInfo || !imageInfo.title) {
				continue;
			}
			fileNames[fileNames.length] = imageInfo.title;
		}
	}

	const fileLinkElements = document.querySelectorAll("a[href^='/wiki/File:'], a[href*='title=File:']");

	for (const element of fileLinkElements as unknown as HTMLAnchorElement[]) {
		const {href} = element;

		if (!href) {
			continue;
		}

		let fileName: string | undefined;
		if (articleRegex.test(href)) {
			const match: RegExpExecArray = articleRegex.exec(href) as RegExpExecArray;
			fileName = match[1] as string;
		} else if (scriptRegex.test(href)) {
			const match: RegExpExecArray = scriptRegex.exec(href) as RegExpExecArray;
			fileName = match[1] as string;
		} else {
			continue;
		}

		fileName = fileName.replace(/File:(File:|Image:)?/i, 'File:');
		fileNames[fileNames.length] = fileName;
	}

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '获取迁移目标完成',
			duration: -1,
		},
		'success'
	);

	return [...new Set(fileNames)];
};

export {getAllImages};
