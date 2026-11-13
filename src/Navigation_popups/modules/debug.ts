// 本文件由 Navigation_popups 原版 core.js 的 debug.js 段落拆分而来，保留原有实现。
const setupDebugging = () => {
	if (window.popupDebug) {
		// popupDebug is set from .version
		window.log = (x: unknown) => {
			// if (g Msg !== '') { gMsg += '\n'; gMsg+=time() + ' ' + x; }
			console.log(x);
		};
		window.errlog = (x: unknown) => {
			console.error(`[Popups] ${x}`);
		};
		log('Initializing logger');
	} else {
		window.log = () => {};
		window.errlog = () => {};
	}
};

export {setupDebugging};
