// @ts-expect-error TS2503
const initWindowManager = (): OO.ui.WindowManager => {
	// @ts-expect-error TS2304
	return new OO.ui.WindowManager();
};

// @ts-expect-error TS2503
const windowManager: OO.ui.WindowManager = initWindowManager();

export {windowManager};
