import App from '../App.vue';
import {SYSTEM_SCRIPT_LIST} from '../constant';
import {createApp} from 'vue';
import {createLinkRoot} from './createLinkRoot';
import {getTimeSpan} from './getTimeSpan';
import {getTimestamp} from './getTimestamp';

/**
 * Append the last active indicator to every link pointing to the given user.
 *
 * @param userName The name of the user, without the namespace prefix.
 * @param elements Every user link pointing to this user.
 */
const appendMarkerToUserLinks = async ({
	userName,
	elements,
}: {
	userName: string;
	elements: HTMLAnchorElement[];
}): Promise<void> => {
	// Replace Set with includes, avoiding core-js polyfilling
	if (SYSTEM_SCRIPT_LIST.includes(userName)) {
		return;
	}

	const timestamp = await getTimestamp(userName);
	if (!timestamp) {
		return;
	}

	const timeSpan = getTimeSpan(timestamp);

	for (const element of elements) {
		createApp(App, {timeSpan, indicator: true}).mount(createLinkRoot(element));
	}
};

export {appendMarkerToUserLinks};
