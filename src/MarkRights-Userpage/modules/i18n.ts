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
		SeniorEditor: localize({
			en: 'Senior Editor',
			'zh-hans': '资深编者',
			'zh-hant': '資深編者',
		}),
		EventSponsor: localize({
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

const i18nMessages: I18nMessages = getI18nMessages();

const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};

export {getMessage};
