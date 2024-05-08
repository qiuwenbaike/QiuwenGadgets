import {api} from './api';
import {toastify} from 'ext.gadget.Toastify';
import {uniqueArray} from 'ext.gadget.Util';

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const queryImages = async (titles: string | string[]) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'images',
		titles,
		imlimit: 5000,
	} as const satisfies ApiQueryImagesParams;
	const response = await api.post(params);

	return response;
};

const parse = async (page: string) => {
	const params = {
		action: 'parse',
		format: 'json',
		formatversion: '2',
		prop: 'text',
		page,
	} as const satisfies ApiParseParams;
	const response = await api.post(params);

	return response;
};

const getAllImages = async (): Promise<string[]> => {
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
			const queryImageResponse = await queryImages(wgPageName);
			if (
				queryImageResponse['query'] &&
				queryImageResponse['query'].pages[0] &&
				queryImageResponse['query'].pages[0].images
			) {
				for (const imageInfo of queryImageResponse['query'].pages[0].images as {ns: number; title: string}[]) {
					if (!imageInfo || !imageInfo.title) {
						continue;
					}
					fileNames[fileNames.length] = imageInfo.title;
				}
			}
		} catch {}
	}

	// Analyze step 2: Find from pages
	let fileLinkElements: HTMLAnchorElement[] = [];

	if (!(wgNamespaceNumber < 0)) {
		try {
			const parseResponse = await parse(wgPageName);
			if (parseResponse['parse'] && parseResponse['parse'].text) {
				const pageContent = document.createElement('span');
				pageContent.innerHTML = parseResponse['parse'].text as string;

				fileLinkElements = [
					...pageContent.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
					...pageContent.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
				];
			}
		} catch {}
	}

	fileLinkElements = [
		...fileLinkElements,
		...document.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
		...document.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
	];

	const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}(File:[^#]+)`);
	const scriptRegex: RegExp = new RegExp(`${wgScript}\\?title=(File:[^#&]+)`);

	for (const element of uniqueArray(fileLinkElements)) {
		// Replace `new Set()` to avoid polyfilling core-js
		const {href} = element;

		if (!href) {
			continue;
		}

		let fileName: string | undefined;
		if (articleRegex.test(href)) {
			const match: RegExpExecArray = articleRegex.exec(href) as RegExpExecArray;
			fileName = match[1] as string;
			fileName = fileName.replace(/File:(File:|Image:)?/i, 'File:');
			fileName = decodeURIComponent(fileName);
			fileNames[fileNames.length] = fileName;
		}

		if (scriptRegex.test(href)) {
			const match: RegExpExecArray = scriptRegex.exec(href) as RegExpExecArray;
			fileName = match[1] as string;
			fileName = fileName.replace(/File:(File:|Image:)?/i, 'File:');
			fileName = decodeURIComponent(fileName);
			fileNames[fileNames.length] = fileName;
		}
	}

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '获取迁移目标完成',
			duration: -1,
		},
		'success'
	);

	return [...uniqueArray(fileNames)]; // Replace `new Set()` to avoid polyfilling core-js
};

export {getAllImages};
