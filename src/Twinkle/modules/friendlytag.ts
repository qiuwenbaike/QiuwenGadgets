/*! Twinkle.js - friendlytag.ts */
import {createApp, h, reactive} from 'vue';
import TwTagDialog from './ui/TwTagDialog.vue';
import {uls} from './utils/useUls';

/**
 * friendlytag.ts: Tag module
 * Mode of invocation: Tab ("Tag")
 * Active on: Existing articles and drafts; file pages with a corresponding file
 * which is local (not on Share); all redirects
 *
 * Dialog rendering and the submission logic (`callbacks` and `evaluate`) live
 * in `ui/TwTagDialog.vue`; this file provides the module entry, the static tag
 * lists and the dialog data preparation.
 */
interface ArticleTagItem {
	tag: string;
	description: string;
	excludeMI?: boolean;
}

interface ArticleTagSubgroup {
	key: string;
	value: ArticleTagItem[];
}

interface ArticleTagGroup {
	key: string;
	value: ArticleTagSubgroup[] | ArticleTagItem[];
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

interface SubgroupItem {
	type: 'input' | 'textarea' | 'select' | 'checkbox';
	name?: string;
	label: string;
	tooltip?: string;
	size?: number;
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

interface RedirectTagItem {
	tag: string;
	description: string;
	subgroup?: SubgroupItem[];
}

interface RedirectTagGroup {
	key: string;
	value: RedirectTagItem[];
}

interface FileTagEntry {
	label: string;
	value: string;
	subgroup?: SubgroupItem[];
}

interface FileTagGroup {
	key: string;
	value: FileTagEntry[];
	buildFilename?: boolean;
}

interface TagGroup {
	key: string;
	items: {
		tag: string;
		label: string;
		subgroup?: SubgroupItem[];
		buildFilename?: boolean;
	}[];
}

interface CustomTagItem {
	value: string;
	label: string;
	subgroup?: SubgroupItem[];
}

interface TwinkleTagModule {
	(): void;
	callback: () => void;
}

declare const Twinkle: {
	addInitCallback: (func: () => void, name?: string) => void;
	addPortletLink: (task: string | (() => void), text: string, id: string, tooltip?: string) => void;
	getPref: (key: string) => string | boolean | CustomTagItem[];
	tag?: TwinkleTagModule;
};

const $body = $('body');
// Page mode, determined once at init and passed to the dialog as props
let modeEn: 'article' | 'file' | 'redirect' | undefined;
let canRemove = false;
// Holds the tags already present on the article, filled asynchronously below
const alreadyPresent = reactive<string[]>([]);

const friendlytag = (() => {
	// redirect tagging
	if (window.Morebits.isPageRedirect()) {
		modeEn = 'redirect';
		Twinkle.addPortletLink(
			friendlytag.callback,
			uls('标记', '標記'),
			'friendly-tag',
			uls('标记重定向', '標記重新導向')
		);
		// file tagging
	} else if (
		mw.config.get('wgNamespaceNumber') === 6 &&
		!document.querySelector('#mw-sharedupload') &&
		document.querySelector('#mw-imagepage-section-filehistory')
	) {
		modeEn = 'file';
		Twinkle.addPortletLink(friendlytag.callback, uls('标记', '標記'), 'friendly-tag', uls('标记文件', '標記檔案'));
		// article/draft tagging
	} else if (
		([0, 118].includes(mw.config.get('wgNamespaceNumber')) && mw.config.get('wgCurRevisionId')) ||
		window.Morebits.pageNameNorm === Twinkle.getPref('sandboxPage')
	) {
		modeEn = 'article';
		// Can't remove tags when not viewing current version
		canRemove =
			mw.config.get('wgCurRevisionId') === mw.config.get('wgRevisionId') &&
			// Disabled on latest diff because the diff slider could be used to slide
			// away from the latest diff without causing the script to reload
			!mw.config.get('wgDiffNewId');
		Twinkle.addPortletLink(friendlytag.callback, uls('标记', '標記'), 'friendly-tag', uls('标记条目', '標記條目'));
	}
}) as TwinkleTagModule;

friendlytag.callback = (): void => {
	if (!modeEn) {
		return;
	}
	const currentMode: 'article' | 'file' | 'redirect' = modeEn;
	const root = document.createElement('div');
	document.body.append(root);
	// Build sorting and lookup object flatObject, which is always
	// needed but also used to generate the alphabetical list
	const flatObject: Record<string, {description: string; excludeMI: boolean}> = {};
	for (const group of articleTagList) {
		for (const subgroup of group.value) {
			if ('value' in subgroup) {
				for (const item of subgroup.value) {
					flatObject[item.tag] = {
						description: item.description,
						excludeMI: !!item.excludeMI,
					};
				}
			} else {
				flatObject[subgroup.tag] = {
					description: subgroup.description,
					excludeMI: !!subgroup.excludeMI,
				};
			}
		}
	}
	const alphabeticalList = Object.keys(flatObject).sort();
	const articleGroups: ArticleGroup[] = articleTagList.map((group) => {
		const subgroups: ArticleGroup['subgroups'] = [];
		const first = group.value[0];
		if (first && 'tag' in first) {
			subgroups.push({
				key: null,
				items: group.value
					.filter((item): item is ArticleTagItem => 'tag' in item)
					.map((item) => {
						return {
							tag: item.tag,
							description: item.description,
						};
					}),
			});
		} else {
			for (const subgroup of group.value) {
				if ('value' in subgroup) {
					subgroups.push({
						key: subgroup.key,
						items: subgroup.value.map((item) => {
							return {
								tag: item.tag,
								description: item.description,
							};
						}),
					});
				}
			}
		}
		return {key: group.key, subgroups};
	});
	const alphaTags = alphabeticalList.map((tag) => {
		return {
			tag,
			description: flatObject[tag]?.description ?? '',
		};
	});
	const fileGroups: TagGroup[] = fileList.map((group) => {
		return {
			key: group.key,
			items: group.value.map((item) => {
				return {
					tag: item.value,
					label: item.label,
					...(item.subgroup ? {subgroup: item.subgroup} : {}),
					buildFilename: !!group.buildFilename,
				};
			}),
		};
	});
	const redirectGroups: TagGroup[] = redirectList.map((group) => {
		return {
			key: group.key,
			items: group.value.map((item) => {
				return {
					tag: item.tag,
					label: `{{${item.tag}}}：${item.description}`,
					...(item.subgroup ? {subgroup: item.subgroup} : {}),
				};
			}),
		};
	});
	const getCustomGroups = (prefKey: string): TagGroup[] => {
		const list = Twinkle.getPref(prefKey) as CustomTagItem[];
		return list.length
			? [
					{
						key: uls('自定义模板', '自訂模板'),
						items: list.map((el) => {
							return {
								tag: el.value,
								label: el.label,
								...(el.subgroup ? {subgroup: el.subgroup} : {}),
							};
						}),
					},
				]
			: [];
	};
	const customGroups =
		currentMode === 'article'
			? getCustomGroups('customTagList')
			: currentMode === 'file'
				? getCustomGroups('customFileTagList')
				: getCustomGroups('customRedirectTagList');
	let title: string;
	switch (currentMode) {
		case 'article':
			title = uls('条目维护标记', '條目維護標記');
			break;
		case 'file':
			title = uls('文件维护标记', '檔案維護標記');
			break;
		default:
			title = uls('重定向标记', '重新導向標記');
			break;
	}
	const app = createApp({
		render: () => {
			return h(TwTagDialog, {
				mode: currentMode,
				title,
				canRemove,
				isMainspace: mw.config.get('wgNamespaceNumber') === 0,
				initialSortOrder: Twinkle.getPref('tagArticleSortOrder') === 'alpha' ? 'alpha' : 'cat',
				initialGroup: !!Twinkle.getPref('groupByDefault'),
				showPatrol: !!document.querySelector('.patrollink'),
				initialPatrol: !!Twinkle.getPref('markTaggedPagesAsPatrolled'),
				articleGroups,
				alphaTags,
				alreadyPresentTags: alreadyPresent,
				flatDescriptions: Object.fromEntries(
					Object.entries(flatObject).map(([tag, info]) => {
						return [tag, info.description];
					})
				),
				flatExcludeMI: Object.fromEntries(
					Object.entries(flatObject).map(([tag, info]) => {
						return [tag, info.excludeMI];
					})
				),
				fileGroups,
				redirectGroups,
				customGroups,
				footerLinks: [
					{text: uls('标记设置', '標記設定'), href: mw.util.getUrl('H:TW/PREF#tag')},
					{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#tag')},
				],
				onClose: () => {
					app.unmount();
					root.remove();
				},
			});
		},
	});
	app.mount(root);
	if (currentMode === 'article') {
		const presentTags: string[] = [];
		if (canRemove) {
			// Look for existing maintenance tags in the lead section and put them in array
			// All tags are HTML table elements that are direct children of .mw-parser-output,
			// except when they are within {{multiple issues}}
			for (const e of $body.find('.mw-parser-output').children().toArray()) {
				// break out on encountering the first heading, which means we are no
				// longer in the lead section
				if (e.tagName === 'H2') {
					break;
				}
				// The ability to remove tags depends on the template's {{ambox}} |name=
				// parameter bearing the template's correct name (preferably) or a name that at
				// least redirects to the actual name
				// All tags have their first class name as "box-" + template name
				const boxClass = e.classList[0];
				if (boxClass && e.className.indexOf('box-') === 0) {
					if (boxClass === 'box-问题条目') {
						$(e)
							.find('.ambox')
							.each((_index, element) => {
								const amboxClass = element.classList[0];
								if (amboxClass && amboxClass.indexOf('box-') === 0) {
									const boxTag = amboxClass.slice('box-'.length).replace(/_/g, ' ');
									presentTags.push(boxTag);
								}
							});
						continue;
					}

					presentTags.push(boxClass.slice('box-'.length).replace(/_/g, ' '));
				}
			}
			// {{Uncategorized}} and {{Improve categories}} are usually placed at the end
			if (document.querySelectorAll('.box-Uncategorized').length) {
				presentTags.push('Uncategorized');
			}
			if (document.querySelectorAll('.box-Improve_categories').length) {
				presentTags.push('Improve categories');
			}
		}
		// Re-render the dialog with the discovered existing tags
		alreadyPresent.splice(0, alreadyPresent.length, ...presentTags);
	}
};

// Tags for ARTICLES start here
// Tags arranged by category; will be used to generate the alphabetical list,
// but tags should be in alphabetical order within the categories
// excludeMI: true indicate a tag that *does not* work inside {{multiple issues}}
// Add new categories with discretion - the list is long enough as is!
const articleTagList: ArticleTagGroup[] = [
	{
		key: uls('清理和维护模板', '清理和維護模板'),
		value: [
			{
				key: uls('常规清理', '常規清理'),
				value: [
					{
						tag: 'Cleanup',
						description: uls(
							'可能需要进行清理，以符合求闻百科的质量标准',
							'可能需要進行清理，以符合求聞百科的質量標準'
						),
					},
					{
						tag: 'Cleanup rewrite',
						description: uls(
							'不符合求闻百科的质量标准，需要完全重写',
							'不符合求聞百科的質量標準，需要完全重寫'
						),
					},
					{
						tag: 'Cleanup-jargon',
						description: uls(
							'包含过多行话或专业术语，可能需要简化或提出进一步解释',
							'包含過多行話或專業術語，可能需要簡化或提出進一步解釋'
						),
					},
					{
						tag: 'Copy edit',
						description: uls(
							'需要编修，以确保文法、用词、语气、格式、标点等使用恰当',
							'需要編修，以確保文法、用詞、語氣、格式、標點等使用恰當'
						),
					},
				],
			},
			{
				key: uls('可能多余的内容', '可能多餘的內容'),
				value: [
					{
						tag: 'Copypaste',
						description: uls('内容可能是从某个来源处拷贝后粘贴', '內容可能是從某個來源處拷貝後貼上'),
					},
					{
						tag: 'External links',
						description: uls(
							'使用外部链接的方式可能不符合求闻百科的方针',
							'使用外部連結的方式可能不符合求聞百科的方針'
						),
					},
					{
						tag: 'Non-free',
						description: uls(
							'可能过多或不当地使用了受著作权保护的文字、图像或多媒体文件',
							'可能過多或不當地使用了受版權保護的文字、圖像或多媒體檔案'
						),
					},
				],
			},
			{
				key: uls('结构和导言', '結構和導言'),
				value: [
					{
						tag: 'Lead too long',
						description: uls('导言部分也许过于冗长', '導言部分也許過於冗長'),
					},
					{
						tag: 'Lead too short',
						description: uls('导言部分也许不足以概括其内容', '導言部分也許不足以概括其內容'),
					},
					{
						tag: 'Very long',
						description: uls('可能过于冗长', '可能過於冗長'),
					},
				],
			},
			{
				key: uls('虚构作品相关清理', '虛構作品相關清理'),
				value: [
					{
						tag: 'In-universe',
						description: uls(
							'使用小说故事内的观点描述一个虚构事物',
							'使用小說故事內的觀點描述一個虛構事物'
						),
					},
					{
						tag: 'Long plot',
						description: uls('可能包含过于详细的剧情摘要', '可能包含過於詳細的劇情摘要'),
					},
				],
			},
		],
	},
	{
		key: uls('常规条目问题', '常規條目問題'),
		value: [
			{
				key: '重要性和知名度',
				value: [
					{
						tag: 'Notability',
						description: uls('可能不符合通用收录标准', '可能不符合通用收錄標準'),
						excludeMI: true,
					},
					{
						tag: 'Notability Unreferenced',
						description: uls(
							'可能具备收录标准，但需要来源加以彰显',
							'可能具備收錄標準，但需要來源加以彰顯'
						),
					},
				],
			},
			{
				key: uls('写作风格', '寫作風格'),
				value: [
					{
						tag: 'Advert',
						description: uls('类似广告或宣传性内容', '類似廣告或宣傳性內容'),
					},
					{
						tag: 'Fanpov',
						description: uls('类似爱好者网页', '類似愛好者網頁'),
					},
					{
						tag: 'How-to',
						description: uls('包含指南或教学内容', '包含指南或教學內容'),
					},
					{
						tag: 'Inappropriate person',
						description: uls('使用不适当的第一人称和第二人称', '使用不適當的第一人稱和第二人稱'),
					},
					{
						tag: 'Newsrelease',
						description: uls(
							'阅读起来像是新闻稿及包含过度的宣传性语调',
							'閱讀起來像是新聞稿及包含過度的宣傳性語調'
						),
					},
					{
						tag: 'Prose',
						description: uls(
							'使用了日期或时间列表式记述，需要改写为连贯的叙述性文字',
							'使用了日期或時間列表式記述，需要改寫為連貫的敘述性文字'
						),
					},
					{
						tag: 'Review',
						description: uls('阅读起来类似评论，需要清理', '閱讀起來類似評論，需要清理'),
					},
					{
						tag: 'Tone',
						description: uls(
							'语调或风格可能不适合百科全书的写作方式',
							'語調或風格可能不適合百科全書的寫作方式'
						),
					},
				],
			},
			{
				key: uls('内容', '內容'),
				value: [
					{tag: 'Missing information', description: '缺少必要的信息'}, // these three have a subgroup with several options
					{tag: 'Substub', description: uls('过于短小', '過於短小'), excludeMI: true},
					{
						tag: 'Unencyclopedic',
						description: uls('可能不适合写入百科全书', '可能不適合寫入百科全書'),
					},
				],
			},
			{
				key: uls('信息和细节', '資訊和細節'),
				value: [
					{
						tag: 'Expert needed',
						description: uls(
							'需要精通或熟悉本主题的专业人士（专家）参与及协助编辑',
							'需要精通或熟悉本主題的專業人士（專家）參與及協助編輯'
						),
					},
					{
						tag: 'Overly detailed',
						description: uls('包含太多过度细节内容', '包含太多過度細節內容'),
					},
					{
						tag: 'Trivia',
						description: uls('应避免有陈列杂项、琐碎资料的部分', '應避免有陳列雜項、瑣碎資料的部分'),
					},
				],
			},
			{
				key: uls('时间性', '時間性'),
				value: [
					{
						tag: 'Current',
						description: uls('记述新闻动态', '記述新聞動態'),
						excludeMI: true,
					},
					{
						tag: 'Update',
						description: uls('当前条目或章节需要更新', '當前條目或章節需要更新'),
					},
				],
			},
			{
				key: uls('客观性和事实准确性', '客觀性和事實準確性'),
				value: [
					{
						tag: 'Autobiography',
						description: uls(
							'类似一篇自传，或内容主要由条目描述的当事人或组织撰写、编辑',
							'類似一篇自傳，或內容主要由條目描述的當事人或組織撰寫、編輯'
						),
					},
					{
						tag: 'COI',
						description: uls(
							'主要贡献者与本条目所宣扬的内容可能存在利益冲突',
							'主要貢獻者與本條目所宣揚的內容可能存在利益衝突'
						),
					},
					{
						tag: 'Disputed',
						description: uls('内容疑欠准确，有待查证', '內容疑欠準確，有待查證'),
					},
					{
						tag: 'Globalize',
						description: uls('仅具有一部分地区的信息或观点', '僅具有一部分地區的資訊或觀點'),
					},
					{
						tag: 'Hoax',
						description: uls('真实性被质疑', '真實性被質疑'),
					},
					{
						tag: 'POV',
						description: uls(
							'客观性有争议。内容、语调可能带有明显的个人观点或地方色彩',
							'客觀性有爭議。內容、語調可能帶有明顯的個人觀點或地方色彩'
						),
					},
					{
						tag: 'Self-contradictory',
						description: uls('内容自相矛盾', '內容自相矛盾'),
					},
					{
						tag: 'Weasel',
						description: uls('语义模棱两可而损及其客观性或准确性', '語意模棱兩可而損及其客觀性或準確性'),
					},
				],
			},
			{
				key: uls('可供查证和来源', '可供查證和來源'),
				value: [
					{
						tag: 'BLPdispute',
						description: uls(
							'可能违反了求闻百科关于生者传记的方针',
							'可能違反了求聞百科關於生者傳記的方針'
						),
					},
					{
						tag: 'BLPsources',
						description: uls('生者传记需要补充更多可供查证的来源', '生者傳記需要補充更多可供查證的來源'),
					},
					{
						tag: 'BLP unsourced',
						description: uls('生者传记没有列出任何参考或来源', '生者傳記沒有列出任何參考或來源'),
					},
					{
						tag: 'Citecheck',
						description: uls(
							'可能包含不适用或被曲解的引用资料，部分内容的准确性无法被证实',
							'可能包含不適用或被曲解的引用資料，部分內容的準確性無法被證實'
						),
					},
					{
						tag: 'More footnotes needed',
						description: uls(
							'因为文内引用不足，部分字句的来源仍然不明',
							'因為文內引用不足，部分字句的來源仍然不明'
						),
					},
					{
						tag: 'No footnotes',
						description: uls('因为没有内文引用而来源仍然不明', '因為沒有內文引用而來源仍然不明'),
					},
					{
						tag: 'Onesource',
						description: uls('极大或完全地依赖于某个单一的来源', '極大或完全地依賴於某個單一的來源'),
					},
					{
						tag: 'Original research',
						description: uls('可能包含原创研究或未查证内容', '可能包含原創研究或未查證內容'),
					},
					{
						tag: 'Primarysources',
						description: uls('依赖第一手来源', '依賴第一手來源'),
					},
					{
						tag: 'Refimprove',
						description: uls('需要补充更多来源', '需要補充更多來源'),
					},
					{
						tag: 'Unreferenced',
						description: uls('没有列出任何参考或来源', '沒有列出任何參考或來源'),
					},
					{
						tag: 'Unreliable sources',
						description: uls('使用的来源可能不可靠', '使用的來源可能不可靠'),
					},
				],
			},
		],
	},
	{
		key: uls('具体内容问题', '具體內容問題'),
		value: [
			{
				key: uls('语言', '語言'),
				value: [
					{
						tag: 'NotMandarin',
						description: uls('包含过多不是现代标准汉语的内容', '包含過多不是現代標準漢語的內容'),
						excludeMI: true,
					},
					{
						tag: 'Rough translation',
						description: uls('翻译品质不佳', '翻譯品質不佳'),
					},
				],
			},
			{
				key: uls('链接', '連結'),
				value: [
					{
						tag: 'Dead end',
						description: uls(
							'需要加上内部链接以构筑百科全书的链接网络',
							'需要加上內部連結以構築百科全書的連結網絡'
						),
					},
					{
						tag: 'Orphan',
						description: uls('没有或只有很少链入页面', '沒有或只有很少連入頁面'),
					},
					{
						tag: 'Overlinked',
						description: uls('含有过多、重复、或不必要的内部链接', '含有過多、重複、或不必要的內部連結'),
					},
					{
						tag: 'Underlinked',
						description: uls(
							'需要更多内部链接以构筑百科全书的链接网络',
							'需要更多內部連結以構築百科全書的連結網絡'
						),
					},
				],
			},
			{
				key: uls('参考技术', '參考技術'),
				value: [
					{
						tag: 'Citation style',
						description: uls('引用需要进行清理', '引用需要進行清理'),
					},
				],
			},
			{
				key: uls('分类', '分類'),
				value: [
					{
						tag: 'Improve categories',
						description: uls('需要更多页面分类', '需要更多頁面分類'),
						excludeMI: true,
					},
					{
						tag: 'Uncategorized',
						description: uls('缺少页面分类', '缺少頁面分類'),
						excludeMI: true,
					},
				],
			},
		],
	},
	{
		key: uls('合并、拆分、移动', '合併、拆分、移動'),
		value: [
			{
				tag: 'Merge from',
				description: uls('建议将页面并入此页面', '建議將頁面併入此頁面'),
				excludeMI: true,
			},
			{
				tag: 'Merge to',
				description: uls('建议将此页面并入页面', '建議將此頁面併入頁面'),
				excludeMI: true,
			},
			{
				tag: 'Merge',
				description: uls('建议此页面与页面合并', '建議此頁面與頁面合併'),
				excludeMI: true,
			},
			{
				tag: 'Requested move',
				description: uls('建议将此页面移动到新名称', '建議將此頁面移動到新名稱'),
				excludeMI: true,
			},
			{
				tag: 'Split',
				description: uls('建议将此页面分割为多个页面', '建議將此頁面分割為多個頁面'),
				excludeMI: true,
			},
		],
	},
];

// Tags for REDIRECTS start here
// Not by policy, but the list roughly approximates items with >500
// transclusions from Template:R template index
const redirectList: RedirectTagGroup[] = [
	{
		key: '常用模板',
		value: [
			{
				tag: uls('合并重定向', '合併重定向'),
				description: uls(
					'保持页面题名至相应主条目，令页面内容在合并后仍能保存其编辑历史',
					'保持頁面題名至相應主條目，令頁面內容在合併後仍能儲存其編輯歷史'
				),
			},
			{
				tag: uls('简繁重定向', '簡繁重定向'),
				description: uls('引导简体至繁体，或繁体至简体', '引導簡體至繁體，或繁體至簡體'),
			},
			{
				tag: uls('收录标准重定向', '收錄標準重定向'),
				description: uls(
					'缺乏收录标准的子主题向有收录标准的母主题的重定向',
					'缺乏收錄標準的子主題向有收錄標準的母主題的重定向'
				),
			},
			{
				tag: '模板重定向',
				description: uls('指向模板的重定向页面', '指向模板的重定向頁面'),
			},
			{
				tag: uls('别名重定向', '別名重定向'),
				description: uls('标题的其他名称、笔名、绰号、同义字等', '標題的其他名稱、筆名、綽號、同義字等'),
			},
			{
				tag: uls('译名重定向', '譯名重定向'),
				description: uls('人物、作品等各项事物的其他翻译名称', '人物、作品等各項事物的其他翻譯名稱'),
			},
			{
				tag: uls('缩写重定向', '縮寫重定向'),
				description: uls('标题缩写', '標題縮寫'),
			},
			{
				tag: uls('拼写重定向', '拼寫重定向'),
				description: uls('标题的其他不同拼写', '標題的其他不同拼寫'),
			},
			{
				tag: uls('错字重定向', '錯字重定向'),
				description: uls('纠正标题的常见错误拼写或误植', '糾正標題的常見錯誤拼寫或誤植'),
			},
			{
				tag: uls('旧名重定向', '舊名重定向'),
				description: uls('将事物早前的名称引导至更改后的主题', '將事物早前的名稱引導至更改後的主題'),
			},
			{
				tag: '全名重定向',
				description: uls('标题的完整或更完整名称', '標題的完整或更完整名稱'),
			},
			{
				tag: '短名重定向',
				description: uls(
					'完整标题名称或人物全名的部分、不完整的名称或简称',
					'完整標題名稱或人物全名的部分、不完整的名稱或簡稱'
				),
			},
			{
				tag: '姓氏重定向',
				description: '人物姓氏',
			},
			{
				tag: '名字重定向',
				description: '人物人名',
			},
			{
				tag: '本名重定向',
				description: '人物本名',
			},
			{
				tag: '非中文重定向',
				description: uls('非中文标题', '非中文標題'),
				subgroup: [
					{
						name: 'altLangFrom',
						type: 'input',
						label: '本重新導向的語言（可選）',
						tooltip:
							'輸入重新導向名稱所使用語言的ISO 639代碼，例如en代表英語，代碼可參見 Template:ISO_639_name',
					},
				],
			},
			{
				tag: '日文重定向',
				description: uls('日语名称', '日語名稱'),
			},
		],
	},
	{
		key: '偶用模板',
		value: [
			{
				tag: '角色重定向',
				description: uls('电视剧、电影、书籍等作品的角色', '電視劇、電影、書籍等作品的角色'),
			},
			{
				tag: uls('章节重定向', '章節重定向'),
				description: uls('导向至较高密度组织的页面', '導向至較高密度組織的頁面'),
			},
			{
				tag: '列表重定向',
				description: uls('导向至低密度的列表', '導向至低密度的列表'),
			},
			{
				tag: '可能性重定向',
				description: uls('导向至当前提供内容更为详尽的目标页面', '導向至當前提供內容更為詳盡的目標頁面'),
			},
			{
				tag: uls('关联字重定向', '關聯字重定向'),
				description: uls('标题名称关联字', '標題名稱關聯字'),
			},
			{
				tag: uls('条目请求重定向', '條目請求重定向'),
				description: uls('需要独立条目的页面', '需要獨立條目的頁面'),
				subgroup: [
					{
						name: 'reqArticleLang',
						type: 'input',
						label: '外語語言代碼：',
						tooltip: '使用ISO 639代碼，可參見 Template:ISO_639_name',
					},
					{
						name: 'reqArticleTitle',
						type: 'input',
						label: '外語頁面名稱：',
						size: 60,
					},
				],
			},
			{
				tag: uls('快捷方式重定向', '捷徑重定向'),
				description: uls('求闻百科快捷方式', '求聞百科快捷方式'),
			},
		],
	},
	{
		key: uls('鲜用模板', '鮮用模板'),
		value: [
			{
				tag: uls('词组重定向', '詞組重定向'),
				description: uls(
					'将词组/词组/成语指向切题的条目及恰当章节',
					'將詞組/詞組/成語指向切題的條目及恰當章節'
				),
			},
			{
				tag: uls('消歧义页重定向', '消歧義頁重定向'),
				description: uls('指向消歧义页', '指向消歧義頁'),
			},
			{
				tag: '域名重定向',
				description: uls('域名', '網域名稱'),
			},
			{
				tag: '年代重定向',
				description: uls('于年份条目导向至年代条目', '於年份條目導向至年代條目'),
			},
			{
				tag: uls('用户框模板重定向', '用戶框模板重定向'),
				description: uls('用户框模板', '用戶框模板'),
			},
			{
				tag: '重定向模板用重定向',
				description: uls('导向至重定向模板', '導向至重定向模板'),
			},
			{
				tag: 'EXIF重定向',
				description: uls('JPEG图像文件包含EXIF信息', 'JPEG圖檔包含EXIF資訊'),
			},
		],
	},
];

// maintenance tags for FILES start here
const fileList: FileTagGroup[] = [
	{
		key: uls('著作权和来源问题标签', '著作權和來源問題標籤'),
		value: [
			{
				label: `{{Non-free reduce}}：${uls(
					'非低分辨率的合理使用图像（或过长的音频剪辑等）',
					'非低解析度的合理使用圖像（或過長的音頻剪輯等）'
				)}`,
				value: 'Non-free reduce',
			},
		],
	},
	{
		key: uls('清理标签', '清理標籤'),
		value: [
			{
				label: `{{Watermark}}：${uls('图像包含了水印', '圖像包含了浮水印')}`,
				value: 'Watermark',
			},
			{
				label: `{{Rename media}}：${uls(
					'文件应该根据文件使用方针重新命名',
					'檔案應該根據檔案使用方針重新命名'
				)}`,
				value: 'Rename media',
				subgroup: [
					{
						type: 'input',
						name: 'renamemediaNewname',
						label: uls('新名称：', '新名稱：'),
						tooltip: uls('输入图像的新名称（可选）', '輸入圖像的新名稱（可選）'),
					},
					{
						type: 'input',
						name: 'renamemediaReason',
						label: '原因：',
						tooltip: uls('输入重命名的原因（可选）', '輸入重新命名的原因（可選）'),
					},
				],
			},
			{
				label: `{{Should be SVG}}：${uls(
					'PNG、GIF、JPEG文件应该重制成矢量图形',
					'PNG、GIF、JPEG檔案應該重製成向量圖形'
				)}`,
				value: 'Should be SVG',
			},
		],
	},
	{
		key: uls('文件取代标签', '檔案取代標籤'),
		value: [
			{
				label: `{{Obsolete}}：${uls('有新版本可用的过时文件', '有新版本可用的過時檔案')}`,
				value: 'Obsolete',
			},
			{
				label: `{{Vector version available}}：${uls(
					'有矢量图形可用的非矢量图形文件',
					'有向量圖形可用的非向量圖形檔案'
				)}`,
				value: 'Vector version available',
			},
		],
		buildFilename: true,
	},
];

Twinkle.tag = friendlytag;
Twinkle.addInitCallback(friendlytag, 'tag');

export {};
