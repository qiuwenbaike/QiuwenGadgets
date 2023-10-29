(function HRTProtectLink(): void {
	if (![10, 828].includes(mw.config.get('wgNamespaceNumber'))) {
		return;
	}
	const getI18nMessages: GetI18nMessages = () => {
		const {localize} = i18n;
		return {
			HRT: localize({
				en: 'High-risk template',
				'zh-hans': '高风险模板',
				'zh-hant': '高風險模板',
			}),
			'Full-protect HRT': localize({
				en: 'Enforce full-protection to this high-risk template',
				'zh-hans': '全保护高风险模板',
				'zh-hant': '全保護高風險模板',
			}),
			'Semi-protect HRT': localize({
				en: 'Enforce semi-protection to this high-risk template',
				'zh-hans': '半保护高风险模板',
				'zh-hant': '半保護高風險模板',
			}),
		};
	};
	const i18nMessages = getI18nMessages();
	const getMessage = (key: string): string => {
		return i18nMessages[key] || key;
	};
	const protectUrl = mw.util.getUrl(mw.config.get('wgPageName'), {action: 'protect'});
	mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		`${protectUrl}&mwProtect-level-edit=autoconfirmed&mwProtect-level-move=autoconfirmed&mwProtect-reason=${encodeURIComponent(
			getMessage('HRT')
		)}`,
		getMessage('Semi-protect HRT'),
		't-hrt-semiprotect'
	);
	mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		`${protectUrl}&mwProtect-level-edit=sysop&mwProtect-level-move=sysop&mwProtect-reason=${encodeURIComponent(
			getMessage('HRT')
		)}`,
		getMessage('Full-protect HRT'),
		't-hrt-fullprotect'
	);
})();
