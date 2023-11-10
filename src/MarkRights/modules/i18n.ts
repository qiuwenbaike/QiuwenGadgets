const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		// qiuwen: localize({
		// 	en: 'Webmaster',
		// 	'zh-hans': '站长',
		// 	'zh-hant': '站長',
		// }),
		steward: localize({
			en: 'Steward',
			'zh-hans': '裁决委员',
			'zh-hant': '裁決委員',
		}),
		checkuser: localize({
			en: 'CheckUser',
			'zh-hans': '用户查核',
			'zh-hant': '用戶查核',
		}),
		suppress: localize({
			en: 'Oversighter',
			'zh-hans': '监督员',
			'zh-hant': '監督員',
		}),
		sysop: localize({
			en: 'SysOp',
			'zh-hans': '管理员',
			'zh-hant': '管理員',
		}),
		'interface-admin': localize({
			en: 'Interface Administrator',
			'zh-hans': '界面管理员',
			'zh-hant': '介面管理員',
		}),
		templateeditor: localize({
			en: 'Template Editor',
			'zh-hans': '模板编辑员',
			'zh-hant': '模板編輯員',
		}),
		transwiki: localize({
			en: 'Importer',
			'zh-hans': '导入者',
			'zh-hant': '匯入者',
		}),
		patroller: localize({
			en: 'Patroller',
			'zh-hans': '巡查员',
			'zh-hant': '巡查員',
		}),
		autoreviewer: localize({
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
		'massmessage-sender': localize({
			en: 'MassMessage sender',
			'zh-hans': '大量消息发送者',
			'zh-hant': '大量訊息傳送者',
		}),
		confirmed: localize({
			en: 'Confirmed user',
			'zh-hans': '确认用户',
			'zh-hant': '確認用戶',
		}),
		// autoconfirmed: localize({
		// 	en: 'Auto-confirmed user',
		// 	'zh-hans': '自动确认用户',
		// 	'zh-hant': '自動確認用戶',
		// }),
		bot: localize({
			en: 'Bot',
			'zh-hans': '机器人',
			'zh-hant': '機械人',
		}),
		flood: localize({
			en: 'Flooder',
			'zh-hans': '机器用户',
			'zh-hant': '機械用戶',
		}),
		'rnrsverify-exempt': localize({
			en: 'Exempted from real-name verification',
			'zh-hans': '实名制验证豁免',
			'zh-hant': '實名制驗證豁免',
		}),
		// 'ipblock-exempt': localize({
		// 	en: 'Exempted from IP blocks',
		// 	'zh-hans': 'IP封禁豁免',
		// 	'zh-hant': 'IP封鎖豁免',
		// }),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
