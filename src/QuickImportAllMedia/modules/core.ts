import {api} from './api';
import {toastify} from 'ext.gadget.Toastify';

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const getAllImages = async (wgPageName: string) => {
	toastifyInstance.hideToast();
	toastify(
		{
			text: '正在获取迁移目标',
			duration: -1,
		},
		'info'
	);

	const fileNames: string[] = [];
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

	const fileLinkElements = document.querySelectorAll("a[href^='/wiki/File:']");

	for (const element of fileLinkElements as unknown as HTMLAnchorElement[]) {
		const {href} = element;

		if (href) {
			const fileName = decodeURIComponent(href.replace('/wiki/', '').replace('File:File:', ''));
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

	return [...new Set(fileNames)];
};

export {getAllImages};
