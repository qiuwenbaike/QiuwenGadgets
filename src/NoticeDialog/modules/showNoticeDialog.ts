import {type App as VueApp, createApp} from 'vue';
import NoticeDialog from './NoticeDialog.vue';

interface NoticeAction {
	label: string;
	onClick: () => void;
}

type ShowNoticeDialogOptions = {
	title: string;
	message: string;
	cancelLabel: string;
	helpLabel: string;
	helpURL: string;
	primary?: NoticeAction;
	actions?: NoticeAction[];
};

type ShowNoticeDialog = (options: ShowNoticeDialogOptions) => void;

/**
 * Show a notice dialog: a message, an optional help link in the footer and optional buttons.
 *
 * @param {ShowNoticeDialogOptions} options The dialog title, message, labels and actions
 */
const showNoticeDialog: ShowNoticeDialog = (options) => {
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

	app = createApp(NoticeDialog, {
		title: options.title,
		message: options.message,
		cancelLabel: options.cancelLabel,
		helpLabel: options.helpLabel,
		helpURL: options.helpURL,
		primary: options.primary,
		actions: options.actions,
		onClose: close,
	});
	app.mount(root);
};

export {type NoticeAction, type ShowNoticeDialog, type ShowNoticeDialogOptions, showNoticeDialog};
