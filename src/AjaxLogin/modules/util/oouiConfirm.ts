import {windowManager} from '../initWindowManager';

// @ts-expect-error TS2503
const oouiConfirm = async (options: OO.ui.MessageDialog.SetupDataMap): Promise<boolean> => {
	// @ts-expect-error TS2304, TS2503
	const messageDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();
	windowManager.addWindows([messageDialog]);

	// @ts-expect-error TS2503
	const instance: OO.ui.WindowInstance = windowManager.openWindow(messageDialog, options);

	const data: void = await instance.closed;
	const _data = data as {action: string} | void;

	return !!(_data?.action === 'accept');
};

export {oouiConfirm};
