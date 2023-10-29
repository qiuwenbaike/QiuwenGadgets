(function markRightsUserpage(): void {
	const getI18nMessages: GetI18nMessages = () => {
		const {localize} = i18n;
		return {
			// Webmaster: localize({
			// 	en: 'Webmaster',
			// 	'zh-hans': '站长',
			// 	'zh-hant': '站長',
			// }),
			Steward: localize({
				en: 'Steward',
				'zh-hans': '裁决委员',
				'zh-hant': '裁決委員',
			}),
			CheckUser: localize({
				en: 'CheckUser',
				'zh-hans': '用户查核',
				'zh-hant': '用戶查核',
			}),
			Suppress: localize({
				en: 'Oversighter',
				'zh-hans': '监督员',
				'zh-hant': '監督員',
			}),
			SysOp: localize({
				en: 'SysOp',
				'zh-hans': '管理员',
				'zh-hant': '管理員',
			}),
			InterfaceAdmin: localize({
				en: 'Interface Administrator',
				'zh-hans': '界面管理员',
				'zh-hant': '介面管理員',
			}),
			TemplateEditor: localize({
				en: 'Template Editor',
				'zh-hans': '模板编辑员',
				'zh-hant': '模板編輯員',
			}),
			Transwiki: localize({
				en: 'Importer',
				'zh-hans': '导入者',
				'zh-hant': '匯入者',
			}),
			Patroller: localize({
				en: 'Patroller',
				'zh-hans': '巡查员',
				'zh-hant': '巡查員',
			}),
			AutoReviewer: localize({
				en: 'Exempted from page patrol',
				'zh-hans': '巡查豁免',
				'zh-hant': '巡查豁免',
			}),
			senioreditor: localize({
				en: 'Senior Editor',
				'zh-hans': '资深编者',
				'zh-hant': '資深編者',
			}),
			eventsponsor: localize({
				en: 'Event Sponsor',
				'zh-hans': '活动组织者',
				'zh-hant': '活動組織者',
			}),
			MassMessageSender: localize({
				en: 'MassMessage sender',
				'zh-hans': '大量消息发送者',
				'zh-hant': '大量訊息傳送者',
			}),
			Confirmed: localize({
				en: 'Confirmed user',
				'zh-hans': '确认用户',
				'zh-hant': '確認用戶',
			}),
			// AutoConfirmed: localize({
			// 	en: 'Auto-confirmed user',
			// 	'zh-hans': '自动确认用户',
			// 	'zh-hant': '自動確認用戶',
			// }),
			RNRSVerifyExempt: localize({
				en: 'Exempted from real-name verification',
				'zh-hans': '实名制验证豁免',
				'zh-hant': '實名制驗證豁免',
			}),
			Bot: localize({
				en: 'Bot',
				'zh-hans': '机器人',
				'zh-hant': '機械人',
			}),
			Flood: localize({
				en: 'Flooder',
				'zh-hans': '机器用户',
				'zh-hant': '機械用戶',
			}),
			// IPBlockExempt: localize({
			// 	en: 'Exempted from IP blocks',
			// 	'zh-hans': 'IP封禁豁免',
			// 	'zh-hant': 'IP封鎖豁免',
			// }),
		};
	};
	const i18nMessages = getI18nMessages();
	const getMessage = (key: string): string => {
		return i18nMessages[key] || key;
	};

	const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');
	if (!wgRelevantUserName) {
		return;
	}

	const appendIcon = (indicatorText: string, spanClass: string): void => {
		if (spanClass === 'unknown') {
			return;
		}
		const elementName =
			mw.config.get('skin') === 'citizen'
				? 'section'
				: ['vector', 'vector-2022', 'gongbi', 'write'].includes(mw.config.get('skin'))
				? 'li'
				: 'div';
		// The following classes are used here:
		// * mw-markrights-qiuwen
		// * mw-markrights-steward
		// * mw-markrights-checkuser
		// * mw-markrights-suppress
		// * mw-markrights-sysop
		// * mw-markrights-interface-admin
		// * mw-markrights-templateeditor
		// * mw-markrights-transwiki
		// * mw-markrights-patroller
		// * mw-markrights-autoreviewer
		// * mw-markrights-senioreditor
		// * mw-markrights-eventsponsor
		// * mw-markrights-massmessage-sender
		// * mw-markrights-confirmed
		// * mw-markrights-autoconfirmed
		// * mw-markrights-bot
		// * mw-markrights-flood
		// * mw-markrights-ipblock-exempt
		// * mw-markrights-rnrsverify-exempt
		const $indicator: JQuery = $(`<${elementName}>`)
			.addClass(`mw-markrights mw-markrights-${spanClass}`)
			.append(
				$('<span>').addClass(`mw-markrights-icon mw-markrights-icon-${spanClass}`).attr({
					alt: indicatorText,
					title: indicatorText,
				})
			)
			.append(
				$('<span>')
					.addClass('mw-markrights-text')
					.text(indicatorText ?? '')
			);
		$((): void => {
			$indicator.prependTo($('#footer-info, .page-info'));
		});
	};

	const getPermissions = () => {
		const api: mw.Api = new mw.Api({
			ajax: {
				headers: {
					'Api-User-Agent': `Qiuwen/1.1 (MarkRights-Userpage/1.0; ${mw.config.get('wgWikiID')})`,
				},
			},
		});
		const listUsersParams: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			ususers: wgRelevantUserName,
			usprop: 'groups',
		};
		api.get(listUsersParams).then((response): void => {
			const [{groups}]: [{groups: string[]}] = response['query'].users;
			const systemScriptList = [
				'滥用过滤器',
				'求闻编者',
				'求闻百科社区',
				'Example',
				'External contributors',
				'Maintenance script',
				'MediaWiki default',
				'MediaWiki message delivery',
				'New user page',
			];
			const webmasterList = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia'];
			if (webmasterList.includes(wgRelevantUserName) || groups.includes('qiuwen')) {
				/* appendIcon(message('Webmaster'), 'qiuwen'); */
				return; // Already shown in GeoLocationViewer
			}
			if (groups.includes('steward')) {
				appendIcon(getMessage('Steward'), 'steward');
			}
			if (groups.includes('checkuser')) {
				appendIcon(getMessage('CheckUser'), 'checkuser');
			}
			if (groups.includes('suppress')) {
				appendIcon(getMessage('Suppress'), 'suppress');
			}
			if (groups.includes('SysOp')) {
				appendIcon(getMessage('SysOp'), 'sysop');
			}
			if (groups.includes('interface-admin')) {
				appendIcon(getMessage('InterfaceAdmin'), 'interface-admin');
			}
			if (groups.includes('templateeditor')) {
				appendIcon(getMessage('TemplateEditor'), 'templateeditor');
			}
			if (groups.includes('transwiki')) {
				appendIcon(getMessage('Transwiki'), 'transwiki');
			}
			if (groups.includes('patroller')) {
				appendIcon(getMessage('Patroller'), 'patroller');
			}
			if (groups.includes('autoreviewer')) {
				appendIcon(getMessage('AutoReviewer'), 'autoreviewer');
			}
			if (groups.includes('senioreditor')) {
				appendIcon(getMessage('SeniorEditor'), 'senioreditor');
			}
			if (groups.includes('massmessage-sender')) {
				appendIcon(getMessage('MassMessageSender'), 'massmessage-sender');
			}
			if (groups.includes('autoconfirmed')) {
				/* empty */
				/* appendIcon(message('AutoConfirmed'), 'autoconfirmed'); */
			} else if (groups.includes('confirmed')) {
				appendIcon(getMessage('Confirmed'), 'confirmed');
			}
			if (groups.includes('rnrsverify-exempt')) {
				appendIcon(getMessage('RNRSVerifyExempt'), 'rnrsverify-exempt');
			}
			if (
				groups.includes('bot') &&
				!systemScriptList.includes(wgRelevantUserName) // Already shown in GeoLocationViewer
			) {
				/* appendIcon(message('Bot'), 'bot'); */
				// Already shown in GeoLocationViewer
			}
			if (groups.includes('flood')) {
				appendIcon(getMessage('Flood'), 'flood');
			}
			// if (groups.includes('ipblock-exempt')) {
			// 	appendIcon(message('IPBlockExempt'), 'ipblock-exempt');
			// }
		});
	};

	if (wgRelevantUserName && mw.config.get('wgNamespaceNumber') === 2 && mw.config.get('wgAction') === 'view') {
		const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
		const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();
		if (relevantUserPageName === pageName) {
			getPermissions();
		}
	}
})();
