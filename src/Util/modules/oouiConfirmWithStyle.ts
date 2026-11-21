type OouiConfirmWithStyle = (message: string) => Promise<boolean>;

/**
 * Show a confirmation dialog built with Codex and Vue.
 *
 * The dialog itself lives in `ext.gadget.UtilDialog` and is loaded on demand. This keeps Vue and Codex
 * out of `ext.gadget.Util`, which is a dependency of most gadgets and therefore loaded on almost every page.
 *
 * @param {string} message The message to display in the dialog
 * @return {Promise<boolean>} Resolves to `true` when the user confirms, `false` when cancelled or closed
 */
const oouiConfirmWithStyle: OouiConfirmWithStyle = async (message: string): Promise<boolean> => {
	const moduleName = 'ext.gadget.UtilDialog';
	const require = await mw.loader.using(moduleName);
	const {oouiConfirmWithStyle: confirm} = require(moduleName) as {
		oouiConfirmWithStyle: OouiConfirmWithStyle;
	};

	return confirm(message);
};

export {type OouiConfirmWithStyle, oouiConfirmWithStyle};
