/*! Twinkle - lazy loading of dialog components from Gadget-TwinkleDialogs */

import {type Component} from 'vue';
import {mountDialog} from './mountDialog';
import {uls} from './useUls';

const DIALOGS_MODULE = 'ext.gadget.TwinkleDialogs';

interface TwinkleDialogRegistry {
	[key: string]: Component | undefined;
}

declare global {
	interface Window {
		TwinkleDialogs?: TwinkleDialogRegistry;
	}
}

/**
 * Load a dialog component by its registered name from the on-demand gadget
 * `Gadget-TwinkleDialogs`.
 */
const getDialogComponent = async (name: string): Promise<Component> => {
	await mw.loader.using(DIALOGS_MODULE);
	const component = window.TwinkleDialogs?.[name];
	if (!component) {
		throw new Error(`Twinkle: dialog component "${name}" is not registered`);
	}
	return component;
};

/**
 * Mount a dialog by its registered name; the component bundle
 * (`Gadget-TwinkleDialogs`) is fetched on first use. The returned handle's
 * `close()` is safe to call before the dialog has finished mounting.
 */
const mountLazyDialog = (name: string, props: Record<string, unknown> = {}): {close: () => void} => {
	let teardown = (): void => {};
	let closeRequested = false;
	void (async () => {
		try {
			const component = await getDialogComponent(name);
			const handle = mountDialog(component, props);
			if (closeRequested) {
				handle.close();
			} else {
				teardown = handle.close;
			}
		} catch {
			void mw.notify(uls('未能加载Twinkle对话框', '未能載入Twinkle對話框'), {
				type: 'error',
				tag: 'twinkle',
			});
		}
	})();
	return {
		close: (): void => {
			closeRequested = true;
			teardown();
		},
	};
};

export {getDialogComponent, mountLazyDialog};
