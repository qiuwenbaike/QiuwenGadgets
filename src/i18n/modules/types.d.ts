type I18nCandidatesKey =
	'en' | 'ja' | 'ru' | 'zh' | 'zh-hans' | 'zh-hant' | 'zh-cn' | 'zh-sg' | 'zh-my' | 'zh-tw' | 'zh-hk' | 'zh-mo';

type I18nCandidates = Partial<Record<I18nCandidatesKey, string>>;

type WgUXSCandidate = string | number | boolean | null | undefined;

// 前两个位置参数对应简体/繁体；其余位置参数仅为旧脚本兼容保留，
// 完整顺序见 initShims.ts 的 zh-hans … en 映射。
type WgUXSCandicates = [hans?: WgUXSCandidate, hant?: WgUXSCandidate, ...rest: WgUXSCandidate[]];

type WgUXS = (...candidates: WgUXSCandicates) => string;

interface I18nMethods {
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	content(candidates: I18nCandidates): string;
	localize(candidates: I18nCandidates): string;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	vary(candidates: I18nCandidates): string;
}

interface I18nShimMethods {
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	wgUCS: WgUXS;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	wgULS: WgUXS;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	wgUVS: WgUXS;
}

declare global {
	type GetMessages<T> = <K extends keyof T>(key: K) => K | NonNullable<T[K]>;

	interface Window {
		/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
		wgUCS: WgUXS;
		/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
		wgULS: WgUXS;
		/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
		wgUVS: WgUXS;
	}
}

export default global;
export type {I18nCandidates, I18nMethods, I18nShimMethods, WgUXS, WgUXSCandidate, WgUXSCandicates};
