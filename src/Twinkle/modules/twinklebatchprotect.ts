/*! Twinkle.js - twinklebatchprotect.ts */
import {Morebits, type MorebitsWikiApi} from './ui/morebits';
import type {PageItem, TwStatusExposed} from './ui/types';
import {createApp, h, reactive} from 'vue';
import TwBatchProtectDialog from './ui/TwBatchProtectDialog.vue';
import {UTC8_OFFSET_MINUTES} from './utils/utc8';
import {uls} from './utils/useUls';

/**
 * twinklebatchprotect.ts: Batch protect module (sysops only)
 * Mode of invocation: Tab ("P-batch")
 * Active on: Existing project pages and user pages;
 * existing and non-existing categories; Special:PrefixIndex
 *
 * Protection logic (`evaluate`, `callbacks.main`) lives in
 * `ui/TwBatchProtectDialog.vue`; this file provides the module entry and
 * the page-list loading.
 */
interface ProtectionOptionItem {
	label: string;
	value: string;
}

interface ApiQueryPage {
	title: string;
	ns: number;
	missing?: boolean | '';
	redirect?: boolean | '';
	revisions?: {user: string; size: number}[];
	imageinfo?: {user: string}[];
	protection: {type: string; level: string; expiry: string}[];
}

interface TwinkleBatchProtectModule {
	(): void;
	callback: () => void;
}

declare const Twinkle: {
	addInitCallback(func: () => void, name?: string): void;
	addPortletLink(task: string | (() => void), text: string, id: string, tooltip?: string): void;
	getPref: {
		(key: 'batchChunks' | 'batchMax'): string;
		(key: string): string | boolean;
	};
	protect?: {
		protectionLevels: ProtectionOptionItem[];
		protectionLengths: ProtectionOptionItem[];
	};
	sortByNamespace: (a: ApiQueryPage, b: ApiQueryPage) => number;
	batchprotect?: TwinkleBatchProtectModule;
};

const twinklebatchprotect = ((): void => {
	if (
		Morebits.userIsSysop &&
		((mw.config.get('wgArticleId') > 0 && [2, 4].includes(mw.config.get('wgNamespaceNumber'))) ||
			mw.config.get('wgNamespaceNumber') === 14 ||
			mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex')
	) {
		Twinkle.addPortletLink(twinklebatchprotect.callback, '批保', 'tw-pbatch', '批量保护链出页面');
	}
}) as TwinkleBatchProtectModule;

twinklebatchprotect.callback = () => {
	const root = document.createElement('div');
	document.body.append(root);
	const listData = reactive({
		pages: [] as PageItem[],
		loaded: false,
	});
	const dialogInstance: {current: TwStatusExposed | null} = {current: null};
	const app = createApp({
		render: () => {
			return h(TwBatchProtectDialog, {
				ref: (instance: unknown) => {
					dialogInstance.current = (instance as TwStatusExposed) ?? null;
				},
				title: '批保',
				levels: Twinkle.protect?.protectionLevels ?? [],
				moveLevels: (Twinkle.protect?.protectionLevels ?? []).filter((level) => {
					return level.value !== 'autoconfirmed';
				}),
				lengths: Twinkle.protect?.protectionLengths ?? [],
				list: listData,
				footerLinks: [
					{text: '保护方针', href: mw.util.getUrl('QW:PROT')},
					{text: uls('帮助文档', '幫助文檔'), href: mw.util.getUrl('H:TW/DOC#保护')},
					{text: uls('问题反馈', '問題反饋'), href: mw.util.getUrl('HT:TW')},
				],
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
		rvprop: 'size|user',
		inprop: 'protection',
		format: 'json',
	};
	if (mw.config.get('wgNamespaceNumber') === 14) {
		// categories
		query['generator'] = 'categorymembers';
		query['gcmtitle'] = mw.config.get('wgPageName');
		query['gcmlimit'] = Twinkle.getPref('batchMax');
	} else if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex') {
		query['generator'] = 'allpages';
		query['gapnamespace'] =
			mw.util.getParamValue('namespace') ||
			(document.querySelector('select[name="namespace"]') as HTMLSelectElement | null)?.value ||
			'';
		query['gapprefix'] =
			mw.util.getParamValue('prefix') ||
			(document.querySelector('input[name="prefix"]') as HTMLInputElement | null)?.value ||
			'';
		query['gaplimit'] = Twinkle.getPref('batchMax');
	} else {
		query['generator'] = 'links';
		query['titles'] = mw.config.get('wgPageName');
		query['gpllimit'] = Twinkle.getPref('batchMax');
	}
	const statelem = new Morebits.status('抓取页面列表');
	const qiuwen_api = new Morebits.wiki.api(
		'加载中……',
		query,
		(apiobj: MorebitsWikiApi) => {
			const queryResult = apiobj.getResponse() as unknown as {query?: {pages?: ApiQueryPage[]}};
			const pages = queryResult.query?.pages ?? [];
			pages.sort(Twinkle.sortByNamespace);
			for (const page of pages) {
				const metadata: string[] = [];
				const missing = !!page.missing;
				let editProt;
				if (missing) {
					metadata[metadata.length] = '页面不存在';
					// findLast, avoided for lib compatibility
					editProt = [...page.protection].reverse().find((protection) => {
						return protection.type === 'create' && protection.level === 'sysop';
					});
				} else {
					if (page.redirect) {
						metadata[metadata.length] = '重定向';
					}
					if (page.ns === 6) {
						metadata[metadata.length] =
							`上传者：${page.imageinfo?.[0]?.user}，最后编辑者：${page.revisions?.[0]?.user}`;
					} else {
						metadata[metadata.length] = `${mw.language.convertNumber(page.revisions?.[0]?.size ?? 0)}字节`;
					}
					editProt = [...page.protection].reverse().find((protection) => {
						return protection.type === 'edit' && protection.level === 'sysop';
					});
				}
				if (editProt) {
					metadata[metadata.length] = `${missing ? '白纸' : ''}全保护${
						editProt.expiry === 'infinity'
							? '（永久）'
							: `（${new Morebits.date(editProt.expiry).calendar(UTC8_OFFSET_MINUTES)} (UTC+8)过期）`
					}`;
				}
				const {title} = page;
				listData.pages.push({
					title,
					label: title + (metadata.length > 0 ? ` (${metadata.join('; ')})` : ''),
					isProtected: !!editProt,
				});
			}
			listData.loaded = true;
		},
		statelem
	);
	qiuwen_api.post();
};

Twinkle.batchprotect = twinklebatchprotect;
Twinkle.addInitCallback(twinklebatchprotect, 'batchprotect');

export {};
