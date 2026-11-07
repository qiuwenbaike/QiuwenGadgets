<script setup lang="ts">
import {
	CdxButton,
	CdxCheckbox,
	CdxField,
	CdxSelect,
	CdxTextArea,
	CdxTextInput,
	type MenuItemData,
} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage, type MorebitsWikiPreview} from './morebits';
import {UTC8_OFFSET_MINUTES, normalizeExpiry} from '../utils/utc8';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {api} from '../utils/api';
import {uls} from '../utils/useUls';

declare const Twinkle: {
	changeTags: string[];
	getPref: {
		(key: 'blankTalkpageOnIndefBlock'): boolean;
		(key: string): string | boolean;
	};
};

interface PresetOption {
	label: string;
	value: string;
	selected?: boolean;
	disabled?: boolean;
}

interface PresetGroup {
	label: string;
	list: PresetOption[];
}

type PresetInfo = Record<string, unknown>;

interface BlockNotice {
	currentBlock: string | null;
	currentInfo: string | null;
	blockLog: string | null;
	blockLogLink: string;
}

interface BlockParams {
	actiontype: string[];
	preset: string;
	expiry_preset: string;
	expiry: string;
	pagerestrictions: string;
	namespacerestrictions: string[];
	actionrestrictions: string[];
	nocreate: boolean;
	noemail: boolean;
	disabletalk: boolean;
	autoblock: boolean;
	hardblock: boolean;
	watchuser: boolean;
	closevip: boolean;
	reason: string;
	template: string;
	article: string;
	area: string;
	template_expiry: string;
	block_reason: string;
	blank_duration: boolean;
	notalk: boolean;
	noemail_template: boolean;
	nocreate_template: boolean;
	tag: string[];
	sppUsername: string;
	sppType: string;
	sppEvidence: string;
	spmChecked: boolean;
	spmEvidence: string;
	unblock_reason: string;
	block64: boolean;
}

const props = defineProps<{
	title: string;
	showBlock: boolean;
	showTemplate: boolean;
	showTag: boolean;
	showProtect: boolean;
	showUnblock: boolean;
	initialBlock: boolean;
	initialTemplate: boolean;
	initialPartial: boolean;
	initialUnblock: boolean;
	sixtyFourAvailable: boolean;
	initialBlock64: boolean;
	presetGroups: PresetGroup[];
	templateGroups: PresetGroup[];
	presetsInfo: Record<string, PresetInfo>;
	expiryPresetOptions: {
		value: string;
		label: string;
	}[];
	namespaces: {
		value: number;
		label: string;
	}[];
	isRegistered: boolean;
	userIsBot: boolean;
	notices: BlockNotice;
	/** The relevant user name of the current dialog (updates on /64 toggle remount). */
	relevantUserName: string;
	/** Mount-time snapshot of the block log id, used to detect status changes. */
	blockLogId: number | false;
	/** Mount-time snapshot of the current block info, used to detect status changes. */
	currentBlockInfo: Record<string, unknown> | undefined;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	block64Changed: [checked: boolean];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);

const actionRestrictionOptions = [
	{value: 'upload', label: uls('上传文件（包括覆盖文件）', '上傳檔案（包括覆蓋檔案）')},
	{value: 'move', label: uls('移动页面及文件', '移動頁面及檔案')},
	{value: 'create', label: uls('创建新页面及上传新文件', '建立新頁面及上傳新檔案')},
	{value: 'thanks', label: uls('发送感谢', '發送感謝')},
];
const actiontype = ref<string[]>([]);
const block64 = ref(props.initialBlock64);
const preset = ref('');
const expiryPreset = ref('custom');
const expiry = ref('');
const pagerestrictionsInput = ref('');
const namespacerestrictions = ref<string[]>([]);
const actionrestrictions = ref<string[]>([]);
const nocreate = ref(false);
const noemail = ref(false);
const disabletalk = ref(false);
const autoblock = ref(false);
const hardblock = ref(false);
const watchuser = ref(false);
const closevip = ref(true);
const reason = ref('');
const template = ref('');
const article = ref('');
const area = ref('');
const templateExpiry = ref('');
const blockReason = ref('');
const blankDuration = ref(false);
const notalk = ref(false);
const noemailTemplate = ref(false);
const nocreateTemplate = ref(false);
const tag = ref<string[]>([]);
const sppUsername = ref('');
const sppType = ref('blocked');
const sppEvidence = ref('');
const spmChecked = ref(false);
const spmEvidence = ref('');
const unblockReason = ref('');
const previewBox = ref<HTMLElement | null>(null);
const statusRef = ref<TwStatusExposed | null>(null);

// Initialize actiontype state from props
actiontype.value = [
	...(props.initialBlock ? ['block'] : []),
	...(props.initialTemplate ? ['template'] : []),
	...(props.initialPartial ? ['partial'] : []),
	...(props.initialUnblock ? ['unblock'] : []),
];

const toBlock = computed(() => actiontype.value.includes('block'));
const toTemplate = computed(() => actiontype.value.includes('template'));
const toPartial = computed(() => actiontype.value.includes('partial'));
const toTag = computed(() => actiontype.value.includes('tag'));
const toUnblock = computed(() => actiontype.value.includes('unblock'));

const partialDisabled = computed(() => !toBlock.value && !toTemplate.value);

const toggleAction = (value: string, modelValue: string[] | boolean) => {
	let next: string[];
	if (Array.isArray(modelValue)) {
		next = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		next = [...actiontype.value, value];
	} else {
		next = actiontype.value.filter((item) => item !== value);
	}
	// Faithful port of the unblock exclusivity in change_action
	if (value === 'unblock' && next.includes('unblock')) {
		next = ['unblock'];
	} else if (value !== 'unblock' && next.includes('unblock')) {
		next = next.filter((item) => item !== 'unblock');
	}
	actiontype.value = next;
};

const presetItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of props.presetGroups.entries()) {
		if (group.list.length === 0) {
			continue;
		}
		if (group.list.length > 0 && props.presetGroups.length > 1) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.label,
				disabled: true,
			});
		}
		for (const item of group.list) {
			items.push({
				value: item.value,
				label: item.label,
				disabled: item.disabled,
			});
		}
	}
	return items;
});

const templateItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of props.templateGroups.entries()) {
		if (group.list.length === 0) {
			continue;
		}
		if (props.templateGroups.length > 1) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.label,
				disabled: true,
			});
		}
		for (const item of group.list) {
			items.push({
				value: item.value,
				label: item.label,
				disabled: item.disabled,
			});
		}
	}
	return items;
});

const expiryPresetItems = computed<MenuItemData[]>(() =>
	props.expiryPresetOptions.map((option) => ({value: option.value, label: option.label}))
);

const seeAlsoOptions = [
	{value: uls('过滤器日志', '過濾器日誌'), label: uls('过滤器日志', '過濾器日誌')},
	{value: uls('用户讨论页', '使用者討論頁'), label: uls('用户讨论页', '使用者討論頁')},
	{value: uls('过去的封禁记录', '過去的封鎖記錄'), label: uls('过去的封禁记录', '過去的封鎖記錄')},
];

const seeAlsoValues = ref<string[]>([]);

// CdxCheckbox with an array model emits boolean | string[]
const updateNamespaces = (value: boolean | string[]) => {
	namespacerestrictions.value = Array.isArray(value)
		? value.filter((item): item is string => typeof item === 'string')
		: [];
};
const updateActionRestrictions = (value: boolean | string[]) => {
	actionrestrictions.value = Array.isArray(value)
		? value.filter((item): item is string => typeof item === 'string')
		: [];
};
const updateTag = (value: boolean | string[]) => {
	tag.value = Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
};

// Faithful port of Twinkle.block.callback.toggle_see_alsos
const toggleSeeAlso = (value: string, modelValue: string[] | boolean) => {
	let next: string[];
	if (Array.isArray(modelValue)) {
		next = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		next = [...seeAlsoValues.value, value];
	} else {
		next = seeAlsoValues.value.filter((item) => item !== value);
	}
	// Remove the previous 参见 note from the reason
	reason.value = reason.value.replace(new RegExp(`(<!-- )(参见|參見)${seeAlsoValues.value.join('、')}( -->)`), '');
	seeAlsoValues.value = next;
	if (seeAlsoValues.value.length) {
		reason.value = `${reason.value}<!-- ${uls('参见', '參見')}${seeAlsoValues.value.join('、')} -->`;
	}
};

// Faithful port of Twinkle.block.callback.update_form
const applyPreset = (key: string) => {
	if (!key) {
		return;
	}
	const data = props.presetsInfo[key];
	if (!data) {
		return;
	}
	if (!data['useInitialOptions']) {
		let presetExpiry = String(data['expiry'] ?? '');
		if (Date.parse(presetExpiry)) {
			presetExpiry = new Date(presetExpiry).toUTCString();
			expiryPreset.value = 'custom';
		} else {
			expiryPreset.value = presetExpiry || 'custom';
		}
		expiry.value = presetExpiry;
	}
	const checkValue = (name: string) => {
		const value = data[name];
		return value === '' || !!value;
	};
	nocreate.value = checkValue('nocreate');
	noemail.value = checkValue('noemail');
	disabletalk.value = checkValue('disabletalk');
	hardblock.value = checkValue('hardblock');
	watchuser.value = checkValue('watchuser');
	if (props.userIsBot || /bot\b/i.test(mw.config.get('wgRelevantUserName') || '')) {
		autoblock.value = false;
	} else {
		autoblock.value = checkValue('autoblock');
	}
	if (data['prependReason'] && data['reason']) {
		reason.value = `${String(data['reason'])}；${reason.value}`;
	} else {
		reason.value = String(data['reason'] ?? '');
	}
	// Clear and/or set any partial page or namespace restrictions
	if (!data['useInitialOptions']) {
		pagerestrictionsInput.value = '';
		namespacerestrictions.value = [];
		actionrestrictions.value = [];
	}
	const restrictions = data['restrictions'] as
		| {
				pages?: {
					title: string;
				}[];
				namespaces?: number[];
		  }
		| undefined;
	if (restrictions?.pages && pagerestrictionsInput.value === '') {
		pagerestrictionsInput.value = restrictions.pages.map((pr) => pr.title).join('、');
	}
	if (restrictions?.namespaces) {
		namespacerestrictions.value = restrictions.namespaces.map(String);
	}
	// Mirror the preset to the template selection
	const templateName = String(data['templateName'] || key);
	if (templateItems.value.some((item) => item.value === templateName)) {
		template.value = templateName;
	} else {
		template.value = key;
	}
	applyTemplate();
};

// Faithful port of Twinkle.block.callback.change_template
const applyTemplate = () => {
	const settings = props.presetsInfo[template.value] ?? {};
	if (!toBlock.value) {
		if (settings['indefinite'] || settings['nonstandard']) {
			templateExpiry.value = 'infinity';
		} else if (templateExpiry.value === 'infinity') {
			templateExpiry.value = '';
		}
	}
	if (settings['reasonParam']) {
		blockReason.value = String(props.presetsInfo[preset.value]?.['reason'] ?? '');
	} else {
		blockReason.value = '';
	}
};

const templateExpiryHidden = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !toBlock.value && (settings['indefinite'] || settings['nonstandard']);
});

const blankDurationVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !settings['indefinite'] && !settings['nonstandard'];
});

const notalkVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !settings['nonstandard'];
});

const articleVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !!settings['pageParam'];
});

const blockReasonVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !!settings['reasonParam'];
});

const areaVisible = computed(() => toPartial.value && !toBlock.value);

const expiryInputVisible = computed(() => expiryPreset.value === 'custom');

watch(expiryPreset, (value) => {
	if (value !== 'custom') {
		expiry.value = value;
	}
});

watch(preset, (value) => {
	if (value && !value.startsWith('__group_')) {
		applyPreset(value);
	}
});

watch(template, (value) => {
	if (value && !value.startsWith('__group_')) {
		applyTemplate();
	}
});

watch(block64, (checked) => {
	emit('block64Changed', checked);
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const buildParams = (): BlockParams => ({
	actiontype: [...actiontype.value],
	preset: preset.value,
	expiry_preset: expiryPreset.value,
	expiry: expiry.value,
	pagerestrictions: pagerestrictionsInput.value,
	namespacerestrictions: [...namespacerestrictions.value],
	actionrestrictions: [...actionrestrictions.value],
	nocreate: nocreate.value,
	noemail: noemail.value,
	disabletalk: disabletalk.value,
	autoblock: autoblock.value,
	hardblock: hardblock.value,
	watchuser: watchuser.value,
	closevip: closevip.value,
	reason: reason.value,
	template: template.value,
	article: article.value,
	area: area.value,
	template_expiry: templateExpiry.value,
	block_reason: blockReason.value,
	blank_duration: blankDuration.value,
	notalk: notalk.value,
	noemail_template: noemailTemplate.value,
	nocreate_template: nocreateTemplate.value,
	tag: [...tag.value],
	sppUsername: sppUsername.value,
	sppType: sppType.value,
	sppEvidence: sppEvidence.value,
	spmChecked: spmChecked.value,
	spmEvidence: spmEvidence.value,
	unblock_reason: unblockReason.value,
	block64: block64.value,
});

let previewer: MorebitsWikiPreview | null = null;

const onPreview = () => {
	if (previewer) {
		previewer.closePreview();
	}
	if (!previewBox.value) {
		return;
	}
	const params = buildParams();
	previewer = new Morebits.wiki.preview(previewBox.value);
	previewer.beginRender(
		getBlockNoticeWikitext(buildTemplateParams(params)),
		`User_talk:${props.relevantUserName}/Wikitext` // Force wikitext/correct username
	);
};

const submit = () => {
	if (submitting.value) {
		return;
	}
	submitting.value = true;
	evaluate(buildParams(), statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

// Labels containing template braces must be assembled in script scope
const tagLabels = {
	'Blocked user': `{{Blocked user}}：${uls('一般永久封禁', '一般永久封鎖')}`,
	Sockpuppet: `{{Sockpuppet}}：${uls('傀儡账号', '傀儡賬號')}`,
	Sockpuppeteer: `{{Sockpuppeteer|blocked}}：${uls('傀儡主账号', '傀儡主賬號')}`,
};

/* ---------------- Data and types moved from twinkleblock.js ---------------- */

const menuFormattedNamespaces: Record<number, string> = {};
for (const [number, name] of Object.entries(mw.config.get('wgFormattedNamespaces'))) {
	menuFormattedNamespaces[Number(number)] = String(name);
}
menuFormattedNamespaces[0] = uls('（条目）', '（條目）');

const blockActionText: Record<string, string> = {
	block: uls('封禁', '封鎖'),
	reblock: uls('重新封禁', '重新封鎖'),
	unblock: uls('解除封禁', '解除封鎖'),
};

const actionOptions = [
	{
		label: uls('上传文件（包括覆盖文件）', '上傳檔案（包括覆蓋檔案）'),
		value: 'upload',
	},
	{
		label: uls('移动页面及文件', '移動頁面及檔案'),
		value: 'move',
	},
	{
		label: uls('创建新页面及上传新文件', '建立新頁面及上傳新檔案'),
		value: 'create',
	},
	{
		label: uls('发送感谢', '發送感謝'),
		value: 'thanks',
	},
];

/** Options of the Morebits.wiki.api block request. */
type BlockApiOptions = {
	action?: string;
	partial: boolean;
	nocreate: boolean;
	noemail: boolean;
	disabletalk: boolean;
	autoblock: boolean;
	hardblock: boolean;
	watchuser: boolean;
	expiry: string;
	reason: string;
	pagerestrictions: string;
	namespacerestrictions: string;
	user?: string;
	anononly?: boolean | undefined;
	allowusertalk?: boolean | undefined;
	reblock?: number;
	tags?: string[];
	token?: string;
};

/** Form data of the block template (warn) action. */
type TemplateOptions = {
	template: string;
	article: string;
	area: string;
	template_expiry: string;
	block_reason: string;
	blank_duration: boolean;
	notalk: boolean;
	noemail_template: boolean;
	nocreate_template: boolean;
	partial: boolean;
	disabletalk: boolean;
	hardblock: boolean;
	pagerestrictions: string[];
	namespacerestrictions: string[];
	summary: string;
	expiry: string;
	preset: string | null;
};

/** Parameters consumed by getBlockNoticeWikitext. */
interface NoticeWikitextParams {
	template: string;
	article: string;
	expiry: string;
	indefinite?: boolean;
	blank_duration: boolean;
	reason: string;
	disabletalk: boolean | string;
	hardblock: boolean;
	partial: boolean;
	pagerestrictions: string[];
	namespacerestrictions: string[];
	actionrestrictions?: string[];
	noemail: boolean;
	nocreate: boolean;
	area: string;
}

/** Parameters consumed by main, the user talk page editor. */
type MainParams = NoticeWikitextParams & {
	messageData: PresetInfo;
	usertalk_summary: string;
	template_expiry?: string;
};

const namespaceLabels: Record<number, string> = {};
for (const ns of props.namespaces) {
	namespaceLabels[ns.value] = ns.label;
}

const getRelevantUserName = (block64: boolean): string => {
	const userName = mw.config.get('wgRelevantUserName') ?? '';
	return block64 ? Morebits.ip.get64(userName) || userName : userName;
};

const buildTemplateParams = (params: BlockParams): NoticeWikitextParams => {
	const pageRestrictions = params.pagerestrictions
		.split(/[、,，\n]/)
		.map((item) => {
			return item.trim();
		})
		.filter(Boolean);
	return {
		article: params.article,
		blank_duration: params.blank_duration,
		disabletalk: params.disabletalk || params.notalk,
		expiry: params.template_expiry || params.expiry,
		hardblock: props.isRegistered ? params.autoblock : params.hardblock,
		indefinite: Morebits.string.isInfinity(params.template_expiry || params.expiry),
		reason: params.block_reason,
		template: params.template,
		partial: params.actiontype.includes('partial'),
		pagerestrictions: pageRestrictions,
		namespacerestrictions: params.namespacerestrictions,
		noemail: params.noemail || params.noemail_template,
		nocreate: params.nocreate || params.nocreate_template,
		area: params.area,
	};
};

/* ---------------- Logic moved from twinkleblock.js ---------------- */

const getBlockNoticeWikitext = (params: NoticeWikitextParams): string => {
	let text = '{{';
	const settings = props.presetsInfo[params.template] ?? {};
	if (settings['nonstandard']) {
		text += params.template;
	} else {
		text += 'subst:'.concat(params.template);
		if (params.article && settings['pageParam']) {
			text += `|page=${params.article}`;
		}
		if (!/te?mp|^\s*$|min/.exec(params.expiry)) {
			if (params.indefinite) {
				text += '|indef=yes';
			} else if (!params.blank_duration) {
				// No expiry checks
				// Block template wants a duration, not date
				text += `|time=${Morebits.string.formatTime(params.expiry)}`; // formatTime
			}
		}
		if (!props.isRegistered && !params.hardblock) {
			text += '|anon=yes';
		}
		if (params.reason) {
			text += `|reason=${params.reason}`;
		}
		if (params.disabletalk) {
			text += '|notalk=yes';
		}
		// Currently, all partial block templates are "standard"
		// Building the template, however, takes a fair bit of logic
		if (params.partial) {
			if (params.pagerestrictions.length || params.namespacerestrictions.length) {
				const makeSentence = (array: string[]): string => {
					if (array.length < 3) {
						return array.join('和');
					}
					const last = array.pop();
					return `${array.join('、')}和${last}`;
				};
				text += '|area=某些';
				if (params.pagerestrictions.length) {
					text += `頁面（${makeSentence(
						params.pagerestrictions.map((p) => {
							return `[[:${p}]]`;
						})
					)}`;
					text += params.namespacerestrictions.length ? '）和某些' : '）';
				}
				if (params.namespacerestrictions.length) {
					// 1 => Talk, 2 => User, etc.
					const namespaceNames = params.namespacerestrictions.map((id) => {
						return namespaceLabels[Number(id)] ?? String(id);
					});
					text += `${
						uls('[[Help:命名空间|命名空间]]（', '[[Help:命名空間|命名空間]]（') +
						makeSentence(namespaceNames)
					}）`;
				}
				// The legacy implementation read `params.actionrestrictions.length`
				// unguarded, which crashed when a block template was issued with
				// page or namespace restrictions but no action restriction data.
				if (params.actionrestrictions?.length) {
					const actionNames = params.actionrestrictions.map((action) => {
						const actionOption = actionOptions.find((opt) => {
							return opt.value === action;
						});
						return actionOption ? actionOption.label : action;
					});
					text += `操作（${makeSentence(actionNames)}）`;
				}
			} else if (params.area) {
				text += `|area=${params.area}`;
			} else {
				if (params.noemail) {
					text += '|email=yes';
				}
				if (params.nocreate) {
					text += '|accountcreate=yes';
				}
			}
		}
	}
	if (settings['sig']) {
		text += `|sig=${String(settings['sig'])}`;
	}
	return `${text}}}`;
};

const issue_template = (formData: TemplateOptions): void => {
	// Use wgRelevantUserName to ensure the block template goes to a single IP and not to the
	// "talk page" of an IP range (which does not exist)
	const userTalkPage = `User_talk:${mw.config.get('wgRelevantUserName')}`;
	const params = {
		...formData,
		messageData: props.presetsInfo[formData.template] ?? {},
		usertalk_summary: String(props.presetsInfo[formData.preset || formData.template]?.['summary'] ?? ''),
		reason: formData.block_reason,
		disabletalk: formData.notalk,
		noemail: formData.noemail_template,
		nocreate: formData.nocreate_template,
	};
	Morebits.wiki.actionCompleted.redirect = userTalkPage;
	Morebits.wiki.actionCompleted.notice = uls('完成，将在几秒后加载用户讨论页', '完成，將在幾秒後載入使用者討論頁');
	const qiuwen_page = new Morebits.wiki.page(userTalkPage, uls('用户讨论页修改', '使用者討論頁修改'));
	qiuwen_page.setCallbackParameters(params);
	qiuwen_page.load(main);
};

const main = (pageobj: MorebitsWikiPage): void => {
	const params = pageobj.getCallbackParameters() as MainParams;
	const date = new Morebits.date(pageobj.getLoadTime() ?? '');
	const messageData = params.messageData;
	let text: string;
	params.indefinite = Morebits.string.isInfinity(params.expiry);
	if (Twinkle.getPref('blankTalkpageOnIndefBlock') && params.template !== 'uw-lblock' && params.indefinite) {
		Morebits.status.info(
			uls('信息', '資訊'),
			uls('根据参数设置清空讨论页并为日期创建新2级标题', '根據偏好設定清空討論頁並為日期建立新2級標題')
		);
		text = `${date.monthHeader()}\n`;
	} else {
		text = pageobj.getPageText() ?? '';
		const dateHeaderRegex = date.monthHeaderRegex();
		let dateHeaderRegexLast: RegExpExecArray | null;
		let dateHeaderRegexResult: RegExpExecArray | null = null;
		while ((dateHeaderRegexLast = dateHeaderRegex.exec(text)) !== null) {
			dateHeaderRegexResult = dateHeaderRegexLast;
		}
		// If dateHeaderRegexResult is null then lastHeaderIndex is never checked. If it is not null but
		// \n== is not found, then the date header must be at the very start of the page. lastIndexOf
		// returns -1 in this case, so lastHeaderIndex gets set to 0 as desired.
		const lastHeaderIndex = text.lastIndexOf('\n==') + 1;
		if (text.length > 0) {
			text += '\n\n';
		}
		if (!dateHeaderRegexResult || dateHeaderRegexResult.index !== lastHeaderIndex) {
			Morebits.status.info(
				uls('信息', '資訊'),
				uls('未找到当月的二级标题，将创建新的', '未找到當月的二級標題，將建立新的')
			);
			text += `${date.monthHeader()}\n`;
		}
	}
	params.expiry = params.template_expiry === undefined ? params.expiry : params.template_expiry;
	text += getBlockNoticeWikitext(params);
	// build the edit summary
	let summary = params.usertalk_summary;
	if (messageData['suppressArticleInSummary'] !== true && params.article) {
		summary += `${uls('，于', '，於')}[[:${params.article}]]`;
	}
	pageobj.setPageText(text);
	pageobj.setEditSummary(summary);
	pageobj.setChangeTags(Twinkle.changeTags);
	pageobj.setWatchlist(Twinkle.getPref('watchBlockNotices'));
	pageobj.save();
};

const taguserpage = (pageobj: MorebitsWikiPage): void => {
	const params = pageobj.getCallbackParameters() as BlockParams;
	const statelem = pageobj.getStatusElement();
	if (params.actiontype.includes('tag')) {
		const tags: string[] = [];
		for (const tag of params.tag) {
			let tagtext = `{{${tag}`;
			switch (tag) {
				case 'Blocked user':
					break;
				case 'Sockpuppet':
					tagtext += `\n| 1 = ${params.sppUsername.trim()}`;
					tagtext += `\n| 2 = ${params.sppType.trim()}`;
					if (params.sppEvidence.trim()) {
						tagtext += `\n| evidence = ${params.sppEvidence.trim()}`;
					}
					tagtext += '\n| locked = no';
					tagtext += '\n| notblocked = no';
					tagtext += '\n';
					break;
				case 'Sockpuppeteer':
					tagtext += '\n| 1 = blocked';
					tagtext += `\n| checked = ${params.spmChecked ? 'yes' : ''}`;
					if (params.spmEvidence.trim()) {
						tagtext += `\n| evidence = ${params.spmEvidence.trim()}`;
					}
					tagtext += '\n';
					break;
				default:
					void mw.notify(uls('未知的用户页模板！', '未知的使用者頁面模板！'), {
						type: 'warn',
						tag: 'twinkleblock',
					});
					continue;
			}
			tagtext += '}}';
			tags[tags.length] = tagtext;
		}
		const text = tags.join('\n');
		pageobj.setPageText(text);
		pageobj.setEditSummary(uls('标记被永久封禁的用户页', '標記被永久封鎖的使用者頁面'));
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.save(() => {
			Morebits.status.info(uls('标记用户页', '標記使用者頁面'), '完成');
			statelem.status(uls('正在保护页面', '正在保護頁面'));
			pageobj.load(protectuserpage);
		});
	} else {
		protectuserpage(pageobj);
	}
};

const protectuserpage = (pageobj: MorebitsWikiPage): void => {
	const params = pageobj.getCallbackParameters() as BlockParams;
	const statelem = pageobj.getStatusElement();
	if (params.actiontype.includes('protect')) {
		if (pageobj.exists()) {
			pageobj.setEditProtection('sysop', 'indefinite');
			pageobj.setMoveProtection('sysop', 'indefinite');
		} else {
			pageobj.setCreateProtection('sysop', 'indefinite');
		}
		pageobj.setEditSummary(uls('被永久封禁的用户页', '被永久封鎖的使用者頁面'));
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.protect(() => {
			Morebits.status.info(
				uls('保护用户页', '保護使用者頁面'),
				pageobj.exists() ? uls('已全保护', '已全保護') : uls('已白纸保护', '已白紙保護')
			);
			statelem.info('全部完成');
		});
	} else {
		statelem.info('全部完成');
	}
};

const closeRequest = (vipPage: MorebitsWikiPage): void => {
	const params = vipPage.getCallbackParameters() as BlockApiOptions;
	let text = vipPage.getPageText() ?? '';
	const statusElement = vipPage.getStatusElement();
	const userName = mw.config.get('wgRelevantUserName') ?? '';
	const expiryText = Morebits.string.formatTime(params.expiry);
	const comment = `{{Blocked|${Morebits.string.isInfinity(params.expiry) ? 'indef' : expiryText}}}。`;
	const requestList = text.split(/(?=\n===.+===\s*\n)/);
	let found = false;
	let hidename = false;
	const vipRe = new RegExp(
		`{{\\s*[Vv]andal\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.pageNameRegex(userName)}\\s*(\\|\\s*hidename\\s*=[^|]+)?}}`,
		'm'
	);
	for (let request of requestList) {
		if (vipRe.exec(request)) {
			hidename = /\|\s*hidename\s*=[^|]+/.test(request);
			request = request.trimEnd();
			let newText = request.replace(
				/^(\*\s*处理：)[ \t]*(<!-- 非管理員僅可標記已執行的封禁，針對提報的意見請放在下一行 -->)?[ \t]*$/m,
				`$1${comment}——~~`.concat('~~')
			);
			if (request === newText) {
				newText = `${request}\n* 处理：${comment}——~~`.concat('~~');
			}
			request = `${newText}\n`;
			found = true;
			break;
		}
	}
	if (!found) {
		statusElement.warn(uls('没有找到相关的请求', '沒有找到相關的請求'));
		return;
	}
	text = requestList.join('');
	let summary: string;
	if (hidename) {
		summary = uls('标记为已处理', '標記為已處理');
	} else {
		summary = `/* ${userName} */ `;
		if (Morebits.string.isInfinity(params.expiry)) {
			summary += uls('不限期封禁', '不限期封鎖');
		} else {
			summary += uls('封禁', '封鎖') + expiryText;
		}
	}
	vipPage.setEditSummary(summary);
	vipPage.setChangeTags(Twinkle.changeTags);
	vipPage.setPageText(text);
	vipPage.save();
};

const evaluate = (params: BlockParams, statusContainer: HTMLElement | null, restore: () => void): void => {
	// Apply the /64 upgrade if requested
	const relevantUser = getRelevantUserName(params.block64);
	const toBlock = params.actiontype.includes('block');
	const toWarn = params.actiontype.includes('template');
	const toPartial = params.actiontype.includes('partial');
	const toTag = params.actiontype.includes('tag');
	const toProtect = params.actiontype.includes('protect');
	const toUnblock = params.actiontype.includes('unblock');
	const pageRestrictions = params.pagerestrictions
		.split(/[、,，\n]/)
		.map((item) => {
			return item.trim();
		})
		.filter(Boolean);
	const blockoptions: BlockApiOptions = {
		partial: toPartial,
		nocreate: params.nocreate,
		noemail: params.noemail,
		disabletalk: params.disabletalk,
		autoblock: params.autoblock,
		hardblock: params.hardblock,
		watchuser: params.watchuser,
		// Interpret a 12-digit absolute expiry (yyyymmddhhmm) as Beijing time
		expiry: normalizeExpiry(params.expiry),
		reason: params.reason,
		pagerestrictions: '',
		namespacerestrictions: '',
	};
	const templateoptions: TemplateOptions = {
		template: params.template,
		article: params.article,
		area: params.area,
		template_expiry: params.template_expiry,
		block_reason: params.block_reason,
		blank_duration: params.blank_duration,
		notalk: params.notalk,
		noemail_template: params.noemail_template,
		nocreate_template: params.nocreate_template,
		partial: toPartial,
		disabletalk: !!(params.notalk || params.disabletalk),
		hardblock: !!params.hardblock,
		pagerestrictions: pageRestrictions,
		namespacerestrictions: params.namespacerestrictions,
		// use block settings as warn options where not supplied
		summary: params.reason,
		expiry: params.template_expiry || normalizeExpiry(params.expiry),
		preset: toBlock ? params.preset : null,
	};
	const unblockoptions: Record<string, string> = {
		reason: params.unblock_reason,
	};
	const toClosevip = !!params.closevip;
	// Format for API
	blockoptions.pagerestrictions = pageRestrictions.join('|');
	blockoptions.namespacerestrictions = params.namespacerestrictions.join('|');
	// Check tags
	// Given an array of incompatible tags, check if we have two or more selected
	const checkIncompatible = (conflicts: string[], extra?: string): boolean => {
		const count = conflicts.reduce((sum, tag) => {
			return sum + (params.tag.includes(tag) ? 1 : 0);
		}, 0);
		if (count > 1) {
			let message = `${uls('请在以下标签中择一使用', '請在以下標籤中擇一使用')}：{{${conflicts.join(
				'}}、{{'
			)}}}。`;
			message += extra || '';
			void mw.notify(message, {
				type: 'warn',
				tag: 'twinkleblock',
			});
			return true;
		}
		return false;
	};
	if (toTag) {
		if (params.tag.length === 0) {
			void mw.notify(uls('请至少选择一个用户页标记！', '請至少選擇一個使用者頁面標記！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			restore();
			return;
		}
		if (
			checkIncompatible(
				['Blocked user', 'Sockpuppet'],
				uls('{{Sockpuppet}}已涵盖{{Blocked user}}的功能。', '{{Sockpuppet}}已涵蓋{{Blocked user}}的功能。')
			)
		) {
			restore();
			return;
		}
		if (
			checkIncompatible(
				['Blocked user', 'Sockpuppeteer'],
				uls(
					'{{Sockpuppeteer}}已涵盖{{Blocked user}}的功能。',
					'{{Sockpuppeteer}}已涵蓋{{Blocked user}}的功能。'
				)
			)
		) {
			restore();
			return;
		}
		if (
			checkIncompatible(
				['Sockpuppet', 'Sockpuppeteer'],
				uls('请从主账号和分身账号中选择一个。', '請從主賬號和分身賬號中選擇一個。')
			)
		) {
			restore();
			return;
		}
		if (params.tag.includes('Sockpuppet') && params.sppUsername.trim() === '') {
			void mw.notify(uls('请提供傀儡账号的主账号用户名！', '請提供傀儡賬號的主賬號使用者名稱！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			restore();
			return;
		}
	}
	if (toBlock) {
		if (blockoptions.partial) {
			if (blockoptions.disabletalk && !blockoptions.namespacerestrictions.includes('3')) {
				void mw.notify(
					uls(
						'部分封禁无法阻止编辑自己的讨论页，除非也封禁了User talk命名空间！',
						'部分封鎖無法阻止編輯自己的討論頁，除非也封鎖了User talk命名空間！'
					),
					{
						type: 'warn',
						tag: 'twinkleblock',
					}
				);
				restore();
				return;
			}
			if (!blockoptions.namespacerestrictions && !blockoptions.pagerestrictions) {
				if (!blockoptions.noemail && !blockoptions.nocreate) {
					// Blank entries technically allowed
					void mw.notify(
						uls(
							'没有选择页面或命名空间，也没有停用电子邮件或禁止创建账号；请选择至少一个选项以应用部分封禁！',
							'沒有選擇頁面或命名空間，也沒有停用電子郵件或禁止建立賬號；請選擇至少一個選項以應用部分封鎖！'
						),
						{
							type: 'warn',
							tag: 'twinkleblock',
						}
					);
					restore();
					return;
				} else if (
					!confirm(
						uls(
							'您将要进行封禁，但没有阻止任何页面或命名空间的编辑，确定要继续？',
							'您將要進行封鎖，但沒有阻止任何頁面或命名空間的編輯，確定要繼續？'
						)
					)
				) {
					return;
				}
			}
		}
		if (!blockoptions.expiry) {
			void mw.notify(uls('请提供过期时间！', '請提供過期時間！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			restore();
			return;
		} else if (Morebits.string.isInfinity(blockoptions.expiry) && !props.isRegistered) {
			void mw.notify(uls('禁止无限期封禁IP地址！', '禁止無限期封鎖IP位址！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			restore();
			return;
		}
		if (!blockoptions.reason) {
			void mw.notify(uls('请提供封禁理由！', '請提供封鎖理由！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			restore();
			return;
		}
		Morebits.status.init(statusContainer);
		const statusElement = new Morebits.status(uls('执行封禁', '執行封鎖'));
		blockoptions.action = 'block';
		blockoptions.user = relevantUser;
		// boolean-flipped options
		blockoptions.anononly = blockoptions.hardblock ? undefined : true;
		blockoptions.allowusertalk = blockoptions.disabletalk ? undefined : true;
		/**
		 * Check if block status changed while processing the form.
		 * There's a lot to consider here. list=blocks provides the
		 * current block status, but there are at least two issues with
		 * relying on it. First, the id doesn't update on a reblock,
		 * meaning the individual parameters need to be compared. This
		 * can be done roughly with JSON.stringify - we can thankfully
		 * rely on order from the server, although sorting would be
		 * fine if not - but falsey values are problematic and is
		 * non-ideal. More importantly, list=blocks won't indicate if a
		 * non-blocked user is blocked then unblocked. This should be
		 * exceedingy rare, but regardless, we thus need to check
		 * list=logevents, which has a nicely updating logid
		 * parameter. We can't rely just on that, though, since it
		 * doesn't account for blocks that have expired on their own.
		 * As such, we use both. Using some ternaries, the logid
		 * variables are false if there's no logevents, so if they
		 * aren't equal we defintely have a changed entry (send
		 * confirmation). If they are equal, then either the user was
		 * never blocked (the block statuses will be equal, no
		 * confirmation) or there's no new block, in which case either
		 * a block expired (different statuses, confirmation) or the
		 * same block is still active (same status, no confirmation).
		 */
		const query: Record<string, string | number | boolean> = {
			format: 'json',
			action: 'query',
			list: 'blocks|logevents',
			letype: 'block',
			lelimit: 1,
			letitle: `User:${blockoptions.user}`,
		};
		// bkusers doesn't catch single IPs blocked as part of a range block
		if (mw.util.isIPAddress(blockoptions.user, true)) {
			query['bkip'] = blockoptions.user;
		} else {
			query['bkusers'] = blockoptions.user;
			query['list'] += '|users';
			query['usprop'] = 'groups';
			query['ususers'] = blockoptions.user;
			query['meta'] = 'tokens';
			query['type'] = 'userrights';
		}
		void api.get(query).then((response) => {
			const data = response as {
				query: {
					blocks: Record<string, unknown>[];
					logevents: {
						logid: number;
						user: string;
						comment: string;
						action: string;
						timestamp: string;
						params: {duration?: string; expiry?: string};
					}[];
					users?: {groups: string[]}[];
					tokens?: {userrightstoken: string};
				};
			};
			let block = data.query.blocks[0];
			// As with the initial data fetch, if an IP is blocked
			// *and* rangeblocked, this would only grab whichever
			// block is more recent, which would likely mean a
			// mismatch.  However, if the rangeblock is updated
			// while filling out the form, this won't detect that,
			// but that's probably fine.
			if (data.query.blocks.length > 1 && block?.['user'] !== relevantUser) {
				block = data.query.blocks[1];
			}
			const logevents = data.query.logevents[0];
			const user = data.query.users ? data.query.users[0] : null;
			const logid = data.query.logevents.length && logevents ? logevents.logid : false;
			if (logid !== props.blockLogId || !!block !== !!props.currentBlockInfo) {
				let message = blockoptions.user + uls('的封禁状态已被修改。', '的封鎖狀態已被修改。');
				if (block) {
					message += uls('新状态：', '新狀態：');
				} else {
					message += uls('最新日志：', '最新日誌：');
				}
				let logExpiry = '';
				if (logevents?.params.duration) {
					if (logevents.params.duration === 'infinity') {
						logExpiry = uls('无限期', '無限期');
					} else {
						const expiryDate = new Morebits.date(logevents.params.expiry ?? '');
						logExpiry +=
							(expiryDate.isBefore(new Date()) ? uls('过期于', '過期於') : '直到') +
							expiryDate.calendar(UTC8_OFFSET_MINUTES);
					}
				} else {
					// no duration, action=unblock, just show timestamp
					logExpiry = `於${new Morebits.date(logevents?.timestamp ?? '').calendar(UTC8_OFFSET_MINUTES)}`;
				}
				message += `由${logevents?.user}${uls('以“', '以「')}${logevents?.comment}${uls('”', '」')}${
					blockActionText[logevents?.action ?? ''] ?? ''
				}${logExpiry}${uls('，你想要以你的设置更改封禁吗？', '，你想要以你的設定變更封鎖嗎？')}`;
				if (!confirm(message)) {
					Morebits.status.info(uls('执行封禁', '執行封鎖'), uls('用户取消操作', '使用者取消操作'));
					return;
				}
				blockoptions.reblock = 1; // Writing over a block will fail otherwise
			}
			const groupsCanBeRemoved = [
				'autoreviewer',
				'confirmed',
				'rnrsverify-exempt',
				'massmessage-sender',
				'patroller',
				'templateeditor',
				'transwiki',
			];
			let groupsToBeRemoved: string[] = [];
			if (user && Morebits.string.isInfinity(blockoptions.expiry)) {
				groupsToBeRemoved = user.groups.filter((group) => {
					return groupsCanBeRemoved.includes(group);
				});
			}
			// execute block
			blockoptions.tags = Twinkle.changeTags;
			blockoptions.token = mw.user.tokens.get('csrfToken');
			const mbApi = new Morebits.wiki.api(uls('执行封禁', '執行封鎖'), blockoptions, () => {
				statusElement.info('完成');
				if (toWarn) {
					issue_template(templateoptions);
				}
				if (toClosevip) {
					const vipPage = new Morebits.wiki.page('Qiuwen_talk:报告当前破坏', uls('关闭请求', '關閉請求'));
					vipPage.setFollowRedirect(true);
					vipPage.setCallbackParameters(blockoptions);
					vipPage.load(closeRequest);
				}
				if (groupsToBeRemoved.length > 0) {
					const rightStatusElement = new Morebits.status(uls('移除权限', '移除權限'));
					if (
						confirm(
							uls('该用户有以下权限：', '該使用者有以下權限：') +
								groupsToBeRemoved.join('、') +
								uls('，您是否想要同时移除这些权限？', '，您是否想要同時移除這些權限？')
						)
					) {
						const revokeOptions: Record<string, string | string[]> = {
							action: 'userrights',
							user: blockoptions.user ?? '',
							remove: groupsToBeRemoved.join('|'),
							reason: uls('用户已被无限期封禁', '使用者已被無限期封鎖'),
							token: data.query.tokens?.userrightstoken ?? '',
							tags: Twinkle.changeTags,
						};
						const mrApi = new Morebits.wiki.api(uls('移除权限', '移除權限'), revokeOptions, () => {
							rightStatusElement.info(`已移除${groupsToBeRemoved.join('、')}`);
						});
						mrApi.post();
					} else {
						rightStatusElement.error(uls('用户取消操作。', '使用者取消操作。'));
					}
				}
			});
			mbApi.post();
		});
	} else if (toWarn) {
		Morebits.status.init(statusContainer);
		issue_template(templateoptions);
	}
	if (toTag || toProtect) {
		Morebits.status.init(statusContainer);
		const userPage = `User:${mw.config.get('wgRelevantUserName')}`;
		const qiuwen_page = new Morebits.wiki.page(userPage, uls('标记或保护用户页', '標記或保護使用者頁面'));
		qiuwen_page.setCallbackParameters(params);
		qiuwen_page.load(taguserpage);
	}
	if (toUnblock) {
		if (!unblockoptions['reason']) {
			void mw.notify(uls('请提供解除封禁理由！', '請提供解除封鎖理由！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			restore();
			return;
		}
		Morebits.status.init(statusContainer);
		const unblockStatusElement = new Morebits.status(uls('执行解除封禁', '執行解除封鎖'));
		unblockoptions['action'] = 'unblock';
		unblockoptions['user'] = mw.config.get('wgRelevantUserName') ?? '';
		// execute unblock
		// execute unblock
		unblockoptions['tags'] = Twinkle.changeTags.join('|');
		unblockoptions['token'] = mw.user.tokens.get('csrfToken');
		const unblockMbApi = new Morebits.wiki.api(uls('执行解除封禁', '執行解除封鎖'), unblockoptions, () => {
			unblockStatusElement.info('完成');
		});
		unblockMbApi.post();
	}
	if (!toBlock && !toWarn && !toTag && !toProtect && !toUnblock) {
		void mw.notify(uls('请给Twinkle点事做！', '請給Twinkle點事做！'), {
			type: 'warn',
			tag: 'twinkleblock',
		});
	}
};
</script>

<template>
	<tw-dialog
		:open="open"
		:title="title"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="primaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<cdx-field is-fieldset>
			<template #label>{{ uls('操作类型', '操作類別') }}</template>
			<cdx-checkbox
				v-if="showBlock"
				:model-value="actiontype"
				input-value="block"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('block', $event)"
			>
				{{ uls('封禁用户', '封鎖使用者') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showBlock"
				:model-value="actiontype"
				input-value="partial"
				name="twinkleblock-actiontype"
				:disabled="submitting || partialDisabled"
				@update:model-value="toggleAction('partial', $event)"
			>
				{{ uls('部分封禁', '部分封鎖') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showTemplate"
				:model-value="actiontype"
				input-value="template"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('template', $event)"
			>
				{{ uls('加入封禁模板到用户讨论页', '加入封鎖模板到使用者討論頁') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showTag"
				:model-value="actiontype"
				input-value="tag"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('tag', $event)"
			>
				{{ uls('标记用户页', '標記使用者頁面') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showProtect"
				:model-value="actiontype"
				input-value="protect"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('protect', $event)"
			>
				{{ uls('保护用户页', '保護使用者頁面') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showUnblock"
				:model-value="actiontype"
				input-value="unblock"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('unblock', $event)"
			>
				{{ uls('解除封禁用户', '解除封鎖使用者') }}
			</cdx-checkbox>
		</cdx-field>

		<template v-if="sixtyFourAvailable">
			<cdx-checkbox v-model="block64" :disabled="submitting">
				{{ uls('改成封禁/64', '改成封鎖/64') }}
			</cdx-checkbox>
			<div class="tw-block-64-note">
				{{ uls('直接封禁/64段有益无害。', '直接封鎖/64段有益無害。') }}
			</div>
		</template>

		<template v-if="toBlock">
			<cdx-field>
				<template #label>{{ uls('选择默认：', '選擇預設：') }}</template>
				<cdx-select v-model:selected="preset" :menu-items="presetItems" :disabled="submitting" />
			</cdx-field>
			<div v-if="notices.currentBlock" class="tw-block-notice">
				<b>{{ notices.currentBlock }}</b>
				<span v-if="notices.currentInfo">{{ notices.currentInfo }}</span>
			</div>
			<div v-if="notices.blockLog" class="tw-block-notice">
				{{ notices.blockLog }}
				<a :href="notices.blockLogLink" target="_blank" rel="noopener noreferrer">
					{{ uls('封禁日志', '封鎖日誌') }}
				</a>
			</div>
			<cdx-field>
				<template #label>{{ uls('过期时间：', '過期時間：') }}</template>
				<cdx-select v-model:selected="expiryPreset" :menu-items="expiryPresetItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="expiryInputVisible">
				<template #label>{{ uls('自定义过期时间', '自訂過期時間') }}</template>
				<cdx-text-input v-model="expiry" :disabled="submitting" />
			</cdx-field>
			<template v-if="toPartial">
				<cdx-field>
					<template #label>{{ uls('页面封禁', '頁面封鎖') }}</template>
					<template #description>{{
						uls('最多10个页面，用顿号或逗号分隔。', '最多10個頁面，用頓號或逗號分隔。')
					}}</template>
					<cdx-text-input
						v-model="pagerestrictionsInput"
						:placeholder="uls('输入要阻止用户编辑的页面', '輸入要阻止使用者編輯的頁面')"
						:disabled="submitting"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('命名空间封禁', '命名空間封鎖') }}</template>
					<cdx-checkbox
						v-for="ns in namespaces"
						:key="ns.value"
						:model-value="namespacerestrictions"
						:input-value="String(ns.value)"
						name="twinkleblock-namespaces"
						:disabled="submitting"
						@update:model-value="updateNamespaces"
					>
						{{ ns.label }}
					</cdx-checkbox>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('操作封禁', '操作封鎖') }}</template>
					<template #description>{{ uls('指定封禁的操作类型。', '指定封鎖的操作類型。') }}</template>
					<cdx-checkbox
						v-for="action in actionRestrictionOptions"
						:key="action.value"
						:model-value="actionrestrictions"
						:input-value="action.value"
						name="twinkleblock-actionrestrictions"
						:disabled="submitting"
						@update:model-value="updateActionRestrictions"
					>
						{{ action.label }}
					</cdx-checkbox>
				</cdx-field>
			</template>
			<cdx-field is-fieldset>
				<template #label>{{ uls('封禁选项', '封鎖選項') }}</template>
				<cdx-checkbox v-model="nocreate" :disabled="submitting">
					{{ uls('禁止创建账号', '禁止建立賬號') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="noemail" :disabled="submitting">
					{{ uls('电子邮件停用', '電子郵件停用') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="disabletalk" :disabled="submitting">
					{{ uls('不能编辑自己的讨论页', '不能編輯自己的討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-if="isRegistered" v-model="autoblock" :disabled="submitting">
					{{ uls('自动封禁', '自動封鎖') }}
				</cdx-checkbox>
				<cdx-checkbox v-else v-model="hardblock" :disabled="submitting">
					{{ uls('阻止登录用户使用该IP地址编辑', '阻止登入使用者使用該IP位址編輯') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="watchuser" :disabled="submitting">
					{{ uls('监视该用户的用户页和讨论页', '監視該使用者的使用者頁面和討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="closevip" :disabled="submitting">
					{{ uls('标记当前的破坏中的请求', '標記當前的破壞中的請求') }}
				</cdx-checkbox>
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('理由（用于封禁日志）：', '理由（用於封鎖日誌）：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
			<cdx-field is-fieldset>
				<template #label>{{ uls('参见：', '參見：') }}</template>
				<cdx-checkbox
					v-for="option in seeAlsoOptions"
					:key="option.value"
					:model-value="seeAlsoValues"
					:input-value="option.value"
					name="twinkleblock-seealso"
					:disabled="submitting"
					@update:model-value="toggleSeeAlso(option.value, $event)"
				>
					{{ option.label }}
				</cdx-checkbox>
			</cdx-field>
		</template>

		<template v-if="toTemplate">
			<cdx-field>
				<template #label>{{ uls('选择讨论页模板：', '選擇討論頁模板：') }}</template>
				<cdx-select v-model:selected="template" :menu-items="templateItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="articleVisible">
				<template #label>{{ uls('链接页面', '連結頁面') }}</template>
				<cdx-text-input v-model="article" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="areaVisible">
				<template #label>{{ uls('封禁范围', '封鎖範圍') }}</template>
				<cdx-text-input v-model="area" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="!toBlock && !templateExpiryHidden">
				<template #label>封禁期限：</template>
				<cdx-text-input v-model="templateExpiry" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="blockReasonVisible">
				<template #label>{{ uls('“由于……您已被封禁”', '「由於……您已被封鎖」') }}</template>
				<cdx-text-input v-model="blockReason" :disabled="submitting" />
			</cdx-field>
			<cdx-checkbox v-if="toBlock && blankDurationVisible" v-model="blankDuration" :disabled="submitting">
				{{ uls('不在模板中包含封禁期限', '不在模板中包含封鎖期限') }}
			</cdx-checkbox>
			<template v-if="!toBlock">
				<cdx-checkbox v-if="notalkVisible" v-model="notalk" :disabled="submitting">
					{{ uls('不能编辑自己的讨论页', '不能編輯自己的討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-if="toPartial" v-model="noemailTemplate" :disabled="submitting">
					{{ uls('不能发送电子邮件', '不能傳送電子郵件') }}
				</cdx-checkbox>
				<cdx-checkbox v-if="toPartial" v-model="nocreateTemplate" :disabled="submitting">
					{{ uls('不能创建账号', '不能建立賬號') }}
				</cdx-checkbox>
			</template>
			<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
				{{ uls('预览', '預覽') }}
			</cdx-button>
			<div ref="previewBox" hidden></div>
		</template>

		<template v-if="toTag">
			<cdx-field is-fieldset>
				<template #label>{{ uls('选择用户页模板：', '選擇使用者頁面模板：') }}</template>
				<cdx-checkbox
					:model-value="tag"
					input-value="Blocked user"
					name="twinkleblock-tag"
					:disabled="submitting"
					@update:model-value="updateTag"
				>
					{{ tagLabels['Blocked user'] }}
				</cdx-checkbox>
				<cdx-checkbox
					:model-value="tag"
					input-value="Sockpuppet"
					name="twinkleblock-tag"
					:disabled="submitting"
					@update:model-value="updateTag"
				>
					{{ tagLabels.Sockpuppet }}
				</cdx-checkbox>
				<template v-if="tag.includes('Sockpuppet')">
					<cdx-field>
						<template #label>{{ uls('主账号用户名：', '主賬號使用者名稱：') }}</template>
						<cdx-text-input v-model="sppUsername" :disabled="submitting" />
					</cdx-field>
					<cdx-field>
						<template #label>{{ uls('状态：', '狀態：') }}</template>
						<cdx-select
							v-model:selected="sppType"
							:menu-items="[
								{value: 'blocked', label: `blocked - ${uls('仅依行为证据认定', '僅依行為證據認定')}`},
								{value: 'proven', label: `proven - ${uls('经傀儡调查确认', '經傀儡調查確認')}`},
								{value: 'confirmed', label: `confirmed - ${uls('经查核确认', '經查核確認')}`},
							]"
							:disabled="submitting"
						/>
					</cdx-field>
					<cdx-field>
						<template #label>{{ uls('根据……确定：', '根據……確定：') }}</template>
						<cdx-text-input v-model="sppEvidence" :disabled="submitting" />
					</cdx-field>
				</template>
				<cdx-checkbox
					:model-value="tag"
					input-value="Sockpuppeteer"
					name="twinkleblock-tag"
					:disabled="submitting"
					@update:model-value="updateTag"
				>
					{{ tagLabels.Sockpuppeteer }}
				</cdx-checkbox>
				<template v-if="tag.includes('Sockpuppeteer')">
					<cdx-checkbox v-model="spmChecked" :disabled="submitting">
						{{ uls('经用户查核确认', '經使用者查核確認') }}
					</cdx-checkbox>
					<cdx-field>
						<template #label>{{ uls('额外理由：', '額外理由：') }}</template>
						<cdx-text-input v-model="spmEvidence" :disabled="submitting" />
					</cdx-field>
				</template>
			</cdx-field>
		</template>

		<template v-if="toUnblock">
			<cdx-field>
				<template #label>{{ uls('理由（用于封禁日志）：', '理由（用於封鎖日誌）：') }}</template>
				<cdx-text-area v-model="unblockReason" :disabled="submitting" />
			</cdx-field>
		</template>

		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-block-notice {
	margin: 0.5em 0;
	color: #a00;
}

.tw-block-64-note {
	margin: 0.25em 0 0.5em;
}
</style>
