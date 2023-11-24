import {getMessage} from './i18n';

export const HRTProtectLink = (): void => {
	const semiProtectURL = mw.util.getUrl(mw.config.get('wgPageName'), {
		action: 'protect',
		'mwProtect-level-edit': 'autoconfirmed',
		'mwProtect-level-move': 'autoconfirmed',
		'mwProtect-reason': getMessage('HRT'),
	});
	const fullProtectURL = mw.util.getUrl(mw.config.get('wgPageName'), {
		action: 'protect',
		'mwProtect-level-edit': 'sysop',
		'mwProtect-level-move': 'sysop',
		'mwProtect-reason': getMessage('HRT'),
	});
	const portletId = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	mw.util.addPortletLink(portletId, semiProtectURL, getMessage('Semi-protect HRT'), 't-hrt-semiprotect');
	mw.util.addPortletLink(portletId, fullProtectURL, getMessage('Full-protect HRT'), 't-hrt-fullprotect');
};
