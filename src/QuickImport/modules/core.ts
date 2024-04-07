import {ApiQueryImageInfoParams} from 'types-mediawiki-renovate/api_params';
import {api} from './api';
import {generateArray} from 'ext.gadget.Util';
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
			text: `导入页面中：${pageName}`,
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
			text: `页面导入完成：${pageName}`,
			duration: -1,
		},
		'success'
	);
};

const uploadFile = async (target: string, url?: string): Promise<void> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: `迁移文件中：${target}`,
			duration: -1,
		},
		'info'
	);

	const uploadParams: ApiUploadParams = {
		url: url ?? `https://zh.wikipedia.org/wiki/Special:Redirect/file/${mw.util.rawurlencode(target)}`,
		action: 'upload',
		format: 'json',
		filename: target,
		comment: '自其他网站迁移文件',
		ignorewarnings: true,
	};
	await api.postWithEditToken(uploadParams);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: `文件迁移完成：${target}`,
			duration: -1,
		},
		'success'
	);
};

const detectIfFileRedirect = async (pageNames: string | string[], isFileNS = false): Promise<void> => {
	pageNames = generateArray(pageNames);
	const promises: (() => Promise<void>)[] = [];

	for (let i: number = 0; i < (pageNames.length + 50) / 50; i++) {
		promises[promises.length] = async (): Promise<void> => {
			const titles = pageNames.slice(i * 50, (i + 1) * 50);
			if (pageNames.length === 0) {
				return;
			}

			const queryParams: ApiQueryInfoParams & ApiQueryImageInfoParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				prop: ['imageinfo', 'info'],
				iiprop: ['url'],
				titles,
				redirects: true,
			};
			const response = await api.post(queryParams);
			if (!response['query']) {
				return;
			}

			for (const page of response['query'].pages) {
				const title = page.title as string;

				if (!page.missing) {
					continue;
				}

				await importPage(title, 'commons', isFileNS);
				await importPage(title, 'zhwiki', isFileNS);

				if (isFileNS) {
					if (!page.known) {
						continue;
					}

					await uploadFile(title, page.imageinfo[0].url as string);
				}
			}

			if (response['query'].redirects) {
				const tos = [];

				for (const {to} of response['query'].redirects as {from: string; to: string}[]) {
					tos[tos.length] = to;
				}

				await detectIfFileRedirect(tos);
			}
		};
	}

	for (const promise of promises) {
		await promise();
	}
};

export {detectIfFileRedirect, refreshPage};
