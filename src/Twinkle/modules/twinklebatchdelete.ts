/*! Twinkle.js - twinklebatchdelete.ts */
import {Morebits, type MorebitsWikiApi, type MutableTitle} from './ui/morebits';
import type {PageItem, TwStatusExposed} from './ui/types';
import {createApp, h, reactive} from 'vue';
import TwBatchDeleteDialog from './ui/TwBatchDeleteDialog.vue';
import {UTC8_OFFSET_MINUTES} from './utils/utc8';
import {uls} from './utils/useUls';

/**
 * twinklebatchdelete.ts: Batch delete module (sysops only)
 * Mode of invocation: Tab ("D-batch")
 * Active on: Existing non-articles, and Special:PrefixIndex
 *
 * Deletion/unlinking logic (`evaluate`, `callbacks`) lives in
 * `ui/TwBatchDeleteDialog.vue`; this file provides the module entry, the
 * page-list loading and the deletion reason data.
 */
interface DeleteReasonOption {
	label: string;
	value: string;
}

interface TwinkleBatchDeleteModule {
	(): void;
	callback: () => void;
	deletereasonlist: DeleteReasonOption[];
}

const dialogInstance: {current: TwStatusExposed | null} = {current: null};

declare const Twinkle: {
	addInitCallback(func: () => void, name?: string): void;
	addPortletLink(task: string | (() => void), text: string, id: string, tooltip?: string): void;
	getPref: {
		(key: 'batchChunks' | 'batchMax'): string;
		(key: string): string | boolean;
	};
	batchdelete?: TwinkleBatchDeleteModule;
};

const twinklebatchdelete = ((): void => {
	if (
		Morebits.userIsSysop &&
		((mw.config.get('wgCurRevisionId') && mw.config.get('wgNamespaceNumber') > 0) ||
			mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex' ||
			mw.config.get('wgCanonicalSpecialPageName') === 'BrokenRedirects')
	) {
		Twinkle.addPortletLink(
			twinklebatchdelete.callback,
			uls('批删', '批刪'),
			'tw-batch',
			uls('删除此分类或页面中的所有链接', '刪除此分類或頁面中的所有連結')
		);
	}
}) as TwinkleBatchDeleteModule;

twinklebatchdelete.callback = () => {
	const root = document.createElement('div');
	document.body.append(root);
	const listData = reactive({
		pages: [] as PageItem[],
		loaded: false,
		subpagesLoading: false,
	});
	const app = createApp({
		render: () => {
			return h(TwBatchDeleteDialog, {
				ref: (instance: unknown) => {
					dialogInstance.current = (instance as TwStatusExposed) ?? null;
				},
				title: uls('批量删除', '批次刪除'),
				reasonList: twinklebatchdelete.deletereasonlist,
				appendPunctuation: Morebits.string.appendPunctuation,
				list: listData,
				footerLinks: [
					{
						text: uls('Twinkle帮助', 'Twinkle說明'),
						href: mw.util.getUrl('H:TW/DOC#batchdelete'),
					},
				],
				onLoadSubpages: (titles: string[]) => {
					listData.subpagesLoading = true;
					const subpageLister = new Morebits.batchOperation();
					subpageLister.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
					subpageLister.setPageList(titles);
					subpageLister.run(
						(pageName) => {
							const pageTitle = mw.Title.newFromText(pageName) as MutableTitle | null;
							if (!pageTitle) {
								subpageLister.workerSuccess(pageName);
								return;
							}
							// No need to look for subpages in main/file/mediawiki space
							if ([0, 6, 8].includes(pageTitle.namespace)) {
								subpageLister.workerSuccess(pageName);
								return;
							}
							const subpageApi = new Morebits.wiki.api(
								uls('正在获取 ', '正在取得 ') + pageName + uls(' 的子页面', ' 的子頁面'),
								{
									action: 'query',
									prop: 'revisions|info|imageinfo',
									generator: 'allpages',
									rvprop: 'size',
									inprop: 'protection',
									gapprefix: `${pageTitle.title}/`,
									gapnamespace: pageTitle.namespace,
									gaplimit: 'max',
									// Not used by API, but added for access in onSuccess()
									pageNameFull: pageName,
								},
								(apiobj: MorebitsWikiApi) => {
									const xml = apiobj.getResponse() as unknown as XMLDocument;
									const $pages = $(xml).find('page');
									const subpageList: PageItem[] = [];
									$pages.each((_index, page) => {
										const $page = $(page);
										const ns = $page.attr('ns');
										const title = $page.attr('title');
										const isRedir = $page.attr('redirect') === '';
										const $editprot = $page.find('pr[type="edit"][level="sysop"]');
										const isProtected = $editprot.length > 0;
										const size = $page.find('rev').attr('size');
										const metadata: string[] = [];
										if (isRedir) {
											metadata[metadata.length] = 'redirect';
										}
										if (isProtected) {
											metadata[metadata.length] =
												uls('全保护，', '全保護，') +
												($editprot.attr('expiry') === 'infinity'
													? uls('无限期', '無限期')
													: `${new Morebits.date($editprot.attr('expiry') ?? '').calendar(
															UTC8_OFFSET_MINUTES
														)} (UTC+8)`) +
												uls('过期', '過期');
										}
										if (ns === '6') {
											// mimic what delimages used to show for files
											metadata[metadata.length] = `${
												uls('上传者：', '上傳者：') + $page.find('ii').attr('user')
											}，${uls('最后编辑：', '最後編輯：')}${$page.find('rev').attr('user')}`;
										} else {
											metadata[metadata.length] =
												mw.language.convertNumber(Number(size ?? 0)) + uls('字节', '位元組');
										}
										subpageList[subpageList.length] = {
											title: title ?? '',
											label: (title ?? '') + (metadata.length ? ` (${metadata.join('; ')})` : ''),
											isProtected,
										};
									});
									if (subpageList.length) {
										const item = listData.pages.find((pageItem) => {
											return pageItem.title === apiobj.query['pageNameFull'];
										});
										if (item) {
											item.subpages = subpageList;
										}
									}
									subpageLister.workerSuccess(pageName);
								},
								undefined /* statusElement */,
								() => {
									subpageLister.workerFailure();
								}
							);
							subpageApi.post();
						},
						() => {
							listData.subpagesLoading = false;
						}
					);
				},
				onClose: () => {
					app.unmount();
					root.remove();
				},
			});
		},
	});
	app.mount(root);
	// Init Morebits.status in the dialog before the page list arrives
	const statusRoot = dialogInstance.current?.getStatusRoot() ?? null;
	if (statusRoot) {
		Morebits.status.init(statusRoot);
	}
	const query: Record<string, unknown> = {
		action: 'query',
		prop: 'revisions|info|imageinfo',
		inprop: 'protection',
		rvprop: 'size|user',
	};
	// On categories
	if (mw.config.get('wgNamespaceNumber') === 14) {
		query['generator'] = 'categorymembers';
		query['gcmtitle'] = mw.config.get('wgPageName');
		query['gcmlimit'] = Twinkle.getPref('batchMax');
		// On Special:PrefixIndex
	} else if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex') {
		query['generator'] = 'allpages';
		query['gaplimit'] = Twinkle.getPref('batchMax');
		if (mw.util.getParamValue('prefix')) {
			query['gapnamespace'] = mw.util.getParamValue('namespace');
			query['gapprefix'] = mw.util.getParamValue('prefix');
		} else {
			let pathSplit = decodeURIComponent(location.pathname).split('/');
			if (pathSplit.length < 3 || pathSplit[2] !== 'Special:前缀索引') {
				return;
			}
			const titleSplit = (pathSplit[3] ?? '').split(':');
			query['gapnamespace'] = mw.config.get('wgNamespaceIds')[titleSplit[0]?.toLowerCase() ?? ''];
			if (titleSplit.length < 2 || query['gapnamespace'] === undefined) {
				query['gapnamespace'] = 0; // article namespace
				query['gapprefix'] = pathSplit.splice(3).join('/');
			} else {
				pathSplit = pathSplit.splice(4);
				pathSplit.splice(0, 0, titleSplit.splice(1).join(':'));
				query['gapprefix'] = pathSplit.join('/');
			}
		}
		// On Special:BrokenRedirects
	} else if (mw.config.get('wgCanonicalSpecialPageName') === 'BrokenRedirects') {
		query['generator'] = 'querypage';
		query['gqppage'] = 'BrokenRedirects';
		query['gqplimit'] = Twinkle.getPref('batchMax');
		// On normal pages
	} else {
		query['generator'] = 'links';
		query['titles'] = mw.config.get('wgPageName');
		query['gpllimit'] = Twinkle.getPref('batchMax');
	}
	const qiuwen_api = new Morebits.wiki.api(uls('加载中…', '載入中…'), query, (apiobj: MorebitsWikiApi) => {
		const xml = apiobj.getResponse() as unknown as XMLDocument;
		const $pages = $(xml).find('page').filter(':not([missing])'); // :not([imagerepository="shared"])
		$pages.each((_index, page) => {
			const $page = $(page);
			const ns = $page.attr('ns');
			const title = $page.attr('title');
			const isRedir = $page.attr('redirect') === '';
			const $editprot = $page.find('pr[type="edit"][level="sysop"]');
			const isProtected = $editprot.length > 0;
			const size = $page.find('rev').attr('size');
			const metadata: string[] = [];
			if (isRedir) {
				metadata[metadata.length] = uls('重定向', '重新導向');
			}
			if (isProtected) {
				metadata[metadata.length] =
					uls('全保护，', '全保護，') +
					($editprot.attr('expiry') === 'infinity'
						? uls('无限期', '無限期')
						: `${new Morebits.date($editprot.attr('expiry') ?? '').calendar(
								UTC8_OFFSET_MINUTES
							)} (UTC+8)`) +
					uls('过期', '過期');
			}
			if (ns === '6') {
				// mimic what delimages used to show for files
				metadata[metadata.length] = `${
					uls('上传者：', '上傳者：') + $page.find('ii').attr('user')
				}，${uls('最后编辑：', '最後編輯：')}${$page.find('rev').attr('user')}`;
			} else {
				metadata[metadata.length] = mw.language.convertNumber(Number(size ?? 0)) + uls('字节', '位元組');
			}
			listData.pages.push({
				title: title ?? '',
				label: (title ?? '') + (metadata.length ? `（${metadata.join('，')}）` : ''),
				isProtected,
			});
		});
		listData.loaded = true;
		// The page-list query is done; drop the transient status messages
		dialogInstance.current?.clear();
	});
	qiuwen_api.statelem.status(uls('加载中……', '載入中……'));
	qiuwen_api.post();
};

twinklebatchdelete.deletereasonlist = [
	{
		label: uls('请选择', '請選擇'),
		value: '',
	},
	{
		label: uls(
			'G6：原作者提请删除或清空页面，且页面原作者仅有一人',
			'G6：原作者提請刪除或清空頁面，且頁面原作者僅有一人'
		),
		value: uls(
			'[[QW:CSD#G6|G6]]：原作者提请删除或清空页面，且页面原作者仅有一人',
			'[[QW:CSD#G6|G6]]：原作者提請刪除或清空頁面，且頁面原作者僅有一人'
		),
	},
	{
		label: uls(
			'G9：孤立页面，比如没有主页面的讨论页、指向空页面的重定向等',
			'G9：孤立頁面，比如沒有主頁面的討論頁、指向空頁面的重新導向等'
		),
		value: uls('[[QW:CSD#G9|G9]]：孤立页面', '[[QW:CSD#G9|G9]]：孤立頁面'),
	},
	{
		label: uls('R1：不能发挥实际作用的重定向。', 'R1：不能發揮實際作用的重定向。'),
		value: uls('[[QW:CSD#R1|R1]]：不能发挥实际作用的重定向。', '[[QW:CSD#R1|R1]]：不能發揮實際作用的重定向。'),
	},
	{
		label: uls(
			'R2：名称与导向目标代表事物不一致或不完全一致的重定向。',
			'R2：名稱與導向目標代表事物不一致或不完全一致的重定向。'
		),
		value: uls(
			'[[QW:CSD#R2|R2]]：名称与导向目标代表事物不一致或不完全一致的重定向。',
			'[[QW:CSD#R2|R2]]：名稱與導向目標代表事物不一致或不完全一致的重定向。'
		),
	},
	{
		label: uls('F4：可被替代的合理使用文件', 'F4：可被替代的合理使用檔案'),
		value: uls('[[QW:CSD#F4|F4]]：可被替代的合理使用文件', '[[QW:CSD#F4|F4]]：可被替代的合理使用檔案'),
	},
	{
		label: uls(
			'F5：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件',
			'F5：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案'
		),
		value: uls(
			'[[QW:CSD#F5|F5]]：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件',
			'[[QW:CSD#F5|F5]]：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案'
		),
	},
	{
		label: uls('O1：用户请求删除自己的用户页或其子页面', 'O1：使用者請求刪除自己的使用者頁面或其子頁面'),
		value: uls(
			'[[QW:CSD#O1|O1]]：用户请求删除自己的[[Help:用户页|用户页]]或其子页面。',
			'[[QW:CSD#O1|O1]]：使用者請求刪除自己的[[Help:用户页|使用者頁面]]或其子頁面。'
		),
	},
	{
		label: uls('O2：空的分类（没有条目也没有子分类）', 'O2：空的分類（沒有條目也沒有子分類）'),
		value: uls(
			'[[QW:CSD#O2|O2]]：空的分类（没有条目也没有子分类）。',
			'[[QW:CSD#O2|O2]]：空的分類（沒有條目也沒有子分類）。'
		),
	},
	{
		label: uls('O3：废弃草稿', 'O3：廢棄草稿'),
		value: uls('[[QW:CSD#O3|O3]]：废弃草稿。', '[[QW:CSD#O3|O3]]：廢棄草稿。'),
	},
];

Twinkle.batchdelete = twinklebatchdelete;
Twinkle.addInitCallback(twinklebatchdelete, 'batchdelete');

export {};
