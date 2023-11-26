const initWindowManager = ($body: JQuery<HTMLBodyElement>): OO.ui.WindowManager => {
	const windowManager: OO.ui.WindowManager = new OO.ui.WindowManager();
	windowManager.$element.appendTo($body);

	return windowManager;
};

export {initWindowManager};
