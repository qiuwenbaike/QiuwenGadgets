import {localize} from 'ext.gadget.i18n';
/**
 * Bridge for simplified/traditional Chinese interface text inside Vue components.
 *
 * The variant is fixed at page load (switching variants reloads the page), so no
 * reactivity is required: call `uls()` during `setup()`.
 */

export const uls = (simplified: unknown, traditional: unknown): string => {
	const hans = String(simplified);
	const hant = String(traditional);
	return localize({'zh-hans': hans, 'zh-hant': hant, 'zh-my': hant, en: hans});
};
