/*! Twinkle.js - twinklebatchundelete.ts */
import {Morebits, type MorebitsWikiApi} from './ui/morebits';
import type {PageItem, TwStatusExposed} from './ui/types';
import {createApp, h, reactive} from 'vue';
import TwBatchUndeleteDialog from './ui/TwBatchUndeleteDialog.vue';
import {UTC8_OFFSET_MINUTES} from './utils/utc8';
import {uls} from './utils/useUls';

/**
 * twinklebatchundelete.ts: Batch undelete module
 * Mode of invocation: Tab ("Und-batch")
 * Active on: Existing user and project pages
 *
 * Undeletion logic (`evaluate`, `callbacks`) lives in
 * `ui/TwBatchUndeleteDialog.vue`; this file provides the module entry and
 * the page-list loading.
 */
interface TwinkleBatchUndeleteModule {
	(): void;
	callback: () => void;
}

declare const Twinkle: {
	addInitCallback(func: () => void, name?: string): void;
	addPortletLink(task: string | (() => void), text: string, id: string, tooltip?: string): void;
	getPref: {
		(key: 'batchMax'): string;
		(key: string): string | boolean;
	};
	batchundelete?: TwinkleBatchUndeleteModule;
};

const twinklebatchundelete = ((): void => {
	if (
		!Morebits.userIsSysop ||
		!mw.config.get('wgArticleId') ||
		(mw.config.get('wgNamespaceNumber') !== mw.config.get('wgNamespaceIds')['user'] &&
			mw.config.get('wgNamespaceNumber') !== mw.config.get('wgNamespaceIds')['project'])
	) {
		return;
	}
	Twinkle.addPortletLink(
		twinklebatchundelete.callback,
		uls('批复', '批復'),
		'tw-batch-undel',
		uls('反删除页面', '反刪除頁面')
	);
}) as TwinkleBatchUndeleteModule;

twinklebatchundelete.callback = () => {
	const root = document.createElement('div');
	document.body.append(root);
	const list = reactive<PageItem[]>([]);
	const dialogInstance: {current: TwStatusExposed | null} = {current: null};
	const app = createApp({
		render: () => {
			return h(TwBatchUndeleteDialog, {
				ref: (instance: unknown) => {
					dialogInstance.current = (instance as TwStatusExposed) ?? null;
				},
				title: uls('批量反删除', '批次反刪除'),
				list,
				footerLinks: [
					{
						text: uls('Twinkle帮助', 'Twinkle說明'),
						href: mw.util.getUrl('H:TW/DOC#batchundelete'),
					},
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
		generator: 'links',
		prop: 'info',
		inprop: 'protection',
		titles: mw.config.get('wgPageName'),
		gpllimit: Twinkle.getPref('batchMax'),
	};
	const statelem = new Morebits.status(uls('抓取页面列表', '抓取頁面列表'));
	const qiuwen_api = new Morebits.wiki.api(
		uls('加载中…', '載入中…'),
		query,
		(apiobj: MorebitsWikiApi) => {
			const xml = apiobj.getResponse() as unknown as XMLDocument;
			const $pages = $(xml).find('page[missing]');
			for (const page of $pages.toArray()) {
				const $page = $(page);
				const title = $page.attr('title') ?? '';
				const $editprot = $page.find('pr[type="create"][level="sysop"]');
				const isProtected = $editprot.length > 0;
				const expiryLabel =
					$editprot.attr('expiry') === 'infinity'
						? uls('无限期', '無限期')
						: `${new Morebits.date($editprot.attr('expiry') ?? '').calendar(UTC8_OFFSET_MINUTES)} (UTC+8)${uls('过期', '過期')}`;
				list.push({
					title,
					label: title + (isProtected ? `（${uls('全保护，', '全保護，')}${expiryLabel}）` : ''),
					isProtected,
				});
			}
		},
		statelem
	);
	qiuwen_api.post();
};

Twinkle.batchundelete = twinklebatchundelete;
Twinkle.addInitCallback(twinklebatchundelete, 'batchundelete');

export {};
