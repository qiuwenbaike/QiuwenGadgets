import * as OPTIONS from '../options.json';
import type {GeoLocationIcon, GeoLocationStatus} from './types';
import App from './App.vue';
import {createApp} from 'vue';
import {createFooterRoot} from './util/createFooterRoot';
import {getLocation} from './util/getLocation';
import {getMessage} from './i18n';

const appendGeoIcon = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();
	if (!wgRelevantUserName) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const mountApp = (icon: GeoLocationIcon, indicatorText: string, status: GeoLocationStatus): void => {
		const app = createApp(App, {
			icon,
			indicatorText,
			status,
		});
		app.mount(createFooterRoot(mountPoint));
	};

	try {
		const response = await getLocation(wgRelevantUserName);
		const indicatorText = `${response?.countryOrAreaName ?? ''}${response?.regionName ?? ''}`;
		if (!indicatorText) {
			return;
		}

		mountApp('globe', indicatorText, 'success');
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `appendGeoIcon` method:', error);
		mountApp('helpNotice', getMessage('Unknown'), 'warning');
	}
};

export {appendGeoIcon};
