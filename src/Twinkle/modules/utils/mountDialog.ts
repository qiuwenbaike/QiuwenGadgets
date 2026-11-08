/*! Twinkle - shared Vue dialog mounting helper */

import {type Component, createApp, h} from 'vue';

/**
 * Mount a dialog component on a detached root under <body>; the dialog is
 * torn down automatically when it emits `close`. Returns a `close()` handle
 * for external teardown (e.g. post-deletion tool links).
 */
export const mountDialog = (component: Component, props: Record<string, unknown> = {}): {close: () => void} => {
	const root = document.createElement('div');
	document.body.append(root);
	let mounted = true;
	const teardown = (): void => {
		if (mounted) {
			mounted = false;
			app.unmount();
			root.remove();
		}
	};
	const app = createApp({
		render: () =>
			h(component, {
				...props,
				onClose: teardown,
			}),
	});
	app.mount(root);
	return {close: teardown};
};
