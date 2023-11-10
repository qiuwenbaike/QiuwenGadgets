import {ding, initMwApi} from '../util';

const quickImport = async (): Promise<void> => {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (QuickImport/1.0; ${mw.config.get('wgWikiID')})`);

	const pageName = $('.redirectText a')[0]?.textContent || mw.config.get('wgPageName');

	const refreshPage = (): void => {
		ding('正在刷新', false, 'success');
		location.replace(`${mw.config.get('wgScript')}?title=${mw.util.rawurlencode(mw.config.get('wgPageName'))}`);
	};

	const importPage = async (iwprefix = 'zhwiki'): Promise<void> => {
		ding('导入页面中');

		let summary = '页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史';
		if (mw.config.get('wgNamespaceNumber') === 6) {
			summary += '；文件作者请参见此页面及来源页面记载';
		}

		const params = {
			action: 'import',
			assignknownusers: 1,
			interwikipage: pageName,
			interwikiprefix: iwprefix,
			interwikisource: iwprefix,
			summary: `［${summary}］`,
		};
		await api.postWithEditToken(params);

		ding('页面导入完成', false, 'success');
	};

	const uploadFile = async (): Promise<void> => {
		const url = `https://zh.wikipedia.org/wiki/Special:Redirect/file/${mw.util.rawurlencode(pageName)}`;
		ding('迁移文件中');
		const params: ApiUploadParams = {
			action: 'upload',
			filename: pageName,
			comment: '自其他网站迁移文件',
			ignorewarnings: true,
			url,
		};
		await api.postWithEditToken(params);
		refreshPage();
	};

	if (mw.config.get('wgNamespaceNumber') === 6 && !$('#mw-noarticletext').length) {
		let source = '';
		source = $("#ca-view-foreign a[href*='zh.wikipedia.org']").length ? 'zhwiki' : 'commons';
		await importPage(source);
		const params: ApiQueryParams = {
			action: 'query',
			prop: 'info',
			titles: pageName,
		};
		const data = await api.get(params);
		for (const [, pageinfo] of Object.entries(data['query'].pages)) {
			if ((pageinfo as Record<string, never>)['missing'] === '') {
				await importPage(pageName);
				const params2: ApiQueryParams = {
					action: 'query',
					prop: 'info',
					titles: pageName,
				};
				const result = await api.get(params2);
				for (const [, info] of Object.entries(result['query'].pages)) {
					if ((info as Record<string, never>)['redirect'] === '') {
						continue;
					}
					uploadFile();
				}
			} else {
				const params3: ApiQueryParams = {
					action: 'query',
					prop: 'info',
					titles: pageName,
				};
				const result = await api.get(params3);
				for (const [, info] of Object.entries(result['query'].pages)) {
					if ((info as Record<string, never>)['redirect'] === '') {
						continue;
					}
					uploadFile();
				}
			}
		}
	} else {
		importPage().then(refreshPage);
	}
};

let label = '';
if (mw.config.get('wgNamespaceNumber') === 6 && !$('#mw-noarticletext').length) {
	label = $("#ca-view-foreign a[href*='zh.wikipedia.org']").length ? 'zhwiki' : 'commons';
} else {
	label = '';
}

const buttonLabel = $('.redirectText a')[0] ? '重定向目标' : '页面';
const element: HTMLLIElement | null = mw.util.addPortletLink(
	document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
	'#',
	`导入${mw.config.get('wgNamespaceNumber') === 6 ? (label === '' ? '页面' : `文件（${label}）`) : `${buttonLabel}`}`,
	't-import'
);

if (element) {
	$(element).on('click', quickImport);
}
