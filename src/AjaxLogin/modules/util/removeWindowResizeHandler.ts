const $window: JQuery<Window> = $(window);

const removeWindowResizeHandler = (windowManager: OO.ui.WindowManager): void => {
	$window.off({
		'orientationchange resize': (windowManager as unknown as {onWindowResizeHandler: () => void})
			.onWindowResizeHandler,
	});
};

export {removeWindowResizeHandler};
