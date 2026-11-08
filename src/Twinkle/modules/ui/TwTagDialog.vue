<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, CdxTextArea, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage} from './morebits';
import {computed, reactive, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

interface SubgroupItem {
	type: 'input' | 'textarea' | 'select' | 'checkbox';
	name?: string;
	label: string;
	tooltip?: string;
	options?: {
		value: string;
		label: string;
	}[];
	list?: {
		name: string;
		label: string;
		tooltip?: string;
		checked?: boolean;
	}[];
}

interface TagItem {
	tag: string;
	label: string;
	description?: string;
	subgroup?: SubgroupItem[];
	buildFilename?: boolean;
}

interface TagGroup {
	key: string;
	items: TagItem[];
}

interface ArticleGroup {
	key: string;
	subgroups: {
		key: string | null;
		items: {
			tag: string;
			description: string;
		}[];
	}[];
}

interface TagParams {
	tags: string[];
	existingTags: string[];
	tagsToRemove: string[];
	tagsToRemain?: string[];
	group: boolean;
	reason: string;
	patrol: boolean;
	[key: string]: string | boolean | string[] | null | undefined;
}

interface ArticleTagParams extends TagParams {
	tagsToRemain: string[];
	mergeReason?: string | null;
	mergeTarget?: string | null;
	mergeTag?: string;
	mergeTagOther?: string | boolean | null;
	discussArticle?: string;
	nonDiscussArticle?: string;
	talkDiscussionTitle?: string;
	talkDiscussionTitleLinked?: boolean;
	moveReason?: string | null;
	moveTarget?: string | null;
	expert?: string;
	expert2?: string;
	expert3?: string;
	missingInformation?: string;
	notability?: string;
	target1?: string;
	target2?: string;
	target3?: string;
	cleanupReason?: string;
}

interface RedirectTagParams extends TagParams {
	altLangFrom?: string;
	reqArticleLang?: string;
	reqArticleTitle?: string;
}

interface FileTagParams extends TagParams {
	nowcommonsName?: string;
	keeplocalName?: string;
	keeplocalReason?: string;
	renamemediaNewname?: string;
	renamemediaReason?: string;
	DoNotMoveToCommons_reason?: string;
}

const props = defineProps<{
	mode: 'article' | 'file' | 'redirect';
	title: string;
	canRemove: boolean;
	isMainspace: boolean;
	initialSortOrder: 'cat' | 'alpha';
	initialGroup: boolean;
	showPatrol: boolean;
	initialPatrol: boolean;
	articleGroups: ArticleGroup[];
	alphaTags: {
		tag: string;
		description: string;
	}[];
	alreadyPresentTags: string[];
	flatDescriptions: Record<string, string>;
	flatExcludeMI: Record<string, boolean>;
	fileGroups: TagGroup[];
	redirectGroups: TagGroup[];
	customGroups: TagGroup[];
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const filterText = ref('');
const sortorder = ref<'cat' | 'alpha'>(props.initialSortOrder);
const selectedTags = ref<string[]>([]);
const existingChecked = ref<string[]>(props.mode === 'article' ? [...props.alreadyPresentTags] : []);
const groupByDefault = ref(props.initialGroup);
const reason = ref('');
const patrol = ref(props.initialPatrol);
const statusRef = ref<TwStatusExposed | null>(null);

// Subgroup parameter values, keyed by the original quickForm `name`
const subgroupValues = reactive<Record<string, string | boolean>>({});

const sortItems: MenuItemData[] = [
	{value: 'cat', label: uls('按类型', '按類別')},
	{value: 'alpha', label: '按字母'},
];

const filterRegex = computed(() => {
	const trimmed = filterText.value.trim();
	if (!trimmed) {
		return null;
	}
	try {
		return new RegExp(mw.util.escapeRegExp(trimmed), 'i');
	} catch {
		return null;
	}
});

const filterMatch = (text: string) => {
	if (!filterRegex.value) {
		return true;
	}
	return filterRegex.value.test(text);
};

const filterGroup = (group: TagGroup): TagGroup | null => {
	const items = group.items.filter((item) => !props.alreadyPresentTags.includes(item.tag) && filterMatch(item.label));
	if (items.length === 0) {
		return null;
	}
	return {...group, items};
};

const filteredFileGroups = computed<TagGroup[]>(() =>
	props.fileGroups.map(filterGroup).filter((g): g is TagGroup => g !== null)
);

const filteredRedirectGroups = computed<TagGroup[]>(() =>
	props.redirectGroups.map(filterGroup).filter((g): g is TagGroup => g !== null)
);

const filteredCustomGroups = computed<TagGroup[]>(() =>
	props.customGroups.map(filterGroup).filter((g): g is TagGroup => g !== null)
);

const filteredArticleGroups = computed<ArticleGroup[]>(() => {
	if (sortorder.value !== 'cat') {
		return props.articleGroups;
	}
	return props.articleGroups
		.map((group) => {
			const subgroups = group.subgroups
				.map((subgroup) => ({
					...subgroup,
					items: subgroup.items.filter(
						(item) =>
							!props.alreadyPresentTags.includes(item.tag) &&
							(!filterRegex.value || filterMatch('{{'.concat(item.tag, '}}: ').concat(item.description)))
					),
				}))
				.filter((subgroup) => subgroup.items.length > 0);
			return subgroups.length > 0 ? {...group, subgroups} : null;
		})
		.filter((g): g is ArticleGroup => g !== null);
});

const filteredAlphaTags = computed(() =>
	props.alphaTags.filter(
		(item) =>
			!props.alreadyPresentTags.includes(item.tag) &&
			(!filterRegex.value || filterMatch('{{'.concat(item.tag, '}}: ').concat(item.description)))
	)
);

const filteredAlreadyPresent = computed(() => {
	if (!filterRegex.value) {
		return props.alreadyPresentTags;
	}
	return props.alreadyPresentTags.filter((tag) => filterMatch(`{{${tag}}}: ${props.flatDescriptions[tag] ?? ''}`));
});

const templateLink = (tag: string) => mw.util.getUrl(`Template:${tag}`);

// The existing tags are discovered asynchronously after mount; keep the
// checked set in sync when they arrive
watch(
	() => props.alreadyPresentTags,
	(tags) => {
		if (props.mode === 'article' && props.canRemove) {
			existingChecked.value = [...tags];
		}
	},
	{
		deep: true,
		immediate: true,
	}
);

const setSubgroupValue = (name: string, value: string | number | boolean | string[] | null) => {
	if (typeof value === 'number') {
		subgroupValues[name] = String(value);
	} else if (value === null) {
		subgroupValues[name] = false;
	} else if (Array.isArray(value)) {
		subgroupValues[name] = value.length > 0;
	} else {
		subgroupValues[name] = value;
	}
};

const getSubgroupText = (name: string, defaultValue = '') => {
	const value = subgroupValues[name];
	return typeof value === 'string' ? value : defaultValue;
};

const getSubgroupCheck = (name: string, defaultValue: boolean) => {
	const value = subgroupValues[name];
	return typeof value === 'boolean' ? value : defaultValue;
};

const addTag = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		const next = modelValue.filter((item): item is string => typeof item === 'string');
		// Without {{multiple issues}} grouping only a single tag may be
		// selected; the newly-checked item is appended last.
		selectedTags.value = !groupByDefault.value && next.length > 1 ? [next.at(-1) ?? value] : next;
	} else if (modelValue) {
		if (groupByDefault.value) {
			selectedTags.value = [...selectedTags.value, value];
		} else {
			selectedTags.value = [value];
		}
	} else {
		selectedTags.value = selectedTags.value.filter((item) => item !== value);
	}
};

// Keep only the most recently selected tag when grouping is turned off
watch(groupByDefault, (grouped) => {
	if (!grouped && selectedTags.value.length > 1) {
		selectedTags.value = [selectedTags.value.at(-1) ?? ''].filter(Boolean);
	}
});

const addExisting = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		existingChecked.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		existingChecked.value = [...existingChecked.value, value];
	} else {
		existingChecked.value = existingChecked.value.filter((item) => item !== value);
	}
};

const buildParams = (): TagParams => {
	const tagsToRemove = props.alreadyPresentTags.filter((tag) => !existingChecked.value.includes(tag));
	return {
		tags: [...selectedTags.value],
		existingTags: [...existingChecked.value],
		tagsToRemove,
		group: groupByDefault.value,
		reason: reason.value,
		patrol: patrol.value,
		...subgroupValues,
	};
};

// Labels that contain wikitext braces must be assembled in script scope,
// because `}}` inside a template interpolation terminates the expression.
const existingLabel = (tag: string) => `{{${tag}}}`;
const tagLabel = (tag: string, description?: string) => (description ? `{{${tag}}}: ${description}` : `{{${tag}}}`);
const mergeTagOtherLabel = computed(() => {
	const other = selectedTags.value.includes('Merge to')
		? 'Merge from'
		: selectedTags.value.includes('Merge from')
			? 'Merge to'
			: 'Merge';
	return `用{{${other}${uls('}}标记其他条目', '}}標記其他條目')}`;
});
const mergeReasonLabel = computed(() =>
	uls(
		`合并理由（会被贴上${selectedTags.value.includes('Merge to') ? '其他' : '这'}条目的讨论页）：`,
		`合併理由（會被貼上${selectedTags.value.includes('Merge to') ? '其他' : '這'}條目的討論頁）：`
	)
);
const groupLabel = uls('如可能，合并入{{multiple issues}}', '如可能，合併入{{multiple issues}}');
const groupTooltip = uls(
	'若加入{{multiple issues}}支持的三个以上的模板，所有支持的模板都会被合并入{{multiple issues}}模板中。',
	'若加入{{multiple issues}}支援的三個以上的模板，所有支援的模板都會被合併入{{multiple issues}}模板中。'
);

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

const notabilityOptions: MenuItemData[] = [
	{value: 'none', label: `{{Notability}}：${uls('通用收录标准', '通用收錄標準')}`},
	{value: 'Astro', label: `{{Notability|Astro}}：${uls('天体', '天體')}`},
	{value: 'Biographies', label: `{{Notability|Biographies}}：${uls('人物传记', '人物傳記')}`},
	{value: 'Book', label: `{{Notability|Book}}：${uls('书籍', '書籍')}`},
	{value: 'Cyclone', label: `{{Notability|Cyclone}}：${uls('气旋', '氣旋')}`},
	{value: 'Fiction', label: `{{Notability|Fiction}}：${uls('虚构事物', '虛構事物')}`},
	{value: 'Geographic', label: `{{Notability|Geographic}}：${uls('地理特征', '地理特徵')}`},
	{value: 'Geometry', label: `{{Notability|Geometry}}：${uls('几何图形', '幾何圖形')}`},
	{value: 'Invention', label: `{{Notability|Invention}}：${uls('发明、研究', '發明、研究')}`},
	{value: 'Music', label: `{{Notability|Music}}：${uls('音乐', '音樂')}`},
	{value: 'Numbers', label: `{{Notability|Numbers}}：${uls('数字', '數字')}`},
	{value: 'Organizations', label: `{{Notability|Organizations}}：${uls('组织', '組織')}`},
	{value: 'Property', label: `{{Notability|Property}}：${uls('性质表', '性質表')}`},
	{value: 'Traffic', label: '{{Notability|Traffic}}：交通'},
	{value: 'Web', label: `{{Notability|Web}}：${uls('网站、网络内容', '網站、網路內容')}（非正式指引）`},
];

const selectItems = (options?: {value: string; label: string}[]): MenuItemData[] =>
	(options ?? []).map((option) => ({value: option.value, label: option.label}));

const callbacks = {
	article: (pageobj: MorebitsWikiPage): void => {
		// Remove tags that become superfluous with this action
		let pageText = (pageobj.getPageText() ?? '').replace(
			/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g,
			''
		);
		const params = pageobj.getCallbackParameters() as ArticleTagParams;
		/**
		 * Saves the page following the removal of tags if any. The last step.
		 * Called from removeTags()
		 */
		const postRemoval = (): void => {
			if (params.tagsToRemove.length) {
				// Remove empty {{multiple issues}} if found
				pageText = pageText.replace(
					/\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*\}\}\n?/im,
					''
				);
				// Remove single-element {{multiple issues}} if found
				pageText = pageText.replace(
					/\{\{(?:multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*(\{\{(?:\{\{[^{}]*\}\}|[^{}])+\}\})\s*\}\}/im,
					'$1'
				);
			}
			// Build edit summary
			const makeSentence = (array: string[]): string => {
				if (array.length < 3) {
					return array.join('和');
				}
				const last = array.pop();
				return `${array.join('、')}和${last}`;
			};
			const makeTemplateLink = (tag: string): string => {
				let text = '{{[[';
				// if it is a custom tag with a parameter
				if (tag.includes('|')) {
					tag = tag.slice(0, tag.indexOf('|'));
				}
				text += tag.includes(':') ? tag : `Template:${tag}|${tag}`;
				return `${text}]]}}`;
			};
			let summaryText: string;
			const addedTags = params.tags.map(makeTemplateLink);
			const removedTags = params.tagsToRemove.map(makeTemplateLink);
			if (addedTags.length) {
				summaryText = `加入${makeSentence(addedTags)}`;
				summaryText += removedTags.length ? `并移除${makeSentence(removedTags)}` : '';
			} else {
				summaryText = `移除${makeSentence(removedTags)}`;
			}
			summaryText += uls('标记', '標記');
			if (params.reason) {
				summaryText += `：${params.reason}`;
			}
			// avoid truncated summaries
			if (summaryText.length > 499) {
				summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, '$1'); // 移除“[[...|...]]”的前半部分
			}
			pageobj.setPageText(pageText);
			pageobj.setEditSummary(summaryText);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
			pageobj.setMinorEdit(Boolean(Twinkle.getPref('markTaggedPagesAsMinor')));
			pageobj.setCreateOption('nocreate');
			pageobj.save(() => {
				// special functions for merge tags
				if (params.mergeReason) {
					// post the rationale on the talk page (only operates in main namespace)
					const talkpage = new Morebits.wiki.page(
						`Talk:${params.discussArticle}`,
						uls('将理由贴进讨论页', '將理由貼進討論頁')
					);
					talkpage.setNewSectionText(`${params.mergeReason.trim()} ~~`.concat('~~'));
					talkpage.setNewSectionTitle(`请求与[[${params.nonDiscussArticle}]]合并`);
					talkpage.setChangeTags(Twinkle.changeTags);
					talkpage.setWatchlist(Twinkle.getPref('watchMergeDiscussions'));
					talkpage.setCreateOption('recreate');
					talkpage.newSection();
				}
				if (params.mergeTagOther) {
					// tag the target page if requested
					let otherTagName = 'Merge';
					if (params.mergeTag === 'Merge from') {
						otherTagName = 'Merge to';
					} else if (params.mergeTag === 'Merge to') {
						otherTagName = 'Merge from';
					}
					const newParams = {
						tags: [otherTagName],
						tagsToRemove: [],
						tagsToRemain: [],
						mergeTarget: Morebits.pageNameNorm,
						discussArticle: params.discussArticle,
						talkDiscussionTitle: params.talkDiscussionTitle,
						talkDiscussionTitleLinked: params.talkDiscussionTitleLinked,
					};
					const otherpage = new Morebits.wiki.page(
						params.mergeTarget ?? '',
						`${uls('标记其他页面（', '標記其他頁面（')}${params.mergeTarget ?? ''}）`
					);
					otherpage.setCallbackParameters(newParams);
					otherpage.load(callbacks.article);
				}
				// special functions for requested move tags
				if (params.moveReason) {
					// post the rationale on the talk page (only operates in main namespace)
					let moveTalkpageText = '\n\n{{'.concat('subst:', `RM|1=${params.moveReason.trim()}`);
					if (params.moveTarget) {
						moveTalkpageText += `|2=${params.moveTarget}`;
					}
					moveTalkpageText += '}}';
					const moveTalkpage = new Morebits.wiki.page(
						`Talk:${params.discussArticle}`,
						uls('将理由贴进讨论页', '將理由貼進討論頁')
					);
					moveTalkpage.setAppendText(moveTalkpageText);
					moveTalkpage.setEditSummary(
						uls('请求移动', '請求移動') + (params.moveTarget ? `至[[${params.moveTarget}]]` : '')
					);
					moveTalkpage.setChangeTags(Twinkle.changeTags);
					moveTalkpage.setCreateOption('recreate');
					moveTalkpage.append();
				}
			});
			if (params.patrol) {
				pageobj.patrol();
			}
		};
		/**
		 * Removes the existing tags that were deselected (if any)
		 * Calls postRemoval() when done
		 */
		const removeTags = (): void => {
			if (params.tagsToRemove.length === 0) {
				postRemoval();
				return;
			}
			Morebits.status.info(uls('信息', '資訊'), uls('移除取消选择的已存在标记', '移除取消選擇的已存在標記'));
			const getRedirectsFor: string[] = [];
			// Remove the tags from the page text, if found in its proper name,
			// otherwise moves it to `getRedirectsFor` array earmarking it for
			// later removal
			for (const tag of params.tagsToRemove) {
				const tag_re = new RegExp(`\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]+)?\\}\\}\\n?`);
				if (tag_re.test(pageText)) {
					pageText = pageText.replace(tag_re, '');
				} else {
					getRedirectsFor.push(`Template:${tag}`);
				}
			}
			if (!getRedirectsFor.length) {
				postRemoval();
				return;
			}
			// Remove tags which appear in page text as redirects
			const api = new Morebits.wiki.api(
				uls('获取模板重定向', '取得模板重新導向'),
				{
					action: 'query',
					prop: 'linkshere',
					titles: getRedirectsFor.join('|'),
					redirects: 1,
					lhnamespace: '10',
					lhshow: 'redirect',
					lhlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				},
				(apiobj) => {
					$(apiobj.responseXML as XMLDocument)
						.find('page')
						.each((_idx, page) => {
							let removed = false;
							for (const element of $(page).find('lh').toArray()) {
								const tag = ($(element).attr('title') ?? '').replace(/^(模板|template):/i, '');
								const tag_re = new RegExp(
									`\\{\\{${Morebits.pageNameRegex(
										tag
									)}\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\}\\n?`
								);
								if (tag_re.test(pageText)) {
									pageText = pageText.replace(tag_re, '');
									removed = true;
									break;
								}
							}

							if (!removed) {
								Morebits.status.warn(
									uls('信息', '資訊'),
									uls('无法在页面上找到{{', '無法在頁面上找到{{') +
										($(page).attr('title') ?? '').replace(/^(模板|template):/i, '') +
										uls('}}……跳过', '}}……跳過')
								);
							}
						});
					postRemoval();
				}
			);
			api.post();
		};
		if (!params.tags.length) {
			removeTags();
			return;
		}
		let tagText = '';
		let tags: string[] = [];
		const groupableTags: string[] = [];
		const groupableExistingTags: string[] = [];
		// Executes first: addition of selected tags
		/**
		 * Updates `tagText` with the syntax of `tagName` template with its parameters
		 *
		 * @param {string} tagName
		 */
		const addTag = (tagName: string): void => {
			let currentTag = '';
			if (tagName === 'Uncategorized' || tagName === 'Improve categories') {
				pageText += `\n\n{{${tagName}|time={{`.concat('subst:', '#time:c}}}}');
			} else {
				currentTag += `{{${tagName}`;
				// fill in other parameters, based on the tag
				switch (tagName) {
					case 'Expert needed':
						currentTag += `|subject=${params.expert}`;
						if (params.expert2) {
							currentTag += `|subject2=${params.expert2}`;
						}
						if (params.expert3) {
							currentTag += `|subject3=${params.expert3}`;
						}
						break;
					case 'Merge':
					case 'Merge to':
					case 'Merge from':
						params.mergeTag = tagName;
						if (params.mergeTarget) {
							// normalize the merge target for now and later
							params.mergeTarget = Morebits.string.toUpperCaseFirstChar(
								params.mergeTarget.replace(/_/g, ' ')
							);
							currentTag += `|${params.mergeTarget}`;
							// link to the correct section on the talk page, for article space only
							if (
								mw.config.get('wgNamespaceNumber') === 0 &&
								(params.mergeReason || params.discussArticle)
							) {
								if (!params.discussArticle) {
									// discussArticle is the article whose talk page will contain the discussion
									params.discussArticle =
										tagName === 'Merge to' ? params.mergeTarget : mw.config.get('wgTitle');
									// nonDiscussArticle is the article which won't have the discussion
									params.nonDiscussArticle =
										tagName === 'Merge to' ? mw.config.get('wgTitle') : params.mergeTarget;
									params.talkDiscussionTitle =
										uls('请求与', '請求與') + params.nonDiscussArticle + uls('合并', '合併');
								}
								currentTag += `|discuss=Talk:${params.discussArticle}#${params.talkDiscussionTitle}`;
							}
						}
						break;
					case 'Missing information':
						currentTag += `|1=${params.missingInformation}`;
						break;
					case 'Notability':
						if (params.notability !== 'none') {
							currentTag += `|3=${params.notability}`;
						}
						break;
					case 'Requested move':
						if (params.moveTarget) {
							// normalize the move target for now and later
							params.moveTarget = Morebits.string.toUpperCaseFirstChar(
								params.moveTarget.replace(/_/g, ' ')
							);
							params.discussArticle = mw.config.get('wgTitle');
							currentTag += `|${params.moveTarget}`;
						}
						break;
					case 'Split':
						if (params.target1) {
							currentTag += `|1=${params.target1}`;
						}
						if (params.target2) {
							currentTag += `|2=${params.target2}`;
						}
						if (params.target3) {
							currentTag += `|3=${params.target3}`;
						}
						break;
					case 'Cleanup':
						if (params.cleanupReason) {
							currentTag += `|reason=${params.cleanupReason}`;
						}
						break;
					default:
						break;
				}
				currentTag += '|time={{'.concat('subst:', '#time:c}}');
				// 将原因参数添加
				if (params.reason) {
					currentTag += `|reason=${params.reason}`;
				}
				currentTag += '}}\n';
				tagText += currentTag;
			}
		};
		/**
		 * Adds the tags which go outside {{multiple issues}}, either because
		 * these tags aren't supported in {{multiple issues}} or because
		 * {{multiple issues}} is not being added to the page at all
		 */
		const addUngroupedTags = (): void => {
			for (const tag of tags) {
				addTag(tag);
			}
			// Insert tag after short description or any hatnotes,
			// as well as deletion/protection-related templates
			const qiuwen_page = new Morebits.wikitext.page(pageText);
			const templatesAfter =
				// Protection templates
				// CSD
				// AfD
				`${Twinkle.hatnoteRegex}pp|pp-.*?|(?:Delete|Db-reason|D|Deletebecause|Db|速删|速刪|Speedy|SD|快删|快刪|CSD)|[rsaiftcmv]fd|vfd-(?:b|q|s|source|v|wikt)|(?:移动到维基|移動到維基)(?:教科书|教科書|语录|語錄|文库|文庫|导游|導遊|词典|詞典)`;
			pageText = qiuwen_page.insertAfterTemplates(tagText, templatesAfter).getText();
			removeTags();
		};
		// Separate tags into groupable ones (`groupableTags`) and non-groupable ones (`tags`)
		for (const tag of params.tags) {
			const tagRe = new RegExp(`\\{\\{${tag}(\\||\\}\\})`, 'im');
			// regex check for preexistence of tag can be skipped if in canRemove mode
			if (props.canRemove || !tagRe.exec(pageText)) {
				if (
					tag === 'Notability' &&
					(mw.config.get('wgNamespaceNumber') === 0 ||
						confirm(
							uls(
								'该页面不是条目，您仍要提报到收录标准提报吗？',
								'該頁面不是條目，您仍要提報到收錄標準提報嗎？'
							)
						))
				) {
					const qiuwen_page = new Morebits.wiki.page(
						'Qiuwen_talk:存废讨论/关注度提报',
						uls('加入收录标准记录项', '加入收錄標準記錄項')
					);
					qiuwen_page.setFollowRedirect(true);
					qiuwen_page.setCallbackParameters(params);
					qiuwen_page.load(callbacks.notabilityList);
				}
				// condition on `flatExcludeMI` to ensure that its not a custom tag
				// Custom tags are assumed non-groupable, since we don't know whether MI template supports them
				if (props.flatExcludeMI[tag] === false) {
					groupableTags.push(tag);
				} else {
					tags.push(tag);
				}
			} else if (tag === 'Merge from') {
				tags.push(tag);
			} else {
				Morebits.status.warn(
					uls('信息', '資訊'),
					uls('在页面上找到{{', '在頁面上找到{{') + tag + uls('}}……跳过', '}}……跳過')
				);
				// don't do anything else with merge tags
				if (['Merge', 'Merge to'].includes(tag)) {
					params.mergeTarget = null;
					params.mergeReason = null;
					params.mergeTagOther = null;
				}
			}
		}
		// To-be-retained existing tags that are groupable
		for (const tag of params['tagsToRemain']) {
			// If the tag is unknown to us, we consider it non-groupable
			if (props.flatExcludeMI[tag] === false) {
				groupableExistingTags.push(tag);
			}
		}
		const miTest =
			/\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|[^}]+\{/im.exec(
				pageText
			);
		if (miTest && groupableTags.length > 0) {
			Morebits.status.info(
				uls('信息', '資訊'),
				uls('加入支持的标记入已存在的{{multiple issues}}', '加入支援的標記入已存在的{{multiple issues}}')
			);
			tagText = '';
			for (const tag of groupableTags) {
				addTag(tag);
			}
			const miRegex = new RegExp(
				`(\\{\\{\\s*${miTest[1] ?? ''}\\s*(?:\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?)\\}\\}\\s*`,
				'im'
			);
			pageText = pageText.replace(miRegex, `$1${tagText}}}\n`);
			tagText = '';
			addUngroupedTags();
		} else if (params.group && !miTest && groupableExistingTags.length + groupableTags.length >= 2) {
			Morebits.status.info(
				uls('信息', '資訊'),
				uls('加入支持的标记入{{multiple issues}}', '加入支援的標記入{{multiple issues}}')
			);
			tagText += '{{Multiple issues|\n';
			/**
			 * Adds newly added tags to MI
			 */
			const addNewTagsToMI = (): void => {
				for (const tag of groupableTags) {
					addTag(tag);
				}
				tagText += '}}\n';
				addUngroupedTags();
			};
			const getRedirectsFor: string[] = [];
			// Reposition the tags on the page into {{multiple issues}}, if found with its
			// proper name, else moves it to `getRedirectsFor` array to be handled later
			for (const tag of groupableExistingTags) {
				const tag_re = new RegExp(`(\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]+)?\\}\\}\\n?)`);
				const match = tag_re.exec(pageText);
				if (match) {
					tagText += match[1] ?? '';
					pageText = pageText.replace(tag_re, '');
				} else {
					getRedirectsFor.push(`Template:${tag}`);
				}
			}
			if (!getRedirectsFor.length) {
				addNewTagsToMI();
				return;
			}
			const api = new Morebits.wiki.api(
				uls('获取模板重定向', '取得模板重新導向'),
				{
					action: 'query',
					prop: 'linkshere',
					titles: getRedirectsFor.join('|'),
					redirects: 1,
					lhnamespace: '10',
					lhshow: 'redirect',
					lhlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				},
				(apiobj) => {
					$(apiobj.responseXML as XMLDocument)
						.find('page')
						.each((_idx, page) => {
							let found = false;
							for (const element of $(page).find('lh').toArray()) {
								const tag = ($(element).attr('title') ?? '').replace(/^(模板|template):/i, '');
								const tag_re = new RegExp(
									`(\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]*)?\\}\\}\\n?)`
								);
								const match = tag_re.exec(pageText);
								if (match) {
									tagText += match[1] ?? '';
									pageText = pageText.replace(tag_re, '');
									found = true;
									break;
								}
							}

							if (!found) {
								Morebits.status.warn(
									uls('信息', '資訊'),
									uls('无法在页面上找到{{', '無法在頁面上找到{{') +
										($(page).attr('title') ?? '').replace(/^(模板|template):/i, '') +
										uls('}}……跳过', '}}……跳過')
								);
							}
						});
					addNewTagsToMI();
				}
			);
			api.post();
		} else {
			tags = [...tags, ...groupableTags];
			addUngroupedTags();
		}
	},
	notabilityList: (pageobj: MorebitsWikiPage): void => {
		pageobj.setAppendText('\n{{'.concat('subst:', `Fameitem|title=${Morebits.pageNameNorm}}}`));
		pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('recreate');
		pageobj.append();
	},
	redirect: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as RedirectTagParams;
		let pageText = pageobj.getPageText() ?? '';
		let tagText = '';
		let summaryText = '加入';
		const tags: string[] = [];
		for (const tagged of params.tags) {
			const tagRe = new RegExp(`(\\{\\{${tagged}(\\||\\}\\}))`, 'im');
			if (tagRe.exec(pageText)) {
				Morebits.status.warn(
					uls('信息', '資訊'),
					uls('在重定向上找到{{', '在重新導向上找到{{') + tagged + uls('}}……跳过', '}}……跳過')
				);
			} else {
				tags.push(tagged);
			}
		}
		// used in Array#forEach
		const addTag = (tagName: string, tagIndex?: number): void => {
			tagText += `\n{{${tagName}`;
			if (tagName === '非中文重定向') {
				if (params['altLangFrom']) {
					tagText += `|1=${params['altLangFrom']}`;
				}
			} else if (
				(tagName === '条目请求重定向' || tagName === '條目請求重定向') &&
				params['reqArticleLang'] &&
				params['reqArticleTitle']
			) {
				tagText += `|1=${params['reqArticleLang']}`;
				tagText += `|2=${params['reqArticleTitle']}`;
			}
			tagText += '}}';
			if (tagIndex !== undefined && tagIndex > 0) {
				if (tagIndex === tags.length - 1) {
					summaryText += '和';
				} else if (tagIndex < tags.length - 1) {
					summaryText += '、';
				}
			}
			summaryText += `{{[[:${tagName.includes(':') ? tagName : `Template:${tagName}|${tagName}`}]]}}`;
		};
		if (!tags.length) {
			Morebits.status.warn(uls('信息', '資訊'), uls('没有标签可供标记', '沒有標籤可供標記'));
		}
		tags.sort();
		for (const tag of tags) {
			addTag(tag);
		}
		// Check for all Rcat shell redirects (from #433)
		if (pageText.match(/{{(?:redr|this is a redirect|r(?:edirect)?(?:.?cat.*)?[ _]?sh)/i)) {
			// Regex inspired by [[User:Kephir/gadgets/sagittarius.js]] ([[Special:PermaLink/831402893]])
			const oldTags = pageText.match(/(\s*{{[A-Za-z\s]+\|(?:\s*1=)?)((?:[^|{}]|{{[^}]+}})+)(}})\s*/i);
			if (oldTags) {
				pageText = pageText.replace(
					oldTags[0],
					`${oldTags[1] ?? ''}${tagText}${oldTags[2] ?? ''}${oldTags[3] ?? ''}`
				);
			}
		} else {
			// Fold any pre-existing Rcats into taglist and under Rcatshell
			const pageTags = pageText.match(/\s*{{.+?重定向.*?}}/gim);
			let oldPageTags = '';
			if (pageTags) {
				for (let pageTag of pageTags) {
					const pageRe = new RegExp(Morebits.string.escapeRegExp(pageTag), 'img');
					pageText = pageText.replace(pageRe, '');
					pageTag = pageTag.trim();
					oldPageTags += `\n${pageTag}`;
				}
			}
			pageText += `\n{{Redirect category shell|${tagText}${oldPageTags}\n}}`;
		}
		summaryText +=
			(tags.length > 0 ? uls('标记', '標記') : '{{Redirect category shell}}') + uls('到重定向', '到重新導向');
		// avoid truncated summaries
		if (summaryText.length > 499) {
			summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, '$1'); // 移除“[[...|...]]”的前半部分
		}
		pageobj.setPageText(pageText);
		pageobj.setEditSummary(summaryText);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
		pageobj.setMinorEdit(Boolean(Twinkle.getPref('markTaggedPagesAsMinor')));
		pageobj.setCreateOption('nocreate');
		pageobj.save();
		if (params.patrol) {
			pageobj.patrol();
		}
	},
	file: (pageobj: MorebitsWikiPage): void => {
		let text = pageobj.getPageText() ?? '';
		const params = pageobj.getCallbackParameters() as FileTagParams;
		let summary = '加入';
		// Add maintenance tags
		if (params.tags.length) {
			let tagtext = '';
			for (const tag of params.tags) {
				// when other commons-related tags are placed, remove "move to Share" tag
				if (['Keep local', 'Now Qiuwen Share', 'Do not move to Qiuwen Share'].includes(tag)) {
					text = text.replace(
						/{{(mtc|(copy |move )?to ?share|move to qiuwen share|copy to qiuwen share)[^}]*}}/gi,
						''
					);
				}
				if (tag === 'Vector version available') {
					text = text.replace(
						/\{\{((convert to |convertto|should be |shouldbe|to)?svg|badpng|vectorize)[^}]*\}\}/gi,
						''
					);
				}
				let currentTag = tag;
				switch (tag) {
					case 'Now Commons':
						currentTag = `subst:${currentTag}`; // subst
						if (params['nowcommonsName'] !== '') {
							currentTag += `|1=${params['nowcommonsName']}`;
						}
						break;
					case 'Keep local':
						if (params['keeplocalName'] !== '') {
							currentTag += `|1=${params['keeplocalName']}`;
						}
						if (params['keeplocalReason'] !== '') {
							currentTag += `|reason=${params['keeplocalReason']}`;
						}
						break;
					case 'Rename media':
						if (params['renamemediaNewname'] !== '') {
							currentTag += `|1=${params['renamemediaNewname']}`;
						}
						if (params['renamemediaReason'] !== '') {
							currentTag += `|2=${params['renamemediaReason']}`;
						}
						break;
					case 'Vector version available':
					/* falls through */
					case 'Obsolete':
						currentTag += `|1=${params[`${tag.replace(/ /g, '_')}File`]}`;
						break;
					case 'Do not move to Commons':
						currentTag += `|reason=${params['DoNotMoveToCommons_reason']}`;
						break;
					case 'Copy to Wikimedia Commons':
						currentTag += `|human=${mw.config.get('wgUserName')}`;
						break;
					default:
						break;
					// don't care
				}

				currentTag = `{{${currentTag}}}\n`;
				tagtext += currentTag;
				summary += `{{${tag}}}、`;
			}
			if (!tagtext) {
				pageobj.getStatusElement().warn(uls('用户取消操作，没什么要做的', '使用者取消操作，沒什麼要做的'));
				return;
			}
			text = tagtext + text;
		}
		pageobj.setPageText(text);
		pageobj.setEditSummary(summary.slice(0, Math.max(0, summary.length - 1)));
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
		pageobj.setMinorEdit(Boolean(Twinkle.getPref('markTaggedPagesAsMinor')));
		pageobj.setCreateOption('nocreate');
		pageobj.save();
		if (params.patrol) {
			pageobj.patrol();
		}
	},
};

const evaluate = (params: TagParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	const modeLabel = {
		article: uls('条目', '條目'),
		file: uls('文件', '檔案'),
		redirect: uls('重定向', '重新導向'),
	}[props.mode];
	// Validation
	// Given an array of incompatible tags, check if we have two or more selected
	const checkIncompatible = (conflicts: string[], extra?: string): boolean => {
		const count = conflicts.reduce((sum, tag) => {
			return sum + (params.tags.includes(tag) ? 1 : 0);
		}, 0);
		if (count > 1) {
			let message = `${uls('请在以下标签中择一使用', '請在以下標籤中擇一使用')}：{{${conflicts.join(
				'}}、{{'
			)}}}。`;
			message += extra || '';
			void mw.notify(message, {
				type: 'warn',
				tag: 'friendlytag',
			});
			return true;
		}
		return false;
	};
	// Given a tag, ensure an associate parameter is present
	// Maybe just sock this away in each function???
	const checkParameter = (tag: string, parameter: string, description = '理由'): boolean => {
		const value = params[parameter];
		if (params.tags.includes(tag) && (typeof value === 'string' ? value : '').trim() === '') {
			void mw.notify(`${uls('您必须指定', '您必須指定')}{{${tag}}}的${description}。`, {
				type: 'warn',
				tag: 'friendlytag',
			});
			return true;
		}
		return false;
	};
	// We could theoretically put them all checkIncompatible calls in a
	// forEach loop, but it's probably clearer not to have [[array one],
	// [array two]] devoid of context. Likewise, all the checkParameter
	// calls could be in one if, but could be similarly confusing.
	switch (props.mode) {
		case 'article': {
			// The article-specific subgroup parameters are carried on the same
			// object via the index signature
			const input = params as ArticleTagParams;
			input.tagsToRemain = input.existingTags || []; // container not created if none present
			if (input.tags.includes('Merge') || input.tags.includes('Merge from') || input.tags.includes('Merge to')) {
				if (
					checkIncompatible(
						['Merge', 'Merge from', 'Merge to'],
						uls(
							'若需要多次合并，请使用{{Merge}}并用管道符分隔条目名（但在这种情形中Twinkle不能自动标记其他条目）。',
							'若需要多次合併，請使用{{Merge}}並用管道符分隔條目名（但在這種情形中Twinkle不能自動標記其他條目）。'
						)
					)
				) {
					if (restore) {
						restore();
					}
					return;
				}
				if (!input.mergeTarget) {
					void mw.notify(
						uls('请指定使用于merge模板中的另一个页面标题。', '請指定使用於merge模板中的另一個頁面標題。'),
						{
							type: 'warn',
							tag: 'friendlytag',
						}
					);
					if (restore) {
						restore();
					}
					return;
				}
				if ((input.mergeTagOther || input.mergeReason) && input.mergeTarget.includes('|')) {
					void mw.notify(
						uls(
							'当前还不支持在一次合并中标记多个条目，与开启关于多个条目的讨论。请不要勾选“标记其他条目”并清空“理由”框后再提交。',
							'目前還不支援在一次合併中標記多個條目，與開啟關於多個條目的討論。請不要勾選「標記其他條目」並清空「理由」框後再提交。'
						),
						{
							type: 'warn',
							tag: 'friendlytag',
						}
					);
					if (restore) {
						restore();
					}
					return;
				}
			}
			if (checkParameter('Missing information', 'missingInformation', uls('缺少的内容', '缺少的內容'))) {
				if (restore) {
					restore();
				}
				return;
			}
			if (checkParameter('Expert needed', 'expert', uls('专家领域', '專家領域'))) {
				if (restore) {
					restore();
				}
				return;
			}
			break;
		}
		case 'file':
			// Silly to provide the same string to each of these
			if (
				checkParameter('Obsolete', 'ObsoleteFile', uls('替换的文件名称', '替換的檔案名稱')) ||
				checkParameter(
					'Vector version available',
					'Vector_version_availableFile',
					uls('替换的文件名称', '替換的檔案名稱')
				)
			) {
				if (restore) {
					restore();
				}
				return;
			}
			if (checkParameter('Do not move to Commons', 'DoNotMoveToCommons_reason')) {
				if (restore) {
					restore();
				}
				return;
			}
			break;
		case 'redirect':
			break;
		default:
			void mw.notify(`Twinkle.tag：未知模式 ${modeLabel}`, {
				type: 'warn',
				tag: 'friendlytag',
			});
			break;
	}
	// File/redirect: return if no tags selected
	// Article: return if no tag is selected and no already present tag is deselected
	if (params.tags.length === 0 && (props.mode !== 'article' || params.tagsToRemove.length === 0)) {
		void mw.notify(uls('必须选择至少一个标记！', '必須選擇至少一個標記！'), {
			type: 'warn',
			tag: 'friendlytag',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	Morebits.wiki.actionCompleted.redirect = Morebits.pageNameNorm;
	Morebits.wiki.actionCompleted.notice = uls('标记完成，将在几秒内刷新页面', '標記完成，將在幾秒內重新整理頁面');
	if (props.mode === 'redirect') {
		Morebits.wiki.actionCompleted.followRedirect = false;
	}
	const qiuwen_page = new Morebits.wiki.page(Morebits.pageNameNorm, uls('正在标记', '正在標記') + modeLabel);
	qiuwen_page.setCallbackParameters(params);
	qiuwen_page.load(callbacks[props.mode]);
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
			<template #label>{{ uls('筛选标记列表：', '篩選標記列表：') }}</template>
			<cdx-text-input v-model="filterText" :disabled="submitting" />
		</cdx-field>

		<template v-if="mode === 'article'">
			<cdx-field>
				<template #label>
					{{ uls('查看列表：', '檢視列表：') }}
					<span class="tw-tag-sort-tooltip">
						{{
							uls(
								'您可以在Twinkle参数设置（H:TW/PREF）中更改此项。',
								'您可以在Twinkle偏好設定（H:TW/PREF）中更改此項。'
							)
						}}
					</span>
				</template>
				<cdx-select v-model:selected="sortorder" :menu-items="sortItems" :disabled="submitting" />
			</cdx-field>
			<div v-if="!canRemove" class="tw-tag-untagnotice">
				{{
					uls(
						'要移除现有维护标记，请从当前条目版本中打开“标记”菜单',
						'要移除現有維護標記，請從目前條目版本中打開「標記」選單'
					)
				}}
			</div>
			<div class="tw-tag-workarea">
				<template v-if="canRemove && filteredAlreadyPresent.length > 0">
					<h5>{{ uls('已放置的维护标记', '已放置的維護標記') }}</h5>
					<cdx-checkbox
						v-for="tag in filteredAlreadyPresent"
						:key="`existing-${tag}`"
						:model-value="existingChecked"
						:input-value="tag"
						name="twinkle-tag-existing"
						:disabled="submitting"
						@update:model-value="addExisting(tag, $event)"
					>
						{{ existingLabel(tag) }}
						<span v-if="flatDescriptions[tag]">：{{ flatDescriptions[tag] }}</span>
						<a
							:href="templateLink(tag)"
							target="_blank"
							rel="noopener noreferrer"
							class="tw-tag-template-link"
							@click.stop
						>
							&gt;
						</a>
					</cdx-checkbox>
				</template>
				<template v-if="sortorder === 'cat'">
					<template v-for="loopGroup in filteredArticleGroups" :key="loopGroup.key">
						<h5>{{ loopGroup.key }}</h5>
						<div
							v-for="subgroup in loopGroup.subgroups"
							:key="subgroup.key ?? loopGroup.key"
							class="tw-tag-subgroup"
						>
							<b v-if="subgroup.key">{{ subgroup.key }}</b>
							<cdx-checkbox
								v-for="item in subgroup.items"
								:key="item.tag"
								:model-value="selectedTags"
								:input-value="item.tag"
								name="twinkle-tag-tags"
								:disabled="submitting"
								@update:model-value="addTag(item.tag, $event)"
							>
								{{ tagLabel(item.tag, item.description) }}
								<a
									:href="templateLink(item.tag)"
									target="_blank"
									rel="noopener noreferrer"
									class="tw-tag-template-link"
									@click.stop
								>
									&gt;
								</a>
							</cdx-checkbox>
						</div>
					</template>
				</template>
				<template v-else>
					<h5 v-if="canRemove && filteredAlreadyPresent.length > 0">
						{{ uls('可用的维护标记', '可用的維護標記') }}
					</h5>
					<cdx-checkbox
						v-for="item in filteredAlphaTags"
						:key="item.tag"
						:model-value="selectedTags"
						:input-value="item.tag"
						name="twinkle-tag-tags"
						:disabled="submitting"
						@update:model-value="addTag(item.tag, $event)"
					>
						{{ tagLabel(item.tag, item.description) }}
						<a
							:href="templateLink(item.tag)"
							target="_blank"
							rel="noopener noreferrer"
							class="tw-tag-template-link"
							@click.stop
						>
							&gt;
						</a>
					</cdx-checkbox>
				</template>
			</div>

			<!-- Special subgroups for article tags -->
			<template v-if="selectedTags.includes('Expert needed')">
				<cdx-field>
					<template #label>{{ uls('哪个领域的专家（必填）：', '哪個領域的專家（必填）：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('expert')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('expert', $event)"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('哪个领域的专家：', '哪個領域的專家：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('expert2')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('expert2', $event)"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('哪个领域的专家：', '哪個領域的專家：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('expert3')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('expert3', $event)"
					/>
				</cdx-field>
			</template>
			<template
				v-if="
					selectedTags.includes('Merge') ||
					selectedTags.includes('Merge from') ||
					selectedTags.includes('Merge to')
				"
			>
				<cdx-field>
					<template #label>{{ uls('其他条目：', '其他條目：') }}</template>
					<template #description>
						{{
							uls(
								'如指定多个条目，请用管道符分隔：条目甲|条目乙',
								'如指定多個條目，請用管道符分隔：條目甲|條目乙'
							)
						}}
					</template>
					<cdx-text-input
						:model-value="getSubgroupText('mergeTarget')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('mergeTarget', $event)"
					/>
				</cdx-field>
				<cdx-checkbox
					:model-value="getSubgroupCheck('mergeTagOther', true)"
					:disabled="submitting"
					:title="uls('仅在只输入了一个条目名时可用', '僅在只輸入了一個條目名時可用')"
					@update:model-value="setSubgroupValue('mergeTagOther', $event)"
				>
					{{ mergeTagOtherLabel }}
				</cdx-checkbox>
				<cdx-field v-if="isMainspace">
					<template #label>{{ mergeReasonLabel }}</template>
					<cdx-text-area
						:model-value="getSubgroupText('mergeReason')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('mergeReason', $event)"
					/>
				</cdx-field>
			</template>
			<cdx-field v-if="selectedTags.includes('Missing information')">
				<template #label>{{ uls('缺少的内容（必填）：', '缺少的內容（必填）：') }}</template>
				<template #description>{{
					uls('必填，显示为“缺少有关……的信息。”', '必填，顯示為「缺少有關……的資訊。」')
				}}</template>
				<cdx-text-input
					:model-value="getSubgroupText('missingInformation')"
					:disabled="submitting"
					@update:model-value="setSubgroupValue('missingInformation', $event)"
				/>
			</cdx-field>
			<cdx-field v-if="selectedTags.includes('Notability')">
				<template #label>{{ uls('关注度类型：', '關注度類型：') }}</template>
				<cdx-select
					:selected="getSubgroupText('notability', 'none')"
					:menu-items="notabilityOptions"
					:disabled="submitting"
					@update:selected="setSubgroupValue('notability', $event)"
				/>
			</cdx-field>
			<template v-if="selectedTags.includes('Requested move')">
				<cdx-field>
					<template #label>{{ uls('新名称：', '新名稱：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('moveTarget')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('moveTarget', $event)"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{
						uls('移动理由（会被粘贴该条目的讨论页）：', '移動理由（會被貼上該條目的討論頁）：')
					}}</template>
					<cdx-text-area
						:model-value="getSubgroupText('moveReason')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('moveReason', $event)"
					/>
				</cdx-field>
			</template>
			<template v-if="selectedTags.includes('Split')">
				<cdx-field v-for="index in [1, 2, 3]" :key="index">
					<template #label>{{ uls(`页面名${index}：`, `頁面名${index}：`) }}</template>
					<cdx-text-input
						:model-value="getSubgroupText(`target${index}`)"
						:disabled="submitting"
						@update:model-value="setSubgroupValue(`target${index}`, $event)"
					/>
				</cdx-field>
			</template>
			<cdx-field v-if="selectedTags.includes('Cleanup')">
				<template #label>{{ uls('需要清理的理由', '需要清理的理由') }}</template>
				<cdx-text-input
					:model-value="getSubgroupText('cleanupReason')"
					:disabled="submitting"
					@update:model-value="setSubgroupValue('cleanupReason', $event)"
				/>
			</cdx-field>
			<cdx-checkbox v-model="groupByDefault" :disabled="submitting" :title="groupTooltip">
				{{ groupLabel }}
			</cdx-checkbox>
		</template>

		<template v-else-if="mode === 'file'">
			<div class="tw-tag-workarea">
				<template v-for="loopGroup in filteredFileGroups" :key="loopGroup.key">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
							<a
								:href="templateLink(item.tag)"
								target="_blank"
								rel="noopener noreferrer"
								class="tw-tag-template-link"
								@click.stop
							>
								&gt;
							</a>
						</cdx-checkbox>
						<cdx-field v-if="item.buildFilename && selectedTags.includes(item.tag)">
							<template #label>{{ uls('替换的文件：', '替換的檔案：') }}</template>
							<template #description>
								{{ uls('输入替换此文件的文件名称（必填）', '輸入替換此檔案的檔案名稱（必填）') }}
							</template>
							<cdx-text-input
								:model-value="getSubgroupText(`${item.tag.replace(/ /g, '_')}File`)"
								:disabled="submitting"
								@update:model-value="setSubgroupValue(`${item.tag.replace(/ /g, '_')}File`, $event)"
							/>
						</cdx-field>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
				<template v-for="loopGroup in filteredCustomGroups" :key="`custom-${loopGroup.key}`">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
						</cdx-checkbox>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
			</div>
		</template>

		<template v-else>
			<div class="tw-tag-workarea">
				<template v-for="loopGroup in filteredRedirectGroups" :key="loopGroup.key">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
							<a
								:href="templateLink(item.tag)"
								target="_blank"
								rel="noopener noreferrer"
								class="tw-tag-template-link"
								@click.stop
							>
								&gt;
							</a>
						</cdx-checkbox>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
				<template v-for="loopGroup in filteredCustomGroups" :key="`custom-${loopGroup.key}`">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
						</cdx-checkbox>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
			</div>
		</template>

		<template v-if="mode === 'article'">
			<cdx-field>
				<template #label>理由：</template>
				<template #description>
					{{
						uls(
							'附加于编辑摘要的可选理由，例如指出条目内容的哪些部分有问题或移除模板的理由，但若理由很长则应该发表在讨论页。',
							'附加於編輯摘要的可選理由，例如指出條目內容的哪些部分有問題或移除模板的理由，但若理由很長則應該發表在討論頁。'
						)
					}}
				</template>
				<cdx-text-input v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>
		<cdx-checkbox v-if="showPatrol" v-model="patrol" :disabled="submitting">
			{{ uls('标记页面为已巡查', '標記頁面為已巡查') }}
		</cdx-checkbox>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-tag-workarea {
	max-height: 28em;
	overflow-y: auto;
	margin-bottom: 0.5em;

	h5 {
		font-size: 110%;
		margin: 0.25em 0;

		&:not(:first-child) {
			margin-top: 1em;
		}
	}
}

.tw-tag-subgroup {
	margin-left: 1em;
}

.tw-tag-template-link {
	margin-left: 0.25em;
	text-decoration: none;
}

.tw-tag-untagnotice {
	margin-bottom: 0.5em;
}

.tw-tag-sort-tooltip {
	display: block;
	font-size: 90%;
	color: #555;
}
</style>
