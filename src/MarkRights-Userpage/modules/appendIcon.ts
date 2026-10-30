import * as OPTIONS from '../options.json';
import App from './App.vue';
import type {Indicator} from './types';
import {createApp} from 'vue';
import {createFooterRoot} from './util/createFooterRoot';

/**
 * Render every indicator badge into the page footer.
 *
 * @param indicators The user groups to display.
 */
const appendIcon = (indicators: Indicator[]): void => {
	if (!indicators.length) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const root = createFooterRoot(mountPoint);

	createApp(App, {indicators}).mount(root);
};

export {appendIcon};
