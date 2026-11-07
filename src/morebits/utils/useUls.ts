import {wgULS} from 'ext.gadget.i18n';
/**
 * Bridge for `wgULS` (simplified/traditional Chinese interface switch)
 * inside Vue components.
 *
 * `wgULS` is provided by the target wiki's gadget infrastructure and is not
 * declared by types-mediawiki, so it is declared globally here. The variant
 * is fixed at page load (switching variants reloads the page), so no
 * reactivity is required: call `uls()` during `setup()`.
 */

export const uls = (simplified: unknown, traditional: unknown): string => {
	return typeof wgULS === 'function' ? wgULS(simplified, traditional) : (simplified as string);
};
