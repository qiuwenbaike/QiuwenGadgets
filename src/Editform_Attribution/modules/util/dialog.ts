/**
 * `ext.gadget.UtilDialog` is loaded on demand, so that Codex and Vue are not fetched until a dialog is opened.
 *
 * Falls back to `window.confirm()` when the gadget is unknown (e.g. not deployed on this wiki yet), so callers
 * never see an unhandled "Unknown module" rejection.
 */
const oouiConfirmWithStyle = async (message: string): Promise<boolean> => {
	try {
		const moduleName = 'ext.gadget.UtilDialog';
		const require = await mw.loader.using(moduleName);
		const {oouiConfirmWithStyle: confirm} = require(moduleName) as typeof import('ext.gadget.UtilDialog');

		return confirm(message);
	} catch (error) {
		mw.log.warn('[Gadget] ext.gadget.UtilDialog is unavailable; falling back to window.confirm.', error);
		return window.confirm(message);
	}
};

export {oouiConfirmWithStyle};
