import {generateArray, uniqueArray} from 'ext.gadget.Util';
import {api} from './api';
import {toastify} from 'ext.gadget.Toastify';

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const queryImages = async (titles: string | string[]) => {
	const params: ApiQueryImagesParams = {
		titles,
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'images',
		imlimit: 5000,
	};
	const response = await api.post(params);

	return response;
};

const parse = async (page: string) => {
	const params: ApiParseParams = {
		page,
		action: 'parse',
		format: 'json',
		formatversion: '2',
		prop: 'text',
		redirects: true,
		disabletoc: true,
	};
	const response = await api.post(params);

	return response;
};

const getElements = async (titles: string[]) => {
	let fileLinkElements: HTMLAnchorElement[] = [];

	for (const title of titles) {
		try {
			const parseResponse = await parse(title);
			if (!parseResponse['parse'] || !parseResponse['parse'].text) {
				continue;
			}
			const pageContent = document.createElement('span');
			pageContent.innerHTML = parseResponse['parse'].text as string;

			fileLinkElements = [
				...pageContent.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
				...pageContent.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
			];
		} catch {}
	}

	fileLinkElements = [
		...fileLinkElements,
		...document.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
		...document.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
	];

	return fileLinkElements;
};

const getImagesFromElements = (fileLinkElements: HTMLAnchorElement[]) => {
	const fileNames: string[] = [];
	const {wgArticlePath, wgScript} = mw.config.get();
	const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}(File:[^#]+)`);
	const scriptRegex: RegExp = new RegExp(`${wgScript}\\?title=(File:[^#&]+)`);

	for (const element of uniqueArray(fileLinkElements)) {
		// Replace `new Set()` to avoid polyfilling core-js
		const {href, classList} = element;

		if (!href || href.includes('redlink=1')) {
			continue;
		}

		if (classList.contains('new')) {
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

	return fileNames;
};

const getImages = async (titles: string | string[]) => {
	let fileNames: string[] = [];
	let fileLinkElements: HTMLAnchorElement[] = [];

	titles = generateArray(titles);

	// Analyze step 1: Query
	try {
		const queryImageResponse = await queryImages(titles);
		if (
			queryImageResponse['query'] &&
			queryImageResponse['query'].pages[0] &&
			queryImageResponse['query'].pages[0].images
		) {
			for (const imageInfo of queryImageResponse['query'].pages[0].images as {
				ns: number;
				title: string;
			}[]) {
				if (!imageInfo || !imageInfo.title) {
					continue;
				}
				fileNames[fileNames.length] = imageInfo.title;
			}
		}
	} catch {}

	fileLinkElements = await getElements(titles);

	// Analyze step 2: Find from pages
	fileNames = [...fileNames, ...getImagesFromElements(fileLinkElements)];

	return fileNames;
};

const getAllImages = async (titles?: string | string[]): Promise<string[]> => {
	toastifyInstance.hideToast();
	toastify(
		{
			text: '正在获取迁移目标',
			duration: -1,
		},
		'info'
	);

	let fileNames: string[] = [];
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	if (!titles || !titles.length) {
		titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
	}

	if (titles.length) {
		fileNames = await getImages(titles);
	}

	fileNames = [
		...fileNames,
		...getImagesFromElements([
			...document.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
			...document.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
		]),
	];
	fileNames = [...fileNames, ...(await getImages(titles)), ...(await getImages(fileNames))];

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '获取迁移目标完成',
			duration: -1,
		},
		'success'
	);

	return uniqueArray(fileNames); // Replace `[...new Set()]` to avoid polyfilling core-js
};

export {getAllImages};
