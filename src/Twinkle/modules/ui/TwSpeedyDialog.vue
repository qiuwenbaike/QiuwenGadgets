<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxRadio, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiApi, type MorebitsWikiPage} from './morebits';
import type {SpeedyCriterion, SubgroupDef, TwStatusExposed} from './types';
import {computed, reactive, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {twinkle} from './twinkleGlobal';
import {uls} from '../utils/useUls';

declare const Twinkle: {
	changeTags: string[];
	hatnoteRegex: string;
	closeDialog: () => void;
	protect?: {callback: () => void};
	unlink?: {callback: (reason?: string) => void};
	getPref: {
		(
			key:
				| 'watchSpeedyPages'
				| 'notifyUserOnSpeedyDeletionNomination'
				| 'noLogOnSpeedyNomination'
				| 'promptForSpeedyDeletionSummary'
		): string[];
		(key: 'watchSpeedyExpiry'): string;
		(key: string): string | boolean;
	};
	speedy?: {
		callbacks: {
			user: {
				addToLog: (params: SpeedyWorkParams, initialContrib: string | null) => void;
			};
		};
	};
};

interface CriteriaSection {
	title: string;
	items: SpeedyCriterion[];
}

interface SpeedyParams {
	tagOnly: boolean;
	values: string[];
	subgroups: Record<string, string>;
	talkpage: boolean;
	redirects: boolean;
	delmultiple: boolean;
	openusertalk: boolean;
	notify: boolean;
	blank: boolean;
	salting: boolean;
	multiple: boolean;
}

/** Parameters carried through the tagging/deletion workers. */
interface SpeedyWorkParams {
	values: string[];
	normalizeds: string[];
	watch: string | boolean | undefined;
	templateParams: Record<string, string>[] | null;
	utparams?: Record<string, string>;
	// user (tagging) mode
	usertalk?: boolean;
	lognomination?: boolean;
	blank?: boolean;
	requestsalt?: string | boolean;
	// sysop (deletion) mode
	deleteTalkPage?: boolean;
	deleteRedirects?: boolean;
	openUserTalk?: boolean;
	promptForSummary?: boolean | undefined;
	// Present (but always undefined) on sysop params; sysop.deleteTalk reads
	// it, faithful to the original
	normalized?: string;
	// Set when logging on behalf of twinkleimage (DI)
	fromDI?: boolean;
	templatename?: string;
}

const props = defineProps<{
	isSysop: boolean;
	hasCSD: boolean;
	namespace: number;
	isRedirect: boolean;
	isIPUserTalk: boolean;
	pageContentModel: string;
	radioClick: boolean;
	deleteSysopDefaultToDelete: boolean;
	deleteTalkPageOnDelete: boolean;
	deleteRedirectsOnDelete: boolean;
	hasCSDReason: string;
	enlargeG7: boolean;
	priorCountText: string | null;
	priorCountColor: string;
	customList: SpeedyCriterion[];
	articleList: SpeedyCriterion[];
	userList: SpeedyCriterion[];
	usertalkList: SpeedyCriterion[];
	fileList: SpeedyCriterion[];
	categoryList: SpeedyCriterion[];
	draftList: SpeedyCriterion[];
	talkList: SpeedyCriterion[];
	generalList: SpeedyCriterion[];
	redirectList: SpeedyCriterion[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

// Option states (faithful to the original quickForm defaults)
const tagOnly = ref(props.isSysop ? !(props.hasCSD || props.deleteSysopDefaultToDelete) : true);
const talkpage = ref(props.deleteTalkPageOnDelete);
const redirects = ref(props.deleteRedirectsOnDelete);
const delmultiple = ref(false);
const openusertalk = ref(false);
const notify = ref(props.isSysop ? tagOnly.value : true);
const blank = ref(false);
const salting = ref(false);
const multiple = ref(false);

// Selection state
const selectedCsd = ref<string[]>([]);
const subgroupValues = reactive<Record<string, string>>({});

// Prefill the custom rationale from an existing CSD template (sysop mode),
// mirroring the legacy modeChanged behavior
if (props.hasCSDReason) {
	subgroupValues['reason_1'] = props.hasCSDReason;
	// The legacy quickForm auto-expanded the custom rationale whenever a
	// deletion reason was detected; select it so the prefilled input becomes
	// visible immediately instead of requiring a manual click
	selectedCsd.value = ['reason'];
}

const sysopMode = computed(() => props.isSysop && !tagOnly.value);
const isMultiple = computed(() => (sysopMode.value ? delmultiple.value : multiple.value));
const submitText = computed(() => (sysopMode.value ? uls('删除页面', '刪除頁面') : uls('标记页面', '標記頁面')));

// Linkage when "tag only" is toggled (faithful port of the tag_only event)
const onTagOnlyChange = (value: boolean | string[]) => {
	tagOnly.value = value === true;
	if (tagOnly.value) {
		talkpage.value = false;
		redirects.value = false;
		delmultiple.value = false;
		openusertalk.value = false;
		notify.value = true;
		multiple.value = false;
		salting.value = false;
	} else {
		talkpage.value = props.deleteTalkPageOnDelete;
		redirects.value = true;
		notify.value = false;
	}
};

const toggleSelection = (value: string, modelValue: boolean | string[] | null) => {
	if (isMultiple.value) {
		if (Array.isArray(modelValue)) {
			selectedCsd.value = modelValue.filter((item): item is string => typeof item === 'string');
		} else if (modelValue === true) {
			if (!selectedCsd.value.includes(value)) {
				selectedCsd.value.push(value);
			}
		} else if (modelValue === false) {
			selectedCsd.value = selectedCsd.value.filter((item) => item !== value);
		}
	} else {
		selectedCsd.value = value === null ? [] : [value];
	}
};

// Filtering logic (faithful port of generateCsdList, without the DOM parts)
const filterCriteria = (list: SpeedyCriterion[] | undefined): SpeedyCriterion[] => {
	const multipleMode = isMultiple.value;
	const sysop = sysopMode.value;
	const result: SpeedyCriterion[] = [];
	for (const raw of list ?? []) {
		const criterion: SpeedyCriterion = {...raw};
		if (multipleMode) {
			if (criterion.hideWhenMultiple) {
				continue;
			}
			if (criterion.hideSubgroupWhenMultiple) {
				criterion.subgroup = null;
			}
		} else {
			if (criterion.hideWhenSingle) {
				continue;
			}
			if (criterion.hideSubgroupWhenSingle) {
				criterion.subgroup = null;
			}
		}
		if (sysop) {
			if (criterion.hideWhenSysop) {
				continue;
			}
			if (criterion.hideSubgroupWhenSysop) {
				criterion.subgroup = null;
			}
		} else {
			if (criterion.hideWhenUser) {
				continue;
			}
			if (criterion.hideSubgroupWhenUser) {
				criterion.subgroup = null;
			}
		}
		if (props.isRedirect && criterion.hideWhenRedirect) {
			continue;
		}
		if (criterion.showInNamespaces && !criterion.showInNamespaces.includes(props.namespace)) {
			continue;
		} else if (criterion.hideInNamespaces && criterion.hideInNamespaces.includes(props.namespace)) {
			continue;
		}
		result.push(criterion);
	}
	return result;
};

const criteriaGroups = computed<CriteriaSection[]>(() => {
	const groups: CriteriaSection[] = [];
	if (sysopMode.value) {
		groups.push({title: uls('自定义理由', '自訂理由'), items: filterCriteria(props.customList)});
	}
	switch (props.namespace) {
		case 0:
			groups.push({title: uls('条目', '條目'), items: filterCriteria(props.articleList)});
			break;
		case 2:
			groups.push({title: uls('用户页', '使用者頁面'), items: filterCriteria(props.userList)});
			break;
		case 3:
			if (props.isIPUserTalk) {
				groups.push({
					title: uls('用户讨论页', '使用者討論頁'),
					items: filterCriteria(props.usertalkList),
				});
			}
			break;
		case 6:
			groups.push({title: uls('文件', '檔案'), items: filterCriteria(props.fileList)});
			break;
		case 14:
			groups.push({title: uls('分类', '分類'), items: filterCriteria(props.categoryList)});
			break;
		case 118:
			groups.push({title: '草稿', items: filterCriteria(props.draftList)});
			break;
		default:
			break;
	}
	// show db-talk on talk pages, but not user talk pages
	if (props.namespace % 2 === 1 && props.namespace !== 3) {
		groups.push({title: uls('讨论页', '討論頁'), items: filterCriteria(props.talkList)});
	}
	// custom rationale lives under general criteria when tagging
	let general = props.generalList;
	if (!sysopMode.value) {
		general = [...props.customList, ...general];
	}
	groups.push({title: uls('常规', '常規'), items: filterCriteria(general)});
	if (props.isRedirect || props.isSysop) {
		groups.push({title: uls('重定向', '重新導向'), items: filterCriteria(props.redirectList)});
	}
	// Skip empty groups (e.g. talk pages currently have no dedicated criteria)
	return groups.filter((group) => group.items.length > 0);
});

// A subgroup is visible for a selected criterion (or while the radio is open)
// In the original quickForm data, some criteria (e.g. G4) carry an array of
// subgroup definitions while others carry a single object.
const subgroupList = (criterion: SpeedyCriterion): SubgroupDef[] => {
	const subgroup = criterion.subgroup;
	if (!subgroup) {
		return [];
	}
	return Array.isArray(subgroup) ? subgroup : [subgroup];
};
const hasSubgroup = (criterion: SpeedyCriterion) => subgroupList(criterion).length > 0;
const subgroupVisible = (criterion: SpeedyCriterion) =>
	hasSubgroup(criterion) && selectedCsd.value.includes(criterion.value);

// Ensure every rendered subgroup has a value entry, mirroring quickForm where
// the form field always exists (empty by default) and empty input is rejected
watch(
	selectedCsd,
	() => {
		for (const group of criteriaGroups.value) {
			for (const criterion of group.items) {
				for (const subgroup of subgroupList(criterion)) {
					if (subgroupValues[subgroup.name] === undefined) {
						subgroupValues[subgroup.name] = '';
					}
				}
			}
		}
	},
	{immediate: true}
);

const getSubgroupValue = (name: string) => subgroupValues[name] ?? '';
const setSubgroupValue = (name: string, value: string | number | null) => {
	subgroupValues[name] = value === null || value === undefined ? '' : String(value);
};

// In radio-click mode, selecting a criterion with a subgroup opens it and
// disables the others until the subgroup's submit button is used
const radioOpen = (criterion: SpeedyCriterion) =>
	props.radioClick && !isMultiple.value && hasSubgroup(criterion) && selectedCsd.value.includes(criterion.value);

const radioDisabled = (criterion: SpeedyCriterion) => {
	if (!props.radioClick || isMultiple.value) {
		return false;
	}
	if (hasSubgroup(criterion)) {
		return false;
	}
	// another criterion has an open subgroup
	return selectedCsd.value.some((value) => {
		return value !== criterion.value && hasSubgroup(findCriterion(value));
	});
};

const findCriterion = (value: string): SpeedyCriterion => {
	for (const group of criteriaGroups.value) {
		const found = group.items.find((item) => item.value === value);
		if (found) {
			return found;
		}
	}
	return {label: value, value};
};

// Selecting a criterion in radio-click mode without a subgroup submits immediately
const onSelectionChange = (value: string, modelValue: string | number | boolean | null) => {
	if (modelValue === value) {
		selectedCsd.value = [value];
		// Faithful port of the sysop single-select linkage: checking a criterion
		// updates the "open user talk page" option from the preference
		if (sysopMode.value && !isMultiple.value) {
			const normalized = twinkle.speedy.normalizeHash[value] ?? value;
			const prefs = twinkle.getPref('openUserTalkPageOnSpeedyDelete');
			openusertalk.value = Array.isArray(prefs) && prefs.includes(normalized);
		}
		if (props.radioClick && !isMultiple.value && !hasSubgroup(findCriterion(value))) {
			submit();
		}
	}
};

const fileHintVisible = computed(() => props.namespace === 6 && !sysopMode.value);

const nonWikitextNotice = computed(() => !sysopMode.value && props.pageContentModel !== 'wikitext');

const primaryAction = computed(() => ({
	label: submitText.value,
	actionType: 'progressive' as const,
	disabled: submitting.value || nonWikitextNotice.value,
}));

const buildParams = (): SpeedyParams => ({
	tagOnly: tagOnly.value,
	values: [...selectedCsd.value],
	subgroups: {...subgroupValues},
	talkpage: talkpage.value,
	redirects: redirects.value,
	delmultiple: delmultiple.value,
	openusertalk: openusertalk.value,
	notify: notify.value,
	blank: blank.value,
	salting: salting.value,
	multiple: multiple.value,
});

const submit = () => {
	if (submitting.value || nonWikitextNotice.value) {
		return;
	}
	if (selectedCsd.value.length === 0) {
		void mw.notify(uls('请选择一个理据！', '請選擇一個理據！'), {
			type: 'warn',
			tag: 'twinklespeedy',
		});
		return;
	}
	submitting.value = true;
	evaluate(buildParams(), statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
};

// The primary action is only used when there is a submit button (non-radioClick,
// or multiple radio-click); the template binds it conditionally.
const usePrimaryAction = computed(() => !props.radioClick || isMultiple.value);
const resolvedPrimaryAction = computed(() => (usePrimaryAction.value ? primaryAction.value : undefined));

const openUserTalkLinkLabel = uls('开启用户讨论页', '開啟使用者討論頁');

// URLs computed in script scope (template cannot access `mw` directly)
const footerLinks = computed(() => [
	{text: uls('快速删除方针', '快速刪除方針'), href: mw.util.getUrl('QW:CSD')},
	{text: uls('速删设置', '速刪設定'), href: mw.util.getUrl('H:TW/PREF#speedy')},
	{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#speedy')},
]);
const specialSdUrl = computed(() => mw.util.getUrl('QW:SPECIALSD'));
const priorLogUrl = computed(() => mw.util.getUrl('Special:Log', {page: mw.config.get('wgPageName')}));

// Labels containing template braces must be assembled in script scope
const saltingTooltip = uls(
	'选取后，快速删除模板后将附带 {{salt}} 标签，以请求执行删除的管理员进行白纸保护，仅在页面创建3次以上才选择此项。',
	'選取後，快速刪除模板後將附帶 {{salt}} 標籤，以請求執行刪除的管理員進行白紙保護，僅在頁面建立3次以上才選擇此項。'
);

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

// Faithful port of Twinkle.speedy.getParameters / .callbacks from here on

const getUserTalkParameters = (normalized: string): Record<string, string> => {
	const utparams: Record<string, string> = {};
	switch (normalized) {
		default:
			break;
	}
	return utparams;
};

// validate subgroups passed in along with the selected criteria
const getParameters = (subgroups: Record<string, string>, values: string[]): Record<string, string>[] | null => {
	const parameters: Record<string, string>[] = [];
	for (const value of values) {
		const currentParams: Record<string, string> = {};
		let redimage;
		switch (value) {
			case 'reason':
				if (subgroups['reason_1'] !== undefined) {
					const dbrationale = subgroups['reason_1'];
					if (!dbrationale || !dbrationale.trim()) {
						void mw.notify(uls('自定义理由：请指定理由。', '自訂理由：請指定理由。'), {
							type: 'warn',
							tag: 'twinklespeedy',
						});
						return null;
					}
					currentParams['1'] = dbrationale;
				}
				break;
			case 'a2':
				if (subgroups['a2_pagename'] !== undefined) {
					const otherpage = subgroups['a2_pagename'];
					if (!otherpage || !otherpage.trim()) {
						void mw.notify(uls('CSD A2：请提供现有条目的名称。', 'CSD A2：請提供現有條目的名稱。'), {
							type: 'warn',
							tag: 'twinklespeedy',
						});
						return null;
					}
					currentParams['pagename'] = otherpage;
				}
				break;
			case 'g4':
				if (subgroups['g4_pagename'] !== undefined) {
					const pagename = subgroups['g4_pagename'];
					if (!pagename || !pagename.trim()) {
						void mw.notify(uls('CSD G4：请提供页面名称。', 'CSD G4：請提供頁面名稱。'), {
							type: 'warn',
							tag: 'twinklespeedy',
						});
						return null;
					}
					currentParams['pagename'] = pagename;
				}
				break;
			case 'g5':
				if (subgroups['g5_rationale'] !== undefined) {
					const g5rationale = subgroups['g5_rationale'];
					if (g5rationale && g5rationale.trim()) {
						currentParams['1'] = g5rationale;
					}
				}
				break;
			case 'g6':
				if (subgroups['g6_rationale'] !== undefined) {
					const g6rationale = subgroups['g6_rationale'];
					if (g6rationale && g6rationale.trim()) {
						currentParams['1'] = g6rationale;
					}
				}
				break;
			case 'f2':
				if (subgroups['f2_filename'] !== undefined) {
					redimage = subgroups['f2_filename'];
					if (!redimage || !redimage.trim()) {
						void mw.notify(uls('CSD F2：请提供另一文件的名称。', 'CSD F2：請提供另一檔案的名稱。'), {
							type: 'warn',
							tag: 'twinklespeedy',
						});
						return null;
					}
					currentParams['filename'] = redimage.replace(
						new RegExp(`^\\s*${Morebits.namespaceRegex(6)}:`, 'i'),
						''
					);
				}
				break;
			case 'r1':
				if (subgroups['r1_type'] !== undefined) {
					const redirtype = subgroups['r1_type'];
					if (redirtype && redirtype !== 'other') {
						currentParams['1'] = redirtype;
					} else if (
						!(subgroups['reason_1'] && String(subgroups['reason_1']).trim()) &&
						redirtype !== 'other'
					) {
						void mw.notify(uls('CSD R1：请选择适用类型。', 'CSD R1：請選擇適用類別。'), {
							type: 'warn',
							tag: 'twinklespeedy',
						});
						return null;
					}
				}
				break;
			case 'r2':
				if (subgroups['r2_type'] !== undefined) {
					const redirtype = subgroups['r2_type'];
					if (redirtype && redirtype !== 'other') {
						currentParams['1'] = redirtype;
					} else if (
						!(subgroups['reason_1'] && String(subgroups['reason_1']).trim()) &&
						redirtype !== 'other'
					) {
						void mw.notify(uls('CSD R2：请选择适用类型。', 'CSD R2：請選擇適用類別。'), {
							type: 'warn',
							tag: 'twinklespeedy',
						});
						return null;
					}
				}
				break;
			default:
				break;
		}
		parameters[parameters.length] = currentParams;
	}
	return parameters;
};

const getTemplateCodeAndParams = (params: SpeedyWorkParams): [code: string, utparams: Record<string, string>] => {
	let code: string;
	let parameters: Record<string, string>;
	if (params.normalizeds.length > 1) {
		code = '{{delete';
		params.utparams = {};
		for (const [index, norm] of params.normalizeds.entries()) {
			if (norm !== 'db') {
				code += `|${norm.toUpperCase()}`;
			}
			parameters = params.templateParams?.[index] ?? {};
			for (const key in parameters) {
				if (typeof parameters[key] === 'string') {
					code += `|${parameters[key]}`;
				}
			}
			params.utparams = {
				...params.utparams,
				...getUserTalkParameters(norm),
			};
		}
		code += '}}';
	} else {
		parameters = params.templateParams?.[0] ?? {};
		code = '{{delete';
		if (params.values[0] !== 'reason') {
			code += `|${params.values[0]}`;
		}
		for (const key in parameters) {
			if (typeof parameters[key] === 'string') {
				code += `|${parameters[key]}`;
			}
		}
		code += '}}';
		params.utparams = getUserTalkParameters(params.normalizeds[0] ?? '');
	}
	return [code, params.utparams];
};

const parseWikitext = (title: string, wikitext: string, callback: (reason: string) => void): void => {
	const query = {
		action: 'parse',
		prop: 'text',
		pst: 'true',
		text: wikitext,
		contentmodel: 'wikitext',
		title,
	};
	const statusIndicator = new Morebits.status(uls('构造删除理由', '構造刪除理由'));
	const api = new Morebits.wiki.api(
		uls('解析删除模板', '解析刪除模板'),
		query,
		(apiObj: MorebitsWikiApi) => {
			const xmlDoc = apiObj.getXML() as unknown as XMLDocument;
			const raw = xmlDoc.querySelector('text')?.childNodes[0]?.nodeValue ?? '';
			const reason = decodeURIComponent($(raw).find('#delete-reason').text().replace(/\+/g, ' '));
			if (reason) {
				statusIndicator.info('完成');
			} else {
				statusIndicator.warn(uls('未能从删除模板生成删除理由', '未能從刪除模板生成刪除理由'));
			}
			callback(reason);
		},
		statusIndicator
	);
	api.post();
};

const sysopCallbacks = {
	main: (params: SpeedyWorkParams): void => {
		let reason;
		// Note: as in the original, this branch can never be taken
		// (normalizeds is empty here, so [0] is never 'db')
		if (!params.normalizeds.length && params.normalizeds[0] === 'db') {
			reason = prompt(uls('输入删除理由：', '輸入刪除理由：'), '');
			sysopCallbacks.deletePage(reason, params);
		} else {
			const [code] = getTemplateCodeAndParams(params);
			parseWikitext(mw.config.get('wgPageName') ?? '', code, (deleteReason) => {
				let reason: string | null = deleteReason;
				if (params.promptForSummary) {
					reason =
						prompt(
							uls(
								'输入删除理由，或单击确定以接受自动生成的：',
								'輸入刪除理由，或點擊確定以接受自動生成的：'
							),
							deleteReason
						) ?? null;
				}
				sysopCallbacks.deletePage(reason, params);
			});
		}
	},
	deletePage: (reason: string | null, params: SpeedyWorkParams): void => {
		const thispage = new Morebits.wiki.page(mw.config.get('wgPageName') ?? '', uls('删除页面', '刪除頁面'));
		if (reason === null) {
			Morebits.status.error(uls('询问理由', '詢問理由'), uls('用户取消操作。', '使用者取消操作。'));
			return;
		} else if (!reason || !reason.trim()) {
			Morebits.status.error(
				uls('询问理由', '詢問理由'),
				uls('你不给我理由…我就…不管了…', '你不給我理由…我就…不管了…')
			);
			return;
		}
		const deleteMain = () => {
			thispage.setEditSummary(reason);
			thispage.setChangeTags(Twinkle.changeTags);
			thispage.setWatchlist(params.watch as string | boolean);
			thispage.deletePage(() => {
				thispage.getStatusElement().info('完成');
				sysopCallbacks.deleteTalk(params);
			});
		};
		// look up initial contributor. If prompting user for deletion reason, just display a link.
		// Otherwise open the talk page directly
		if (params.openUserTalk) {
			thispage.setCallbackParameters(params);
			thispage.lookupCreation(() => {
				sysopCallbacks.openUserTalkPage(thispage);
				deleteMain();
			});
		} else {
			deleteMain();
		}
	},
	deleteTalk: (params: SpeedyWorkParams): void => {
		// delete talk page
		if (
			params.deleteTalkPage &&
			params.normalized !== 'o1' &&
			!document.querySelector('#ca-talk')?.classList.contains('new')
		) {
			const talkpage = new Morebits.wiki.page(
				`${
					(mw.config.get('wgFormattedNamespaces') as Record<number, string>)[
						mw.config.get('wgNamespaceNumber') + 1
					] ?? ''
				}:${mw.config.get('wgTitle')}`,
				uls('删除讨论页', '刪除討論頁')
			);
			talkpage.setEditSummary(`[[QW:CSD#G9|G9]]: 孤立页面：已删除页面“${Morebits.pageNameNorm}”的讨论页`);
			talkpage.setChangeTags(Twinkle.changeTags);
			talkpage.deletePage();
			// this is ugly, but because of the architecture of wiki.api, it is needed
			// (otherwise success/failure messages for the previous action would be suppressed)
			setTimeout(() => {
				sysopCallbacks.deleteRedirects(params);
			}, 1800);
		} else {
			sysopCallbacks.deleteRedirects(params);
		}
	},
	deleteRedirects: (params: SpeedyWorkParams): void => {
		// delete redirects
		if (params.deleteRedirects) {
			const query = {
				action: 'query',
				titles: mw.config.get('wgPageName'),
				prop: 'redirects',
				rdlimit: 5000, // 500 is max for normal users, 5000 for bots and sysops
			};
			const qiuwen_api = new Morebits.wiki.api(
				uls('获取重定向列表…', '取得重新導向列表…'),
				query,
				sysopCallbacks.deleteRedirectsMain as unknown as (apiobj: MorebitsWikiApi) => void,
				new Morebits.status(uls('删除重定向', '刪除重新導向'))
			) as MorebitsWikiApi & {params: SpeedyWorkParams};
			qiuwen_api.params = params;
			qiuwen_api.post();
		}
		// prompt for protect on G7
		let $link;
		let $bigtext;
		if (params.normalized === 'g7') {
			$link = $('<a>')
				.attr('href', '#')
				.text(uls('单击这里施行保护', '點擊這裡施行保護'))
				.css({
					'font-size': '125%',
					'font-weight': 'bold',
				})
				.on('click', () => {
					Morebits.wiki.actionCompleted.redirect = null;
					open.value = false; // close the dialog
					mw.config.set('wgArticleId', 0);
					Twinkle.protect?.callback();
				});
			$bigtext = $('<span>')
				.css({
					'font-size': '125%',
					'font-weight': 'bold',
				})
				.text(uls('白纸保护该页', '白紙保護該頁'));
			Morebits.status.info($bigtext[0] as unknown as string, $link[0] as unknown as string);
		}
		// promote Unlink tool
		if (mw.config.get('wgNamespaceNumber') === 6) {
			$link = $('<a>')
				.attr('href', '#')
				.text(uls('单击这里前往取消链入工具', '點擊這裡前往取消連入工具'))
				.css({
					'font-weight': 'bold',
				})
				.on('click', () => {
					Morebits.wiki.actionCompleted.redirect = null;
					open.value = false; // close the dialog
					Twinkle.unlink?.callback(
						`${uls('取消对已删除文件 ', '取消對已刪除檔案 ') + Morebits.pageNameNorm} 的使用`
					);
				});
			$bigtext = $('<span>')
				.css({
					'font-weight': 'bold',
				})
				.text(uls('取消对已删除文件的使用', '取消對已刪除檔案的使用'));
			Morebits.status.info($bigtext[0] as unknown as string, $link[0] as unknown as string);
		} else {
			$link = $('<a>')
				.attr('href', '#')
				.text(uls('单击这里前往取消链入工具', '點擊這裡前往取消連入工具'))
				.css({
					'font-weight': 'bold',
				})
				.on('click', () => {
					Morebits.wiki.actionCompleted.redirect = null;
					open.value = false; // close the dialog
					Twinkle.unlink?.callback(
						uls('取消对已删除页面 ', '取消對已刪除頁面 ') +
							Morebits.pageNameNorm +
							uls(' 的链接', ' 的連結')
					);
				});
			$bigtext = $('<span>').text(uls('取消对已删除页面的链接', '取消對已刪除頁面的連結')).css({
				'font-weight': 'bold',
			});
			Morebits.status.info($bigtext[0] as unknown as string, $link[0] as unknown as string);
		}
		$link = $('<a>')
			.attr('href', mw.util.getUrl('Special:RandomInCategory/快速删除候选'))
			.text(uls('单击前往下一个快速删除候选', '點擊前往下一個快速刪除候選'));
		Morebits.status.info('工具', $link[0] as unknown as string);
	},
	openUserTalkPage: (pageobj: MorebitsWikiPage): void => {
		pageobj.getStatusElement().unlink(); // don't need it anymore
		const user = pageobj.getCreator();
		const params = pageobj.getCallbackParameters() as SpeedyWorkParams;
		const query = {
			action: 'edit',
			preview: 'yes',
			vanarticle: Morebits.pageNameNorm,
		};
		const title = `User talk:${user}`;
		if (
			params.normalized === 'db' ||
			Twinkle.getPref('promptForSpeedyDeletionSummary').includes(params.normalized ?? '')
		) {
			// provide a link to the user talk page
			const $link = $('<a>')
				.attr({
					href: mw.util.getUrl(title, query),
					target: '_blank',
					rel: 'noopener noreferrer',
				})
				.css({
					'font-size': '125%',
					'font-weight': 'bold',
				})
				.text(uls('点此打开User talk:', '點此打開User talk:') + user);
			const $bigtext = $('<span>')
				.css({
					'font-size': '125%',
					'font-weight': 'bold',
				})
				.text(uls('通知页面创建者', '通知頁面建立者'));
			Morebits.status.info($bigtext[0] as unknown as string, $link[0] as unknown as string);
		} else {
			// open the initial contributor's talk page
			const statusIndicator = new Morebits.status(
				uls('打开用户', '打開使用者') + user + uls('的讨论页编辑窗口', '的討論頁編輯視窗'),
				uls('打开中…', '打開中…')
			);
			switch (Twinkle.getPref('userTalkPageMode')) {
				case 'tab':
					window.open(mw.util.getUrl(title, query), '_blank', 'noopener,noreferrer');
					break;
				case 'blank':
					window.open(
						mw.util.getUrl(title, query),
						'_blank',
						'noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
					);
					break;
				/* case 'window': */
				/* falls through */
				default:
					window.open(
						mw.util.getUrl(title, query),
						window.name === 'twinklewarnwindow' ? '_blank' : 'twinklewarnwindow',
						window.name === 'twinklewarnwindow'
							? 'noopener,noreferrer,'
							: '' +
									'location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
					);
					break;
			}
			statusIndicator.info('完成');
		}
	},
	deleteRedirectsMain: (apiobj: MorebitsWikiApi & {params: SpeedyWorkParams}): void => {
		const xmlDoc = apiobj.getXML() as unknown as XMLDocument;
		const $snapshot = $(xmlDoc).find('redirects rd');
		const total = $snapshot.length;
		const statusIndicator = apiobj.statelem;
		if (!total) {
			statusIndicator.info(uls('未发现重定向', '未發現重新導向'));
			return;
		}
		statusIndicator.status('0%');
		let current = 0;
		const onsuccess = (pageobj: MorebitsWikiPage): void => {
			const now = `${Math.floor((100 * ++current) / total)}%`;
			statusIndicator.update(now);
			pageobj.getStatusElement().unlink();
			if (current >= total) {
				statusIndicator.info(`${now}（完成）`);
				Morebits.wiki.removeCheckpoint();
			}
		};
		Morebits.wiki.addCheckpoint();
		$snapshot.each((_key: number, value: HTMLElement) => {
			const title = $(value).attr('title') ?? '';
			const page = new Morebits.wiki.page(title, `${uls('删除重定向 "', '刪除重新導向 "') + title}"`);
			page.setEditSummary(`[[QW:CSD#G9|G9]]: 孤立页面：重定向到已删除页面“${Morebits.pageNameNorm}”`);
			page.setChangeTags(Twinkle.changeTags);
			page.deletePage(onsuccess);
		});
	},
};

const userCallbacks = {
	main: (pageobj: MorebitsWikiPage): void => {
		const statelem = pageobj.getStatusElement();
		if (!pageobj.exists()) {
			statelem.error(uls('页面不存在，可能已被删除', '頁面不存在，可能已被刪除'));
			return;
		}
		let text = pageobj.getPageText() ?? '';
		const params = pageobj.getCallbackParameters() as SpeedyWorkParams;
		statelem.status(uls('检查页面已有标记…', '檢查頁面已有標記…'));
		// check for existing deletion tags
		const textNoSd = text.replace(
			/\{\{\s*(db(-\w*)?|d|delete|deletebecause|speedy|csd|速刪|速删|快删|快刪)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
			''
		);
		if (
			text !== textNoSd &&
			!confirm(
				uls('在页面上找到快速删除模板，要移除并加入新的吗？', '在頁面上找到快速刪除模板，要移除並加入新的嗎？')
			)
		) {
			statelem.error(uls('快速删除模板已被置于页面中。', '快速刪除模板已被置於頁面中。'));
			return;
		}
		text = textNoSd;
		const copyvio = /(?:\{\{\s*(copyvio|侵权|侵權)[^{}]*?\}\})/i.exec(text);
		if (
			copyvio &&
			!confirm(
				uls(
					'著作权验证模板已被置于页面中，您是否仍想加入一个快速删除模板？',
					'著作權驗證模板已被置於頁面中，您是否仍想加入一個快速刪除模板？'
				)
			)
		) {
			statelem.error(uls('页面中已有著作权验证模板。', '頁面中已有著作權驗證模板。'));
			return;
		}
		const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
		if (
			xfd &&
			!confirm(
				uls('删除相关模板{{', '刪除相關模板{{') +
					(xfd[1] ?? '') +
					uls(
						'}}已被置于页面中，您是否仍想加入一个快速删除模板？',
						'}}已被置於頁面中，您是否仍想加入一個快速刪除模板？'
					)
			)
		) {
			statelem.error(uls('页面已被提交至存废讨论。', '頁面已被提交至存廢討論。'));
			return;
		}
		// given the params, builds the template and also adds the user talk page parameters to the params that were passed in
		// returns => [<string> wikitext, <object> utparams]
		const buildData = getTemplateCodeAndParams(params);
		let [code] = buildData;
		[, params.utparams] = buildData;
		const thispage = new Morebits.wiki.page(mw.config.get('wgPageName'));
		// patrol the page, if reached from Special:NewPages
		if (Twinkle.getPref('markSpeedyPagesAsPatrolled') === true) {
			thispage.patrol();
		}
		// Wrap SD template in noinclude tags if we are in template space.
		// Won't work with userboxes in userspace, or any other transcluded page outside template space
		if (mw.config.get('wgNamespaceNumber') === 10) {
			// Template:
			code = `<noinclude>${code}</noinclude>`;
		}
		// Remove tags that become superfluous with this action
		text = text.replace(
			/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g,
			''
		);
		if (mw.config.get('wgNamespaceNumber') === 6) {
			// remove "move to Commons" tag - deletion-tagged files cannot be moved to Commons
			text = text.replace(
				/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (qiuwen share|wikimedia commons)|copy to (qiuwen share|wikimedia commons))[^}]*\}\}/gi,
				''
			);
		}
		if (params.requestsalt) {
			code = `{{salt}}\n${code}`;
		}
		const firstNorm = params.normalizeds[0] ?? '';
		// Generate edit summary for edit
		let editsummary;
		if (params.normalizeds.length > 1) {
			editsummary = uls('请求快速删除（', '請求快速刪除（');
			for (const norm of params.normalizeds) {
				if (norm !== 'db') {
					editsummary += `[[QW:CSD#${norm.toUpperCase()}|CSD ${norm.toUpperCase()}]]、`;
				}
			}
			editsummary = editsummary.slice(0, Math.max(0, editsummary.length - 1)); // remove trailing comma
			editsummary += '）';
		} else if (firstNorm === 'db') {
			editsummary =
				uls('请求[[QW:CSD|快速删除]]：', '請求[[QW:CSD|快速刪除]]：') +
				(params.templateParams?.[0]?.['1'] ?? '');
		} else {
			editsummary = `${uls('请求快速删除', '請求快速刪除')}（[[QW:CSD#${firstNorm.toUpperCase()}|CSD ${firstNorm.toUpperCase()}]]）`;
			if (firstNorm === 'g6' && params.templateParams?.[0]?.['1']) {
				editsummary += '：'.concat(params.templateParams[0]['1']);
			}
		}
		// Blank attack pages
		if (params.blank) {
			text = code;
		} else {
			// Insert tag after short description or any hatnotes
			const qiuwen_page = new Morebits.wikitext.page(text);
			text = qiuwen_page.insertAfterTemplates(`${code}\n`, Twinkle.hatnoteRegex).getText();
		}
		pageobj.setPageText(text);
		pageobj.setEditSummary(editsummary);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(params.watch as string | boolean);
		pageobj.save(userCallbacks.tagComplete);
	},
	tagComplete: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as SpeedyWorkParams;
		// Notification to first contributor
		if (params.usertalk) {
			const callback = (pageObj: MorebitsWikiPage): void => {
				const creator = pageObj.getCreator();
				let initialContrib: string | null = creator;
				// disallow warning yourself
				if (initialContrib === mw.config.get('wgUserName')) {
					Morebits.status.warn(
						`您（${initialContrib}${uls('）创建了该页，跳过通知', '）建立了該頁，跳過通知')}`
					);
					initialContrib = null;
					// don't notify users when their user talk page is nominated
				} else if (initialContrib === mw.config.get('wgTitle') && mw.config.get('wgNamespaceNumber') === 3) {
					Morebits.status.warn(
						uls('通知页面创建者：用户创建了自己的讨论页', '通知頁面建立者：使用者建立了自己的討論頁')
					);
					initialContrib = null;
					// quick hack to prevent excessive unwanted notifications. Should actually be configurable on recipient page...
				} else if (initialContrib === 'A2093064-bot' && params.normalizeds[0] === 'g15') {
					Morebits.status.warn(
						uls('通知页面创建者：由机器人创建，跳过通知', '通知頁面建立者：由機器人建立，跳過通知')
					);
					initialContrib = null;
				} else {
					initialContrib = creator ?? '';
					const talkPageName = `User talk:${initialContrib}`;
					const usertalkpage = new Morebits.wiki.page(
						talkPageName,
						`${uls('通知页面创建者（', '通知頁面建立者（') + initialContrib}）`
					);
					let notifytext;
					notifytext = '\n{{'.concat('subst:', `db-notice|target=${Morebits.pageNameNorm}`);
					notifytext += "|nowelcome=yes'}}——~~".concat('~~');
					let editsummary = '通知：';
					if (params.normalizeds.includes('g3')) {
						editsummary += '一攻击性页面';
					} else {
						// no article name in summary for G10 deletions
						editsummary += `页面[[${Morebits.pageNameNorm}]]`;
					}
					editsummary += '快速删除提名';
					usertalkpage.setAppendText(notifytext);
					usertalkpage.setEditSummary(editsummary);
					usertalkpage.setChangeTags(Twinkle.changeTags);
					usertalkpage.setCreateOption('recreate');
					usertalkpage.setFollowRedirect(true, false);
					usertalkpage.append();
				}
				// add this nomination to the user's userspace log, if the user has enabled it
				if (params.lognomination) {
					Twinkle.speedy?.callbacks.user.addToLog(params, initialContrib);
				}
			};
			const thispage = new Morebits.wiki.page(Morebits.pageNameNorm);
			thispage.lookupCreation(callback);
			// or, if not notifying, add this nomination to the user's userspace log without the initial contributor's name
		} else if (params.lognomination) {
			Twinkle.speedy?.callbacks.user.addToLog(params, null);
		}
	},
};

const evaluate = (params: SpeedyParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	const values = params.values;
	const normalizeds = values.map((value) => {
		return twinkle.speedy.normalizeHash[value] ?? value;
	});
	let watchPage: string | boolean | undefined;
	if (params.tagOnly) {
		// tag the page only (user mode, or sysop "tag only" mode)
		watchPage = false;
		for (const norm of normalizeds) {
			if (Twinkle.getPref('watchSpeedyPages').includes(norm)) {
				watchPage = Twinkle.getPref('watchSpeedyExpiry');
			}
		}
		let notifyuser = false;
		if (params.notify) {
			for (const norm of normalizeds) {
				if (Twinkle.getPref('notifyUserOnSpeedyDeletionNomination').includes(norm)) {
					notifyuser = true;
				}
			}
		}
		let csdlog = false;
		if (Twinkle.getPref('logSpeedyNominations') === true) {
			for (const norm of normalizeds) {
				if (!Twinkle.getPref('noLogOnSpeedyNomination').includes(norm)) {
					csdlog = true;
				}
			}
		}
		const userParams: SpeedyWorkParams = {
			values,
			normalizeds,
			watch: watchPage,
			usertalk: notifyuser,
			lognomination: csdlog,
			blank: params.blank,
			requestsalt: params.salting,
			templateParams: getParameters(params.subgroups, values),
		};
		if (!userParams.templateParams) {
			if (restore) {
				restore();
			}
			return;
		}
		Morebits.status.init(statusContainer);
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = uls('标记完成', '標記完成');
		const qiuwen_page = new Morebits.wiki.page(mw.config.get('wgPageName'), uls('标记页面', '標記頁面'));
		qiuwen_page.setCallbackParameters(userParams);
		qiuwen_page.load(userCallbacks.main);
		return;
	}
	// sysop delete mode
	// analyse each criterion to determine whether to watch the page, prompt for summary, or open user talk page
	let promptForSummary: boolean | undefined;
	for (const norm of normalizeds) {
		if (Twinkle.getPref('watchSpeedyPages').includes(norm)) {
			watchPage = Twinkle.getPref('watchSpeedyExpiry');
		}
		if (Twinkle.getPref('promptForSpeedyDeletionSummary').includes(norm)) {
			promptForSummary = true;
		}
	}
	const sysopParams: SpeedyWorkParams = {
		values,
		normalizeds,
		watch: watchPage,
		deleteTalkPage: params.talkpage,
		deleteRedirects: params.redirects,
		openUserTalk: params.openusertalk,
		promptForSummary,
		templateParams: getParameters(params.subgroups, values),
	};
	if (!sysopParams.templateParams) {
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	sysopCallbacks.main(sysopParams);
};
</script>

<template>
	<tw-dialog
		:open="open"
		:title="uls('选择快速删除理由', '選擇快速刪除理由')"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="resolvedPrimaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<template v-if="isSysop">
			<cdx-checkbox
				:model-value="tagOnly"
				:title="uls('若您只想标记此页面而不是将其删除', '若您只想標記此頁面而不是將其刪除')"
				@update:model-value="onTagOnlyChange"
			>
				{{ uls('只标记，不删除', '只標記，不刪除') }}
			</cdx-checkbox>
		</template>

		<template v-if="sysopMode">
			<h4 class="tw-speedy-header">{{ uls('删除相关选项', '刪除相關選項') }}</h4>
			<cdx-checkbox
				v-if="namespace % 2 === 0 && namespace !== 2"
				v-model="talkpage"
				:title="uls('删除时附带删除此页面的讨论页。', '刪除時附帶刪除此頁面的討論頁。')"
			>
				{{ uls('删除讨论页', '刪除討論頁') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="redirects" :title="uls('删除到此页的重定向。', '刪除到此頁的重新導向。')">
				{{ uls('删除重定向', '刪除重新導向') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="delmultiple"
				:title="uls('您可选择应用于该页的多个理由。', '您可選擇應用於該頁的多個理由。')"
			>
				{{ uls('应用多个理由删除', '應用多個理由刪除') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="openusertalk" :title="openUserTalkLinkLabel">
				{{ openUserTalkLinkLabel }}
			</cdx-checkbox>
		</template>

		<template v-else>
			<h4 class="tw-speedy-header">{{ uls('标记相关选项', '標記相關選項') }}</h4>
			<cdx-checkbox
				v-model="notify"
				:title="
					uls(
						'一个通知模板将会被加入创建者的讨论页，若您启用了该理据的通知。',
						'一個通知模板將會被加入建立者的討論頁，若您啟用了該理據的通知。'
					)
				"
			>
				{{ uls('如可能，通知创建者', '如可能，通知建立者') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="blank"
				:title="
					uls(
						'在标记模板前，先清空页面，适用于严重破坏或负面生者传记等。',
						'在標記模板前，先清空頁面，適用於嚴重破壞或負面生者傳記等。'
					)
				"
			>
				{{ uls('清空页面', '清空頁面') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="salting" :title="saltingTooltip">
				{{ uls('同时标记以请求白纸保护', '同時標記以請求白紙保護') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="multiple"
				:title="uls('您可选择应用于该页的多个理由。', '您可選擇應用於該頁的多個理由。')"
			>
				{{ uls('应用多个理由', '應用多個理由') }}
			</cdx-checkbox>
		</template>

		<div v-if="priorCountText" class="tw-speedy-prior" :style="{color: priorCountColor}">
			{{ priorCountText }}
			<a :href="priorLogUrl" target="_blank" rel="noopener noreferrer">
				{{ uls('（日志）', '（日誌）') }}
			</a>
		</div>

		<template v-if="radioClick && isMultiple">
			<div>{{ uls('当选择完成后，单击：', '當選擇完成後，點擊：') }}</div>
			<cdx-button action="progressive" weight="primary" @click="submit">
				{{ submitText }}
			</cdx-button>
		</template>

		<template v-for="group in criteriaGroups" :key="group.title">
			<h4 class="tw-speedy-header">{{ group.title }}</h4>
			<template v-for="criterion in group.items" :key="criterion.value">
				<cdx-radio
					v-if="!isMultiple"
					:model-value="selectedCsd[0] ?? ''"
					:input-value="criterion.value"
					name="tw-speedy-csd"
					:disabled="radioDisabled(criterion)"
					@update:model-value="onSelectionChange(criterion.value, $event)"
				>
					<span :class="{'tw-speedy-g7': criterion.value === 'g7' && enlargeG7}">
						{{ criterion.label }}
					</span>
				</cdx-radio>
				<cdx-checkbox
					v-else
					:model-value="selectedCsd"
					:input-value="criterion.value"
					name="tw-speedy-csd"
					@update:model-value="toggleSelection(criterion.value, $event)"
				>
					<span :class="{'tw-speedy-g7': criterion.value === 'g7' && enlargeG7}">
						{{ criterion.label }}
					</span>
				</cdx-checkbox>
				<div v-if="criterion.tooltip" class="tw-speedy-tooltip">{{ criterion.tooltip }}</div>
				<div v-if="subgroupVisible(criterion)" class="tw-speedy-subgroup">
					<template v-for="subgroup in subgroupList(criterion)" :key="subgroup.name">
						<template v-if="subgroup.type === 'input'">
							<label :for="`tw-speedy-${subgroup.name}`">{{ subgroup.label }}</label>
							<cdx-text-input
								:id="`tw-speedy-${subgroup.name}`"
								:model-value="getSubgroupValue(subgroup.name)"
								@update:model-value="setSubgroupValue(subgroup.name, $event)"
							/>
						</template>
						<template v-else>
							<label :for="`tw-speedy-${subgroup.name}`">{{ subgroup.label }}</label>
							<cdx-select
								:id="`tw-speedy-${subgroup.name}`"
								:selected="getSubgroupValue(subgroup.name)"
								:menu-items="
									(subgroup.list ?? []).map((item): MenuItemData => ({
										value: item.value,
										label: item.label,
									}))
								"
								@update:selected="setSubgroupValue(subgroup.name, $event)"
							/>
						</template>
					</template>
					<cdx-button v-if="radioOpen(criterion)" action="progressive" weight="primary" @click="submit">
						{{ submitText }}
					</cdx-button>
				</div>
			</template>
		</template>

		<div v-if="fileHintVisible" class="tw-speedy-hint">
			{{
				uls(
					'标记CSD F1、F3、F5，请使用Twinkle的“图权”功能。',
					'標記CSD F1、F3、F5，請使用Twinkle的「圖權」功能。'
				)
			}}
		</div>
		<div v-if="!sysopMode" class="tw-speedy-hint">
			{{ uls('提报侵权页面，请使用Twinkle的“侵权”功能。', '提報侵權頁面，請使用Twinkle的「侵權」功能。') }}
		</div>
		<div v-if="nonWikitextNotice" class="tw-speedy-hint">
			{{
				uls('Twinkle不支持在页面内容模型为', 'Twinkle不支援在頁面內容模型為') +
				pageContentModel +
				uls('的页面上挂上快速删除模板，请参见', '的頁面上掛上快速刪除模板，請參見')
			}}
			<a :href="specialSdUrl" target="_blank" rel="noopener noreferrer">
				{{ uls('手动放置模板时的注意事项', '手動放置模板時的注意事項') }}
			</a>
			。
		</div>

		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-speedy-header {
	border-bottom: 1px solid #808080;
	margin: 0.8em 0 0.4em;
}

.tw-speedy-tooltip {
	font-size: 85%;
	color: var(--color-subtle, #54595d);
	margin-left: 1.75em;
}

.tw-speedy-subgroup {
	margin-left: 1.75em;
	margin-bottom: 0.6em;
	display: flex;
	flex-direction: column;
	gap: 0.3em;

	label {
		font-weight: bold;
	}
}

.tw-speedy-prior {
	margin-top: 0.6em;
}

.tw-speedy-hint {
	margin-top: 0.6em;
	font-size: 90%;
}

.tw-speedy-g7 {
	font-size: 1.5em;
	line-height: 1.5em;
}
</style>
