import {type App as VueApp, createApp} from 'vue';
import App from '../App.vue';
import {UserRights} from '~/MarkRights/modules/types';

let app: VueApp<Element> | undefined;
let root: HTMLDivElement | undefined;

const showDialog = function showDialog({
	$body,
	userName,
	permission,
	index,
}: {
	$body: JQuery<HTMLBodyElement>;
	userName: string;
	permission: UserRights;
	index: string;
}) {
	if (app) {
		app.unmount();
		app = undefined;
	}
	root?.remove();
	root = document.createElement('div');
	$body.append(root);
	app = createApp(App, {
		userName,
		permission,
		index,
		onClose: () => {
			app?.unmount();
			app = undefined;
			root?.remove();
			root = undefined;
		},
	});
	app.mount(root);
};

export {showDialog};
