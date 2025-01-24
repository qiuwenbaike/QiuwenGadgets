import * as OPTIONS from '../../options.json';
import {SYSTEM_SCRIPT_LIST} from '../constant';
import {getLastActiveMarker} from './getLastActiveMarker';
import {getUserContribsTimestamp} from './getUserContribsTimestamp';

const appendLastActiveMarkerToUserPage = async (username: string) => {
	if (SYSTEM_SCRIPT_LIST.includes(username)) {
		return;
	}

	const timestamp = await getUserContribsTimestamp(username);

	if (!timestamp) {
		return;
	}

	for (const element of document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)) {
		element.prepend(getLastActiveMarker(timestamp, false));
	}
};

export {appendLastActiveMarkerToUserPage};
