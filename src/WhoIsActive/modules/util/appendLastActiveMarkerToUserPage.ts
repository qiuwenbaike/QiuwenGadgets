import * as OPTIONS from '../../options.json';
import {SYSTEM_SCRIPT_LIST} from '../constant';
import {getLastActiveMarker} from './getLastActiveMarker';
import {getTimestamp} from './getTimestamp';

const appendLastActiveMarkerToUserPage = async (username: string) => {
	if (SYSTEM_SCRIPT_LIST.includes(username)) {
		return;
	}

	const timestamp = await getTimestamp(username);

	if (!timestamp) {
		return;
	}

	for (const element of document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)) {
		element.prepend(getLastActiveMarker(timestamp, false));
	}
};

export {appendLastActiveMarkerToUserPage};
