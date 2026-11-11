/*! Twinkle.js - twinkleunlink.ts */
import {Morebits, type MorebitsWikiApi, type MorebitsWikiApiWithParams} from './ui/morebits';
import type {TwStatusExposed, UnlinkListData} from './ui/types';
import {footerLinks} from './utils/footerLinks';
import {mountLazyDialog} from './utils/lazyDialogs';
import {reactive} from 'vue';
import {uls} from './utils/useUls';

/**
 * twinkleunlink.ts: Unlink module
 * Mode of invocation: Tab ("Unlink")
 * Active on: Non-special pages, except Qiuwen:沙盒
 *
 * Unlinking logic (`evaluate`, `callbacks.unlinkBacklinks`) lives in
 * `ui/TwUnlinkDialog.vue`; this file provides the module entry and the
 * backlinks/imageusage list loading.
 */
interface ApiListTitle {
	title: string;
}

export interface TwinkleUnlinkModule {
	(): void;
	callback: (presetReason?: string) => void;
}

declare global {
	interface TwinkleModules {
		unlink?: TwinkleUnlinkModule;
	}
}

const twinkleunlink = ((): void => {
	if (
		mw.config.get('wgNamespaceNumber') < 0 ||
		mw.config.get('wgPageName') === Twinkle.getPref('sandboxPage') ||
		!Morebits.userIsSysop
	) {
		return;
	}
	Twinkle.addPortletLink(
		() => {
			twinkleunlink.callback();
		},
		uls('消链', '消連'),
		'tw-unlink',
		uls('取消到本页的链接', '取消到本頁的連結')
	);
}) as TwinkleUnlinkModule;

// the parameter is used when invoking unlink from admin speedy
twinkleunlink.callback = (presetReason?: string) => {
	const fileSpace = mw.config.get('wgNamespaceNumber') === 6;
	const listData = reactive<UnlinkListData>({
		backlinks: [],
		imageusage: [],
		namespacesText: '',
		loaded: false,
	});
	const escape = mw.html.escape;
	const pageName = Morebits.pageNameNorm;
	const linkPlainAfter = fileSpace ? `<!-- [[${escape(pageName)}]] -->` : escape(pageName);
	const docHtml =
		`${
			uls('这个工具可以取消所有指向该页的链接（“链入”）', '這個工具可以取消所有指向該頁的連結（「連入」）') +
			(fileSpace
				? uls(
						'，或通过加入<!-- -->注释标记隐藏所有对此文件的使用',
						'，或透過加入<!-- -->注釋標記隱藏所有對此檔案的使用'
					)
				: '')
		}。例如：` +
		`<code>[[${fileSpace ? ':' : ''}${escape(pageName)}${escape(uls('|链接文字]]', '|連結文字]]'))}</code>` +
		`${uls('将会变成', '將會變成')}<code>${uls('链接文字', '連結文字')}</code>，` +
		`<code>[[${escape(pageName)}]]</code>` +
		`${uls('将会变成', '將會變成')}<code>${linkPlainAfter}</code>，` +
		`<code>{{${escape(mw.config.get('wgTitle') ?? '')}}}</code>` +
		`${uls('将会被移除', '將會被移除')}${uls('。请小心使用。', '。請小心使用。')}`;
	const dialogInstance: {current: TwStatusExposed | null} = {current: null};
	mountLazyDialog('TwUnlinkDialog', {
		ref: (instance: unknown) => {
			dialogInstance.current = (instance as TwStatusExposed) ?? null;
		},
		title: uls('取消链入', '取消連入') + (fileSpace ? uls('和模板、文件使用', '和模板、檔案使用') : ''),
		fileSpace,
		presetReason: presetReason || '',
		docHtml,
		list: listData,
		footerLinks: footerLinks('unlink', uls('链入设置', '連入設定')),
	});
	// Init Morebits.status in the dialog before the page list arrives
	const statusRoot = dialogInstance.current?.getStatusRoot() ?? null;
	if (statusRoot) {
		Morebits.status.init(statusRoot);
	}
	const query: Record<string, unknown> = {
		action: 'query',
		list: 'backlinks',
		bltitle: mw.config.get('wgPageName'),
		bllimit: 'max',
		// 500 is max for normal users, 5000 for bots and sysops
		blnamespace: Twinkle.getPref('unlinkNamespaces'),
		rawcontinue: true,
		format: 'json',
	};
	if (fileSpace) {
		query['list'] = 'backlinks|imageusage';
		query['iutitle'] = query['bltitle'];
		query['iulimit'] = query['bllimit'];
		query['iunamespace'] = query['blnamespace'];
	} else {
		query['blfilterredir'] = 'nonredirects';
	}
	const displayBacklinks = (apiobj: MorebitsWikiApiWithParams<{list: UnlinkListData; image: boolean}>): void => {
		const response = apiobj.getResponse() as unknown as {
			query?: {backlinks?: ApiListTitle[]; imageusage?: ApiListTitle[]};
		};
		const {list} = apiobj.params;
		const namespaces: string[] = [];
		for (const v of Twinkle.getPref('unlinkNamespaces')) {
			namespaces[namespaces.length] =
				v === '0'
					? uls('（条目）', '（條目）')
					: ((mw.config.get('wgFormattedNamespaces') as Record<string, string>)[v] ?? v);
		}
		list.namespacesText = uls('已选择的命名空间：', '已選擇的命名空間：') + namespaces.join('、');
		if (apiobj.params.image) {
			const imageusage = response.query?.imageusage ?? [];
			list.imageusage.push(
				...[...imageusage].sort(Twinkle.sortByNamespace).map((item) => {
					return item.title;
				})
			);
		}
		const backlinks = response.query?.backlinks ?? [];
		list.backlinks.push(
			...[...backlinks].sort(Twinkle.sortByNamespace).map((item) => {
				return item.title;
			})
		);
		list.loaded = true;
		// The backlink/usage queries are done; drop the transient status messages
		dialogInstance.current?.clear();
	};
	const api = new Morebits.wiki.api(
		uls('抓取链入', '抓取連入'),
		query,
		displayBacklinks as unknown as (apiobj: MorebitsWikiApi) => void
	) as MorebitsWikiApiWithParams<{list: UnlinkListData; image: boolean}>;
	api.params = {
		list: listData,
		image: fileSpace,
	};
	api.statelem.status(uls('加载中……', '載入中……'));
	api.post();
};

Twinkle.unlink = twinkleunlink;
Twinkle.addInitCallback(twinkleunlink, 'unlink');

export {};
