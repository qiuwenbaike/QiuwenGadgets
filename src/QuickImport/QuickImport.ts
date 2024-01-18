import {quickImport} from './modules/core';

$(function quickImportLoad() {
	const label: string =
		mw.config.get('wgNamespaceNumber') === 6 && !document.querySelector('#mw-noarticletext')
			? document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']")[0]
				? 'zhwiki'
				: 'commons'
			: '';
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
});
