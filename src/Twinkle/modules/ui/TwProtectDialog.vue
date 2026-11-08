<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxRadio, CdxSelect, CdxTextArea, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage} from './morebits';
import type {
	ProtectionInfo,
	ProtectionOptionGroup,
	ProtectionOptionItem,
	ProtectionPresetInfo,
	TwStatusExposed,
} from './types';
import {UTC8_OFFSET_MINUTES, beijingDateToISO, normalizeExpiry} from '../utils/utc8';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from '../utils/useUls';

interface ProtectParams {
	actiontype: 'protect' | 'request' | 'tag';
	category: string;
	editmodify: boolean;
	movemodify: boolean;
	editlevel: string;
	movelevel: string;
	createlevel: string;
	editexpiry: string;
	moveexpiry: string;
	createexpiry: string;
	protectReason: string;
	close: boolean;
	tagtype: string;
	small: boolean;
	noinclude: boolean;
	showexpiry: boolean;
	expiry: string;
	reason: string;
}

const props = defineProps<{
	isSysop: boolean;
	pageExists: boolean;
	isScribunto: boolean;
	isTemplate: boolean;
	title: string;
	protectionInfo: ProtectionInfo;
	footerLinks: {
		text: string;
		href: string;
	}[];
	protectionLevels: ProtectionOptionItem[];
	protectionLengths: ProtectionOptionItem[];
	protectionTypesAdmin: ProtectionOptionGroup[];
	protectionTypesCreateOnly: ProtectionOptionGroup[];
	protectionTypesCreate: ProtectionOptionGroup[];
	protectionTags: ProtectionOptionGroup[];
	protectionPresetsInfo: Record<string, ProtectionPresetInfo>;
}>();

const emit = defineEmits<{
	close: [];
}>();

interface TagParams {
	tag: string;
	reason: string | null;
	showexpiry: boolean | null;
	small: boolean;
	noinclude: boolean;
	expiry?: string;
}

interface CloseParams {
	type?: string;
	expiry?: string;
}

interface RppParams {
	reason: string;
	typename: string;
	category: string;
	expiry: string;
}

const open = ref(true);
const submitting = ref(false);
const actiontype = ref<'protect' | 'request' | 'tag'>(props.isSysop ? 'protect' : 'request');
const category = ref('');
// protect options (field2)
const editmodify = ref(true);
const movemodify = ref(true);
const editlevel = ref('sysop');
const movelevel = ref('sysop');
const createlevel = ref('sysop');
const editexpiry = ref('1 week');
const moveexpiry = ref('1 week');
const createexpiry = ref('1 week');
const protectReason = ref('');
const close = ref(true);
// tag options (field1)
const tagtype = ref('pp-vandalism');
const small = ref(false);
const noinclude = ref(props.isTemplate);
const showexpiry = ref(true);
// request options (field1)
const expiry = ref('');
const reason = ref('');

const statusRef = ref<TwStatusExposed | null>(null);

const customEditExpiries = ref<string[]>([]);
const customMoveExpiries = ref<string[]>([]);
const customCreateExpiries = ref<string[]>([]);

// Date picker values shown while "custom" is selected (YYYY-MM-DD, Beijing time)
const customEditDate = ref('');
const customMoveDate = ref('');
const customCreateDate = ref('');

const tagRadioDisabled = computed(() => !props.pageExists || props.isScribunto);

const showPresetField = computed(() => actiontype.value !== 'tag');
const showTagField = computed(
	() => actiontype.value === 'tag' || (actiontype.value === 'protect' && props.pageExists && !props.isScribunto)
);
const showProtectField = computed(() => actiontype.value === 'protect');
const showRequestField = computed(() => actiontype.value === 'request');
const showShowexpiry = computed(() => actiontype.value !== 'tag');

const flattenGroups = (groups: ProtectionOptionGroup[]): MenuItemData[] => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of groups.entries()) {
		if (group.list) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.label,
				disabled: true,
			});
			for (const item of group.list) {
				items.push({
					value: item.value,
					label: item.label,
				});
			}
		} else if (group.value !== undefined) {
			items.push({
				value: group.value,
				label: group.label,
			});
		}
	}
	return items;
};

const categoryOptions = computed<MenuItemData[]>(() => {
	let list: ProtectionOptionGroup[];
	if (actiontype.value === 'request') {
		list = props.pageExists
			? [...props.protectionTypesAdmin, ...props.protectionTypesCreateOnly]
			: props.protectionTypesCreate;
	} else {
		list = props.pageExists ? props.protectionTypesAdmin : props.protectionTypesCreate;
	}
	return flattenGroups(list);
});

const firstCategoryValue = computed<string>(() => {
	const list =
		actiontype.value === 'request'
			? props.pageExists
				? [...props.protectionTypesAdmin, ...props.protectionTypesCreateOnly]
				: props.protectionTypesCreate
			: props.pageExists
				? props.protectionTypesAdmin
				: props.protectionTypesCreate;
	for (const group of list) {
		if (group.list) {
			const firstItem = group.list[0];
			if (firstItem) {
				return firstItem.value;
			}
		} else if (group.value !== undefined) {
			return group.value;
		}
	}
	return '';
});

const editlevelItems = computed<MenuItemData[]>(() =>
	props.protectionLevels
		.filter((level) => props.isTemplate || level.value !== 'templateeditor')
		.map((level) => ({value: level.value, label: level.label}))
);

const movelevelItems = computed<MenuItemData[]>(() =>
	props.protectionLevels
		.filter((level) => level.value !== 'autoconfirmed' && (props.isTemplate || level.value !== 'templateeditor'))
		.map((level) => ({value: level.value, label: level.label}))
);

const createlevelItems = computed<MenuItemData[]>(() =>
	props.protectionLevels
		.filter((level) => level.value !== 'templateeditor')
		.map((level) => ({value: level.value, label: level.label}))
);

const tagtypeItems = computed<MenuItemData[]>(() => flattenGroups(props.protectionTags));

const baseExpiryItems = computed<MenuItemData[]>(() =>
	props.protectionLengths.map((item) => ({value: item.value, label: item.label}))
);

// Custom expiry values are stored as UTC ISO strings; render them as
// Beijing wall-clock time for the dropdown label.
const customExpiryLabel = (item: string): string => {
	const match = /^(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:/.exec(item);
	if (!match) {
		return item;
	}
	const beijing = new Date(new Date(item).getTime() + UTC8_OFFSET_MINUTES * 60_000);
	const pad = (num: number) => String(num).padStart(2, '0');
	return `${match[1]} ${pad(beijing.getUTCHours())}:${pad(beijing.getUTCMinutes())} (UTC+8)`;
};

const editExpiryItems = computed<MenuItemData[]>(() => [
	...baseExpiryItems.value,
	...customEditExpiries.value.map((item) => ({value: item, label: customExpiryLabel(item)})),
]);

const moveExpiryItems = computed<MenuItemData[]>(() => [
	...baseExpiryItems.value,
	...customMoveExpiries.value.map((item) => ({value: item, label: customExpiryLabel(item)})),
]);

const createExpiryItems = computed<MenuItemData[]>(() => [
	...baseExpiryItems.value,
	...customCreateExpiries.value.map((item) => ({value: item, label: customExpiryLabel(item)})),
]);

// Faithful port of Twinkle.protect.formevents
const editlevelDisabled = computed(() => !editmodify.value);
const editexpiryDisabled = computed(() => !editmodify.value || editlevel.value === 'all');
const movelevelDisabled = computed(() => !movemodify.value);
const moveexpiryDisabled = computed(() => !movemodify.value || movelevel.value === 'all');
const createexpiryDisabled = computed(() => createlevel.value === 'all');
const tagOptionsDisabled = computed(() => tagtype.value === 'none' || tagtype.value === 'noop');
const requestExpiryDisabled = computed(() => category.value === 'unprotect');

const firstProtectionLength = computed(() => props.protectionLengths[0]?.value ?? '1 day');

// Today in Beijing wall-clock time, for the date picker's min attribute
const beijingToday = computed(() => new Date(Date.now() + UTC8_OFFSET_MINUTES * 60_000).toISOString().slice(0, 10));

// Faithful port of Twinkle.protect.doCustomExpiry, using a date picker
// instead of a prompt. Dates are interpreted as Beijing time (UTC+8).
const applyCustomDate = (target: 'edit' | 'move' | 'create', value: string) => {
	const iso = beijingDateToISO(value);
	if (target === 'edit') {
		if (iso !== value && !customEditExpiries.value.includes(iso)) {
			customEditExpiries.value.push(iso);
		}
		if (iso === value) {
			editexpiry.value = firstProtectionLength.value;
			small.value = false;
		} else {
			editexpiry.value = iso;
			small.value = true;
		}
	} else if (target === 'move') {
		if (iso !== value && !customMoveExpiries.value.includes(iso)) {
			customMoveExpiries.value.push(iso);
		}
		moveexpiry.value = iso === value ? firstProtectionLength.value : iso;
	} else {
		if (iso !== value && !customCreateExpiries.value.includes(iso)) {
			customCreateExpiries.value.push(iso);
		}
		createexpiry.value = iso === value ? firstProtectionLength.value : iso;
	}
};

watch(editexpiry, (value) => {
	if (value === 'custom') {
		return;
	}
	customEditDate.value = '';
	// Faithful port of the small-checkbox linkage in the original expiry event
	const index = props.protectionLengths.findIndex((item) => item.value === value);
	if (index !== -1) {
		small.value = index >= 4; // 1 month
	}
});

watch(moveexpiry, (value) => {
	if (value !== 'custom') {
		customMoveDate.value = '';
	}
});

watch(createexpiry, (value) => {
	if (value !== 'custom') {
		customCreateDate.value = '';
	}
});

// Faithful port of Twinkle.protect.formevents.movemodify
watch(movemodify, () => {
	if (editmodify.value) {
		// keep move settings in sync with edit settings
		movelevel.value = editlevel.value;
		moveexpiry.value = editexpiry.value;
	} else {
		movelevel.value = 'sysop';
		moveexpiry.value = 'infinity';
	}
});

// Faithful port of Twinkle.protect.callback.changePreset
watch(category, (value) => {
	if (!value) {
		return;
	}
	if (actiontype.value === 'protect') {
		const item = props.protectionPresetsInfo[value];
		if (!item) {
			return;
		}
		if (props.pageExists) {
			if (item.edit) {
				editmodify.value = true;
				editlevel.value = item.edit;
			} else {
				editmodify.value = false;
			}
			if (item.move) {
				movemodify.value = true;
				movelevel.value = item.move;
			} else {
				movemodify.value = false;
			}
			editexpiry.value = item.expiry || '1 week';
			moveexpiry.value = item.expiry || '1 week';
		} else {
			if (item.create) {
				createlevel.value = item.create;
			}
			createexpiry.value = item.expiry || '1 week';
		}
		protectReason.value = item.reason ?? '';
		if (props.pageExists && !props.isScribunto) {
			tagtype.value = value === 'unprotect' ? 'none' : (item.template ?? value);
			if (/template/.test(value)) {
				noinclude.value = true;
			} else if (mw.config.get('wgNamespaceNumber') !== 10) {
				noinclude.value = false;
			}
		}
	} else {
		expiry.value = '';
	}
});

watch(actiontype, () => {
	category.value = firstCategoryValue.value;
});

// Initialize category for the initial action type
category.value = firstCategoryValue.value;

const buildParams = (): ProtectParams => ({
	actiontype: actiontype.value,
	category: category.value,
	editmodify: editmodify.value,
	movemodify: movemodify.value,
	editlevel: editlevel.value,
	movelevel: movelevel.value,
	createlevel: createlevel.value,
	editexpiry: editexpiry.value,
	moveexpiry: moveexpiry.value,
	createexpiry: createexpiry.value,
	protectReason: protectReason.value,
	close: close.value,
	tagtype: tagtype.value,
	small: small.value,
	noinclude: noinclude.value,
	showexpiry: showexpiry.value,
	expiry: expiry.value,
	reason: reason.value,
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

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

const callbacks = {
	taggingPageInitial: (tagparams: TagParams): void => {
		if (tagparams.tag === 'noop') {
			Morebits.status.info(uls('应用保护模板', '應用保護模板'), uls('没什么要做的', '沒什麼要做的'));
			return;
		}
		const pageName = mw.config.get('wgPageName');
		const protectedPage = new Morebits.wiki.page(pageName, uls('标记页面', '標記頁面'));
		protectedPage.setCallbackParameters(tagparams);
		protectedPage.load(callbacks.taggingPage);
	},
	getTaggedPage: (params: TagParams, text: string): {text: string; summary: string} | undefined => {
		let tag: string;
		let summary: string;
		const oldtag_re =
			/(?:<noinclude>)?[ \t]*\{\{\s*(pp-[^{}]*?|protected|(?:t|v|s|p-|usertalk-v|usertalk-s|sb|move)protected(?:2)?|protected template|privacy protection)\s*?\}\}\s*(?:<\/noinclude>)?\s*/gi;
		const re_result = oldtag_re.exec(text);
		const oldtag = re_result?.[1];
		if (
			oldtag &&
			(params.tag === 'none' ||
				confirm(
					uls('在页面上找到{{', '在頁面上找到{{') +
						oldtag +
						uls('}}\n单击确定以移除，或单击取消以取消操作。', '}}\n點擊確定以移除，或點擊取消以取消操作。')
				))
		) {
			text = text.replace(oldtag_re, '');
		}
		if (params.tag === 'none') {
			summary = uls('移除保护模板', '移除保護模板');
		} else {
			tag = params.tag;
			if (params.reason) {
				tag += `|reason=${params.reason}`;
			}
			if (params.showexpiry && params.expiry && !Morebits.string.isInfinity(params.expiry)) {
				tag += '|expiry={{'.concat('subst:', `#time:c|${params.expiry}}}`);
			}
			if (params.small) {
				tag += '|small=yes';
			}
			if (/^\s*#(?:redirect|重定向|重新導向)/i.test(text)) {
				// redirect page
				// Only tag if no {{rcat shell}} is found
				if (
					text.match(
						/{{(?:Redirect[ _]category shell|Rcat[ _]shell|This[ _]is a redirect|多种类型重定向|多種類型重定向|多種類型重新導向|多种类型重新导向|R0|其他重定向|RCS|Redirect[ _]shell)/i
					)
				) {
					Morebits.status.info('已存在Redirect category shell', uls('没什么可做的', '沒什麼可做的'));
					return;
				}
				text = text.replace(
					/#(?:redirect|重定向|重新導向) ?(\[\[.*?\]\])(.*)/i,
					`#REDIRECT $1$2\n\n{{${tag}}}`
				);
			} else {
				if (params.noinclude) {
					tag = `<noinclude>{{${tag}}}</noinclude>`;
					// 只有表格需要单独加回车，其他情况加回车会破坏模板。
					if (text.indexOf('{|') === 0) {
						tag += '\n';
					}
				} else {
					tag = `{{${tag}}}\n`;
				}
				// Insert tag after short description or any hatnotes
				const qiuwen_page = new Morebits.wikitext.page(text);
				text = qiuwen_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
			}
			summary = `加入{{${params.tag}}}`;
		}
		return {
			text,
			summary,
		};
	},
	taggingPage: (protectedPage: MorebitsWikiPage): void => {
		const params = protectedPage.getCallbackParameters() as TagParams;
		const text = protectedPage.getPageText() ?? '';
		const newVersion = callbacks.getTaggedPage(params, text);
		if (newVersion === undefined) {
			protectedPage.getStatusElement().info('完成');
			return;
		}
		protectedPage.setEditSummary(newVersion.summary);
		protectedPage.setChangeTags(Twinkle.changeTags);
		protectedPage.setWatchlist(Twinkle.getPref('watchPPTaggedPages'));
		protectedPage.setPageText(newVersion.text);
		protectedPage.setCreateOption('nocreate');
		protectedPage.suppressProtectWarning(); // no need to let admins know they are editing through protection
		protectedPage.save();
	},
	fileRequest: (rppPage: MorebitsWikiPage): void => {
		const params = rppPage.getCallbackParameters() as RppParams;
		let text = rppPage.getPageText() ?? '';
		const statusElement = rppPage.getStatusElement();
		const rppRe = new RegExp(
			`===\\s*(\\[\\[)?\\s*:?\\s*${Morebits.string.escapeRegExp(Morebits.pageNameNorm)}\\s*(\\]\\])?\\s*===`,
			'm'
		); // 匹配标题
		const tag = rppRe.exec(text);
		const rppLink = document.createElement('a');
		rppLink.setAttribute('href', mw.util.getUrl(rppPage.getPageName()));
		rppLink.appendChild(document.createTextNode(rppPage.getPageName()));
		if (tag) {
			statusElement.error([
				rppLink,
				uls('已有对此页面的保护提名，取消操作。', '已有對此頁面的保護提名，取消操作。'),
			]);
			return;
		}
		let newtag = `=== [[:${Morebits.pageNameNorm}]] ===\n`;
		if (new RegExp(`^${mw.util.escapeRegExp(newtag).replace(/\s+/g, String.raw`\s*`)}`, 'm').test(text)) {
			statusElement.error([
				rppLink,
				uls('已有对此页面的保护提名，取消操作。', '已有對此頁面的保護提名，取消操作。'),
			]);
			return;
		}
		let words: string;
		switch (params.expiry) {
			case 'temporary':
				words = uls('临时', '臨時');
				break;
			case 'infinity':
				words = '永久';
				break;
			default:
				words = '';
				break;
		}
		words += params.typename;
		newtag += `* <span style="font-size: 90%">${uls('当前保护状态', '目前保護狀態')}：{{protection status|${
			/[=]/.test(Morebits.pageNameNorm) ? '1=' : ''
		}${Morebits.pageNameNorm}}}</span>\n`;
		newtag += `${
			uls('请求', '請求') +
			Morebits.string.toUpperCaseFirstChar(words) +
			(params.reason === '' ? '。' : `：${Morebits.string.formatReasonText(params.reason)}`)
		}——~~`.concat('~~');
		// 不再寻找 {{/header}}，一律追加到页尾
		if (!text.endsWith('\n')) {
			text += '\n';
		}
		text += `${newtag}\n`; // 添加新提名
		statusElement.status('加入新提名…');
		rppPage.setEditSummary(
			`/* ${Morebits.pageNameNorm} */ ${uls('请求对', '請求對')}[[${Morebits.pageNameNorm}]]${params.typename}`
		);
		rppPage.setChangeTags(Twinkle.changeTags);
		rppPage.setPageText(text);
		rppPage.setCreateOption('recreate');
		rppPage.save(() => {
			// Watch the page being requested
			const watchPref = Twinkle.getPref('watchRequestedPages');
			// action=watch has no way to rely on user preferences (T262912), so we do it manually.
			// The watchdefault pref appears to reliably return '1' (string),
			// but that's not consistent among prefs so might as well be "correct"
			const watch =
				watchPref !== 'no' &&
				(watchPref !== 'default' || !!Number.parseInt(mw.user.options.get('watchdefault') ?? '', 10));
			if (watch) {
				const watch_query: {action: string; titles: string; token: string; expiry?: string} = {
					action: 'watch',
					titles: mw.config.get('wgPageName'),
					token: mw.user.tokens.get('watchToken'),
				};
				// Only add the expiry if page is unwatched or already temporarily watched
				if (Twinkle.protect?.watched !== true && watchPref !== 'default' && watchPref !== 'yes') {
					watch_query.expiry = watchPref;
				}
				new Morebits.wiki.api(
					uls('将请求保护的页面加入到监视列表', '將請求保護的頁面加入到監視清單'),
					watch_query
				).post();
			}
		});
	},
	closeRequest: (rppPage: MorebitsWikiPage): void => {
		const params = rppPage.getCallbackParameters() as CloseParams;
		let text = rppPage.getPageText() ?? '';
		const statusElement = rppPage.getStatusElement();
		let expiryText = '';
		if (params.type !== 'unprotect') {
			// ISO timestamps are shown as Beijing wall-clock time; relative
			// values such as "1 week" pass through formatTime unchanged
			expiryText = /^\d{4}-\d{2}-\d{2}T/.test(params.expiry ?? '')
				? new Morebits.date(params.expiry ?? '').format('YYYY-MM-DD HH:mm', UTC8_OFFSET_MINUTES)
				: Morebits.string.formatTime(params.expiry ?? '');
		}
		// 不再区分「保护请求」/「解除保护请求」段落，直接在整个页面按 ===...=== 拆分
		const requestList = text.split(/(?=\n===.+===\s*\n)/);
		let found = false;
		const rppRe = new RegExp(
			`===\\s*(\\[\\[)?\\s*:?\\s*${Morebits.pageNameRegex(Morebits.pageNameNorm)}\\s*(\\]\\])?\\s*===`,
			'm'
		);
		for (const [index, item] of requestList.entries()) {
			if (rppRe.exec(item)) {
				let request = item.trimEnd();
				if (params.type === 'unprotect') {
					request += '\n: {{RFPP|isun}}。——~~'.concat('~~\n');
				} else {
					request += `\n: {{RFPP|${params.type}|${
						Morebits.string.isInfinity(params.expiry ?? '') ? 'infinity' : expiryText
					}}}。——~~`.concat('~~\n');
				}
				requestList[index] = request;
				found = true;
				break;
			}
		}
		if (!found) {
			statusElement.warn(uls('没有找到相关的请求', '沒有找到相關的請求'));
			return;
		}
		text = requestList.join('');
		let summary = '';
		switch (params.type) {
			case 'semi':
				summary = uls('半保护', '半保護');
				break;
			case 'temp':
				summary = uls('模板保护', '模板保護');
				break;
			case 'full':
				summary = uls('全保护', '全保護');
				break;
			case 'revisionprotected':
				summary = uls('版本保护', '版本保護');
				break;
			case 'officialprotected':
				summary = uls('裁委会保护', '裁委會保護');
				break;
			case 'move':
				summary = uls('移动保护', '移動保護');
				break;
			case 'salt':
				summary = uls('白纸保护', '白紙保護');
				break;
			case 'unprotect':
				summary = uls('解除保护', '解除保護');
				break;
			default:
				statusElement.warn(uls('未知保护类型', '未知保護類別'));
				return;
		}
		if (Morebits.string.isInfinity(params.expiry ?? '')) {
			summary = expiryText + summary;
		} else {
			summary += expiryText;
		}
		rppPage.setEditSummary(`/* ${Morebits.pageNameNorm} */ ${summary}`);
		rppPage.setChangeTags(Twinkle.changeTags);
		rppPage.setPageText(text);
		rppPage.save();
	},
};

const evaluate = (input: ProtectParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	// Interpret absolute custom expiries (yyyymmddhhmm) as Beijing time (UTC+8)
	input.editexpiry = normalizeExpiry(input.editexpiry ?? '');
	input.moveexpiry = normalizeExpiry(input.moveexpiry ?? '');
	input.createexpiry = normalizeExpiry(input.createexpiry ?? '');
	let tagparams: TagParams | undefined;
	if (
		input.actiontype === 'tag' ||
		(input.actiontype === 'protect' &&
			mw.config.get('wgArticleId') &&
			mw.config.get('wgPageContentModel') !== 'Scribunto')
	) {
		tagparams = {
			tag: input.tagtype,
			reason:
				(input.tagtype === 'pp-protected' ||
					input.tagtype === 'pp-semi-protected' ||
					input.tagtype === 'pp-move') &&
				input.protectReason
					? input.protectReason
					: null,
			showexpiry: input.actiontype === 'protect' ? input.showexpiry : null,
			small: input.small,
			noinclude: input.noinclude,
		};
		if (input.actiontype === 'protect') {
			if (input.editmodify) {
				tagparams.expiry = input.editexpiry;
			} else if (input.movemodify) {
				tagparams.expiry = input.moveexpiry;
			}
		}
	}
	const closeparams: CloseParams = {};
	if (input.close) {
		if (input.category === 'unprotect') {
			closeparams.type = 'unprotect';
		} else if (mw.config.get('wgArticleId')) {
			if (input.editmodify) {
				switch (input.editlevel) {
					case 'officialprotected':
						closeparams.type = 'officialprotected';
						closeparams.expiry = input.editexpiry;
						break;
					case 'revisionprotected':
						closeparams.type = 'revisionprotected';
						closeparams.expiry = input.editexpiry;
						break;
					case 'sysop':
						closeparams.type = 'full';
						closeparams.expiry = input.editexpiry;
						break;
					case 'templateeditor':
						closeparams.type = 'temp';
						closeparams.expiry = input.editexpiry;
						break;
					case 'autoconfirmed':
						closeparams.type = 'semi';
						closeparams.expiry = input.editexpiry;
						break;
					// No default
				}
			} else if (
				input.movemodify &&
				['officialprotected', 'revisionprotected', 'sysop', 'templateeditor'].includes(input.movelevel)
			) {
				closeparams.type = 'move';
				closeparams.expiry = input.moveexpiry;
			}
		} else if (input.createlevel !== 'all') {
			closeparams.type = 'salt';
			closeparams.expiry = input.createexpiry;
		}
	}
	switch (input.actiontype) {
		case 'protect': {
			// protect the page
			Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
			Morebits.wiki.actionCompleted.notice = uls('保护完成', '保護完成');
			let statusInited = false;
			let thispage: MorebitsWikiPage | undefined;
			const allDone = (): void => {
				if (thispage) {
					thispage.getStatusElement().info('完成');
				}
				if (tagparams) {
					callbacks.taggingPageInitial(tagparams);
				}
				if (closeparams.type) {
					const rppPage = new Morebits.wiki.page('Qiuwen_talk:页面保护请求', uls('关闭请求', '關閉請求'));
					rppPage.setFollowRedirect(true);
					rppPage.setCallbackParameters(closeparams);
					rppPage.load(callbacks.closeRequest);
				}
			};
			const protectIt = (next: () => void): void => {
				thispage = new Morebits.wiki.page(mw.config.get('wgPageName'), uls('保护页面', '保護頁面'));
				if (mw.config.get('wgArticleId')) {
					if (input.editmodify) {
						thispage.setEditProtection(input.editlevel, input.editexpiry);
					}
					if (input.movemodify) {
						// Ensure a level has actually been chosen
						if (input.movelevel) {
							thispage.setMoveProtection(input.movelevel, input.moveexpiry);
						} else {
							void mw.notify(uls('您需要选择保护层级！', '您需要選擇保護層級！'), {
								type: 'warn',
								tag: 'twinkleprotect',
							});
							if (restore) {
								restore();
							}
							return;
						}
					}
					thispage.setWatchlist(Twinkle.getPref('watchProtectedPages'));
				} else {
					thispage.setCreateProtection(input.createlevel, input.createexpiry);
					thispage.setWatchlist(false);
				}
				if (input.protectReason) {
					thispage.setEditSummary(input.protectReason);
					thispage.setChangeTags(Twinkle.changeTags);
				} else {
					void mw.notify(
						uls(
							'您必须输入保护理由，这将被记录在保护日志中。',
							'您必須輸入保護理由，這將被記錄在保護日誌中。'
						),
						{
							type: 'warn',
							tag: 'twinkleprotect',
						}
					);
					if (restore) {
						restore();
					}
					return;
				}
				if (!statusInited) {
					Morebits.status.init(statusContainer);
					statusInited = true;
				}
				thispage.setChangeTags(Twinkle.changeTags);
				thispage.protect(next);
			};
			if (input.editmodify || input.movemodify || !mw.config.get('wgArticleId')) {
				protectIt(allDone);
			} else {
				void mw.notify(
					uls(
						'请告诉Twinkle要做什么！\n若您只是想标记该页，请选择上面的“用保护模板标记此页”选项。',
						'請告訴Twinkle要做什麼！\n若您只是想標記該頁，請選擇上面的「用保護模板標記此頁」選項。'
					),
					{
						type: 'warn',
						tag: 'twinkleprotect',
					}
				);
				if (restore) {
					restore();
				}
			}
			break;
		}
		case 'tag':
			// apply a protection template
			Morebits.status.init(statusContainer);
			Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
			Morebits.wiki.actionCompleted.followRedirect = false;
			Morebits.wiki.actionCompleted.notice = uls('标记完成', '標記完成');
			if (tagparams) {
				callbacks.taggingPageInitial(tagparams);
			}
			break;
		case 'request': {
			// file request at RFPP
			let typename;
			let typereason;
			switch (input.category) {
				case 'pp-dispute':
				case 'pp-protected':
					typename = uls('全保护', '全保護');
					break;
				case 'pp-template':
					typename = uls('模板保护', '模板保護');
					break;
				case 'pp-vandalism':
				case 'pp-semi-disruptive':
				case 'pp-semi-unsourced':
				case 'pp-semi-vandalism':
				case 'pp-semi-usertalk':
				case 'pp-semi-template': // removed for now
				case 'pp-semi-sock':
				case 'pp-semi-blp':
				case 'pp-semi-protected':
					typename = uls('半保护', '半保護');
					break;
				case 'pp-move':
				case 'pp-move-dispute':
				case 'pp-move-indef':
				case 'pp-move-vandalism':
					typename = uls('移动保护', '移動保護');
					break;
				case 'pp-create':
				case 'pp-create-offensive':
				case 'pp-create-blp':
				case 'pp-create-salt':
				case 'pp-create-userpage':
				case 'pp-create-repeat':
				case 'pp-create-vandalism':
					typename = uls('白纸保护', '白紙保護');
					break;
				/* case 'unprotect': */
				/* falls through */
				default:
					typename = uls('解除保护', '解除保護');
					break;
			}
			switch (input.category) {
				case 'pp-dispute':
					typereason = uls('争议、编辑战', '爭議、編輯戰');
					break;
				case 'pp-vandalism':
				case 'pp-semi-vandalism':
				case 'pp-create-vandalism':
					typereason = uls('持续破坏', '持續破壞');
					break;
				case 'pp-template':
				case 'pp-semi-template':
					// removed for now
					typereason = uls('高风险模板', '高風險模板');
					break;
				case 'pp-create-userpage':
					typereason = uls('被永久封禁的用户页', '被永久封鎖的使用者頁面');
					break;
				case 'pp-semi-usertalk':
					typereason = uls('已封禁用户的讨论页', '已封鎖使用者的討論頁');
					break;
				case 'pp-semi-sock':
					typereason = uls('傀儡破坏', '傀儡破壞');
					break;
				case 'pp-semi-blp':
					typereason = uls('违反生者传记条例', '違反生者傳記條例');
					break;
				case 'pp-move-dispute':
					typereason = uls('争议、移动战', '爭議、移動戰');
					break;
				case 'pp-move-vandalism':
					typereason = uls('移动破坏', '移動破壞');
					break;
				case 'pp-move-indef':
					typereason = uls('高风险页面', '高風險頁面');
					break;
				case 'pp-create-repeat':
					typereason = uls('多次重复创建', '多次重複建立');
					break;
				default:
					typereason = '';
					break;
			}
			let reason = typereason;
			if (input.reason !== '') {
				if (typereason !== '') {
					reason += '：';
				}
				reason += input.reason;
			}
			if (reason !== '') {
				reason = Morebits.string.appendPunctuation(reason);
			}
			const rppparams: RppParams = {
				reason,
				typename,
				category: input.category,
				expiry: input.expiry,
			};
			Morebits.status.init(statusContainer);
			const rppName = 'Qiuwen_talk:页面保护请求';
			// Updating data for the action completed event
			Morebits.wiki.actionCompleted.redirect = rppName;
			Morebits.wiki.actionCompleted.notice = uls('提名完成，重定向到讨论页', '提名完成，重新導向到討論頁');
			const rppPage = new Morebits.wiki.page(rppName, uls('请求保护页面', '請求保護頁面'));
			rppPage.setFollowRedirect(true);
			rppPage.setCallbackParameters(rppparams);
			rppPage.load(callbacks.fileRequest);
			break;
		}
		default:
			void mw.notify('twinkleprotect: 未知操作类型', {
				type: 'warn',
				tag: 'twinkleprotect',
			});
			break;
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
			<cdx-radio
				v-if="isSysop"
				v-model="actiontype"
				name="twinkle-protect-actiontype"
				input-value="protect"
				:disabled="submitting"
			>
				{{ uls('保护页面', '保護頁面') }}
			</cdx-radio>
			<cdx-radio
				v-model="actiontype"
				name="twinkle-protect-actiontype"
				input-value="request"
				:disabled="submitting"
			>
				{{ uls('请求保护页面', '請求保護頁面') }}
			</cdx-radio>
			<cdx-radio
				v-model="actiontype"
				name="twinkle-protect-actiontype"
				input-value="tag"
				:disabled="submitting || tagRadioDisabled"
			>
				{{ uls('用保护模板标记此页', '用保護模板標記此頁') }}
			</cdx-radio>
		</cdx-field>

		<div v-if="protectionInfo.previousNotice" class="tw-protect-loginfo">
			{{ protectionInfo.previousNotice }}
			<a :href="protectionInfo.logLink" target="_blank" rel="noopener noreferrer">
				{{ uls('保护日志', '保護日誌') }}
			</a>
		</div>
		<div
			v-if="protectionInfo.currentStatus"
			class="tw-protect-current"
			:class="{'tw-protect-current-warn': protectionInfo.currentStatus.severe}"
		>
			<b>{{ uls('当前保护等级', '目前保護等級') }}：</b>
			{{ protectionInfo.currentStatus.text }}
		</div>

		<!-- field_preset -->
		<cdx-field v-if="showPresetField">
			<template #label>
				{{ actiontype === 'request' ? uls('类型和理由：', '類別和理由：') : uls('选择默认：', '選擇預設：') }}
			</template>
			<cdx-select v-model:selected="category" :menu-items="categoryOptions" :disabled="submitting" />
		</cdx-field>

		<!-- field2: protect options -->
		<template v-if="showProtectField">
			<template v-if="pageExists">
				<cdx-checkbox
					v-model="editmodify"
					:disabled="submitting"
					:title="uls('若此项关闭，编辑权限将不会修改。', '若此項關閉，編輯權限將不會修改。')"
				>
					{{ uls('修改编辑权限', '修改編輯權限') }}
				</cdx-checkbox>
				<cdx-field>
					<template #label>{{ uls('编辑权限：', '編輯權限：') }}</template>
					<cdx-select
						v-model:selected="editlevel"
						:menu-items="editlevelItems"
						:disabled="submitting || editlevelDisabled"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('终止时间：', '終止時間：') }}</template>
					<cdx-select
						v-model:selected="editexpiry"
						:menu-items="editExpiryItems"
						:disabled="submitting || editexpiryDisabled"
					/>
					<input
						v-if="editexpiry === 'custom'"
						v-model="customEditDate"
						type="date"
						class="tw-protect-custom-date"
						:min="beijingToday"
						:disabled="submitting"
						@change="applyCustomDate('edit', customEditDate)"
					/>
				</cdx-field>
				<cdx-checkbox
					v-model="movemodify"
					:disabled="submitting"
					:title="uls('若此项被关闭，移动权限将不被修改。', '若此項被關閉，移動權限將不被修改。')"
				>
					{{ uls('修改移动权限', '修改移動權限') }}
				</cdx-checkbox>
				<cdx-field>
					<template #label>{{ uls('移动权限：', '移動權限：') }}</template>
					<cdx-select
						v-model:selected="movelevel"
						:menu-items="movelevelItems"
						:disabled="submitting || movelevelDisabled"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('终止时间：', '終止時間：') }}</template>
					<cdx-select
						v-model:selected="moveexpiry"
						:menu-items="moveExpiryItems"
						:disabled="submitting || moveexpiryDisabled"
					/>
					<input
						v-if="moveexpiry === 'custom'"
						v-model="customMoveDate"
						type="date"
						class="tw-protect-custom-date"
						:min="beijingToday"
						:disabled="submitting"
						@change="applyCustomDate('move', customMoveDate)"
					/>
				</cdx-field>
			</template>
			<template v-else>
				<cdx-field>
					<template #label>{{ uls('创建权限：', '建立權限：') }}</template>
					<cdx-select v-model:selected="createlevel" :menu-items="createlevelItems" :disabled="submitting" />
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('终止时间：', '終止時間：') }}</template>
					<cdx-select
						v-model:selected="createexpiry"
						:menu-items="createExpiryItems"
						:disabled="submitting || createexpiryDisabled"
					/>
				</cdx-field>
			</template>
			<cdx-checkbox v-model="close" :disabled="submitting">
				{{ uls('标记请求保护页面中的请求', '標記請求保護頁面中的請求') }}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('理由（保护日志）：', '理由（保護日誌）：') }}</template>
				<cdx-text-area v-model="protectReason" :disabled="submitting" />
			</cdx-field>
		</template>

		<!-- field1: tag options -->
		<template v-if="showTagField">
			<cdx-field>
				<template #label>{{ uls('选择保护模板：', '選擇保護模板：') }}</template>
				<cdx-select v-model:selected="tagtype" :menu-items="tagtypeItems" :disabled="submitting" />
			</cdx-field>
			<cdx-checkbox
				v-model="small"
				:disabled="submitting || tagOptionsDisabled"
				:title="
					uls(
						'将给模板加上|small=yes参数，显示成右上角的一把挂锁。',
						'將給模板加上|small=yes參數，顯示成右上角的一把掛鎖。'
					)
				"
			>
				{{ uls('使用图标（small=yes）', '使用圖示（small=yes）') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="noinclude"
				:disabled="submitting || tagOptionsDisabled"
				:title="uls('将保护模板包裹在&lt;noinclude&gt;中', '將保護模板包裹在&lt;noinclude&gt;中')"
			>
				{{ uls('用&lt;noinclude&gt;包裹保护模板', '用&lt;noinclude&gt;包裹保護模板') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showShowexpiry"
				v-model="showexpiry"
				:disabled="submitting || tagOptionsDisabled"
				:title="uls('将给模板加上|expiry参数', '將給模板加上|expiry參數')"
			>
				{{ uls('在模板显示到期时间', '在模板顯示到期時間') }}
			</cdx-checkbox>
		</template>

		<!-- field1: request options -->
		<template v-if="showRequestField">
			<cdx-field>
				<template #label>{{ uls('时长：', '時長：') }}</template>
				<cdx-select
					v-model:selected="expiry"
					:menu-items="[
						{value: '', label: ''},
						{value: 'temporary', label: uls('临时', '臨時')},
						{value: 'infinity', label: '永久'},
					]"
					:disabled="submitting || requestExpiryDisabled"
				/>
			</cdx-field>
			<cdx-field>
				<template #label>理由：</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-protect-loginfo {
	margin-bottom: 0.5em;
}

.tw-protect-current {
	color: #000;

	&-warn {
		color: #c00;
	}
}

.tw-protect-custom-date {
	box-sizing: border-box;
	width: 100%;
	min-height: 32px;
	margin-top: 4px;
	padding: 4px 8px;
	border: 1px solid var(--border-color-base, #a2a9b1);
	border-radius: 2px;
	background-color: var(--background-color-base, #fff);
	color: var(--color-base, #202122);
	font-size: 1rem;

	&:focus {
		border-color: var(--border-color-progressive, #36c);
		box-shadow: inset 0 0 0 1px var(--box-shadow-color-progressive--focus, #36c);
		outline: 0;
	}
}
</style>
