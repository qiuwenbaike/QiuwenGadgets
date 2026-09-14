import App from './App.vue';
import {createApp} from 'vue';
import {getBody} from 'ext.gadget.Util';

interface AccessKeyItem {
	key: string;
	label: string;
}

const getAccessKeyItems = ($body: JQuery<HTMLBodyElement>): AccessKeyItem[] =>
	[...$body.find('[accesskey]')].map((element) => ({
		key: element.accessKey.toUpperCase(),
		label: (
			element.getAttribute('aria-label') ||
			element.title ||
			element.textContent ||
			(element as HTMLInputElement).value ||
			$body.find(`label[for="${element.id}"]`).text()
		)
			.replace(/\s*?\[.+?]$/, '')
			.trim(),
	}));

/**
 * Adds alt+shift+? as an access key to show a list of all default access keys
 */
void getBody().then(function accessKeyCheatsheet($body: JQuery<HTMLBodyElement>): void {
	const root = document.createElement('div');
	$body.append(root);
	createApp(App, {accessKeyItems: getAccessKeyItems($body)}).mount(root);
});
