import type _ClipboardJS from 'clipboard';

declare global {
	const ClipboardJS: typeof _ClipboardJS;

	interface Window {
		ClipboardJS: typeof _ClipboardJS;
	}
}

export default global;
