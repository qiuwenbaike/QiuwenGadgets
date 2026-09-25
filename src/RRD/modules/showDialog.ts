import {type App as VueApp, createApp} from 'vue';
import App from '../App.vue';
import {getMessage} from './i18n';
import {loadIds} from './loadIds';

let app: VueApp<Element> | undefined;
let root: HTMLDivElement | undefined;

const disposeDialog = (): void => {
	if (app) {
		app.unmount();
		app = undefined;
	}
	if (root) {
		root.remove();
		root = undefined;
	}
};

const showDialog = ($body: JQuery<HTMLBodyElement>): void => {
	const ids: string[] = loadIds($body);
	if (!ids.length) {
		void mw.notify(getMessage('errNoRevisionProvided'), {
			tag: 'RRD',
			type: 'error',
		});

		return;
	}

	disposeDialog();
	root = document.createElement('div');
	document.body.append(root);
	app = createApp(App, {
		ids,
		onClose: disposeDialog,
	});
	app.mount(root);
};

export {showDialog};
