import {type App as VueApp, createApp, reactive} from 'vue';
import App from '../App.vue';

interface ConfirmDialogState {
	open: boolean;
}

const showConfirmDialog = (onConfirm: () => void, $body: JQuery<HTMLBodyElement>, message: string): (() => void) => {
	const state: ConfirmDialogState = reactive({open: false});
	const root = document.createElement('div');
	$body.append(root);
	const app: VueApp<Element> = createApp(App, {
		state,
		onConfirm,
		message,
		'onUpdate:open': (open: boolean): void => {
			state.open = open;
		},
	});
	app.mount(root);

	return (): void => {
		state.open = true;
	};
};

export {showConfirmDialog};
