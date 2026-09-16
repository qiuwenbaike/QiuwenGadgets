import {type App as VueApp, createApp} from 'vue';
import OouiConfirmWithStyle from './OouiConfirmWithStyle.vue';

type OouiConfirmWithStyle = (message: string) => Promise<boolean>;

/**
 * Show a confirmation dialog built with Codex and Vue.
 *
 * @param {string} message The message to display in the dialog
 * @return {Promise<boolean>} Resolves to `true` when the user confirms, `false` when cancelled or closed
 */
const oouiConfirmWithStyle: OouiConfirmWithStyle = (message) =>
	new Promise((resolve) => {
		const root = document.createElement('div');
		document.body.append(root);

		let settled = false;
		const settle = (value: boolean): void => {
			if (settled) {
				return;
			}
			settled = true;
			app.unmount();
			root.remove();
			resolve(value);
		};

		const app: VueApp<Element> = createApp(OouiConfirmWithStyle, {
			open: true,
			message,
			onConfirm: (): void => {
				settle(true);
			},
			onCancel: (): void => {
				settle(false);
			},
		});
		app.mount(root);
	});

export {type OouiConfirmWithStyle, oouiConfirmWithStyle};
