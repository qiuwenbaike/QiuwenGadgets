<script setup lang="ts">
import {
	CdxButton,
	CdxField,
	CdxLookup,
	CdxSelect,
	CdxTextArea,
	CdxTextInput,
	type MenuItemData,
} from '@wikimedia/codex';
import {Morebits, type MorebitsDate, type MorebitsWikiPage, type MorebitsWikiPreview} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

declare const Twinkle: {
	changeTags: string[];
	getPref: {
		(key: 'autolevelStaleDays'): string;
		(key: 'watchWarnings'): string | boolean;
		(key: string): string | boolean;
	};
};

interface SubEntry {
	value: string;
	label: string;
	messageData: unknown;
}

interface SubGroup {
	key: string | null;
	entries: SubEntry[];
}

/** Shape of a single warning message entry (level1/level2 or singlet). */
interface MessageItem {
	label?: string;
	summary?: string;
	heading?: string;
	suppressArticleInSummary?: boolean;
	[key: string]: unknown;
}

interface WarnParams {
	main_group: string;
	sub_group: string;
	article: string;
	reason: string;
	messageData: MessageItem | undefined;
}

/** Notice data resolved by autolevel parsing, rendered by the dialog. */
interface AutolevelNotice {
	level: number;
	latestType: string;
	showArv: boolean;
	username: string;
	groups: SubGroup[];
}

const props = defineProps<{
	title: string;
	/** The relevant user name of the current dialog. */
	relevantUserName: string;
	mainGroupOptions: {
		value: string;
		label: string;
	}[];
	initialMainGroup: string;
	initialArticle: string;
	messages: {
		levels: {
			category: string;
			list: Record<string, unknown>;
		}[];
		singlenotice: Record<string, unknown>;
		singlewarn: Record<string, unknown>;
	};
	customWarningList: {
		value: string;
		label: string;
	}[];
	notice: {
		text: string;
	};
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	openArv: [];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const mainGroup = ref(props.initialMainGroup);
const subGroup = ref<string | null>(null);
const article = ref(props.initialArticle);
const reason = ref('');
const previewBox = ref<HTMLElement | null>(null);
const statusRef = ref<TwStatusExposed | null>(null);
const subMessageData = ref<Record<string, MessageItem>>({});
// Autolevel notice data (resolved when the autolevel group is selected)
const autolevelInfo = ref<AutolevelNotice | null>(null);
// Cached user talk page object, shared by autolevel preview/submission
let talkpageObj: MorebitsWikiPage | null = null;
// Holds the Morebits preview instance for the current dialog
let previewer: MorebitsWikiPreview | null = null;
const lookupInput = ref('');

const notLinkedArticle: Record<string, string> = {
	'uw-bite': uls('被“咬到”的用户（不含User:） ', '被「咬到」的使用者（不含User:） '),
	'uw-aiv': uls('可选输入被警告的用户名（不含User:） ', '可選輸入被警告的使用者名稱（不含User:） '),
};

const prevArticle = ref<string | null>(null);

const mainGroupItems = computed<MenuItemData[]>(() =>
	props.mainGroupOptions.map((option) => ({value: option.value, label: option.label}))
);

// Faithful port of Twinkle.warn.callback.change_category's createEntries
const createEntries = (contents: Record<string, unknown>, val: string): SubEntry[] => {
	const level = val.replace(/^\D+/g, '');
	const entries: SubEntry[] = [];
	for (const [itemKey, itemPropertiesRaw] of Object.entries(contents)) {
		const itemProperties = itemPropertiesRaw as Record<string, unknown>;
		// Skip if the current template doesn't have a version for the current level
		if (level && !itemProperties[val]) {
			continue;
		}
		const key = typeof itemKey === 'string' ? itemKey : String((itemProperties as {value: string}).value);
		const template = key + level;
		const levelData = level ? (itemProperties[val] as {label: string}) : null;
		entries.push({
			value: template,
			label: `{{${template}}}: ${levelData ? levelData.label : String(itemProperties['label'] ?? '')}`,
			messageData: itemProperties,
		});
	}
	return entries;
};

const subGroups = computed<SubGroup[]>(() => {
	switch (mainGroup.value) {
		case 'singlenotice':
		case 'singlewarn':
			return [{key: null, entries: createEntries(props.messages[mainGroup.value], mainGroup.value)}];
		case 'singlecombined': {
			const unSortedSinglets = {
				...props.messages.singlenotice,
				...props.messages.singlewarn,
			};
			const sortedSingletMessages: Record<string, unknown> = {};
			for (const key of Object.keys(unSortedSinglets).sort()) {
				sortedSingletMessages[key] = unSortedSinglets[key];
			}
			return [{key: null, entries: createEntries(sortedSingletMessages, mainGroup.value)}];
		}
		case 'custom':
			return [
				{
					key: null,
					entries: props.customWarningList.map((item) => ({
						value: item.value,
						label: item.label,
						messageData: item,
					})),
				},
			];
		case 'kitchensink': {
			const groups: SubGroup[] = [];
			for (const lvl of ['level1', 'level2']) {
				for (const levelGroup of props.messages.levels) {
					groups.push({
						key: levelGroup.category,
						entries: createEntries(levelGroup.list, lvl),
					});
				}
			}
			groups.push(
				{
					key: null,
					entries: createEntries(props.messages.singlenotice, 'singlenotice'),
				},
				{
					key: null,
					entries: createEntries(props.messages.singlewarn, 'singlewarn'),
				}
			);
			if (props.customWarningList.length) {
				groups.push({
					key: null,
					entries: props.customWarningList.map((item) => ({
						value: item.value,
						label: item.label,
						messageData: item,
					})),
				});
			}
			return groups;
		}
		case 'level1':
		case 'level2':
			return props.messages.levels.map((levelGroup) => ({
				key: levelGroup.category,
				entries: createEntries(levelGroup.list, mainGroup.value),
			}));
		case 'autolevel':
			return autolevelInfo.value?.groups ?? [];
		default:
			return [];
	}
});

// Keep the messageData mapping in sync with the generated entries
watch(
	subGroups,
	(groups) => {
		const mapping: Record<string, MessageItem> = {};
		for (const group of groups) {
			for (const entry of group.entries) {
				mapping[entry.value] = entry.messageData as MessageItem;
			}
		}
		subMessageData.value = mapping;
	},
	{immediate: true, deep: true}
);

const lookupMenuItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of subGroups.value.entries()) {
		if (group.key) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.key,
				disabled: true,
			});
		}
		for (const entry of group.entries) {
			items.push({
				value: entry.value,
				label: entry.label,
			});
		}
	}
	return items;
});

// CdxLookup on this Codex version does not filter its menu itself; filter
// here so fuzzy search works. Disabled group headers are dropped while a
// query is active.
const filteredLookupItems = computed<MenuItemData[]>(() => {
	const query = lookupInput.value.trim().toLowerCase();
	if (!query) {
		return lookupMenuItems.value;
	}
	return lookupMenuItems.value.filter((item) => {
		return !item.disabled && String(item.label).toLowerCase().includes(query);
	});
});

// Faithful port of Twinkle.warn.callback.change_subcategory's article-label switching
watch(subGroup, (value) => {
	if (!['singlenotice', 'singlewarn', 'singlecombined', 'kitchensink'].includes(mainGroup.value)) {
		return;
	}
	if (value && notLinkedArticle[value]) {
		if (prevArticle.value === null) {
			prevArticle.value = article.value;
		}
		article.value = '';
	} else if (prevArticle.value !== null) {
		article.value = prevArticle.value;
		prevArticle.value = null;
	}
});

const articleLabel = computed(() => {
	if (subGroup.value && ['singlenotice', 'singlewarn', 'singlecombined', 'kitchensink'].includes(mainGroup.value)) {
		return notLinkedArticle[subGroup.value] ?? uls('页面链接', '頁面連結');
	}
	return uls('页面链接', '頁面連結');
});

watch(mainGroup, (value) => {
	const oldSub = subGroup.value ?? '';
	subGroup.value = null;
	lookupInput.value = '';
	if (value === 'autolevel') {
		loadTalkPageForAutolevel(oldSub);
	}
});

const buildParams = (): WarnParams => ({
	main_group: mainGroup.value,
	sub_group: subGroup.value ?? '',
	article: article.value,
	reason: reason.value,
	messageData: subGroup.value ? subMessageData.value[subGroup.value] : undefined,
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const onPreview = () => {
	preview(buildParams(), previewBox.value);
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

// Faithful port of Twinkle.warn.callbacks from here on

const getWarningWikitext = (
	templateName: string,
	article: string,
	reason: string,
	// Present in the original signature but never used there either
	_isCustom: boolean,
	noSign?: boolean
): string => {
	let text = '{{'.concat('subst:', templateName);
	// add linked article for user warnings
	if (article) {
		text += `|1=${article}`;
	}
	if (reason) {
		// add extra message
		text += `|2=${reason}`;
	}
	text += '|subst='.concat('subst:');
	if (!noSign) {
		text += '|sig=~~'.concat('~~');
	}
	text += '}}';
	return text;
};

const showPreview = (params: WarnParams, box: HTMLElement | null, templatename?: string): void => {
	// Provided on autolevel, not otherwise
	templatename ||= params.sub_group;
	const linkedarticle = params.article;
	const templatetext = getWarningWikitext(templatename, linkedarticle, params.reason, params.main_group === 'custom');
	if (previewer) {
		previewer.closePreview();
	}
	// The preview box is always rendered by the dialog
	previewer = new Morebits.wiki.preview(box as HTMLElement);
	previewer.beginRender(templatetext, `User_talk:${props.relevantUserName}`); // Force wikitext/correct username
};

/**
 * Used in the main and autolevel loops to determine when to warn
 * about excessively recent, stale, or identical warnings.
 *
 * @param wikitext The text of a user's talk page, from getPageText()
 * @returns Latest contains most recent warning and date; history lists all
 * prior warnings.
 */
const dateProcessing = (
	wikitext: string
): [latest: {date: MorebitsDate; type: string}, history: Record<string, MorebitsDate>] => {
	const history_re =
		/<!--\s?Template:([uU]w-.*?)\s?-->.*?(\d{4})年(\d{1,2})月(\d{1,2})日 \([日一二三四五六]\) (\d{1,2}):(\d{1,2}) \(CST\)/g;
	const history: Record<string, MorebitsDate> = {};
	const latest = {
		date: new Morebits.date(0),
		type: '',
	};
	let current;
	while ((current = history_re.exec(wikitext)) !== null) {
		const template = current[1] ?? '';
		const current_date = new Morebits.date(
			`${current[2] ?? ''}-${current[3] ?? ''}-${current[4] ?? ''} ${current[5] ?? ''}:${current[6] ?? ''} (CST)`
		);
		const priorDate = history[template];
		if (priorDate === undefined || priorDate.isBefore(current_date)) {
			history[template] = current_date;
		}
		if (!latest.date.isAfter(current_date)) {
			latest.date = current_date;
			latest.type = template;
		}
	}
	return [latest, history];
};

/**
 * Main loop for deciding what the level should increment to. Most of
 * this is really just error catching and updating the subsequent data.
 * May produce up to two notices; when no status element is provided, the
 * notice data is returned for the dialog to render.
 *
 * @param wikitext The text of a user's talk page, from getPageText() (required)
 * @param params Params object: sub_group is the template (required);
 * article is the user-provided article (form.article) used to link ARV on recent level2 warnings;
 * messageData is only necessary if getting the full template, as it's
 * used to ensure a valid template of that level exists
 * @param latest First element of the array returned from
 * dateProcessing. Provided here rather than processed within to avoid
 * repeated call to dateProcessing
 * @param date Date from which staleness is determined
 * @param statelem Status element, only used for handling error in final execution
 */
const autolevelParse = (
	_wikitext: string,
	params: WarnParams,
	latest: {date: MorebitsDate; type: string},
	date?: Date | MorebitsDate,
	statelem?: ReturnType<MorebitsWikiPage['getStatusElement']>
): {level: number; template: string; notice: AutolevelNotice | null} | undefined => {
	let noticeData: {level: number; latestType: string; showArv: boolean; username: string} | null = null;
	let level: number | undefined; // undefined rather than '' means the isNaN below will return true
	if (/\d?$/.test(latest.type)) {
		// level1-2
		level = Number.parseInt(latest.type.replace(/.*(\d)?$/, '$1'), 10);
	} else if (latest.type) {
		level = 1; // singlenotice or not found
	}
	if (level === undefined || Number.isNaN(level)) {
		// No prior warnings found, this is the first
		level = 1;
	} else if (level > 2 || level < 1) {
		// Shouldn't happen
		const message = uls(
			'无法解析上次的警告层级，请手动选择一个警告层级。',
			'無法解析上次的警告層級，請手動選擇一個警告層級。'
		);
		if (statelem) {
			statelem.error(message);
		} else {
			void mw.notify(message, {
				type: 'warn',
				tag: 'twinklewarn',
			});
		}
		return;
	} else {
		date ||= new Date();
		const autoTimeout = new Morebits.date(latest.date.getTime()).add(
			Number.parseInt(Twinkle.getPref('autolevelStaleDays'), 10),
			'day'
		);
		if (autoTimeout.isAfter(date)) {
			if (level === 2) {
				level = 2;
				// Basically indicates whether we're in the final Main evaluation or not,
				// and thus whether we can continue or need to display the warning and link
				if (statelem) {
					// no notice needed during final evaluation
				} else {
					noticeData = {
						level,
						latestType: latest.type,
						showArv: true,
						username: props.relevantUserName,
					};
				}
			} else {
				// Automatically increase severity
				level += 1;
			}
		} else {
			// Reset warning level if most-recent warning is too old
			level = 1;
		}
	}
	let template = params.sub_group.replace(/(.*)\d$/, '$1');
	// Validate warning level, falling back to the uw-generic series.
	// Only a few items are missing a level, and in all but a handful
	// of cases, the uw-generic series is explicitly used elsewhere.
	if (params.messageData && !params.messageData[`level${level}`]) {
		template = 'uw-generic';
	}
	template += level;
	if (!statelem) {
		// Build the option groups for the resolved level
		const groups: SubGroup[] = props.messages.levels.map((levelGroup) => {
			const entries: SubEntry[] = [];
			const createLevelEntries = (contents: Record<string, unknown>, val: string): void => {
				for (const [itemKey, itemPropertiesRaw] of Object.entries(contents)) {
					const itemProperties = itemPropertiesRaw as MessageItem;
					if (!!val && !itemProperties[val]) {
						continue;
					}
					const key = typeof itemKey === 'string' ? itemKey : String(itemProperties['value'] ?? '');
					const subTemplate = key + val;
					const levelData = val ? (itemProperties[val] as MessageItem) : undefined;
					entries.push({
						value: subTemplate,
						label: `{{${subTemplate}}}: ${val ? (levelData?.label ?? '') : (itemProperties.label ?? '')}`,
						messageData: itemProperties,
					});
				}
			};
			createLevelEntries(levelGroup.list, `level${level}`);
			return {key: levelGroup.category, entries};
		});
		return {
			level,
			template,
			notice: {
				level,
				latestType: latest.type,
				showArv: noticeData ? noticeData.showArv : false,
				username: props.relevantUserName,
				groups,
			},
		};
	}
	return {level, template, notice: null};
};

// Used to close window when switching to ARV in autolevel (see onOpenArv)
const autolevelProc = (oldSub: string): void => {
	const wikitext = talkpageObj?.getPageText() ?? '';
	const [latest] = dateProcessing(wikitext);
	const pseudoParams: WarnParams = {
		sub_group: oldSub,
		article: props.initialArticle,
		reason: '',
		main_group: 'autolevel',
		messageData: undefined,
	};
	const parsed = autolevelParse(wikitext, pseudoParams, latest);
	autolevelInfo.value = parsed ? parsed.notice : null;
};

const loadTalkPageForAutolevel = (oldSub: string): void => {
	if (talkpageObj) {
		autolevelProc(oldSub);
		return;
	}
	const usertalk_page = new Morebits.wiki.page(
		`User_talk:${props.relevantUserName}`,
		uls('加载上次警告', '載入上次警告')
	);
	usertalk_page.setFollowRedirect(true, false);
	usertalk_page.load((pageobj) => {
		talkpageObj = pageobj;
		autolevelProc(oldSub);
	});
};

// Just a pass-through unless the autolevel option was selected
const preview = (params: WarnParams, box: HTMLElement | null): void => {
	if (params.main_group === 'autolevel') {
		// Always get a new, updated talkpage for autolevel processing
		const usertalk_page = new Morebits.wiki.page(
			`User_talk:${props.relevantUserName}`,
			uls('加载上次警告', '載入上次警告')
		);
		usertalk_page.setFollowRedirect(true, false);
		usertalk_page.load((pageobj) => {
			talkpageObj = pageobj; // Update talkpageObj
			const wikitext = pageobj.getPageText() ?? '';
			// history not needed for autolevel
			const [latest] = dateProcessing(wikitext);
			const parsed = autolevelParse(wikitext, params, latest);
			if (parsed) {
				showPreview(params, box, parsed.template);
			}
		});
	} else {
		showPreview(params, box);
	}
};

const main = (pageobj: MorebitsWikiPage): void => {
	const text = pageobj.getPageText() ?? '';
	const statelem = pageobj.getStatusElement();
	const params = pageobj.getCallbackParameters() as WarnParams;
	let {messageData} = params;
	const [latest, history] = dateProcessing(text);
	const now = new Morebits.date(pageobj.getLoadTime() ?? '');
	talkpageObj = pageobj; // Update talkpageObj, just in case
	if (params.main_group === 'autolevel') {
		const parsed = autolevelParse(text, params, latest, now, statelem);
		if (!parsed) {
			return;
		}
		// Only if there's a change from the prior display/load
		if (
			params.sub_group !== parsed.template &&
			!confirm(
				uls('将发送给用户{{', '將發送給使用者{{') + parsed.template + uls('}}模板，好吗？', '}}模板，好嗎？')
			)
		) {
			statelem.error(uls('用户取消', '使用者取消'));
			return;
		}
		// Update params now that we've selected a warning
		params.sub_group = parsed.template;
		messageData = (params.messageData?.[`level${parsed.level}`] ?? {}) as MessageItem;
	} else if (
		params.sub_group in history &&
		new Morebits.date(history[params.sub_group]?.getTime() ?? 0).add(1, 'day').isAfter(now) &&
		!confirm(
			uls('近24小时内一个同样的 ', '近24小時內一個同樣的 ') +
				params.sub_group +
				uls(' 模板已被发出。\n是否继续？', ' 模板已被發出。\n是否繼續？')
		)
	) {
		statelem.error(uls('用户取消', '使用者取消'));
		return;
	}
	latest.date.add(1, 'minute'); // after long debate, one minute is max
	if (
		latest.date.isAfter(now) &&
		!confirm(
			uls('近1分钟内 ', '近1分鐘內 ') +
				latest.type +
				uls(' 模板已被发出。\n是否继续？', ' 模板已被發出。\n是否繼續？')
		)
	) {
		statelem.error(uls('用户取消', '使用者取消'));
		return;
	}
	// build the edit summary
	// Function to handle generation of summary prefix for custom templates
	const customProcess = (template: string): string => {
		template = template.split('|')[0] ?? '';
		let prefix;
		switch (template.slice(-1)) {
			case '1':
				prefix = '注意';
				break;
			case '2':
				prefix = '警告';
				break;
			// falls through
			default:
				prefix = '提醒';
				break;
		}
		return `${prefix}：${Morebits.string.toUpperCaseFirstChar(messageData?.label ?? '')}`;
	};
	let summary = '';
	if (params.main_group === 'custom') {
		summary = customProcess(params.sub_group);
	} else {
		// Normalize kitchensink to the 1-2 style
		if (params.main_group === 'kitchensink' && !/^D+$/.test(params.sub_group)) {
			let sub = params.sub_group.slice(-1);
			if (sub === 'm') {
				sub = params.sub_group.slice(-3);
			}
			// Don't overwrite uw-3rr, technically unnecessary
			if (/\d/.test(sub)) {
				params.main_group = `level${sub}`;
			}
		}
		// singlet || level1-2, no need to /^\D+$/.test(params.main_group)
		const levelEntry = messageData?.[params.main_group] as MessageItem | undefined;
		summary = messageData?.summary || levelEntry?.summary || '';
		// Not in Twinkle.warn.messages, assume custom template
		summary ||= customProcess(params.sub_group);
		if (messageData?.suppressArticleInSummary !== true && params.article) {
			if (params.sub_group === 'uw-aiv') {
				// these templates require a username
				summary += `（${uls('对于', '對於')}[[User:${params.article}]]）`;
			} else if (params.sub_group === 'uw-bite') {
				// this template requires a username
				summary += `，${uls('于', '於')}[[User talk:${params.article}]]`;
			} else {
				summary += `${uls('，于[[', '，於[[') + params.article}]]`;
			}
		}
	}
	pageobj.setEditSummary(summary);
	pageobj.setChangeTags(Twinkle.changeTags);
	pageobj.setWatchlist(Twinkle.getPref('watchWarnings') === true);
	// Get actual warning text
	const warningText = getWarningWikitext(
		params.sub_group,
		params.article,
		params.reason,
		params.main_group === 'custom'
	);
	let sectionExists = false;
	let sectionNumber = 0;
	// Only check sections if there are sections or there's a chance we won't create our own
	if (!messageData?.heading && text.length) {
		// Get all sections
		const sections = text.match(/^(==*).+\1/gm);
		if (sections && sections.length !== 0) {
			// Find the index of the section header in question
			const dateHeaderRegex = now.monthHeaderRegex();
			sectionNumber = 0;
			// Find this month's section among L2 sections, preferring the bottom-most
			sectionExists = sections.reverse().some((sec, idx) => {
				return (
					/^(==)[^=].+\1/m.test(sec) &&
					dateHeaderRegex.test(sec) &&
					typeof (sectionNumber = sections.length - 1 - idx) === 'number'
				);
			});
		}
	}
	if (sectionExists) {
		// append to existing section
		pageobj.setPageSection(sectionNumber + 1);
		pageobj.setAppendText(`\n\n${warningText}`);
		pageobj.append();
	} else {
		if (messageData?.heading) {
			// create new section
			pageobj.setNewSectionTitle(messageData.heading);
		} else {
			Morebits.status.info(
				uls('信息', '資訊'),
				uls('未找到当月的二级标题，将创建新的', '未找到當月的二級標題，將建立新的')
			);
			pageobj.setNewSectionTitle(now.monthHeader(0));
		}
		pageobj.setNewSectionText(warningText);
		pageobj.newSection();
	}
};

const evaluate = (params: WarnParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	const userTalkPage = `User_talk:${props.relevantUserName}`;
	if (params.article) {
		if (/https?:\/\//.test(params.article)) {
			void mw.notify(uls('“页面链接”不能使用网址。', '「頁面連結」不能使用網址。'), {
				type: 'warn',
				tag: 'warn',
			});
			if (restore) {
				restore();
			}
			return;
		}
		try {
			const articleTitle = new mw.Title(params.article);
			params.article = articleTitle.getPrefixedText();
			if (articleTitle.getFragment()) {
				params.article += `#${articleTitle.getFragment()}`;
			}
		} catch {
			alert(
				uls(
					'“页面链接”不合法，仅能输入一个页面名称，勿使用网址、[[ ]]，可使用Special:Diff。',
					'「頁面連結」不合法，僅能輸入一個頁面名稱，勿使用網址、[[ ]]，可使用Special:Diff。'
				)
			);
			if (restore) {
				restore();
			}
			return;
		}
	}
	// The autolevel option will already know by now if a user talk page
	// is a cross-namespace redirect (via !!talkpageObj), so technically we
	// could alert an error here, but the user will have already ignored the
	// bold red error above. Moreover, they probably *don't* want to actually
	// issue a warning, so the error handling after the form is submitted is
	// probably preferable
	if (params.messageData === undefined) {
		void mw.notify(uls('请选择警告模板。', '請選擇警告模板。'), {
			type: 'warn',
			tag: 'warn',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	Morebits.wiki.actionCompleted.redirect = userTalkPage;
	Morebits.wiki.actionCompleted.notice = uls('警告完成，将在几秒后刷新', '警告完成，將在幾秒後重新整理');
	const qiuwen_page = new Morebits.wiki.page(userTalkPage, uls('用户讨论页修改', '使用者討論頁修改'));
	qiuwen_page.setCallbackParameters(params);
	qiuwen_page.setFollowRedirect(true, false);
	qiuwen_page.load(main);
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
		<cdx-field>
			<template #label>{{ uls('选择要发送的警告或提醒类型', '選擇要傳送的警告或提醒類別') }}</template>
			<template #description>
				{{ uls('首先选择一组，再选择具体的警告模板。', '首先選擇一組，再選擇具體的警告模板。') }}
			</template>
			<cdx-select v-model:selected="mainGroup" :menu-items="mainGroupItems" :disabled="submitting" />
		</cdx-field>
		<cdx-field>
			<template #label>{{ uls('警告模板：', '警告模板：') }}</template>
			<cdx-lookup
				v-model:selected="subGroup"
				v-model:input-value="lookupInput"
				:menu-items="filteredLookupItems"
				:disabled="submitting"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>{{ articleLabel }}</template>
			<template #description>
				{{
					uls(
						'仅限一个，勿使用网址、[[ ]]，可使用Special:Diff',
						'僅限一個，勿使用網址、[[ ]]，可使用Special:Diff'
					)
				}}
			</template>
			<cdx-text-input v-model="article" :disabled="submitting" />
		</cdx-field>
		<div v-if="notice.text" class="tw-warn-notice">{{ notice.text }}</div>
		<div v-if="autolevelInfo" class="tw-warn-autolevel">
			<div>
				{{ uls('将发送', '將發送') }}<b>{{ uls('层级', '層級') }}{{ autolevelInfo.level }}</b
				>{{ uls('警告模板。', '警告模板。') }}
			</div>
			<div v-if="autolevelInfo.showArv">
				{{
					autolevelInfo.username +
					uls('最后收到了一个层级2警告（', '最後收到了一個層級2警告（') +
					autolevelInfo.latestType +
					uls('），所以将其报告给管理人员会比较好；', '），所以將其報告給管理人員會比較好；')
				}}
				<a href="#" class="tw-warn-arv-link" @click.prevent="emit('openArv')">
					{{ uls('单击此处打开告状工具', '點擊此處打開告狀工具') }}
				</a>
			</div>
		</div>
		<cdx-field>
			<template #label>{{ uls('可选信息：', '可選資訊：') }}</template>
			<template #description>{{ uls('理由或是附加信息', '理由或是附加資訊') }}</template>
			<cdx-text-area v-model="reason" :disabled="submitting" />
		</cdx-field>
		<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
			{{ uls('预览', '預覽') }}
		</cdx-button>
		<div ref="previewBox" hidden></div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-warn-notice {
	color: #f00;
	margin: 0.5em 0;
}

.tw-warn-autolevel {
	color: #f00;
	margin: 0.5em 0;

	.tw-warn-arv-link {
		font-weight: bold;
	}
}
</style>
