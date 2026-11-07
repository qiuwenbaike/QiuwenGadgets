<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {
	Morebits,
	type MorebitsBatchOperation,
	type MorebitsWikiApi,
	type MorebitsWikiApiWithParams,
	type MorebitsWikiPage,
	type MutableTitle,
	newParamsApi,
} from './morebits';
import type {PageItem, TwStatusExposed} from './types';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from '../utils/useUls';
import {useShiftClick} from '../utils/useShiftClick';

declare const Twinkle: {
	changeTags: string[];
	getPref: {
		(key: 'batchChunks'): string;
		(key: string): string | boolean;
	};
};

interface BatchDeleteListData {
	pages: PageItem[];
	loaded: boolean;
	subpagesLoading: boolean;
}

interface BatchDeleteParams {
	reason: string;
	pages: string[];
	subpages: string[];
	protectedCount: number;
	delete_page: boolean;
	delete_talk: boolean;
	delete_redirects: boolean;
	delete_subpages: boolean;
	delete_subpage_redirects: boolean;
	delete_subpage_talks: boolean;
	unlink_subpages: boolean;
	unlink_page: boolean;
	unlink_file: boolean;
}

/** Parameters carried through the deletion/unlinking workers. */
interface BatchDeleteWorkerParams {
	page: string;
	delete_page: boolean;
	delete_talk: boolean;
	delete_redirects: boolean;
	unlink_page: boolean;
	unlink_file: boolean;
	reason: string;
	pageDeleter: MorebitsBatchOperation;
	title?: string;
	unlinker?: MorebitsBatchOperation;
	talkPage?: string;
}

const props = defineProps<{
	title: string;
	reasonList: {
		value: string;
		label: string;
	}[];
	appendPunctuation: (text: string) => string;
	list: BatchDeleteListData;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	loadSubpages: [titles: string[]];
	close: [];
}>();

const open = ref(true);
const deletePage = ref(true);
const deleteTalk = ref(true);
const deleteRedirects = ref(true);
const deleteSubpages = ref(false);
const deleteSubpageTalks = ref(false);
const deleteSubpageRedirects = ref(false);
const unlinkSubpages = ref(false);
const unlinkPage = ref(false);
const unlinkFile = ref(true);
const commonReason = ref('');
const reason = ref('');
const selectedPages = ref<string[]>([]);
const selectedSubpages = ref<string[]>([]);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

// Exposed so the module entry can init Morebits.status before the page
// list arrives (the original accessed `dialogInstance?.exposed`, which
// was never populated by the dialog)
defineExpose({
	getStatusRoot: (): HTMLElement | null => {
		return statusRef.value?.getStatusRoot() ?? null;
	},
	clear: (): void => {
		statusRef.value?.clear();
	},
});
const {onShiftClick: onMainShiftClick} = useShiftClick();
const subpageShiftClickers = new Map<string, ReturnType<typeof useShiftClick>>();

const getSubpageShiftClick = (pageTitle: string) => {
	if (!subpageShiftClickers.has(pageTitle)) {
		subpageShiftClickers.set(pageTitle, useShiftClick());
	}
	return subpageShiftClickers.get(pageTitle)!.onShiftClick;
};

const reasonItems = computed<MenuItemData[]>(() =>
	props.reasonList.map((item) => ({value: item.value, label: item.label}))
);

// Select everything when the main list arrives.
watch(
	() => props.list.pages,
	(list) => {
		selectedPages.value = list.map((item) => item.title);
	}
);

// Auto-select subpages when they are loaded.
watch(
	() => props.list.pages.map((item) => item.subpages),
	() => {
		for (const page of props.list.pages) {
			if (page.subpages) {
				for (const subpage of page.subpages) {
					if (!selectedSubpages.value.includes(subpage.title)) {
						selectedSubpages.value = [...selectedSubpages.value, subpage.title];
					}
				}
			}
		}
	},
	{deep: true}
);

// Faithful port of Twinkle.batchdelete.callback.toggleSubpages: when enabling
// subpage deletion, sync the sub-options with the main options.
watch(deleteSubpages, (checked) => {
	if (checked) {
		deleteSubpageRedirects.value = deleteRedirects.value;
		deleteSubpageTalks.value = deleteTalk.value;
		unlinkSubpages.value = unlinkPage.value;
		const titlesToLoad = props.list.pages
			.filter((item) => selectedPages.value.includes(item.title) && !item.subpages)
			.map((item) => item.title);
		if (titlesToLoad.length > 0) {
			emit('loadSubpages', titlesToLoad);
		}
	}
});

// Faithful port of Twinkle.batchdelete.callback.change_common_reason.
watch(commonReason, (value) => {
	if (!value) {
		return;
	}
	if (reason.value !== '') {
		reason.value = props.appendPunctuation(reason.value);
	}
	reason.value += value;
	commonReason.value = '';
});

const protectedCount = computed(
	() => props.list.pages.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length
);

const onToggle = (kind: 'pages' | 'subpages', value: string, modelValue: string[] | boolean) => {
	const target = kind === 'pages' ? selectedPages : selectedSubpages;
	if (Array.isArray(modelValue)) {
		target.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		target.value = [...target.value, value];
	} else {
		target.value = target.value.filter((item) => item !== value);
	}
};

const selectAll = () => {
	selectedPages.value = props.list.pages.map((item) => item.title);
	if (deleteSubpages.value) {
		for (const page of props.list.pages) {
			if (page.subpages) {
				for (const subpage of page.subpages) {
					if (!selectedSubpages.value.includes(subpage.title)) {
						selectedSubpages.value = [...selectedSubpages.value, subpage.title];
					}
				}
			}
		}
		const titlesToLoad = props.list.pages.filter((item) => !item.subpages).map((item) => item.title);
		if (titlesToLoad.length > 0) {
			emit('loadSubpages', titlesToLoad);
		}
	}
};

const selectNone = () => {
	selectedPages.value = [];
	selectedSubpages.value = [];
};

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (!reason.value.trim()) {
		void mw.notify(uls('您需要给出一个理由', '您需要給出一個理由'), {
			type: 'warn',
			tag: 'twinklebatchdelete',
		});
		return;
	}
	if (selectedPages.value.length === 0) {
		void mw.notify(uls('请至少选择一个页面。', '請至少選擇一個頁面。'), {
			type: 'warn',
			tag: 'twinklebatchdelete',
		});
		return;
	}
	submitting.value = true;
	evaluate(
		{
			reason: reason.value.trim(),
			pages: [...selectedPages.value],
			subpages: [...selectedSubpages.value],
			protectedCount: protectedCount.value,
			delete_page: deletePage.value,
			delete_talk: deleteTalk.value,
			delete_redirects: deleteRedirects.value,
			delete_subpages: deleteSubpages.value,
			delete_subpage_redirects: deleteSubpageRedirects.value,
			delete_subpage_talks: deleteSubpageTalks.value,
			unlink_subpages: unlinkSubpages.value,
			unlink_page: unlinkPage.value,
			unlink_file: unlinkFile.value,
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

// Faithful port of Twinkle.batchdelete.callbacks / .callback.evaluate from here on

// Cache of fetched page texts shared by the unlink workers, invalidated
// at the start of each backlink-unlinking run
let unlinkCache: Record<string, string> = {};

const callbacks = {
	doExtras: (thingWithParameters: MorebitsWikiApi | MorebitsWikiPage): void => {
		const pageobj =
			thingWithParameters instanceof Morebits.wiki.api
				? (thingWithParameters.parent as MorebitsWikiPage)
				: thingWithParameters;
		const params = pageobj.getCallbackParameters() as BatchDeleteWorkerParams;
		// the initial batch operation's job is to delete the page, and that has
		// succeeded by now
		params.pageDeleter.workerSuccess(pageobj);
		let query: Record<string, unknown>;
		if (params.unlink_page) {
			unlinkCache = {};
			query = {
				action: 'query',
				list: 'backlinks',
				blfilterredir: 'nonredirects',
				blnamespace: [0],
				bltitle: params.page,
				bllimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
			};
			const qiuwen_api = newParamsApi(uls('正在获取链入', '正在取得連入'), query, callbacks.unlinkBacklinksMain);
			qiuwen_api.params = params;
			qiuwen_api.post();
		}
		if (params.unlink_file) {
			query = {
				action: 'query',
				list: 'imageusage',
				iutitle: params.page,
				iulimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
			};
			const qiuwen_api = newParamsApi(
				uls('正在获取文件链入', '正在取得檔案連入'),
				query,
				callbacks.unlinkImageInstancesMain
			);
			qiuwen_api.params = params;
			qiuwen_api.post();
		}
		if (params.delete_page) {
			if (params.delete_redirects) {
				query = {
					action: 'query',
					titles: params.page,
					prop: 'redirects',
					rdlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				};
				const qiuwen_api = newParamsApi(
					uls('正在获取重定向', '正在取得重新導向'),
					query,
					callbacks.deleteRedirectsMain
				);
				qiuwen_api.params = params;
				qiuwen_api.post();
			}
			if (params.delete_talk) {
				const pageTitle = mw.Title.newFromText(params.page) as MutableTitle | null;
				if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
					pageTitle.namespace++; // now pageTitle is the talk page title!
					query = {
						action: 'query',
						titles: pageTitle.toText(),
					};
					const qiuwen_api = newParamsApi(
						uls('正在检查讨论页面是否存在', '正在檢查討論頁面是否存在'),
						query,
						callbacks.deleteTalk
					);
					qiuwen_api.params = params;
					qiuwen_api.params.talkPage = pageTitle.toText();
					qiuwen_api.post();
				}
			}
		}
	},
	deleteRedirectsMain: (apiobj: MorebitsWikiApiWithParams<BatchDeleteWorkerParams>): void => {
		const xml = apiobj.getResponse() as unknown as XMLDocument;
		const pages = $(xml)
			.find('rd')
			.map((_index, element) => {
				return $(element).attr('title');
			})
			.get()
			.filter((title): title is string => !!title);
		if (!pages.length) {
			return;
		}
		const redirectDeleter = new Morebits.batchOperation(
			uls('正在删除到 ', '正在刪除到 ') + apiobj.params.page + uls(' 的重定向', ' 的重新導向')
		);
		redirectDeleter.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
		redirectDeleter.setPageList(pages);
		redirectDeleter.run((pageName) => {
			const qiuwen_page = new Morebits.wiki.page(pageName, uls('正在删除 ', '正在刪除 ') + pageName);
			qiuwen_page.setEditSummary(
				`[[QW:CSD#G9|G9]]: ${uls('指向已删页面“', '指向已刪頁面「')}${apiobj.params.page}${uls(
					'”的重定向',
					'」的重新導向'
				)}`
			);
			qiuwen_page.setChangeTags(Twinkle.changeTags);
			qiuwen_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
		});
	},
	deleteTalk: (apiobj: MorebitsWikiApiWithParams<BatchDeleteWorkerParams>): void => {
		const xml = apiobj.getResponse() as unknown as XMLDocument;
		const exists = $(xml).find('page:not([missing])').length > 0;
		if (!exists) {
			// no talk page; forget about it
			return;
		}
		const page = new Morebits.wiki.page(
			apiobj.params.talkPage ?? '',
			uls('正在删除页面 ', '正在刪除頁面 ') + apiobj.params.page + uls(' 的讨论页', ' 的討論頁')
		);
		page.setEditSummary(
			`[[QW:CSD#G9|G9]]: ${uls('已删页面“', '已刪頁面「')}${apiobj.params.page}${uls(
				'”的[[Help:讨论页|讨论页]]',
				'」的[[Help:討論頁|討論頁]]'
			)}`
		);
		page.setChangeTags(Twinkle.changeTags);
		page.deletePage();
	},
	unlinkBacklinksMain: (apiobj: MorebitsWikiApiWithParams<BatchDeleteWorkerParams>): void => {
		const xml = apiobj.getResponse() as unknown as XMLDocument;
		const pages = $(xml)
			.find('bl')
			.map((_index, element) => {
				return $(element).attr('title');
			})
			.get()
			.filter((title): title is string => !!title);
		if (!pages.length) {
			return;
		}
		const unlinker = new Morebits.batchOperation(`正在取消到 ${apiobj.params.page}${uls(' 的链入', ' 的連入')}`);
		unlinker.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
		unlinker.setPageList(pages);
		unlinker.run((pageName) => {
			const qiuwen_page = new Morebits.wiki.page(
				pageName,
				`正在取消 ${pageName}${uls(' 上的链入', ' 上的連入')}`
			);
			const params: BatchDeleteWorkerParams = {
				...apiobj.params,
			};
			params.title = pageName;
			params.unlinker = unlinker;
			qiuwen_page.setCallbackParameters(params);
			qiuwen_page.load(callbacks.unlinkBacklinks);
		});
	},
	unlinkBacklinks: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as BatchDeleteWorkerParams;
		const unlinker = params.unlinker;
		if (!unlinker) {
			return;
		}
		if (!pageobj.exists()) {
			// we probably just deleted it, as a recursive backlink
			unlinker.workerSuccess(pageobj);
			return;
		}
		let text;
		if (params.title !== undefined && params.title in unlinkCache) {
			text = unlinkCache[params.title] ?? '';
		} else {
			text = pageobj.getPageText() ?? '';
		}
		const old_text = text;
		const wikitextPage = new Morebits.wikitext.page(text);
		text = wikitextPage.removeLink(params.page).getText();
		if (params.title !== undefined) {
			unlinkCache[params.title] = text;
		}
		if (text === old_text) {
			// Nothing to do, return
			unlinker.workerSuccess(pageobj);
			return;
		}
		pageobj.setEditSummary(uls('取消到已删页面', '取消到已刪頁面') + params.page + uls('的链入', '的連入'));
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setPageText(text);
		pageobj.setCreateOption('nocreate');
		pageobj.setMaxConflictRetries(10);
		pageobj.save(unlinker.workerSuccess, unlinker.workerFailure);
	},
	unlinkImageInstancesMain: (apiobj: MorebitsWikiApiWithParams<BatchDeleteWorkerParams>): void => {
		const xml = apiobj.getResponse() as unknown as XMLDocument;
		const pages = $(xml)
			.find('iu')
			.map((_index, element) => {
				return $(element).attr('title');
			})
			.get()
			.filter((title): title is string => !!title);
		if (!pages.length) {
			return;
		}
		const unlinker = new Morebits.batchOperation(`正在取消到 ${apiobj.params.page}${uls(' 的链入', ' 的連入')}`);
		unlinker.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
		unlinker.setPageList(pages);
		unlinker.run((pageName) => {
			const qiuwen_page = new Morebits.wiki.page(
				pageName,
				`取消 ${pageName}${uls(' 的文件使用', ' 的檔案使用')}`
			);
			const params: BatchDeleteWorkerParams = {
				...apiobj.params,
			};
			params.title = pageName;
			params.unlinker = unlinker;
			qiuwen_page.setCallbackParameters(params);
			qiuwen_page.load(callbacks.unlinkImageInstances);
		});
	},
	unlinkImageInstances: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as BatchDeleteWorkerParams;
		const unlinker = params.unlinker;
		if (!unlinker) {
			return;
		}
		if (!pageobj.exists()) {
			// we probably just deleted it, as a recursive backlink
			unlinker.workerSuccess(pageobj);
			return;
		}
		const image = params.page.replace(new RegExp(`^${Morebits.namespaceRegex(6)}:`), '');
		let text;
		if (params.title !== undefined && params.title in unlinkCache) {
			text = unlinkCache[params.title] ?? '';
		} else {
			text = pageobj.getPageText() ?? '';
		}
		const old_text = text;
		const wikitextPage = new Morebits.wikitext.page(text);
		text = wikitextPage.commentOutImage(image, uls('因文件已删，故注解', '因檔案已刪，故註解')).getText();
		if (params.title !== undefined) {
			unlinkCache[params.title] = text;
		}
		if (text === old_text) {
			pageobj
				.getStatusElement()
				.error(`在 ${pageobj.getPageName()} 上取消 ${image}${uls(' 的文件使用失败', ' 的檔案使用失敗')}`);
			unlinker.workerFailure();
			return;
		}
		pageobj.setEditSummary(
			uls('取消使用已被删除文件', '取消使用已被刪除檔案') + image + uls('，因为：', '，因為：') + params.reason
		);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setPageText(text);
		pageobj.setCreateOption('nocreate');
		pageobj.setMaxConflictRetries(10);
		pageobj.save(unlinker.workerSuccess, unlinker.workerFailure);
	},
};

const evaluate = (params: BatchDeleteParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	Morebits.wiki.actionCompleted.notice = uls('批量删除已完成', '批次刪除已完成');
	if (
		params.protectedCount > 0 &&
		!confirm(
			uls('您正要删除 ', '您正要刪除 ') +
				mw.language.convertNumber(params.protectedCount) +
				uls(' 个全保护页面，您确定吗？', ' 個全保護頁面，您確定嗎？')
		)
	) {
		if (restore) {
			restore();
		}
		return;
	}
	const {pages} = params;
	const {subpages} = params;
	const {reason} = params;
	const delete_page = params.delete_page;
	let delete_talk = false;
	let delete_redirects = false;
	let delete_subpages = false;
	let delete_subpage_redirects = false;
	let delete_subpage_talks = false;
	let unlink_subpages = false;
	if (delete_page) {
		delete_talk = params.delete_talk;
		delete_redirects = params.delete_redirects;
		delete_subpages = params.delete_subpages;
		if (delete_subpages) {
			delete_subpage_redirects = params.delete_subpage_redirects;
			delete_subpage_talks = params.delete_subpage_talks;
			unlink_subpages = params.unlink_subpages;
		}
	}
	const unlink_page = params.unlink_page;
	const unlink_file = params.unlink_file;
	if (!reason) {
		void mw.notify(uls('您需要给出一个理由', '您需要給出一個理由'), {
			type: 'warn',
			tag: 'twinklebatchdelete',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	if (pages.length === 0) {
		Morebits.status.error(uls('错误', '錯誤'), uls('没有要删除的内容，中止', '沒有要刪除的內容，中止'));
		if (restore) {
			restore();
		}
		return;
	}
	const pageDeleter = new Morebits.batchOperation(
		delete_page ? uls('正在删除页面', '正在刪除頁面') : uls('正在启动要求的任务', '正在啟動要求的任務')
	);
	pageDeleter.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
	// we only need the initial status lines if we're deleting the pages in the pages array
	pageDeleter.setOption('preserveIndividualStatusLines', delete_page);
	pageDeleter.setPageList(pages);
	pageDeleter.run(
		(pageName) => {
			const workerParams: BatchDeleteWorkerParams = {
				page: pageName,
				delete_page,
				delete_talk,
				delete_redirects,
				unlink_page,
				unlink_file: unlink_file && new RegExp(`^${Morebits.namespaceRegex(6)}:`, 'i').test(pageName),
				reason,
				pageDeleter,
			};
			const qiuwen_page = new Morebits.wiki.page(pageName, uls('正在删除页面 ', '正在刪除頁面 ') + pageName);
			qiuwen_page.setCallbackParameters(workerParams);
			if (delete_page) {
				qiuwen_page.setEditSummary(`${reason}（批量）`);
				qiuwen_page.setChangeTags(Twinkle.changeTags);
				qiuwen_page.suppressProtectWarning();
				qiuwen_page.deletePage(callbacks.doExtras, pageDeleter.workerFailure);
			} else {
				callbacks.doExtras(qiuwen_page);
			}
		},
		() => {
			if (delete_subpages) {
				const subpageDeleter = new Morebits.batchOperation(uls('正在删除子页面', '正在刪除子頁面'));
				subpageDeleter.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
				subpageDeleter.setOption('preserveIndividualStatusLines', true);
				subpageDeleter.setPageList(subpages);
				subpageDeleter.run((pageName) => {
					const workerParams: BatchDeleteWorkerParams = {
						page: pageName,
						delete_page: true,
						delete_talk: delete_subpage_talks,
						delete_redirects: delete_subpage_redirects,
						unlink_page: unlink_subpages,
						unlink_file: false,
						reason,
						pageDeleter: subpageDeleter,
					};
					const qiuwen_page = new Morebits.wiki.page(
						pageName,
						uls('正在删除子页面 ', '正在刪除子頁面 ') + pageName
					);
					qiuwen_page.setCallbackParameters(workerParams);
					qiuwen_page.setEditSummary(`${reason}（批量）`);
					qiuwen_page.setChangeTags(Twinkle.changeTags);
					qiuwen_page.suppressProtectWarning();
					qiuwen_page.deletePage(callbacks.doExtras, pageDeleter.workerFailure);
				});
			}
		}
	);
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
		<cdx-checkbox v-model="deletePage" :disabled="submitting">
			{{ uls('删除页面', '刪除頁面') }}
		</cdx-checkbox>
		<div v-if="deletePage" class="tw-dbatch-subgroup">
			<cdx-checkbox v-model="deleteTalk" :disabled="submitting">
				{{ uls('删除关联的讨论页（用户讨论页除外）', '刪除關聯的討論頁（使用者討論頁除外）') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="deleteRedirects" :disabled="submitting">
				{{ uls('删除到已删页面的重定向页', '刪除到已刪頁面的重新導向頁面') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="deleteSubpages" :disabled="submitting">
				{{ uls('删除已删页面的子页面', '刪除已刪頁面的子頁面') }}
			</cdx-checkbox>
			<div v-if="deleteSubpages" class="tw-dbatch-subgroup">
				<cdx-checkbox v-model="deleteSubpageTalks" :disabled="submitting">
					{{ uls('删除已删子页面的讨论页', '刪除已刪子頁面的討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="deleteSubpageRedirects" :disabled="submitting">
					{{ uls('删除到已删子页面的重定向页', '刪除到已刪子頁面的重新導向頁面') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="unlinkSubpages" :disabled="submitting">
					{{
						uls(
							'取消所有已删页面的链入（仅处理条目命名空间）',
							'取消所有已刪頁面的連入（僅處理條目命名空間）'
						)
					}}
				</cdx-checkbox>
			</div>
		</div>
		<cdx-checkbox v-model="unlinkPage" :disabled="submitting">
			{{ uls('取消链入（仅处理条目命名空间）', '取消連入（僅處理條目命名空間）') }}
		</cdx-checkbox>
		<cdx-checkbox v-model="unlinkFile" :disabled="submitting">
			{{ uls('移除文件使用（所有命名空间）', '移除檔案使用（所有命名空間）') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>常用理由：</template>
			<cdx-select v-model:selected="commonReason" :menu-items="reasonItems" :disabled="submitting" />
		</cdx-field>
		<cdx-field>
			<template #label>理由：</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="!list.loaded" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<h5>{{ uls('待删除页面', '待刪除頁面') }}</h5>
			<div class="tw-batch-actions">
				<cdx-button :disabled="submitting" weight="quiet" @click="selectAll">
					{{ uls('全选', '全選') }}
				</cdx-button>
				<cdx-button :disabled="submitting" weight="quiet" @click="selectNone">
					{{ uls('全不选', '全不選') }}
				</cdx-button>
			</div>
			<div v-if="list.subpagesLoading">{{ uls('加载中...', '載入中...') }}</div>
			<div @click="onMainShiftClick">
				<cdx-checkbox
					v-for="item in list.pages"
					:key="item.title"
					:model-value="selectedPages"
					:input-value="item.title"
					name="twinkle-batchdelete-pages"
					:disabled="submitting"
					@update:model-value="onToggle('pages', item.title, $event)"
				>
					<span :class="{'tw-batch-protected': item.isProtected}">{{ item.label }}</span>
				</cdx-checkbox>
			</div>
			<template v-if="deleteSubpages">
				<template v-for="item in list.pages" :key="`${item.title}-sub`">
					<div
						v-if="item.subpages && item.subpages.length > 0"
						class="tw-dbatch-subgroup"
						@click="getSubpageShiftClick(item.title)"
					>
						<cdx-checkbox
							v-for="subpage in item.subpages"
							:key="subpage.title"
							:model-value="selectedSubpages"
							:input-value="subpage.title"
							name="twinkle-batchdelete-subpages"
							:disabled="submitting"
							@update:model-value="onToggle('subpages', subpage.title, $event)"
						>
							<span :class="{'tw-batch-protected': subpage.isProtected}">
								{{ subpage.label }}
							</span>
						</cdx-checkbox>
					</div>
				</template>
			</template>
		</template>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-dbatch-subgroup {
	margin-left: 1.5em;
}

.tw-batch-protected {
	color: #f00;
}
</style>
