/**
 * Twinkle 被拆成「loader + core」两个小工具：
 *
 * - RecentChanges / RelatedChanges 这类长列表页上，Twinkle 只会为每一行追加维护链接，而页面本身
 *   已有数百行、又被 MarkRights、Navigation_popups 等逐行装饰，再叠加一份 Twinkle 会让主线程长时间繁忙。
 *   因此这些页面只加载本文件（约 1 KB），不加载 `ext.gadget.TwinkleCore` 及其依赖（morebits、Codex、Vue…）。
 * - 其余页面通过 `mw.loader.using()` 按需加载 `ext.gadget.TwinkleCore`。
 *
 * Twinkle is split into a tiny loader and an on-demand core: list pages such as Special:RecentChanges
 * only load this file, every other page loads `ext.gadget.TwinkleCore`.
 *
 * 如需恢复这些页面的 Twinkle 功能，把页面名（`wgCanonicalSpecialPageName` 的取值）从数组中移除即可。
 */
const SKIP_SPECIAL_PAGES: string[] = ['Recentchanges', 'Recentchangeslinked'];

const {wgCanonicalSpecialPageName} = mw.config.get();

if (!wgCanonicalSpecialPageName || !SKIP_SPECIAL_PAGES.includes(wgCanonicalSpecialPageName)) {
	void mw.loader.using('ext.gadget.TwinkleCore').catch((error: unknown): void => {
		// `ext.gadget.TwinkleCore` may still be unknown right after a deployment (or on wikis where it is not
		// enabled); never leave an unhandled "Unknown module" rejection behind.
		mw.log.warn('[Twinkle] ext.gadget.TwinkleCore is unavailable; Twinkle is disabled on this wiki.', error);
	});
}
