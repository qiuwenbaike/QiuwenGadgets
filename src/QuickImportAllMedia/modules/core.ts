import {api} from './api';
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

	// Analyze step 1: Query
	if (!(wgNamespaceNumber < 0)) {
		try {
			const queryImageParams: ApiQueryImagesParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				prop: 'images',
				titles: wgPageName,
				imlimit: 5000,
			};

			const queryImageResponse = await api.get(queryImageParams);
			if (
				!queryImageResponse['query'] ||
				!queryImageResponse['query']?.pages[0] ||
				!queryImageResponse['query']?.pages[0].images
			) {
				return;
			}

			for (const imageInfo of queryImageResponse['query']?.pages[0].images as {ns: number; title: string}[]) {
				if (!imageInfo || !imageInfo.title) {
					continue;
				}
				fileNames[fileNames.length] = imageInfo.title;
			}
		} catch {}
	}

	// Analyze step 2: Find from pages
	let fileLinkElements: HTMLAnchorElement[] = [];
	const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}(File:[^#]+)`);
	const scriptRegex: RegExp = new RegExp(`^${wgScript}\\?title=(File:[^#&]+)`);

	try {
		const parseParams: ApiParseParams = {
			action: 'parse',
			format: 'json',
			formatversion: '2',
			prop: 'text',
			page: wgPageName,
		};

		const parseResponse = await api.get(parseParams);
		if (!parseResponse['parse'] || !parseResponse['parse']?.text) {
			return;
		}

		const pageContent = document.createElement('span');
		pageContent.innerHTML = parseResponse['parse']?.text as string;

		fileLinkElements = [
			...pageContent.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
			...pageContent.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
		];
	} catch {}

	fileLinkElements = [
		...fileLinkElements,
		...document.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
		...document.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
	];

	for (const element of fileLinkElements) {
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
