import {getMessage} from './i18n';

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

export const HRTProtectLink = (): void => {
	mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		semiProtectURL,
		getMessage('Semi-protect HRT'),
		't-hrt-semiprotect'
	);
	mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		fullProtectURL,
		getMessage('Full-protect HRT'),
		't-hrt-fullprotect'
	);
};
