import {localize} from 'ext.gadget.i18n';
/**
 * Bridge for simplified/traditional Chinese interface text inside Vue components.
 *
 * The variant is fixed at page load (switching variants reloads the page), so no
 * reactivity is required: call `uls()` during `setup()`.
 */

export const uls = (hans: string, hant: string = hans): string =>
	localize({'zh-hans': hans, 'zh-hant': hant, en: hans});
