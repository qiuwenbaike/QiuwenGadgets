import {type App as VueApp, createApp} from 'vue';
import App from '../App.vue';

interface ToolsRedirectController {
	attachContainers(viewContainer: HTMLElement, createContainer: HTMLElement): void;
}

interface ToolsRedirectInstance {
	open: () => void;
}

const mountToolsRedirect = (controller: ToolsRedirectController): ToolsRedirectInstance => {
	const root = document.createElement('div');
	document.body.append(root);
	const app: VueApp<Element> = createApp(App, {controller});
	const instance = app.mount(root) as unknown as ToolsRedirectInstance;
	return instance;
};

export {mountToolsRedirect};
