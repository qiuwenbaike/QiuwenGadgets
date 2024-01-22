const oouiConfirm = async (
	windowManager: OO.ui.WindowManager,
	text: string | JQuery,
	options?: OO.ui.MessageDialog.SetupDataMap
) => {
	const instance: OO.ui.WindowInstance = windowManager.openWindow(
		'message',
		$.extend(
			{
				message: text,
			},
			options
		)
	);

	const data: void = await instance.closed;
	const _data = data as {action: string} | void;

	return !!(_data?.action === 'accept');
};

export {oouiConfirm};
