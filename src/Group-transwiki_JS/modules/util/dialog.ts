/**
 * `ext.gadget.UtilDialog` is loaded on demand, so that Codex and Vue are not fetched until a dialog is opened.
 */
const oouiConfirmWithStyle = async (message: string): Promise<boolean> => {
	const moduleName = 'ext.gadget.UtilDialog';
	const require = await mw.loader.using(moduleName);
	const {oouiConfirmWithStyle: confirm} = require(moduleName) as typeof import('ext.gadget.UtilDialog');

	return confirm(message);
};

export {oouiConfirmWithStyle};
