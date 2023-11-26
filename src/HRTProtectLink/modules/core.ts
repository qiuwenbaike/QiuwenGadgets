import {getMessage} from './i18n';

export const HRTProtectLink = (): void => {
	const semiProtectURL: string = mw.util.getUrl(mw.config.get('wgPageName'), {
		action: 'protect',
		'mwProtect-level-edit': 'autoconfirmed',
		'mwProtect-level-move': 'autoconfirmed',
		'mwProtect-reason': getMessage('HRT'),
	});
	const fullProtectURL: string = mw.util.getUrl(mw.config.get('wgPageName'), {
		action: 'protect',
		'mwProtect-level-edit': 'sysop',
		'mwProtect-level-move': 'sysop',
		'mwProtect-reason': getMessage('HRT'),
	});
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	mw.util.addPortletLink(portletId, semiProtectURL, getMessage('Semi-protect HRT'), 't-hrt-semiprotect');
	mw.util.addPortletLink(portletId, fullProtectURL, getMessage('Full-protect HRT'), 't-hrt-fullprotect');
};
