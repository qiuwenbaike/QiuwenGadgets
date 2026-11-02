type I18nCandidates = import('./types').I18nCandidates;
type WgUXSCandicates = import('./types').WgUXSCandicates;

declare module 'ext.gadget.i18n' {
	export function content(candidates: I18nCandidates): string;
	export function localize(candidates: I18nCandidates): string;
	export function vary(candidates: I18nCandidates): string;
	export function wgUCS(...candidates: WgUXSCandicates): string;
	export function wgULS(...candidates: WgUXSCandicates): string;
	export function wgUVS(...candidates: WgUXSCandicates): string;
}
