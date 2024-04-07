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

const detectIfFileRedirect = async (pageName: string, isFileNS = false): Promise<void> => {
	const queryParams: ApiQueryParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: ['imageinfo', 'info'],
		titles: pageName,
		redirects: true,
	};
	const response = await api.get(queryParams);

	if (response['pages'][0].missing) {
		await importPage(pageName, 'commons', isFileNS);
		await importPage(pageName, 'zhwiki', isFileNS);
	}

	if (response['redirects']) {
		for (const {to} of response['redirects'] as {from: string; to: string}[]) {
			await detectIfFileRedirect(to);
		}
	} else if (isFileNS) {
		// eslint-disable-next-line unicorn/no-lonely-if
		if (response['pages'][0].imagerepository && response['pages'][0].imagerepository !== 'local') {
			await uploadFile(pageName);
		}
	}
};

export {detectIfFileRedirect, refreshPage};
