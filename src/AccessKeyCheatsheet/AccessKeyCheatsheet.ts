import App from './App.vue';
import {createApp} from 'vue';
import {getAccessKeyItems} from './modules/getAccessKeyItems';
import {getBody} from 'ext.gadget.Util';

/**
 * Adds alt+shift+? as an access key to show a list of all default access keys
 */
void getBody().then(function accessKeyCheatsheet(): void {
	const root = document.createElement('div');
	document.body.append(root);
	createApp(App, {accessKeyItems: getAccessKeyItems()}).mount(root);
});
