const initWindowManager = ($body: JQuery<HTMLBodyElement>): OO.ui.WindowManager => {
	const windowManager = new OO.ui.WindowManager();
	windowManager.$element.appendTo($body);

	return windowManager;
};

export {initWindowManager};
