import {initMwApi} from 'ext.gadget.Util';
import {toastify} from 'ext.gadget.Toastify';

const quickImport = async (): Promise<void> => {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (QuickImport/1.0; ${mw.config.get('wgWikiID')})`);
	const $body: JQuery<HTMLBodyElement> = $('body');
	const pageName: string = $body.find('.redirectText a')[0]?.textContent || mw.config.get('wgPageName');

	let toastifyInstance: ToastifyInstance = {
		hideToast: () => {},
	};

	const refreshPage = (): void => {
		toastifyInstance.hideToast();
		toastify(
			{
				text: '正在刷新页面',
				duration: -1,
			},
			'info'
		);
		location.replace(`${mw.config.get('wgScript')}?title=${mw.util.rawurlencode(mw.config.get('wgPageName'))}`);
	};

	const importPage = async (iwprefix = 'zhwiki'): Promise<void> => {
		toastifyInstance.hideToast();
		toastifyInstance = toastify(
			{
				text: '导入页面中',
				duration: -1,
			},
			'info'
		);

		let summary: string = '页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史';
		if (mw.config.get('wgNamespaceNumber') === 6) {
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

	const detectIfFileRedirect = async (callback: () => void): Promise<void> => {
		const params: ApiQueryParams = {
			action: 'query',
			prop: 'info',
			titles: pageName,
		};
		const result = await api.get(params);
		for (const [, info] of Object.entries(result['query'].pages)) {
			if ((info as Record<string, never>)['redirect'] === '') {
				continue;
			}
			callback();
		}
	};

	const uploadFile = async (): Promise<void> => {
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
			action: 'upload',
			filename: pageName,
			comment: '自其他网站迁移文件',
			ignorewarnings: true,
			url,
		};
		await api.postWithEditToken(uploadParams);
		refreshPage();
	};

	if (mw.config.get('wgNamespaceNumber') === 6 && !document.querySelector('#mw-noarticletext')) {
		let source: string = '';
		source = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']")[0] ? 'zhwiki' : 'commons';
		await importPage(source);
		const queryParams: ApiQueryParams = {
			action: 'query',
			prop: 'info',
			titles: pageName,
		};
		const data = await api.get(queryParams);
		for (const [, pageinfo] of Object.entries(data['query'].pages)) {
			if ((pageinfo as Record<string, never>)['missing'] === '') {
				await importPage(pageName);
				void detectIfFileRedirect(() => {
					void uploadFile();
				});
			} else {
				void detectIfFileRedirect(() => {
					void uploadFile();
				});
			}
		}
	} else {
		await importPage();
		refreshPage();
	}
};

let label: string = '';
if (mw.config.get('wgNamespaceNumber') === 6 && !document.querySelector('#mw-noarticletext')) {
	label = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']")[0] ? 'zhwiki' : 'commons';
} else {
	label = '';
}

const buttonLabel: string = document.querySelectorAll('.redirectText a')[0] ? '重定向目标' : '页面';
const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
const element: HTMLLIElement | null = mw.util.addPortletLink(
	portletId,
	'#',
	`导入${mw.config.get('wgNamespaceNumber') === 6 ? (label === '' ? '页面' : `文件（${label}）`) : `${buttonLabel}`}`,
	't-import'
);

if (element) {
	$(element).on('click', () => {
		void quickImport();
	});
}
