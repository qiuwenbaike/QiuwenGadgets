import type Toastify from 'toastify-js';

declare global {
	const toastify: typeof window.toastify;
	type ToastifyInstance = ReturnType<typeof toastify>;

	interface Window {
		toastify: (
			options: Toastify.Options,
			type?: 'info' | 'success' | 'warning' | 'error'
		) => {
			hideToast: () => void;
		};
	}
}

export default global;
