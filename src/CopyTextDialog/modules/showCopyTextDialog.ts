import {type App as VueApp, createApp} from 'vue';
import CopyTextDialog from './CopyTextDialog.vue';

interface CopyItem {
	label?: string;
	text: string;
}

type ShowCopyTextDialogOptions = {
	title: string;
	items: CopyItem[];
	copyLabel: string;
	closeLabel: string;
	onCopy: (text: string) => void | Promise<void>;
};

type ShowCopyTextDialog = (options: ShowCopyTextDialogOptions) => void;

/**
 * Show a dialog that lists copyable texts (each row has a copy button).
 *
 * @param {ShowCopyTextDialogOptions} options The dialog title, items and labels
 */
const showCopyTextDialog: ShowCopyTextDialog = (options) => {
	const root = document.createElement('div');
	document.body.append(root);

	let app: VueApp<Element> | null = null;
	let closed = false;
	const close = (): void => {
		if (closed) {
			return;
		}
		closed = true;
		app?.unmount();
		root.remove();
	};

	app = createApp(CopyTextDialog, {
		title: options.title,
		items: options.items,
		copyLabel: options.copyLabel,
		closeLabel: options.closeLabel,
		onCopy: options.onCopy,
		onClose: close,
	});
	app.mount(root);
};

export {type CopyItem, type ShowCopyTextDialog, type ShowCopyTextDialogOptions, showCopyTextDialog};
