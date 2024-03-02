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

const importPage = async (pageName: string, iwprefix: string, isFileNS: boolean = false): Promise<void> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '导入页面中',
			duration: -1,
		},
		'info'
	);

	let summary: string = '页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史';
	if (isFileNS) {
		summary += '；文件作者请参见此页面及来源页面记载';
	}

	const params: ApiImportParams = {
		action: 'import',
		assignknownusers: true,
		interwikipage: pageName,
		interwikiprefix: iwprefix,
		interwikisource: iwprefix,
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

const uploadFile = async (pageName: string): Promise<void> => {
	const url: string = `https://zh.wikipedia.org/wiki/Special:Redirect/file/${mw.util.rawurlencode(pageName)}`;

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
		filename: pageName,
		comment: '自其他网站迁移文件',
		ignorewarnings: true,
	};
	await api.postWithEditToken(uploadParams);

	refreshPage(pageName);
};

const detectIfFileRedirect = async (pageName: string): Promise<void> => {
	const params: ApiQueryParams = {
		action: 'query',
		prop: 'info',
		titles: pageName,
	};
	const response = await api.get(params);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	for (const [, info] of Object.entries(response['query'].pages)) {
		if ((info as Record<string, never>)['redirect'] === '') {
			continue;
		}

		await uploadFile(pageName);
	}
};

export {detectIfFileRedirect, importPage, refreshPage};
