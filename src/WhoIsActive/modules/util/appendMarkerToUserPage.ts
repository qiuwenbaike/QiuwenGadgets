import * as OPTIONS from '../../options.json';
import App from '../App.vue';
import {SYSTEM_SCRIPT_LIST} from '../constant';
import {createApp} from 'vue';
import {createFooterRoot} from './createFooterRoot';
import {getTimeSpan} from './getTimeSpan';
import {getTimestamp} from './getTimestamp';

/**
 * Append the last active indicator to the footer of the user page.
 *
 * @param userName The name of the user owning the current user page.
 */
const appendMarkerToUserPage = async (userName: string): Promise<void> => {
	if (SYSTEM_SCRIPT_LIST.includes(userName)) {
		return;
	}

	const timestamp = await getTimestamp(userName);
	if (!timestamp) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const timeSpan = getTimeSpan(timestamp);
	createApp(App, {timeSpan, indicator: false}).mount(createFooterRoot(mountPoint));
};

export {appendMarkerToUserPage};
