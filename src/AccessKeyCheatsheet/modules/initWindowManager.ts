const initWindowManager = ($body: JQuery<HTMLBodyElement>): OO.ui.WindowManager => {
	const windowManager: OO.ui.WindowManager = new OO.ui.WindowManager();

	windowManager.$element
		.css({
			'margin-bottom': '0',
			width: '35em',
		})
		.appendTo($body);

	return windowManager;
};

export {initWindowManager};
