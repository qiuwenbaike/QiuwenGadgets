/*! Twinkle.js - twinkleblock.ts */
import {createApp, h, reactive} from 'vue';
import {Morebits} from './ui/morebits';
import TwBlockDialog from './ui/TwBlockDialog.vue';
import {UTC8_OFFSET_MINUTES} from './utils/utc8';
import {api} from './utils/api';
import {uls} from './utils/useUls';

/**
 * twinkleblock.ts: Block module
 * Mode of invocation: Tab ("Block")
 * Active on: Any page with relevant user name (userspace, contribs, etc.)
 *
 * Dialog rendering and the submission/preview logic (`evaluate`, `preview`,
 * `issue_template`, `main`, `taguserpage`, `protectuserpage`, `closeRequest`
 * and `getBlockNoticeWikitext`) live in `ui/TwBlockDialog.vue`; this file
 * provides the module entry, the fetched block state and the preset data.
 */
interface BlockGroupPreset {
	label: string;
	value: string;
	selected?: boolean;
	disabled?: boolean;
	meta?: boolean;
	forAnonOnly?: boolean;
	forRegisteredOnly?: boolean;
}

interface BlockGroup {
	label: string;
	custom?: boolean;
	list?: BlockGroupPreset[];
}

/** Output of filteredBlockGroups: the group list is always present. */
interface BuiltBlockPreset extends BlockGroupPreset {
	data: {
		name: string;
		value: string;
	}[];
}

interface BuiltBlockGroup {
	label: string;
	list: BuiltBlockPreset[];
}

type BlockPresetSettings = {
	autoblock?: boolean;
	disabletalk?: boolean;
	hardblock?: boolean;
	expiry?: string;
	forAnonOnly?: boolean;
	forRegisteredOnly?: boolean;
	noemail?: boolean;
	pageParam?: boolean;
	prependReason?: boolean;
	nocreate?: boolean;
	nonstandard?: boolean;
	reason?: string;
	reasonParam?: boolean;
	sig?: string | null;
	summary?: string;
	suppressArticleInSummary?: boolean;
	templateName?: string;
	useInitialOptions?: boolean;
	custom?: boolean;
	indefinite?: boolean;
	restrictions?: {
		pages?: {
			title: string;
		}[];
		namespaces?: number[];
	};
};

interface BlockInfo {
	user?: string;
	expiry?: string;
	partial?: string;
	rangestart?: string;
	rangeend?: string;
	allowusertalk?: boolean;
	anononly?: boolean;
	disabletalk?: boolean;
	hardblock?: boolean;
	[key: string]: unknown;
}

interface BlockLogEntry {
	action: string;
	user: string;
	timestamp: string;
	comment: string;
	logid: number;
	params: {
		duration?: string;
		expiry?: string;
		[key: string]: unknown;
	};
}

interface UserInfoResponse {
	query: {
		blocks: BlockInfo[];
		users: {
			name: string;
			userid?: number;
			groupmemberships?: {
				group: string;
			}[];
		}[];
		logevents: BlockLogEntry[];
	};
}

interface BlockNotice {
	currentBlock: string | null;
	currentInfo: string | null;
	blockLog: string | null;
	blockLogLink: string;
}

interface DialogData {
	isRegistered: boolean;
	userIsBot: boolean;
	partialChecked: boolean;
	presetGroups: BuiltBlockGroup[];
	templateGroups: BuiltBlockGroup[];
	notices: BlockNotice;
	templateCheck?: boolean;
}

interface TwinkleBlock {
	(): void;
	callback: () => void;
	fetchedData: Record<string, UserInfoResponse>;
	processUserInfo: (data: UserInfoResponse, fn?: () => void) => void;
	fetchUserInfo: (fn: () => void) => void;
	expiryPresetOptions: {
		label: string;
		value: string;
	}[];
	namespaceOptions: {
		value: number;
		label: string;
	}[];
	blockPresetsInfo: Record<string, BlockPresetSettings>;
	transformBlockPresets: () => void;
	blockGroups: BlockGroup[];
	blockGroupsPartial: BlockGroup[];
}

declare const Twinkle: {
	addInitCallback: (func: () => void, name?: string) => void;
	addPortletLink: (task: string | (() => void), text: string, id: string, tooltip?: string) => void;
	changeTags: string[];
	getPref: {
		(key: 'customBlockReasonList'): {
			value: string;
			label: string;
		}[];
		(key: 'defaultToPartialBlocks' | 'defaultToBlock64'): boolean;
		(key: string): string | boolean;
	};
	block?: TwinkleBlock;
};

const $body = $('body');

// Block state fetched from the API, shared with the dialog via props
let relevantUserName = '';
let blockedUserName: string | undefined;
let isRegistered = false;
let userIsBot = false;
let currentBlockInfo: BlockInfo | undefined;
let hasBlockLog = false;
let blockLog: BlockLogEntry[] | false = false;
let blockLogId: number | false = false;
// Holds data derived from the fetched user/block info, rendered by the dialog
let dialogData: DialogData | null = null;
let dialogEpoch = 0;

const twinkleblock = (() => {
	relevantUserName = mw.config.get('wgRelevantUserName') ?? '';
	// should show on Contributions or Block pages, anywhere there's a relevant user
	// Ignore ranges wider than the CIDR limit
	// Enable for non-admins
	if (
		(Morebits.userIsSysop || !mw.util.isIPAddress(relevantUserName, true)) &&
		relevantUserName &&
		(!Morebits.ip.isRange(relevantUserName) || Morebits.ip.validCIDR(relevantUserName))
	) {
		Twinkle.addPortletLink(
			twinkleblock.callback,
			uls('封禁', '封鎖'),
			'tw-block',
			uls('封禁相关用户', '封鎖相關使用者')
		);
	}
}) as TwinkleBlock;

// Builds the notice strings shown above the block options
const buildNotices = (): BlockNotice => {
	const notices: BlockNotice = {
		currentBlock: null,
		currentInfo: null,
		blockLog: null,
		blockLogLink: mw.util.getUrl('Special:Log', {
			action: 'view',
			page: relevantUserName,
			type: 'block',
		}),
	};
	if (currentBlockInfo) {
		const sameUser = blockedUserName === relevantUserName;
		let statusStr = `${relevantUserName}已被${
			currentBlockInfo.partial === '' ? uls('部分封禁', '部分封鎖') : uls('全站封禁', '全站封鎖')
		}`;
		if (currentBlockInfo.rangestart !== currentBlockInfo.rangeend) {
			if (sameUser) {
				statusStr += uls('（段封禁）', '（段封鎖）');
			} else {
				const rangeLabel =
					Morebits.ip.get64(relevantUserName) === blockedUserName ? '/64' : (blockedUserName ?? '');
				statusStr += uls('（位于', '（位於') + rangeLabel + uls('段封禁内）', '段封鎖內）');
			}
		}
		if (currentBlockInfo.expiry === 'infinity') {
			statusStr += uls('（无限期）', '（無限期）');
		} else if (new Morebits.date(currentBlockInfo.expiry ?? '').isValid()) {
			statusStr += `${
				uls('（终止于', '（終止於') +
				new Morebits.date(currentBlockInfo.expiry ?? '').calendar(UTC8_OFFSET_MINUTES)
			}）`;
		}
		let infoStr = uls('此表单将', '此表單將');
		if (sameUser) {
			infoStr += uls('更改封禁', '變更封鎖');
			infoStr += '。';
		} else {
			infoStr += uls('加上额外的', '加上額外的') + uls('封禁。', '封鎖。');
		}
		notices.currentBlock = statusStr;
		notices.currentInfo = infoStr;
	}
	if (hasBlockLog) {
		if (currentBlockInfo) {
			notices.blockLog = uls('封禁详情', '封鎖詳情');
		} else {
			const log = blockLog || [];
			const [lastBlockAction] = log;
			if (lastBlockAction) {
				const blockAction =
					lastBlockAction.action === 'unblock' ? (log[1] ?? lastBlockAction) : lastBlockAction;
				let logText =
					`此${Morebits.ip.isRange(relevantUserName) ? uls('IP范围', 'IP範圍') : uls('用户', '使用者')}曾在` +
					`${new Morebits.date(blockAction.timestamp).calendar(UTC8_OFFSET_MINUTES)}` +
					`被${blockAction.user}${uls('封禁', '封鎖')}` +
					`${Morebits.string.formatTime(blockAction.params.duration ?? '')}`;
				if (lastBlockAction.action === 'unblock') {
					logText += `，${new Morebits.date(lastBlockAction.timestamp).calendar(UTC8_OFFSET_MINUTES)}解封`;
				} else {
					logText += `，${new Morebits.date(blockAction.params.expiry ?? '').calendar(
						UTC8_OFFSET_MINUTES
					)}${uls('过期', '過期')}`;
				}
				notices.blockLog = logText;
			}
		}
	}
	return notices;
};

const filteredBlockGroups = (group: BlockGroup[], showTemplate: boolean): BuiltBlockGroup[] => {
	return group
		.map((blockGroup) => {
			// Add custom reason
			if (blockGroup.custom) {
				if (showTemplate) {
					let templates = Twinkle.getPref('customBlockReasonList')
						.map((item) => {
							if (twinkleblock.blockPresetsInfo[item.value]?.custom) {
								return item.value;
							}
							return undefined;
						})
						.filter((item): item is string => item !== undefined);
					templates = Morebits.array.uniq(templates);
					blockGroup.list = templates.map((template) => {
						return {
							label: uls('自定义模板', '自訂模板'),
							value: template,
						};
					});
				} else {
					blockGroup.list = Twinkle.getPref('customBlockReasonList').map((item) => {
						return {
							label: item.label,
							value: `${item.value}|${item.label}`,
						};
					});
				}
			}
			const list = (blockGroup.list ?? [])
				.map((blockPreset) => {
					if (!showTemplate && blockPreset.meta) {
						return null;
					}
					switch (blockPreset.value) {
						case 'range block':
							if (!Morebits.ip.isRange(relevantUserName)) {
								return null;
							}
							blockPreset.selected = !Morebits.ip.get64(relevantUserName);
							break;
						default:
							break;
					}
					const blockSettings = twinkleblock.blockPresetsInfo[blockPreset.value] ?? {};
					let registrationRestrict: boolean;
					if (blockSettings.forRegisteredOnly) {
						registrationRestrict = isRegistered;
					} else if (blockSettings.forAnonOnly) {
						registrationRestrict = !isRegistered;
					} else {
						registrationRestrict = true;
					}
					if (!(blockSettings.templateName && showTemplate) && registrationRestrict) {
						const templateName = blockSettings.templateName || blockPreset.value;
						return {
							label: (showTemplate ? `{{${templateName}}}: ` : '') + blockPreset.label,
							value: blockPreset.value,
							data: [
								{
									name: 'template-name',
									value: templateName,
								},
							],
							selected: !!blockPreset.selected,
							disabled: !!blockPreset.disabled,
						};
					}
					return null;
				})
				.filter((item): item is NonNullable<typeof item> => item !== null);
			if (list.length) {
				return {
					label: blockGroup.label,
					list,
				};
			}
			return null;
		})
		.filter((item): item is NonNullable<typeof item> => item !== null);
};

const buildPresetGroups = (
	partialBox: boolean
): {
	presetGroups: BuiltBlockGroup[];
	templateGroups: BuiltBlockGroup[];
} => {
	// Add current block parameters as default preset
	let blockGroup = partialBox ? twinkleblock.blockGroupsPartial : twinkleblock.blockGroups;
	const prior: BlockGroup = {
		label: uls('当前封禁', '目前封鎖'),
	};
	if (blockedUserName === relevantUserName && currentBlockInfo) {
		const priorSettings: BlockPresetSettings = currentBlockInfo;
		twinkleblock.blockPresetsInfo['prior'] = priorSettings;
		prior.list = [
			{
				label: uls('当前封禁设置', '目前封鎖設定'),
				value: 'prior',
				selected: true,
			},
		];
		if (
			!blockGroup.some((bg) => {
				return bg.label === prior.label;
			})
		) {
			blockGroup = [...blockGroup, prior];
		}
		if (partialBox) {
			priorSettings.templateName = Morebits.string.isInfinity(currentBlockInfo.expiry ?? '')
				? 'uw-pblockindef'
				: 'uw-pblock';
		} else if (isRegistered) {
			priorSettings.templateName = Morebits.string.isInfinity(currentBlockInfo.expiry ?? '')
				? 'uw-blockindef'
				: 'uw-block';
		} else {
			priorSettings.templateName = 'uw-ablock';
		}
	} else {
		blockGroup = blockGroup.filter((bg) => {
			return bg.label !== prior.label;
		});
	}
	return {
		presetGroups: filteredBlockGroups(blockGroup, false),
		templateGroups: filteredBlockGroups(blockGroup, true),
	};
};

twinkleblock.callback = () => {
	if (
		relevantUserName === mw.config.get('wgUserName') &&
		!confirm(uls('您即将对自己执行封禁相关操作！确认要继续吗？', '您即將對自己執行封鎖相關操作！確認要繼續嗎？'))
	) {
		return;
	}
	currentBlockInfo = undefined;
	let app: ReturnType<typeof createApp> | null = null;
	let root: HTMLElement | null = null;
	const mountDialog = () => {
		// Clean up preset data (defaults, etc.), done exactly once
		twinkleblock.transformBlockPresets();
		if (root) {
			app?.unmount();
			root.remove();
		}
		root = document.createElement('div');
		document.body.append(root);
		const partialChecked =
			blockedUserName === relevantUserName && currentBlockInfo
				? currentBlockInfo.partial === ''
				: Twinkle.getPref('defaultToPartialBlocks');
		const groups = buildPresetGroups(partialChecked);
		dialogData = reactive({
			isRegistered,
			userIsBot,
			partialChecked,
			presetGroups: groups.presetGroups,
			templateGroups: groups.templateGroups,
			notices: buildNotices(),
		});
		const data = dialogData;
		const sixtyFour = Morebits.ip.get64(mw.config.get('wgRelevantUserName') ?? '');
		const sixtyFourAvailable = !!sixtyFour && sixtyFour !== mw.config.get('wgRelevantUserName');
		app = createApp({
			render: () => {
				return h(TwBlockDialog, {
					key: dialogEpoch,
					title: uls('封禁或向', '封鎖或向') + relevantUserName + uls('发出封禁模板', '發出封鎖模板'),
					showBlock: Morebits.userIsSysop,
					showTemplate: Morebits.userIsSysop,
					showTag: isRegistered,
					showProtect: isRegistered && Morebits.userIsSysop,
					showUnblock: Morebits.userIsSysop,
					initialBlock: Morebits.userIsSysop,
					initialTemplate:
						Morebits.userIsSysop && !Morebits.ip.isRange(mw.config.get('wgRelevantUserName') ?? ''),
					initialPartial: partialChecked,
					initialUnblock: false,
					sixtyFourAvailable,
					initialBlock64: Twinkle.getPref('defaultToBlock64'),
					presetGroups: data.presetGroups,
					templateGroups: data.templateGroups,
					presetsInfo: twinkleblock.blockPresetsInfo,
					expiryPresetOptions: twinkleblock.expiryPresetOptions,
					namespaces: twinkleblock.namespaceOptions,
					isRegistered: data.isRegistered,
					userIsBot: data.userIsBot,
					notices: data.notices,
					relevantUserName,
					blockLogId,
					currentBlockInfo,
					footerLinks: [
						{text: uls('封禁方针', '封鎖方針'), href: mw.util.getUrl('QW:BLOCK')},
						{text: uls('封禁设置', '封鎖設定'), href: mw.util.getUrl('H:TW/PREF#block')},
						{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#block')},
					],
					onBlock64Changed: (checked: boolean) => {
						// Faithful port of Twinkle.block.callback.change_block64
						const wgRelevantName = mw.config.get('wgRelevantUserName') ?? '';
						const originalIsRange = Morebits.ip.isRange(wgRelevantName);
						relevantUserName = checked
							? Morebits.ip.get64(wgRelevantName) || wgRelevantName
							: wgRelevantName;
						const regenerate = () => {
							dialogEpoch += 1;
							mountDialog();
						};
						const cached = twinkleblock.fetchedData[relevantUserName];
						if (cached) {
							twinkleblock.processUserInfo(cached, regenerate);
						} else {
							twinkleblock.fetchUserInfo(regenerate);
						}
						if (!checked && dialogData) {
							dialogData.templateCheck = originalIsRange;
						}
					},
					onClose: () => {
						app?.unmount();
						root?.remove();
					},
				});
			},
		});
		app.mount(root);
	};
	twinkleblock.fetchUserInfo(mountDialog);
};

// Store fetched user data, only relevant if switching IPv6 to a /64
twinkleblock.fetchedData = {};
// Processes the data from a query response, separated from
// twinkleblock.fetchUserInfo to allow reprocessing of already-fetched data
twinkleblock.processUserInfo = (data: UserInfoResponse, fn?: () => void): void => {
	let blockinfo = data.query.blocks[0];
	const userinfo = data.query.users[0];
	// If an IP is blocked *and* rangeblocked, the above finds
	// whichever block is more recent, not necessarily correct.
	// Three seems... unlikely
	if (data.query.blocks.length > 1 && blockinfo?.user !== relevantUserName) {
		blockinfo = data.query.blocks[1];
	}
	if (userinfo) {
		// Cache response, used when toggling /64 blocks
		twinkleblock.fetchedData[userinfo.name] = data;
		isRegistered = !!userinfo.userid;
		if (isRegistered) {
			userIsBot =
				!!userinfo.groupmemberships &&
				userinfo.groupmemberships
					.map((e) => {
						return e.group;
					})
					.includes('bot');
		} else {
			userIsBot = false;
		}
	} else {
		isRegistered = false;
		userIsBot = false;
	}
	if (blockinfo) {
		// handle frustrating system of inverted boolean values
		blockinfo.disabletalk = blockinfo.allowusertalk === undefined;
		blockinfo.hardblock = blockinfo.anononly === undefined;
	}
	// will undefine if no blocks present
	currentBlockInfo = blockinfo;
	blockedUserName = currentBlockInfo ? currentBlockInfo.user : undefined;
	// Semi-busted on ranges. See T273793: logevents is used to get the last
	// action on the User page, whether block, reblock, or unblock. For ranges,
	// however, the logid returned by the API is the logid of the blocklogid
	// parent, which means if a rangeblock is modified within 24 hours of being
	// set (as indicated by parentSitelogid), logid is always the most recent
	// id, meaning users don't get the "block status changed" warning.
	hasBlockLog = !!data.query.logevents.length;
	blockLog = hasBlockLog ? data.query.logevents : false;
	// Used later to check if block status changed while filling out the form
	blockLogId = hasBlockLog ? (data.query.logevents[0]?.logid ?? false) : false;
	if (typeof fn === 'function') {
		fn();
	}
};

twinkleblock.fetchUserInfo = (fn: () => void): void => {
	const query: Record<string, string | number | boolean> = {
		format: 'json',
		action: 'query',
		list: 'blocks|users|logevents',
		letype: 'block',
		lelimit: 2,
		letitle: `User:${relevantUserName}`,
		bkprop: 'expiry|reason|flags|restrictions|range|user',
		ususers: relevantUserName,
	};
	// bkusers doesn't catch single IPs blocked as part of a range block
	if (mw.util.isIPAddress(relevantUserName, true)) {
		query['bkip'] = relevantUserName;
	} else {
		query['bkusers'] = relevantUserName;
		// groupmemberships only relevant for registered users
		query['usprop'] = 'groupmemberships';
	}
	void api.get(query).then(
		(data) => {
			twinkleblock.processUserInfo(data as UserInfoResponse, fn);
		},
		(error) => {
			Morebits.status.init($body.find('div[name="currentblock"] span').last()[0] ?? null);
			Morebits.status.warn(uls('抓取用户信息出错', '抓取使用者資訊出錯'), String(error));
		}
	);
};

// Expiry preset options for the block options field
twinkleblock.expiryPresetOptions = [
	{label: uls('自定义', '自訂'), value: 'custom'},
	{label: uls('无限期', '無限期'), value: 'infinity'},
	{label: uls('3小时', '3小時'), value: '3 hours'},
	{label: uls('12小时', '12小時'), value: '12 hours'},
	{label: '1天', value: '1 day'},
	{label: uls('31小时', '31小時'), value: '31 hours'},
	{label: '2天', value: '2 days'},
	{label: '3天', value: '3 days'},
	{label: uls('1周', '1週'), value: '1 week'},
	{label: uls('2周', '2週'), value: '2 weeks'},
	{label: uls('1个月', '1個月'), value: '1 month'},
	{label: uls('3个月', '3個月'), value: '3 months'},
	{label: uls('6个月', '6個月'), value: '6 months'},
	{label: '1年', value: '1 year'},
	{label: '2年', value: '2 years'},
	{label: '3年', value: '3 years'},
];

const menuFormattedNamespaces: Record<number, string> = {};
for (const [number, name] of Object.entries(mw.config.get('wgFormattedNamespaces'))) {
	menuFormattedNamespaces[Number(number)] = String(name);
}
menuFormattedNamespaces[0] = uls('（条目）', '（條目）');

// Namespace options for partial blocks
twinkleblock.namespaceOptions = Object.entries(menuFormattedNamespaces)
	.filter(([number]) => {
		return Number(number) >= 0 && Number(number) < 830;
	})
	.map(([number, name]) => {
		return {
			value: Number(number),
			label: name,
		};
	});

/**
 * Keep alphabetized by key name, Twinkle.block.blockGroups establishes
 *    the order they will appear in the interface
 *
 * Block preset format, all keys accept only 'true' (omit for false) except where noted:
 * <title of block template> : {
 *   autoblock: <autoblock any IP addresses used (for registered users only)>
 *   disabletalk: <disable user from editing their own talk page while blocked>
 *   expiry: <string - expiry timestamp, can include relative times like "5 months", "2 weeks" etc>
 *   forAnonOnly: <show block option in the interface only if the relevant user is an IP>
 *   forRegisteredOnly: <show block option in the interface only if the relevant user is registered>
 *   label: <string - label for the option of the dropdown in the interface (keep brief)>
 *   noemail: prevent the user from sending email through Special:Emailuser
 *   pageParam: <set if the associated block template accepts a page parameter>
 *   prependReason: <string - prepends the value of 'reason' to the end of the existing reason, namely for when revoking talk page access>
 *   nocreate: <block account creation from the user's IP (for anonymous users only)>
 *   nonstandard: <template does not conform to stewardship of [[enwiki:WikiProject User Warnings]] and may not accept standard parameters>
 *   reason: <string - block rationale, as would appear in the block log,
 *            and the edit summary for when adding block template, unless 'summary' is set>
 *   reasonParam: <set if the associated block template accepts a reason parameter>
 *   sig: <string - set to ~~~~ if block template does not accept "true" as the value, or set null to omit sig param altogether>
 *   summary: <string - edit summary for when adding block template to user's talk page, if not set, 'reason' is used>
 *   suppressArticleInSummary: <set to suppress showing the article name in the edit summary, as with attack pages>
 *   templateName: <string - name of template to use (instead of key name), entry will be omitted from the Templates list.
 *                  (e.g. use another template but with different block options)>
 *   useInitialOptions: <when preset is chosen, only change given block options, leave others as they were>
 *
 * WARNING: 'anononly' and 'allowusertalk' are enabled by default.
 *   To disable, set 'hardblock' and 'disabletalk', respectively
 */
twinkleblock.blockPresetsInfo = {
	// uw-prefixed
	'uw-block': {
		autoblock: true,
		expiry: '1 day',
		forRegisteredOnly: true,
		nocreate: true,
		pageParam: true,
		reasonParam: true,
		summary: uls('封禁通知', '封鎖通知'),
		suppressArticleInSummary: true,
	},
	'uw-blockindef': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		pageParam: true,
		reasonParam: true,
		summary: uls('封禁通知', '封鎖通知'),
		suppressArticleInSummary: true,
	},
	'uw-blocknotalk': {
		disabletalk: true,
		pageParam: true,
		reasonParam: true,
		summary: uls('封禁通知：禁止编辑讨论页', '封鎖通知：禁止編輯討論頁'),
		suppressArticleInSummary: true,
	},
	'uw-3block': {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reason: uls('违反[[QW:3RR|回退不过三原则]]', '違反[[QW:3RR|回退不過三原則]]'),
		summary: uls('封禁通知：违反[[QW:3RR|回退不过三原则]]', '封鎖通知：違反[[QW:3RR|回退不過三原則]]'),
	},
	'uw-adblock': {
		autoblock: true,
		nocreate: true,
		pageParam: true,
		reason: uls('散发[[QW:SOAP|散发广告或宣传]]', '散發[[QW:SOAP|散發廣告或宣傳]]'),
		summary: uls('封禁通知：散发[[QW:SOAP|散发广告或宣传]]', '封鎖通知：散發[[QW:SOAP|散發廣告或宣傳]]'),
	},
	'uw-attackblock': {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		reason: uls('[[QW:CIV|行为无礼]]或[[QW:NPA|人身攻击]]', '[[QW:CIV|行為無禮]]或[[QW:NPA|人身攻擊]]'),
		summary: uls(
			'封禁通知：[[QW:CIV|行为无礼]]或[[QW:NPA|人身攻击]]',
			'封鎖通知：[[QW:CIV|行為無禮]]或[[QW:NPA|人身攻擊]]'
		),
	},
	'uw-copyrightblock': {
		autoblock: true,
		expiry: 'infinity',
		nocreate: true,
		pageParam: true,
		reason: uls('持续[[QW:COPYVIO|侵犯著作权]]', '持續[[QW:COPYVIO|侵犯著作權]]'),
		summary: uls('封禁通知：持续[[QW:COPYVIO|侵犯著作权]]', '封鎖通知：持續[[QW:COPYVIO|侵犯著作權]]'),
		templateName: 'uw-blockindef',
	},
	'uw-dblock': {
		autoblock: true,
		nocreate: true,
		pageParam: true,
		reason: uls('持续[[QW:VAN|删除内容]]', '持續[[QW:VAN|刪除內容]]'),
		summary: uls('封禁通知：持续[[QW:VAN|删除内容]]', '封鎖通知：持續[[QW:VAN|刪除內容]]'),
	},
	'uw-hblock': {
		autoblock: true,
		nocreate: true,
		pageParam: true,
		reason: uls('[[QW:骚扰|骚扰]]其他用户', '[[QW:騷擾|騷擾]]其他使用者'),
		summary: uls('封禁通知：[[QW:骚扰|骚扰]]其他用户', '封鎖通知：[[QW:騷擾|騷擾]]其他使用者'),
	},
	'uw-vblock': {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reason: uls('[[QW:VAN|破坏]]', '[[QW:VAN|破壞]]'),
		summary: uls('封禁通知：[[QW:VAN|破坏]]', '封鎖通知：[[QW:VAN|破壞]]'),
	},
	'uw-illegalblock': {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reason: uls('持续加入不符合中国价值观的非法内容', '持續加入不符合中國價值觀的非法內容'),
		summary: uls('封禁通知：持续加入不符合中国价值观的非法内容', '封鎖通知：持續加入不符合中國價值觀的非法內容'),
	},
	'uw-sockblock': {
		autoblock: true,
		expiry: '1 week',
		forRegisteredOnly: true,
		nocreate: true,
		reason: uls('滥用[[QW:SOCK|多个账号]]', '濫用[[QW:SOCK|多個賬號]]'),
		summary: uls('封禁通知：滥用[[QW:SOCK|多个账号]]', '封鎖通知：濫用[[QW:SOCK|多個賬號]]'),
		templateName: 'uw-block',
	},
	// uw-u-prefixed
	'uw-ublock': {
		expiry: 'infinity',
		forRegisteredOnly: true,
		reason: `{{uw-ublock}}<!-- ${uls('不当用户名、软封禁', '不當使用者名稱')} -->`,
		summary: uls(
			'封禁通知：您的用户名违反[[QW:U|用户名条例]]',
			'封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]'
		),
	},
	'uw-ublock-illegal': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		reason: `{{uw-ublock-illegal}}<!-- ${uls('不合规的用户名', '不合規的使用者名稱')} -->`,
		summary: uls(
			'封禁通知：您的用户名违反[[QW:U|用户名条例]]',
			'封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]'
		),
	},
	'uw-ublock-suggestive': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		reason: `{{uw-ublock-suggestive}}<!-- ${uls('误导、混淆性用户名', '誤導、混淆性使用者名稱')} -->`,
		summary: uls(
			'封禁通知：您的用户名违反[[QW:U|用户名条例]]',
			'封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]'
		),
	},
	'uw-ublock-spam': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		reason: `{{uw-ublock-spam}}<!-- ${uls('宣传性用户名或宣传性编辑', '宣傳性使用者名稱或宣傳性編輯')} -->`,
		summary: uls(
			'封禁通知：您的用户名违反[[QW:U|用户名条例]]',
			'封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]'
		),
	},
	// other block templates
	'range block': {
		expiry: '1 week',
		reason: '{{range block}}',
		nocreate: true,
		nonstandard: true,
		forAnonOnly: true,
		sig: '~~'.concat('~~'),
	},
	'blocked proxy': {
		expiry: '2 years',
		forAnonOnly: true,
		nocreate: true,
		nonstandard: true,
		hardblock: true,
		reason: '{{blocked proxy}}',
		sig: null,
	},
	checkuserblock: {
		expiry: '1 week',
		forAnonOnly: true,
		nocreate: true,
		nonstandard: true,
		reason: '{{checkuserblock}}',
		sig: '~~'.concat('~~'),
	},
	'checkuserblock-account': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		nonstandard: true,
		reason: '{{checkuserblock-account}}',
		sig: '~~'.concat('~~'),
	},
	'school block': {
		expiry: '1 week',
		forAnonOnly: true,
		nocreate: true,
		nonstandard: true,
		reason: '{{school block}}',
		sig: '~~'.concat('~~'),
	},
	'Bot block message': {
		expiry: 'infinity',
		forRegisteredOnly: true,
		reason: uls('机器人故障', '機器人故障'),
		summary: uls('封禁通知：机器人故障', '封鎖通知：機器人故障'),
		sig: '~~'.concat('~~'),
	},
	// other block reasons
	bioblock: {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reason: uls('违反生者传记条例', '違反生者傳記條例'),
		summary: uls('封禁通知：违反生者传记条例', '封鎖通知：違反生者傳記條例'),
		templateName: 'uw-vblock',
	},
	ucblock: {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reason: uls('屡次增加没有[[QW:RS|可靠来源]]的资料', '屢次增加沒有[[QW:RS|可靠來源]]的資料'),
		summary: uls(
			'封禁通知：屡次增加没有[[QW:RS|可靠来源]]的资料',
			'封鎖通知：屢次增加沒有[[QW:RS|可靠來源]]的資料'
		),
		templateName: 'uw-block',
	},
	npblock: {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reason: uls('在条目中增加无意义文字', '在條目中增加無意義文字'),
		summary: uls('封禁通知：在条目中增加无意义文字', '封鎖通知：在條目中增加無意義文字'),
		templateName: 'uw-vblock',
	},
	'point-block': {
		autoblock: true,
		expiry: '1 day',
		nocreate: true,
		pageParam: true,
		reasonParam: true,
		reason: uls('持续打制度擦边球', '持續打制度擦邊球'),
		summary: uls('封禁通知：持续打制度擦边球', '封鎖通知：持續打制度擦邊球'),
		templateName: 'uw-block',
	},
	'sock-contribs': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		reasonParam: true,
		reason: uls(
			'确认为[[QW:SOCK|傀儡]]或真人傀儡 - 根据用户贡献确定',
			'確認為[[QW:SOCK|傀儡]]或真人傀儡 - 根據使用者貢獻確定'
		),
		summary: uls('封禁通知：确认为[[QW:SOCK|傀儡]]或真人傀儡', '封鎖通知：確認為[[QW:SOCK|傀儡]]或真人傀儡'),
		templateName: 'uw-blockindef',
	},
	'sock-cu': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		reasonParam: true,
		reason: uls(
			'确认为[[QW:SOCK|傀儡]]或真人傀儡 - 用户查核确认',
			'確認為[[QW:SOCK|傀儡]]或真人傀儡 - 使用者查核確認'
		),
		summary: uls('封禁通知：确认为[[QW:SOCK|傀儡]]或真人傀儡', '封鎖通知：確認為[[QW:SOCK|傀儡]]或真人傀儡'),
		templateName: 'uw-blockindef',
	},
	'uw-ublock-attack': {
		autoblock: true,
		expiry: 'infinity',
		forRegisteredOnly: true,
		nocreate: true,
		reason: `{{uw-ublock-attack}}<!-- ${uls('攻击性用户名', '攻擊性使用者名稱')} -->`,
		summary: uls('封禁通知：攻击性用户名', '封鎖通知：攻擊性使用者名稱'),
	},
	// Begin partial block templates, accessed in Twinkle.block.blockGroupsPartial
	'uw-pblock': {
		autoblock: true,
		expiry: '1 day',
		nocreate: false,
		pageParam: false,
		reasonParam: true,
		summary: uls('封禁通知：您已被禁止编辑求闻百科的部分区域', '封鎖通知：您已被禁止編輯求聞百科的部分區域'),
	},
	'uw-pblockindef': {
		autoblock: true,
		expiry: 'infinity',
		nocreate: false,
		pageParam: false,
		reasonParam: true,
		summary: uls(
			'封禁通知：您已被永久禁止编辑求闻百科的部分区域',
			'封鎖通知：您已被永久禁止編輯求聞百科的部分區域'
		),
	},
};

twinkleblock.transformBlockPresets = (): void => {
	// Merge custom reason
	for (const item of Twinkle.getPref('customBlockReasonList')) {
		const newKey = `${item.value}|${item.label}`;
		twinkleblock.blockPresetsInfo[newKey] = {
			autoblock: true,
			nocreate: true,
			...twinkleblock.blockPresetsInfo[item.value],
			reason: item.label,
			templateName: item.value,
		};
		if (twinkleblock.blockPresetsInfo[item.value] === undefined) {
			twinkleblock.blockPresetsInfo[item.value] = {
				pageParam: true,
				reasonParam: true,
				custom: true,
			};
		}
	}
	// supply sensible defaults
	for (const [preset, settings] of Object.entries(twinkleblock.blockPresetsInfo)) {
		settings.summary ||= settings.reason || '';
		settings.sig = settings.sig === undefined ? 'yes' : settings.sig;
		settings.indefinite ||= Morebits.string.isInfinity(settings.expiry ?? '');
		if (!isRegistered && settings.indefinite) {
			settings.expiry = '1 day';
		} else {
			settings.expiry ||= '1 day';
		}
		twinkleblock.blockPresetsInfo[preset] = settings;
	}
};

// These are the groups of presets and defines the order in which they appear. For each list item:
//   label: <string, the description that will be visible in the dropdown>
//   value: <string, the key of a preset in blockPresetsInfo>
//   meta: <boolean, show in templates only>
twinkleblock.blockGroups = [
	{
		label: uls('普通封禁', '普通封鎖'),
		list: [
			{label: uls('通用封禁（自定义理由）', '通用封鎖（自訂理由）'), value: 'uw-block'},
			{
				label: uls('无限期封禁（自定义理由）', '無限期封鎖（自訂理由）'),
				value: 'uw-blockindef',
			},
			{label: uls('禁止编辑讨论页', '禁止編輯討論頁'), value: 'uw-blocknotalk', meta: true},
			{label: uls('违反回退不过三原则', '違反回退不過三原則'), value: 'uw-3block'},
			{label: uls('散发广告或宣传', '散發廣告或宣傳'), value: 'uw-adblock'},
			{label: uls('行为无礼或人身攻击', '行為無禮或人身攻擊'), value: 'uw-attackblock'},
			{
				label: uls('多次加入侵犯著作权的内容', '多次加入侵犯著作權的內容'),
				value: 'uw-copyrightblock',
			},
			{label: uls('无故删除内容', '無故刪除內容'), value: 'uw-dblock'},
			{label: uls('骚扰用户', '騷擾使用者'), value: 'uw-hblock'},
			{label: uls('破坏', '破壞'), value: 'uw-vblock', selected: true},
			{
				label: uls('持续加入不符合中国价值观的非法内容', '持續加入不符合中國價值觀的非法內容'),
				value: 'uw-illegalblock',
			},
			{label: uls('滥用多个账号', '濫用多個賬號'), value: 'uw-sockblock'},
			// other block reasons
			{label: uls('违反生者传记条例', '違反生者傳記條例'), value: 'bioblock'},
			{label: uls('屡次增加没有可靠来源的资料', '屢次增加沒有可靠來源的資料'), value: 'ucblock'},
			{label: uls('在条目中增加无意义文字', '在條目中增加無意義文字'), value: 'npblock'},
			{label: uls('持续打制度擦边球', '持續打制度擦邊球'), value: 'point-block'},
			{
				label: uls('确认为傀儡或真人傀儡（根据用户贡献确定）', '確認為傀儡或真人傀儡（根據使用者貢獻確定）'),
				value: 'sock-contribs',
			},
			{
				label: uls('确认为傀儡或真人傀儡（用户查核确认）', '確認為傀儡或真人傀儡（使用者查核確認）'),
				value: 'sock-cu',
			},
			{
				label: uls('机器人发生故障并必须紧急停止', '機器人發生故障並必須緊急停止'),
				value: 'Bot block message',
			},
		],
	},
	{
		custom: true,
		label: uls('自定义封禁理由', '自訂封鎖理由'),
	},
	{
		label: uls('用户名封禁', '使用者名稱封鎖'),
		list: [
			{label: uls('违反用户名条例', '違反使用者名稱條例'), value: 'uw-ublock'},
			{label: uls('不合规的用户名', '不合規的使用者名稱'), value: 'uw-ublock-illegal'},
			{label: uls('宣传性用户名', '宣傳性使用者名稱'), value: 'uw-ublock-spam'},
			{label: uls('攻击性用户名', '攻擊性使用者名稱'), value: 'uw-ublock-attack'},
			{
				label: uls('混淆性或误导性用户名', '混淆性或誤導性使用者名稱'),
				value: 'uw-ublock-suggestive',
			},
		],
	},
	{
		label: '其他模板',
		list: [
			{label: 'range block', value: 'range block', forAnonOnly: true},
			{label: 'school block', value: 'school block', forAnonOnly: true},
			{label: 'blocked proxy', value: 'blocked proxy', forAnonOnly: true},
			{
				label: uls('用户查核封禁（主用户）', '使用者查核封鎖（主使用者）'),
				value: 'checkuserblock',
				forAnonOnly: true,
			},
			{
				label: uls('用户查核封禁（子用户）', '使用者查核封鎖（子使用者）'),
				value: 'checkuserblock-account',
				forRegisteredOnly: true,
			},
		],
	},
];

twinkleblock.blockGroupsPartial = [
	{
		label: uls('常见部分封禁理由', '常見部分封鎖理由'),
		list: [
			{
				label: uls('通用部分封禁（自定义理由）', '通用部分封鎖（自訂理由）'),
				value: 'uw-pblock',
				selected: true,
			},
			{
				label: uls('无限期部分封禁（自定义理由）', '無限期部分封鎖（自訂理由）'),
				value: 'uw-pblockindef',
			},
		],
	},
];

Twinkle.block = twinkleblock;
Twinkle.addInitCallback(Twinkle.block, 'block');

export {};
