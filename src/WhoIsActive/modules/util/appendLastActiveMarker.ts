import {SYSTEM_SCRIPT_LIST} from '../constant';
import {getLastActiveMarker} from './getLastActiveMarker';
import {getUserContribsTimestamp} from './getUserContribsTimestamp';
import {uniqueArray} from 'ext.gadget.Util';

const appendLastActiveMarker = async ({usernames, $elements}: {usernames: string[]; $elements: JQuery[]}) => {
	// Replace Set with uniqueArray, avoiding core-js polyfilling
	for (const username of uniqueArray(usernames)) {
		if (SYSTEM_SCRIPT_LIST.includes(username)) {
			continue;
		}

		const timestamp = await getUserContribsTimestamp(username);

		if (!timestamp) {
			continue;
		}

		for (const $element of $elements) {
			if ($element.data('username') === username) {
				$(getLastActiveMarker(timestamp, true)).insertAfter($element);
			}
		}
	}
};

export {appendLastActiveMarker};
