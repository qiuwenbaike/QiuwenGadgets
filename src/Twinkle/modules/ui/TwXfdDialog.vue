<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, CdxTextArea, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

/** Parameters carried through the nomination workers. */
interface XfdParams {
	category: string;
	notify: boolean;
	noinclude: boolean;
	xfdcat: string;
	mergeinto: string;
	xfdreason: string;
	fwdcsdreason: string;
	// set during evaluate
	logpage?: string;
	lognomination?: boolean;
	// set by the lookupCreation workers
	creator?: string | null;
}

const props = defineProps<{
	title: string;
	defaultCategory: 'afd' | 'ffd';
	showFwdCsd: boolean;
	initialXfdCat: string;
	rememberCategory: boolean;
	fameDefaultReason: string;
	substubDefaultReason: string;
	fwdcsdReason: string;
	showNoinclude: boolean;
	noincludeDisabled: boolean;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const category = ref<'afd' | 'ffd'>(props.defaultCategory);
const notify = ref(true);
const noinclude = ref(props.showNoinclude);
const xfdcat = ref(props.initialXfdCat);
const mergeinto = ref('');
const fwdcsdreason = ref('');
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const initialReason = (() => {
	switch (props.initialXfdCat) {
		case 'fwdcsd':
			return props.fwdcsdReason;
		case 'fame':
			return props.fameDefaultReason;
		case 'substub':
			return props.substubDefaultReason;
		default:
			return '';
	}
})();
const xfdreason = ref(initialReason);

const categoryItems: MenuItemData[] = [
	{value: 'afd', label: uls('页面存废讨论', '頁面存廢討論')},
	{value: 'ffd', label: uls('文件存废讨论', '檔案存廢討論')},
];

const xfdcatItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [
		{value: 'delete', label: uls('删除', '刪除')},
		{value: 'merge', label: uls('合并', '合併')},
	];
	if (props.showFwdCsd) {
		items.push({value: 'fwdcsd', label: uls('转交自快速删除候选', '轉交自快速刪除候選')});
	}
	items.push(
		{value: 'fame', label: uls('批量关注度提删', '批次關注度提刪')},
		{value: 'substub', label: uls('批量小小作品提删', '批次小小作品提刪')},
		{value: 'batch', label: uls('批量其他提删', '批次其他提刪')}
	);
	return items;
});

const showXfdcat = computed(() => category.value === 'afd');
const showNoincludeField = computed(() => category.value === 'afd');
const showMergeinto = computed(() => category.value === 'afd' && ['merge', 'fwdcsd'].includes(xfdcat.value));
const showFwdcsdReason = computed(() => category.value === 'afd' && xfdcat.value === 'fwdcsd');
const mergeintoLabel = computed(() => (xfdcat.value === 'fwdcsd' ? '提交人：' : uls('合并到：', '合併到：')));
const noincludeLabel = uls('使用<noinclude>包裹模板', '使用<noinclude>包裹模板');

// Faithful port of Twinkle.xfd.callback.change_afd_category.
watch(xfdcat, () => {
	switch (xfdcat.value) {
		case 'fwdcsd':
			xfdreason.value = props.fwdcsdReason;
			break;
		case 'fame':
			xfdreason.value = props.fameDefaultReason;
			break;
		case 'substub':
			xfdreason.value = props.substubDefaultReason;
			break;
		default:
			break;
	}
	if (props.rememberCategory) {
		mw.storage.set('Twinkle_afdCategory', xfdcat.value);
	}
});

// Faithful port of the reset at the end of Twinkle.xfd.callback.change_category.
watch(category, () => {
	notify.value = true;
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
	evaluate(
		{
			category: category.value,
			notify: notify.value,
			noinclude: noinclude.value,
			xfdcat: xfdcat.value,
			mergeinto: mergeinto.value.trim(),
			xfdreason: xfdreason.value,
			fwdcsdreason: fwdcsdreason.value,
		},
		statusRef.value?.getStatusRoot() ?? null,
		() => {
			submitting.value = false;
		}
	);
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

// Faithful port of Twinkle.xfd.callbacks / .callback.evaluate from here on

const callbacks = {
	afd: {
		main: (taggingPage: MorebitsWikiPage): void => {
			const params = taggingPage.getCallbackParameters() as XfdParams;
			callbacks.afd.taggingArticle(taggingPage);
			// Adding discussion
			const discussionPage = new Morebits.wiki.page(
				params.logpage ?? '',
				uls('加入讨论到当日列表', '加入討論到當日列表')
			);
			discussionPage.setFollowRedirect(true);
			discussionPage.setCallbackParameters(params);
			discussionPage.load(callbacks.afd.todaysList);
			// Notification to first contributor
			if (params.notify) {
				// Disallow warning yourself
				if (params.creator === mw.config.get('wgUserName')) {
					Morebits.status.warn(
						`${uls('通知页面创建者（', '通知頁面建立者（') + params.creator}）`,
						uls('您创建了该页，跳过通知', '您建立了該頁，跳過通知')
					);
					params.creator = null;
				} else {
					const talkPageName = `User talk:${params.creator}`;
					const usertalkpage = new Morebits.wiki.page(
						talkPageName,
						`${uls('通知页面创建者（', '通知頁面建立者（') + params.creator}）`
					);
					const notifytext = '\n{{'.concat('subst:').concat(`AFDNote|${Morebits.pageNameNorm}}}——~~`, '~~');
					usertalkpage.setAppendText(notifytext);
					usertalkpage.setEditSummary(`通知：页面[[${Morebits.pageNameNorm}]]存废讨论提名`);
					usertalkpage.setChangeTags(Twinkle.changeTags);
					usertalkpage.setCreateOption('recreate');
					usertalkpage.setWatchlist(Twinkle.getPref('xfdWatchUser'));
					usertalkpage.setFollowRedirect(true, false);
					usertalkpage.append();
				}
				// add this nomination to the user's userspace log, if the user has enabled it
				if (params.lognomination) {
					addToLog(params, params.creator ?? null);
				}
				// or, if not notifying, add this nomination to the user's userspace log without the initial contributor's name
			} else if (params.lognomination) {
				addToLog(params, null);
			}
		},
		taggingArticle: (pageobj: MorebitsWikiPage): void => {
			let text = pageobj.getPageText() ?? '';
			const params = pageobj.getCallbackParameters() as XfdParams;
			let tag = `{{vfd|${Morebits.string.formatReasonText(params.xfdreason)}`;
			if (Morebits.isPageRedirect()) {
				tag += '|r';
			}
			tag += '|date={{'.concat('subst:', '#time:Y/m/d}}}}');
			if (params.noinclude) {
				tag = `<noinclude>${tag}</noinclude>`;
				// 只有表格需要单独加回车，其他情况加回车会破坏模板。
				if (text.indexOf('{|') === 0) {
					tag += '\n';
				}
			} else {
				tag += '\n';
			}
			// Then, test if there are speedy deletion-related templates on the article.
			const textNoSd = text.replace(
				/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
				''
			);
			if (
				text !== textNoSd &&
				confirm(uls('在页面上找到快速删除模板，要移除吗？', '在頁面上找到快速刪除模板，要移除嗎？'))
			) {
				text = textNoSd;
			}
			const textNoNotMandarin = text.replace(
				/\{\{\s*(NotMandarin|Notchinese|非中文|非現代漢語|非现代汉语|非現代標準漢語|非现代标准汉语)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
				''
			);
			if (
				text !== textNoNotMandarin &&
				confirm(uls('在页面上找到非现代标准汉语模板，要移除吗？', '在頁面上找到非現代標準漢語模板，要移除嗎？'))
			) {
				text = textNoNotMandarin;
			}
			const textNoAfc = text.replace(/{{\s*AFC submission\s*\|\s*\|[^}]*?}}\s*/gi, '');
			if (
				text !== textNoAfc &&
				confirm(uls('在页面上找到AFC提交模板，要移除吗？', '在頁面上找到AFC提交模板，要移除嗎？'))
			) {
				text = textNoAfc;
			}
			// Mark the page as patrolled, if wanted
			if (Twinkle.getPref('markXfdPagesAsPatrolled')) {
				pageobj.patrol();
			}
			// Insert tag after short description or any hatnotes
			const qiuwen_page = new Morebits.wikitext.page(text);
			text = qiuwen_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
			pageobj.setPageText(text);
			pageobj.setEditSummary(
				`${uls('页面存废讨论：[[', '頁面存廢討論：[[') + params.logpage}#${Morebits.pageNameNorm}]]`
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('xfdWatchPage'));
			pageobj.save();
		},
		todaysList: (pageobj: MorebitsWikiPage): void => {
			let text = pageobj.getPageText() ?? '';
			const params = pageobj.getCallbackParameters() as XfdParams;
			let type = '';
			let to = '';
			switch (params.xfdcat) {
				case 'fwdcsd':
				case 'merge':
					to = params.mergeinto;
					break;
				default:
					break;
			}
			type = params.xfdcat;
			let append = true;
			switch (type) {
				case 'fame':
				case 'substub':
				case 'batch': {
					const commentText = `<!-- Twinkle: User:${mw.config.get(
						'wgUserName'
					)} 的 ${type} 提删插入点，请勿更改或移除此行，除非不再于此页面提删 -->`;
					let newText = `===[[:${Morebits.pageNameNorm}]]===`;
					if (type === 'fame') {
						newText += `\n{{Findsources|${Morebits.pageNameNorm}}}`;
					}
					if (text.includes(commentText)) {
						text = text.replace(commentText, `${newText}\n\n${commentText}`);
						pageobj.setPageText(text);
						append = false;
					} else {
						const headings: Record<string, string> = {
							fame: '== 30天后仍挂有{{tl|notability}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:notability|不符收录标准模板]]30天）</span>',
							substub:
								'== 30天后仍挂有{{tl|substub}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:substub|小小条目模板]]30天）</span>',
							batch: '== 批量提删 ==',
						};
						const subjects: Record<string, string> = {
							fame: '<u>不符合收录标准</u>条目',
							substub: '<u>长度过短</u>条目',
							batch: '页面',
						};
						const appendText = `\n{{safesubst:SafeAfdHead}}\n${
							headings[type]
						}\n${newText}\n\n${commentText}\n----\n:建议：删除前述页面；理由：${Morebits.string.formatReasonText(
							params.xfdreason
						)}\n提报以上${subjects[type]}的求闻编者及时间：<br id="no-new-title">~~`.concat('~~');
						pageobj.setAppendText(appendText);
					}
					break;
				}
				default:
					pageobj.setAppendText(
						'\n{{'.concat(
							'subst:',
							`DRItem|Type=${type}|DRarticles=${
								Morebits.pageNameNorm
							}|Reason=${Morebits.string.formatReasonText(params.xfdreason)}${
								params.fwdcsdreason.trim() === '' ? '' : `<br>\n转交理由：${params.fwdcsdreason}`
							}|To=${to}}}~~`.concat('~~')
						)
					);
					break;
			}
			pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('xfdWatchDiscussion'));
			pageobj.setCreateOption('recreate');
			if (append) {
				pageobj.append();
			} else {
				pageobj.save();
			}
			Twinkle.xfd!.currentRationale = null;
		},
		lookupCreation: (targetPage: MorebitsWikiPage): void => {
			targetPage.getStatusElement().info('完成');
			const params = targetPage.getCallbackParameters() as XfdParams;
			params.creator = targetPage.getCreator();
			// Tagging page
			const taggingPage = new Morebits.wiki.page(
				mw.config.get('wgPageName') ?? '',
				uls('加入存废讨论模板到页面', '加入存廢討論模板到頁面')
			);
			taggingPage.setFollowRedirect(false);
			taggingPage.setCallbackParameters(params);
			taggingPage.load(callbacks.afd.tryTagging);
		},
		tryTagging: (taggingPage: MorebitsWikiPage): void => {
			const statelem = taggingPage.getStatusElement();
			// defaults to /doc for lua modules, which may not exist
			if (!taggingPage.exists()) {
				statelem.error(uls('页面不存在，可能已被删除', '頁面不存在，可能已被刪除'));
				return;
			}
			const text = taggingPage.getPageText() ?? '';
			const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
			if (
				xfd &&
				!confirm(
					uls('删除相关模板{{', '刪除相關模板{{') +
						(xfd[1] ?? '') +
						uls('}}已被置于页面中，您是否仍想继续提报？', '}}已被置於頁面中，您是否仍想繼續提報？')
				)
			) {
				statelem.error(uls('页面已被提交至存废讨论。', '頁面已被提交至存廢討論。'));
				return;
			}
			const copyvio = /(?:\{\{\s*(copyvio)[^{}]*?\}\})/i.exec(text);
			if (copyvio) {
				statelem.error(uls('页面中已有著作权验证模板。', '頁面中已有著作權驗證模板。'));
				return;
			}
			callbacks.afd.main(taggingPage);
		},
	},
};

const ffdCallbacks = {
	main: (taggingPage: MorebitsWikiPage): void => {
		const params = taggingPage.getCallbackParameters() as XfdParams;
		ffdCallbacks.taggingImage(taggingPage);
		// Adding discussion
		const qiuwen_page = new Morebits.wiki.page(
			params.logpage ?? '',
			uls('加入讨论到当日列表', '加入討論到當日列表')
		);
		qiuwen_page.setFollowRedirect(true);
		qiuwen_page.setCallbackParameters(params);
		qiuwen_page.load(ffdCallbacks.todaysList);
		// Notification to first contributor
		if (params.notify) {
			// Disallow warning yourself
			if (params.creator === mw.config.get('wgUserName')) {
				Morebits.status.warn(
					`${uls('通知页面创建者（', '通知頁面建立者（') + params.creator}）`,
					uls('您创建了该页，跳过通知', '您建立了該頁，跳過通知')
				);
				return;
			}
			const talkPageName = `User talk:${params.creator}`;
			const usertalkpage = new Morebits.wiki.page(
				talkPageName,
				`${uls('通知页面创建者（', '通知頁面建立者（') + params.creator}）`
			);
			const notifytext = '\n{{'.concat('subst:', `idw|File:${mw.config.get('wgTitle') ?? ''}}}`, '——~~', '~~');
			usertalkpage.setAppendText(notifytext);
			usertalkpage.setEditSummary(`通知：文件[[${Morebits.pageNameNorm}]]存废讨论提名`);
			usertalkpage.setChangeTags(Twinkle.changeTags);
			usertalkpage.setCreateOption('recreate');
			usertalkpage.setWatchlist(Twinkle.getPref('xfdWatchUser'));
			usertalkpage.setFollowRedirect(true, false);
			usertalkpage.append();
			// add this nomination to the user's userspace log, if the user has enabled it
			if (params.lognomination) {
				addToLog(params, params.creator ?? null);
			}
			// or, if not notifying, add this nomination to the user's userspace log without the initial contributor's name
		} else if (params.lognomination) {
			addToLog(params, null);
		}
	},
	taggingImage: (pageobj: MorebitsWikiPage): void => {
		const text = pageobj.getPageText() ?? '';
		const params = pageobj.getCallbackParameters() as XfdParams;
		pageobj.setPageText(
			`{{ifd|${Morebits.string.formatReasonText(params.xfdreason)}|date={{`.concat(
				'subst:',
				`#time:c}}}}\n${text}`
			)
		);
		pageobj.setEditSummary(
			`${uls('文件存废讨论：[[', '檔案存廢討論：[[') + params.logpage}#${Morebits.pageNameNorm}]]`
		);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('xfdWatchPage'));
		pageobj.setCreateOption('recreate'); // it might be possible for a file to exist without a description page
		pageobj.save();
	},
	todaysList: (pageobj: MorebitsWikiPage): void => {
		// const text = pageobj.getPageText();
		const params = pageobj.getCallbackParameters() as XfdParams;
		pageobj.setAppendText(
			'\n{{'.concat(
				'subst:',
				`IfdItem|Filename=${mw.config.get('wgTitle') ?? ''}|Uploader=${
					params.creator
				}|Reason=${Morebits.string.formatReasonText(params.xfdreason)}}}——~~`.concat('~~')
			)
		);
		pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('xfdWatchDiscussion'));
		pageobj.setCreateOption('recreate');
		pageobj.append(() => {
			Twinkle.xfd!.currentRationale = null; // any errors from now on do not need to print the rationale, as it is safely saved on-wiki
		});
	},

	lookupCreation: (targetPage: MorebitsWikiPage): void => {
		targetPage.getStatusElement().info('完成');
		const params = targetPage.getCallbackParameters() as XfdParams;
		params.creator = targetPage.getCreator();
		// Tagging file
		const taggingPage = new Morebits.wiki.page(
			mw.config.get('wgPageName') ?? '',
			uls('加入存废讨论模板到文件描述页', '加入存廢討論模板到檔案描述頁')
		);
		taggingPage.setFollowRedirect(false);
		taggingPage.setCallbackParameters(params);
		taggingPage.load(ffdCallbacks.tryTagging);
	},
	tryTagging: (taggingPage: MorebitsWikiPage): void => {
		const statelem = taggingPage.getStatusElement();
		if (!taggingPage.exists()) {
			statelem.error(uls('页面不存在，可能已被删除', '頁面不存在，可能已被刪除'));
			return;
		}
		const text = taggingPage.getPageText() ?? '';
		const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
		if (
			xfd &&
			!confirm(
				uls('删除相关模板{{', '刪除相關模板{{') +
					(xfd[1] ?? '') +
					uls('}}已被置于页面中，您是否仍想继续提报？', '}}已被置於頁面中，您是否仍想繼續提報？')
			)
		) {
			statelem.error(uls('页面已被提交至存废讨论。', '頁面已被提交至存廢討論。'));
			return;
		}
		ffdCallbacks.main(taggingPage);
	},
};

const addToLog = (params: XfdParams, initialContrib: string | null): void => {
	const editsummary =
		uls('记录对[[', '記錄對[[') + Morebits.pageNameNorm + uls(']]的存废讨论提名', ']]的存廢討論提名');
	const usl = new Morebits.userspaceLogger(Twinkle.getPref('xfdLogPageName'));
	usl.initialText = uls(
		`这是该用户使用[[H:TW|Twinkle]]的提删模块做出的[[QW:XFD|存废讨论]]提名列表。\n\n若您不再想保留此日志，请在[[${Twinkle.getPref(
			'configPage'
		)}|参数设置]]中关掉，并使用[[QW:CSD#O1|CSD O1]]提交快速删除。`,
		`這是該使用者使用[[H:TW|Twinkle]]的提刪模塊做出的[[QW:XFD|存廢討論]]提名列表。\n\n若您不再想保留此日誌，請在[[${Twinkle.getPref(
			'configPage'
		)}|偏好設定]]中關掉，並使用[[QW:CSD#O1|CSD O1]]提交快速刪除。`
	);
	let xfdCatName;
	switch (params.xfdcat) {
		case 'delete':
			xfdCatName = uls('删除', '刪除');
			break;
		case 'merge':
			xfdCatName = uls('合并到', '合併到');
			break;
		case 'fwdcsd':
			xfdCatName = uls('转交自快速删除候选', '轉交自快速刪除候選');
			break;
		case 'fame':
			xfdCatName = uls('批量关注度提删', '批次關注度提刪');
			break;
		case 'substub':
			xfdCatName = uls('批量小小作品提删', '批次小小作品提刪');
			break;
		case 'batch':
			xfdCatName = uls('批量其他提删', '批次其他提刪');
			break;
		default:
			xfdCatName = uls('文件存废讨论', '檔案存廢討論');
			break;
	}
	// If a logged file is deleted but exists on remote repo, the wikilink will be blue, so provide a link to the log
	let appendText = `# [[:${Morebits.pageNameNorm}]]`;
	if (mw.config.get('wgNamespaceNumber') === 6) {
		appendText += `（[{{fullurl:Special:Log|page=${mw.util.wikiUrlencode(
			mw.config.get('wgPageName') ?? ''
		)}}} ${uls('日志', '日誌')}]）`;
	}
	appendText += `：${xfdCatName}`;
	if (params.xfdcat === 'merge') {
		appendText += `[[:${params.mergeinto}]]`;
	}
	appendText += '。';
	if (params.xfdreason) {
		appendText += `'''${
			params.xfdcat === 'fwdcsd' ? uls('原删除理据', '原刪除理據') : uls('理据', '理據')
		}'''：${Morebits.string.formatReasonForLog(params.xfdreason)}`;
		appendText = Morebits.string.appendPunctuation(appendText);
	}
	if (params.fwdcsdreason) {
		appendText += `'''${
			params.xfdcat === 'fwdcsd' ? uls('转交理据', '轉交理據') : uls('理据', '理據')
		}'''：${Morebits.string.formatReasonForLog(params.fwdcsdreason)}`;
		appendText = Morebits.string.appendPunctuation(appendText);
	}
	if (initialContrib) {
		appendText += `；通知{{user|${initialContrib}}}`;
	}
	appendText += ' ~~'.concat('~~', '~\n');
	usl.changeTags = Twinkle.changeTags as unknown as string;
	usl.log(appendText, editsummary);
};

const evaluate = (params: XfdParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	if (params.xfdcat === 'merge' && params.mergeinto.trim() === '') {
		void mw.notify(uls('请提供合并目标！', '請提供合併目標！'), {
			type: 'warn',
			tag: 'twinklexfd',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	Twinkle.xfd!.currentRationale = params.xfdreason;
	Morebits.status.onError(Twinkle.xfd!.printRationale);
	if (!params.category) {
		Morebits.status.error('错误', '未定义的动作');
		if (restore) {
			restore();
		}
		return;
	}
	const date = new Morebits.date(); // XXX: avoid use of client clock, still used by TfD, FfD and CfD
	switch (params.category) {
		case 'afd': {
			// AFD
			params.logpage = `Qiuwen_talk:存废讨论/记录/${date.format('YYYY/MM/DD', 'utc')}`;
			params.lognomination =
				Twinkle.getPref('logXfdNominations') === true &&
				!Twinkle.getPref('noLogOnXfdNomination').includes(params.xfdcat);
			Morebits.wiki.addCheckpoint();
			// Updating data for the action completed event
			Morebits.wiki.actionCompleted.redirect = params.logpage;
			Morebits.wiki.actionCompleted.notice = uls('提名完成，重定向到讨论页', '提名完成，重新導向到討論頁');
			// Lookup creation
			const targetPage = new Morebits.wiki.page(
				mw.config.get('wgPageName') ?? '',
				uls('获取页面创建信息', '取得頁面建立資訊')
			);
			targetPage.setCallbackParameters(params);
			if (mw.config.get('wgPageContentModel') === 'wikitext') {
				targetPage.setLookupNonRedirectCreator(true); // Look for author of first non-redirect revision
			}

			targetPage.lookupCreation(callbacks.afd.lookupCreation);
			Morebits.wiki.removeCheckpoint();
			break;
		}
		case 'ffd': {
			// FFD
			params.logpage = `Qiuwen_talk:存废讨论/记录/${date.format('YYYY/MM/DD', 'utc')}`;
			params.lognomination =
				Twinkle.getPref('logXfdNominations') === true &&
				!Twinkle.getPref('noLogOnXfdNomination').includes('ffd');
			Morebits.wiki.addCheckpoint();
			// Updating data for the action completed event
			Morebits.wiki.actionCompleted.redirect = params.logpage;
			Morebits.wiki.actionCompleted.notice = uls('提名完成，重定向到讨论页', '提名完成，重新導向到討論頁');
			// Lookup creation
			const qiuwen_page = new Morebits.wiki.page(
				mw.config.get('wgPageName') ?? '',
				uls('获取页面创建信息', '取得頁面建立資訊')
			);
			qiuwen_page.setCallbackParameters(params);
			qiuwen_page.setLookupNonRedirectCreator(true); // Look for author of first non-redirect revision
			qiuwen_page.lookupCreation(ffdCallbacks.lookupCreation);
			Morebits.wiki.removeCheckpoint();
			break;
		}
		default:
			void mw.notify('twinklexfd：未定义的类别', {
				type: 'warn',
				tag: 'twinklexfd',
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
		<cdx-field>
			<template #label>{{ uls('提交类型：', '提交類別：') }}</template>
			<cdx-select v-model:selected="category" :menu-items="categoryItems" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="notify" :disabled="submitting">
			{{ uls('如可能，通知页面创建者', '如可能，通知頁面建立者') }}
		</cdx-checkbox>
		<cdx-field v-if="showXfdcat" is-fieldset>
			<template #label>{{ uls('页面存废讨论', '頁面存廢討論') }}</template>
			<cdx-checkbox v-if="showNoincludeField" v-model="noinclude" :disabled="submitting || noincludeDisabled">
				{{ noincludeLabel }}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('选择提删类型：', '選擇提刪類別：') }}</template>
				<cdx-select v-model:selected="xfdcat" :menu-items="xfdcatItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showMergeinto">
				<template #label>{{ mergeintoLabel }}</template>
				<cdx-text-input v-model="mergeinto" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('提删理由：', '提刪理由：') }}</template>
				<cdx-text-area v-model="xfdreason" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showFwdcsdReason">
				<template #label>{{ uls('转交理由：', '轉交理由：') }}</template>
				<cdx-text-area v-model="fwdcsdreason" :disabled="submitting" />
			</cdx-field>
		</cdx-field>
		<cdx-field v-else is-fieldset>
			<template #label>{{ uls('文件存废讨论', '檔案存廢討論') }}</template>
			<cdx-field>
				<template #label>{{ uls('提删理由：', '提刪理由：') }}</template>
				<cdx-text-area v-model="xfdreason" :disabled="submitting" />
			</cdx-field>
		</cdx-field>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>
