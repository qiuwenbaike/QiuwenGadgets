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

const getElements = () => {
	return [
		...document.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
		...document.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
	];
};

const getImagesFromElements = (fileLinkElements: HTMLAnchorElement[]) => {
	const fileNames: string[] = [];
	fileLinkElements = uniqueArray(fileLinkElements);
	const {wgArticlePath, wgScript} = mw.config.get();
	const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}(File:[^#]+)`);
	const scriptRegex: RegExp = new RegExp(`${wgScript}\\?title=(File:[^#&]+)`);

	for (const element of fileLinkElements) {
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

	return uniqueArray(fileNames);
};

const getImages = async (titles: string | string[]) => {
	const fileNames: string[] = [];
	titles = uniqueArray(generateArray(titles));

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

	return uniqueArray(fileNames);
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

	fileNames = uniqueArray([
		...getImagesFromElements(getElements()),
		...(await getImages([...titles, ...getImagesFromElements(getElements())])),
	]);

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
