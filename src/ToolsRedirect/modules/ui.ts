import {type App as VueApp, createApp} from 'vue';
import App from '../App.vue';

interface ToolsRedirectController {
	attachContainers(viewContainer: HTMLElement, createContainer: HTMLElement): void;
}

let app: VueApp<Element> | undefined;

const mountToolsRedirect = (controller: ToolsRedirectController, onOpen: () => void): void => {
	const root = document.createElement('div');
	document.body.append(root);
	app = createApp(App, {controller, open: false, onOpen});
	app.mount(root);
};

export {mountToolsRedirect};
