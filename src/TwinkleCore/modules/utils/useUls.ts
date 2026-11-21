import {localize} from 'ext.gadget.i18n';
/**
 * Bridge for simplified/traditional Chinese interface text inside Vue components.
 *
 * The variant is fixed at page load (switching variants reloads the page), so no
 * reactivity is required: call `uls()` during `setup()`.
 */

export const uls = (simplified: string, traditional: string): string => {
	return localize({'zh-hans': simplified, 'zh-hant': traditional, 'zh-my': traditional, en: simplified});
};
