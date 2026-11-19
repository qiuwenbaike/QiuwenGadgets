type I18nCandidates = import('./types').I18nCandidates;
type WgUXSCandicates = import('./types').WgUXSCandicates;

declare module 'ext.gadget.i18n' {
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	export function content(candidates: I18nCandidates): string;
	export function localize(candidates: I18nCandidates): string;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	export function vary(candidates: I18nCandidates): string;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	export function wgUCS(...candidates: WgUXSCandicates): string;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	export function wgULS(...candidates: WgUXSCandicates): string;
	/** @deprecated 仅为兼容保留，新代码请使用 localize。 */
	export function wgUVS(...candidates: WgUXSCandicates): string;
}
