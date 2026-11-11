/*! Twinkle.js - twinkleprotect.ts */
import type {ProtectionInfo, ProtectionOptionGroup, ProtectionOptionItem, ProtectionPresetInfo} from './ui/types';
import {UTC8_OFFSET_MINUTES} from './utils/utc8';
import {api} from './utils/api';
import {footerLinks} from './utils/footerLinks';
import {mountLazyDialog} from './utils/lazyDialogs';
import {reactive} from 'vue';
import {uls} from './utils/useUls';

/**
 * twinkleprotect.ts: Protect/RPP module
 * Mode of invocation: Tab ("PP"/"RPP")
 * Active on: Non-special, non-MediaWiki pages
 *
 * Submission logic (`evaluate` and the tagging/file-request/close-request
 * callbacks) lives in `ui/TwProtectDialog.vue`; this file provides the module
 * entry, the shared option lists and the current-protection-state fetcher.
 *
 * Note: a lot of code in this module is re-used/called by batchprotect.
 */
interface ProtectionLevel {
	level: string;
	expiry: string;
	cascade: boolean;
}

type ProtectionLevels = Record<string, ProtectionLevel>;

interface ProtectionLogEvent {
	action?: string;
	user: string;
	timestamp: string;
	params: {details: {type: string; level: string; expiry: string; cascade?: string}[]};
}

interface ProtectionApiResponse {
	query: {
		pageids: string[];
		pages: Record<
			string,
			{
				watchlistexpiry?: string;
				watched?: string;
				protection: {type: string; level: string; expiry: string; cascade?: string}[];
			}
		>;
		logevents: ProtectionLogEvent[];
	};
}

export interface TwinkleProtectModule {
	(): void;
	callback: () => void;
	fetchProtectionLevel: () => void;
	watched?: boolean;
	hasProtectLog?: boolean;
	currentProtectionLevels: ProtectionLevels;
	previousProtectionLevels: ProtectionLevels;
	previousProtectionLog: ProtectionLogEvent | undefined;
	protectionLevels: ProtectionOptionItem[];
	protectionLengths: ProtectionOptionItem[];
	protectionTypesAdmin: ProtectionOptionGroup[];
	protectionTypesCreateOnly: ProtectionOptionGroup[];
	protectionTypes: ProtectionOptionGroup[];
	protectionTypesCreate: ProtectionOptionGroup[];
	protectionTags: ProtectionOptionGroup[];
	protectionPresetsInfo: Record<string, ProtectionPresetInfo>;
	formatProtectionDescription: (protectionLevels: ProtectionLevels) => string;
}

declare global {
	interface TwinkleModules {
		protect?: TwinkleProtectModule;
	}
}

const twinkleprotect = (() => {
	if (mw.config.get('wgNamespaceNumber') < 0 || mw.config.get('wgNamespaceNumber') === 8) {
		return;
	}
	Twinkle.addPortletLink(
		twinkleprotect.callback,
		uls('保护', '保護'),
		'tw-rpp',
		window.Morebits.userIsSysop ? uls('保护页面', '保護頁面') : uls('请求保护页面', '請求保護頁面')
	);
}) as TwinkleProtectModule;

// Customizable namespace and FlaggedRevs settings
// In theory it'd be nice to have restrictionlevels defined here,
// but those are only available via a siteinfo query
// Limit template editor; a Twinkle restriction, not a site setting
const isTemplate = mw.config.get('wgNamespaceNumber') === 10 || mw.config.get('wgNamespaceNumber') === 828;
// Holds reactive state displayed inside the Vue dialog
let protectionInfo: ProtectionInfo | null = null;

twinkleprotect.callback = (): void => {
	const info = reactive<ProtectionInfo>({
		previousNotice: null,
		logLink: mw.util.getUrl('Special:Log', {
			action: 'view',
			page: mw.config.get('wgPageName'),
			type: 'protect',
		}),
		currentStatus: null,
	});
	protectionInfo = info;
	mountLazyDialog('TwProtectDialog', {
		isSysop: window.Morebits.userIsSysop,
		pageExists: mw.config.get('wgArticleId') !== 0,
		isScribunto: mw.config.get('wgPageContentModel') === 'Scribunto',
		isTemplate,
		protectionInfo: info,
		title: window.Morebits.userIsSysop
			? uls('施行或请求保护页面', '施行或請求保護頁面')
			: uls('请求保护页面', '請求保護頁面'),
		footerLinks: footerLinks('protect', uls('保护设置', '保護設定'), [
			{text: uls('保护方针', '保護方針'), href: mw.util.getUrl('QW:PROT')},
		]),
		protectionLevels: twinkleprotect.protectionLevels,
		protectionLengths: twinkleprotect.protectionLengths,
		protectionTypesAdmin: twinkleprotect.protectionTypesAdmin,
		protectionTypesCreateOnly: twinkleprotect.protectionTypesCreateOnly,
		protectionTypesCreate: twinkleprotect.protectionTypesCreate,
		protectionTags: twinkleprotect.protectionTags,
		protectionPresetsInfo: twinkleprotect.protectionPresetsInfo,
	});
	// get current protection level asynchronously
	twinkleprotect.fetchProtectionLevel();
};

// Contains the current protection level in an object
// Once filled, it will look something like:
// { edit: { level: "sysop", expiry: <some date>, cascade: true }, ... }
twinkleprotect.currentProtectionLevels = {};
twinkleprotect.previousProtectionLevels = {};
twinkleprotect.previousProtectionLog = undefined;
twinkleprotect.fetchProtectionLevel = (): void => {
	const params = {
		format: 'json',
		indexpageids: true,
		action: 'query',
		list: 'logevents',
		letype: 'protect',
		letitle: mw.config.get('wgPageName'),
		prop: 'info',
		inprop: 'protection|watched',
		titles: mw.config.get('wgPageName'),
	};
	void api.get(params).then((response) => {
		const protectData = response as ProtectionApiResponse;
		const [pageid] = protectData.query.pageids;
		const page = protectData.query.pages[pageid ?? ''];
		if (!page) {
			return;
		}
		const current: ProtectionLevels = {};
		const previous: ProtectionLevels = {};
		// Save requested page's watched status for later in case needed when filing request
		twinkleprotect.watched = Boolean(page.watchlistexpiry) || page.watched === '';
		for (const protection of page.protection) {
			if (protection.type !== 'aft') {
				current[protection.type] = {
					level: protection.level,
					expiry: protection.expiry,
					cascade: protection.cascade === '',
				};
			}
		}
		const logevents = protectData.query.logevents;
		// Only use the log except unprotect
		if (logevents.length >= 1 && logevents[0]?.action !== 'unprotect') {
			[twinkleprotect.previousProtectionLog] = logevents;
		} else if (logevents.length >= 2) {
			[, twinkleprotect.previousProtectionLog] = logevents;
		}
		if (twinkleprotect.previousProtectionLog) {
			for (const protection of twinkleprotect.previousProtectionLog.params.details) {
				if (protection.type !== 'aft') {
					previous[protection.type] = {
						level: protection.level,
						expiry: protection.expiry,
						cascade: protection.cascade === '',
					};
				}
			}
		}
		// show the protection level and log info
		twinkleprotect.hasProtectLog = !!protectData.query.logevents.length;
		twinkleprotect.currentProtectionLevels = current;
		twinkleprotect.previousProtectionLevels = previous;
		showLogAndCurrentProtectInfo();
	});
};

const showLogAndCurrentProtectInfo = (): void => {
	if (!protectionInfo) {
		return;
	}
	const currentlyProtected = Object.keys(twinkleprotect.currentProtectionLevels).length !== 0;
	if (twinkleprotect.hasProtectLog && twinkleprotect.previousProtectionLog) {
		const log = twinkleprotect.previousProtectionLog;
		protectionInfo.previousNotice = currentlyProtected
			? uls('先前保护', '先前保護')
			: `${uls('此页面曾在', '此頁面曾在')}${new window.Morebits.date(log.timestamp).calendar(
					UTC8_OFFSET_MINUTES
				)}被${log.user}${uls('保护', '保護')}：${twinkleprotect.formatProtectionDescription(
					twinkleprotect.previousProtectionLevels
				)}`;
	} else {
		protectionInfo.previousNotice = null;
	}
	const description = twinkleprotect.formatProtectionDescription(twinkleprotect.currentProtectionLevels);
	protectionInfo.currentStatus = {
		severe: currentlyProtected,
		text: description,
	};
};

// NOTE: This list is used by batchprotect as well
twinkleprotect.protectionLevels = [
	{
		label: '全部',
		value: 'all',
	},
	{
		label: uls('仅自动确认用户', '僅自動確認使用者'),
		value: 'autoconfirmed',
	},
	{
		label: uls('仅模板编辑员和管理员', '僅模板編輯員和管理員'),
		value: 'templateeditor',
	},
	{
		label: uls('仅管理员', '僅管理員'),
		value: 'sysop',
		selected: true,
	},
	{
		label: uls('仅资深编者', '僅資深編者'),
		value: 'revisionprotected',
	},
	{
		label: uls('仅裁决委员', '僅裁決委員'),
		value: 'officialprotected',
	},
];
// default expiry selection is conditionally set in the dialog's category watcher
// NOTE: This list is used by batchprotect as well
twinkleprotect.protectionLengths = [
	{
		label: '1天',
		value: '1 day',
	},
	{
		label: '3天',
		value: '3 days',
	},
	{
		label: uls('1周', '1週'),
		value: '1 week',
	},
	{
		label: uls('2周', '2週'),
		value: '2 weeks',
	},
	{
		label: uls('1个月', '1個月'),
		value: '1 month',
	},
	{
		label: uls('3个月', '3個月'),
		value: '3 months',
	},
	{
		label: uls('6个月', '6個月'),
		value: '6 months',
	},
	{
		label: '1年',
		value: '1 year',
	},
	{
		label: uls('无限期', '無限期'),
		value: 'infinity',
	},
	{
		label: uls('自定义……', '自訂……'),
		value: 'custom',
	},
];
twinkleprotect.protectionTypesAdmin = [
	{
		label: uls('解除保护', '解除保護'),
		value: 'unprotect',
	},
	{
		label: uls('全保护', '全保護'),
		list: [
			{
				label: uls('常规（全）', '常規（全）'),
				value: 'pp-protected',
			},
			{
				label: uls('争议、编辑战（全）', '爭議、編輯戰（全）'),
				value: 'pp-dispute',
			},
		],
	},
	{
		label: uls('模板保护', '模板保護'),
		list: [
			{
				label: uls('高风险模板（模板）', '高風險模板（模板）'),
				value: 'pp-template',
			},
		],
	},
	{
		label: uls('半保护', '半保護'),
		list: [
			{
				label: uls('常规（半）', '常規（半）'),
				value: 'pp-semi-protected',
			},
			{
				label: uls('持续破坏（半）', '持續破壞（半）'),
				value: 'pp-semi-vandalism',
			},
			{
				label: uls('违反生者传记条例（半）', '違反生者傳記條例（半）'),
				value: 'pp-semi-blp',
			},
			{
				label: uls('傀儡破坏（半）', '傀儡破壞（半）'),
				value: 'pp-semi-sock',
			},
			{
				label: uls('高风险模板（半）', '高風險模板（半）'),
				value: 'pp-semi-template',
			},
			{
				label: uls('被封禁用户滥用讨论页（半）', '被封禁使用者濫用討論頁（半）'),
				value: 'pp-semi-usertalk',
			},
		],
	},
	{
		label: uls('移动保护', '移動保護'),
		list: [
			{
				label: uls('常规（移动）', '常規（移動）'),
				value: 'pp-move',
			},
			{
				label: uls('争议、移动战（移动）', '爭議、移動戰（移動）'),
				value: 'pp-move-dispute',
			},
			{
				label: uls('移动破坏（移动）', '移動破壞（移動）'),
				value: 'pp-move-vandalism',
			},
			{
				label: uls('高风险页面（移动）', '高風險頁面（移動）'),
				value: 'pp-move-indef',
			},
		],
	},
].filter(
	(
		// Filter for templates
		{label}
	) => {
		return isTemplate || (label !== '模板保护' && label !== '模板保護');
	}
);
twinkleprotect.protectionTypesCreateOnly = [
	{
		label: uls('白纸保护', '白紙保護'),
		list: [
			{
				label: uls('常规（白纸）', '常規（白紙）'),
				value: 'pp-create',
			},
			{
				label: uls('多次重复创建（白纸）', '多次重複建立（白紙）'),
				value: 'pp-create-repeat',
			},
			{
				label: uls('持续破坏（白纸）', '持續破壞（白紙）'),
				value: 'pp-create-vandalism',
			},
			{
				label: uls('已封禁用户的用户页（白纸）', '已封禁使用者的使用者頁（白紙）'),
				value: 'pp-create-userpage',
			},
		],
	},
];
twinkleprotect.protectionTypes = [...twinkleprotect.protectionTypesAdmin, ...twinkleprotect.protectionTypesCreateOnly];
twinkleprotect.protectionTypesCreate = [
	{
		label: '解除保护',
		value: 'unprotect',
	},
	...twinkleprotect.protectionTypesCreateOnly,
];
// NOTICE: keep this synched with [[MediaWiki:Protect-dropdown]]
// expiry will override any defaults
twinkleprotect.protectionPresetsInfo = {
	'pp-protected': {
		edit: 'sysop',
		move: 'sysop',
		reason: null,
	},
	'pp-dispute': {
		edit: 'sysop',
		move: 'sysop',
		reason: uls('编辑战', '編輯戰'),
	},
	'pp-template': {
		edit: 'templateeditor',
		move: 'templateeditor',
		expiry: 'infinity',
		reason: uls('[[QW:HRT|高风险模板]]', '[[QW:HRT|高風險模板]]'),
		template: 'noop',
	},
	'pp-vandalism': {
		edit: 'sysop',
		move: 'sysop',
		reason: uls('被自动确认用户破坏', '被自動確認使用者破壞'),
	},
	'pp-sock': {
		edit: 'sysop',
		move: 'sysop',
		reason: uls('持续的傀儡破坏', '持續的傀儡破壞'),
	},
	'pp-semi-vandalism': {
		edit: 'autoconfirmed',
		reason: uls('被新用户破坏', '被新使用者破壞'),
		template: 'pp-vandalism',
	},
	'pp-semi-blp': {
		edit: 'autoconfirmed',
		reason: uls('新用户违反生者传记条例', '新使用者違反生者傳記條例'),
	},
	'pp-semi-usertalk': {
		edit: 'autoconfirmed',
		reason: uls('被封禁用户滥用其讨论页', '被封禁使用者濫用其討論頁'),
	},
	'pp-semi-template': {
		// removed for now
		edit: 'autoconfirmed',
		expiry: 'infinity',
		reason: uls('[[QW:HRT|高风险模板]]', '[[QW:HRT|高風險模板]]'),
		template: 'noop',
	},
	'pp-semi-sock': {
		edit: 'autoconfirmed',
		reason: uls('持续的傀儡破坏', '持續的傀儡破壞'),
		template: 'pp-sock',
	},
	'pp-semi-protected': {
		edit: 'autoconfirmed',
		reason: null,
		template: 'pp-protected',
	},
	'pp-move': {
		move: 'sysop',
		reason: null,
	},
	'pp-move-dispute': {
		move: 'sysop',
		reason: uls('页面移动战', '頁面移動戰'),
	},
	'pp-move-vandalism': {
		move: 'sysop',
		reason: uls('移动破坏', '移動破壞'),
	},
	'pp-move-indef': {
		move: 'sysop',
		expiry: 'infinity',
		reason: uls('高风险页面', '高風險頁面'),
	},
	unprotect: {
		edit: 'all',
		move: 'all',
		create: 'all',
		reason: null,
		template: 'none',
	},
	'pp-create': {
		create: 'autoconfirmed',
		reason: null,
	},
	'pp-create-repeat': {
		create: 'autoconfirmed',
		reason: uls('多次重复创建', '多次重複建立'),
	},
	'pp-create-vandalism': {
		create: 'autoconfirmed',
		reason: uls('被新用户破坏', '被新使用者破壞'),
	},
	'pp-create-userpage': {
		create: 'sysop',
		expiry: 'infinity',
		reason: uls('被永久封禁的用户页', '被永久封禁的使用者頁面'),
	},
};
twinkleprotect.protectionTags = [
	{
		label: uls('无（移除现有模板）', '無（移除現有模板）'),
		value: 'none',
	},
	{
		label: uls('无（不移除现有模板）', '無（不移除現有模板）'),
		value: 'noop',
	},
	{
		label: '通用模板',
		list: [
			{
				label: `{{pp-dispute}}: ${uls('争议', '爭議')}`,
				value: 'pp-dispute',
			},
			{
				label: `{{pp-vandalism}}: ${uls('破坏', '破壞')}`,
				value: 'pp-vandalism',
				selected: true,
			},
			{
				label: '{{pp-sock}}: 傀儡',
				value: 'pp-sock',
			},
			{
				label: `{{pp-template}}: ${uls('高风险模板', '高風險模板')}`,
				value: 'pp-template',
			},
			{
				label: `{{pp-protected}}: ${uls('常规', '常規')}`,
				value: 'pp-protected',
			},
		],
	},
	{
		label: uls('半保护模板', '半保護模板'),
		list: [
			{
				label: `{{pp-semi-usertalk}}: ${uls('封禁的用户', '封禁的使用者')}`,
				value: 'pp-semi-usertalk',
			},
			{
				label: `{{pp-semi-blp}}: ${uls('生者传记', '生者傳記')}`,
				value: 'pp-semi-blp',
			},
			{
				label: `{{pp-semi-indef}}: ${uls('长期', '長期')}`,
				value: 'pp-semi-indef',
			},
		],
	},
	{
		label: uls('移动保护模板', '移動保護模板'),
		list: [
			{
				label: `{{pp-move-dispute}}: ${uls('争议', '爭議')}`,
				value: 'pp-move-dispute',
			},
			{
				label: `{{pp-move-vandalism}}: ${uls('破坏', '破壞')}`,
				value: 'pp-move-vandalism',
			},
			{
				label: `{{pp-move-indef}}: ${uls('长期', '長期')}`,
				value: 'pp-move-indef',
			},
			{
				label: `{{pp-move}}: ${uls('常规', '常規')}`,
				value: 'pp-move',
			},
		],
	},
];
twinkleprotect.formatProtectionDescription = (protectionLevels: ProtectionLevels): string => {
	if (Object.keys(protectionLevels).length === 0) {
		return uls('无保护', '無保護');
	}
	const descriptions: string[] = [];
	for (const [type, settings] of Object.entries(protectionLevels)) {
		let label: string;
		switch (type) {
			case 'edit':
				label = uls('编辑', '編輯');
				break;
			case 'move':
				label = uls('移动', '移動');
				break;
			case 'create':
				label = uls('创建', '建立');
				break;
			case 'upload':
				label = uls('上传', '上傳');
				break;
			default:
				label = type;
				break;
		}
		let level: string;
		switch (settings.level) {
			case 'officialprotected':
				level = uls('仅裁决委员', '僅裁決委員');
				break;
			case 'revisionprotected':
				level = uls('仅资深编者', '僅資深編者');
				break;
			case 'autoconfirmed':
				level = uls('仅自动确认用户', '僅自動確認使用者');
				break;
			case 'templateeditor':
				level = uls('仅模板编辑员和管理员', '僅模板編輯員和管理員');
				break;
			case 'sysop':
				level = uls('仅管理员', '僅管理員');
				break;
			default:
				level = settings.level;
				break;
		}
		let description = `${label}：${level}`;
		if (window.Morebits.string.isInfinity(settings.expiry)) {
			description += uls('（无限期）', '（無限期）');
		} else {
			description += `${
				uls('（过期：', '（過期：') + new window.Morebits.date(settings.expiry).calendar(UTC8_OFFSET_MINUTES)
			}）`;
		}
		if (settings.cascade) {
			description += uls('（连锁）', '（連鎖）');
		}
		descriptions.push(description);
	}
	return descriptions.join(' ');
};
Twinkle.protect = twinkleprotect;
Twinkle.addInitCallback(twinkleprotect, 'protect');

export {};
