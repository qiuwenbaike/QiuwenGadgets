import LocalClipboardJS from 'clipboard';

if (!window.ClipboardJS) {
	window.ClipboardJS = LocalClipboardJS;
}

declare global {
	const ClipboardJS: typeof LocalClipboardJS;

	interface Window {
		ClipboardJS: typeof LocalClipboardJS;
	}
}

export default global;
