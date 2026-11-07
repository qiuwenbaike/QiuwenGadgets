/*! Twinkle.js - twinklediff.ts */
import {uls} from './utils/useUls';

/**
 * twinklediff.ts: Diff module
 * Mode of invocation: Tab on non-diff pages ("Last");
 * tabs on diff pages ("Since", "Since mine", "Current")
 * Active on: Existing non-special pages
 */
interface DiffApiParams {
	user: string | null;
}

interface MorebitsStatusElement {
	error(message: string): void;
	info(message?: string): void;
	status(message: string): void;
}

interface MorebitsApi<TParams> {
	params: TParams;
	statelem: MorebitsStatusElement;
	responseXML: Document;
	post(): void;
}

interface MorebitsGlobal {
	status: {
		init(element?: HTMLElement | null): void;
	};
	wiki: {
		api: new <TParams>(
			statusText: string,
			query: Record<string, unknown>,
			callback?: (apiobj: MorebitsApi<TParams>) => void
		) => MorebitsApi<TParams>;
	};
}

interface TwinkleDiffModule {
	(): void;
	evaluate(me: boolean): void;
	callbacks: {
		main(apiobj: MorebitsApi<DiffApiParams>): void;
	};
}

interface TwinkleGlobal {
	addInitCallback(func: () => void, name?: string): void;
	addPortletLink(task: string | (() => void), text: string, id: string, tooltip?: string): void;
	diff?: TwinkleDiffModule;
}

declare const Twinkle: TwinkleGlobal;

const Morebits = (window as unknown as {Morebits: MorebitsGlobal}).Morebits;

const twinklediff = ((): void => {
	if (mw.config.get('wgNamespaceNumber') < 0 || !mw.config.get('wgArticleId')) {
		return;
	}
	Twinkle.addPortletLink(
		mw.util.getUrl(mw.config.get('wgPageName'), {
			diff: 'cur',
			oldid: 'prev',
		}),
		uls('最后', '最後'),
		'tw-lastdiff',
		uls('显示最后修改', '顯示最後修改')
	);
	// Show additional tabs only on diff pages
	if (mw.config.get('wgDiffNewId')) {
		Twinkle.addPortletLink(
			() => {
				twinklediff.evaluate(false);
			},
			'自上',
			'tw-since',
			uls('显示与上一修订版本间的差异', '顯示與上一修訂版本間的差異')
		);
		Twinkle.addPortletLink(
			() => {
				twinklediff.evaluate(true);
			},
			'自我',
			'tw-sincemine',
			uls('显示与我做出的修订版本的差异', '顯示與我做出的修訂版本的差異')
		);
		Twinkle.addPortletLink(
			mw.util.getUrl(mw.config.get('wgPageName'), {
				diff: 'cur',
				oldid: mw.config.get('wgDiffNewId'),
			}),
			uls('当前', '目前'),
			'tw-curdiff',
			uls('显示与当前版本间的差异', '顯示與目前版本間的差異')
		);
	}
}) as TwinkleDiffModule;

twinklediff.evaluate = (me) => {
	let user: string | null;
	if (me) {
		user = mw.config.get('wgUserName');
	} else {
		const node = document.querySelector('#mw-diff-ntitle2');
		if (!node) {
			// nothing to do?
			return;
		}
		user = $(node).find('a').first().text();
	}
	const query: Record<string, unknown> = {
		prop: 'revisions',
		action: 'query',
		titles: mw.config.get('wgPageName'),
		rvlimit: 1,
		rvprop: ['ids', 'user'],
		rvstartid: mw.config.get('wgCurRevisionId') - 1,
		rvuser: user,
	};
	Morebits.status.init(document.querySelector<HTMLElement>('#mw-content-text'));
	const qiuwen_api = new Morebits.wiki.api(
		uls('抓取最初贡献者信息', '抓取最初貢獻者資訊'),
		query,
		twinklediff.callbacks.main
	);
	qiuwen_api.params = {
		user,
	};
	qiuwen_api.post();
};

twinklediff.callbacks = {
	main: (self) => {
		const xmlDoc = self.responseXML;
		const revid = $(xmlDoc).find('rev').attr('revid');
		if (!revid) {
			self.statelem.error(
				uls('未找到合适的早期版本，或 ', '未找到合適的早期版本，或 ') +
					self.params.user +
					uls(' 是唯一贡献者。取消。', ' 是唯一貢獻者。取消。')
			);
			return;
		}
		window.location.assign(
			mw.util.getUrl(mw.config.get('wgPageName'), {
				diff: mw.config.get('wgCurRevisionId'),
				oldid: revid,
			})
		);
	},
};

Twinkle.diff = twinklediff;
Twinkle.addInitCallback(twinklediff, 'diff');

export {};
