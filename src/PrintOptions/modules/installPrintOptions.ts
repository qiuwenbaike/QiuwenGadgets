import {type App as VueApp, createApp, reactive} from 'vue';
import App from '../App.vue';
import type {PrintOptions} from './types';
import {printPage} from './printPage';

const installPrintOptions = ($body: JQuery<HTMLBodyElement>): void => {
	const printLink = $body.find('#t-print a').get(0);
	if (!printLink) {
		return;
	}

	const state = reactive({open: false});
	const root = document.createElement('div');
	$body.append(root);
	const app: VueApp<Element> = createApp(App, {
		state,
		'onUpdate:open': (open: boolean): void => {
			state.open = open;
		},
		onPrint: (options: PrintOptions): void => {
			printPage($body, options);
		},
	});
	app.mount(root);

	printLink.addEventListener(
		'click',
		(event: MouseEvent): void => {
			event.stopPropagation();
			event.preventDefault();
			state.open = true;
		},
		true
	);
};

export {installPrintOptions};
