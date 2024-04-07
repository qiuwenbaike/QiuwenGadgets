import {api} from './api';
import {toastify} from 'ext.gadget.Toastify';

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const refreshPage = (wgPageName: string): void => {
	toastifyInstance.hideToast();
	toastify(
		{
			text: '正在刷新页面',
			duration: -1,
		},
		'info'
	);

	location.replace(mw.util.getUrl(wgPageName));
};

const importPage = async (pageName: string, iwprefix: string): Promise<void> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '导入页面中',
			duration: -1,
		},
		'info'
	);

	const summary: string =
		'页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史；文件作者请参见此页面及来源页面记载';

	const params: ApiImportParams = {
		action: 'import',
		format: 'json',
		assignknownusers: true,
		interwikipage: pageName,
		interwikiprefix: iwprefix,
		interwikisource: iwprefix as NonNullable<ApiImportParams['interwikisource']>,
		summary: `［${summary}］`,
	};
	await api.postWithEditToken(params);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '页面导入完成',
			duration: -1,
		},
		'success'
	);
};

const uploadFile = async (target: string): Promise<void> => {
	const url: string = `https://zh.wikipedia.org/wiki/Special:Redirect/file/${mw.util.rawurlencode(target)}`;

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '迁移文件中',
			duration: -1,
		},
		'info'
	);

	const uploadParams: ApiUploadParams = {
		url,
		action: 'upload',
		format: 'json',
		filename: target,
		comment: '自其他网站迁移文件',
		ignorewarnings: true,
	};
	await api.postWithEditToken(uploadParams);
};

const detectIfFileRedirect = async (pageName: string): Promise<void> => {
	const queryParams: ApiQueryParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: ['imageinfo', 'info'],
		titles: pageName,
		redirects: true,
	};
	const response = await api.get(queryParams);

	if (response['query'].pages[0].missing) {
		await importPage(pageName, 'commons');
		await importPage(pageName, 'zhwiki');
	}

	if (response['query'].redirects) {
		for (const {to} of response['query'].redirects as {from: string; to: string}[]) {
			await detectIfFileRedirect(to);
		}
	} else if (response['query'].pages[0].pageid && response['query'].pages[0].imagerepository !== 'local') {
		await uploadFile(pageName);
	}
};

const getAllImages = async (wgPageName: string) => {
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

	return [...new Set(fileNames)];
};

export {detectIfFileRedirect, getAllImages, refreshPage};
