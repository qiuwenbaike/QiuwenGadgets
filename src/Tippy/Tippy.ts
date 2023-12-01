import localTippy from 'tippy.js';

if (!window.tippy) {
	window.tippy = localTippy;
}

declare global {
	const tippy: typeof localTippy;

	interface Window {
		tippy: typeof localTippy;
	}
}

export default global;
