import {SYSTEM_SCRIPT_LIST} from '../constant';
import {appendFooterNotice} from './appendFooterNotice';
import {getLastActiveMarker} from './getLastActiveMarker';
import {getTimestamp} from './getTimestamp';

const appendMarkerToUserLinks = async ({userName, $elements}: {userName: string; $elements: JQuery[]}) => {
	// Replace Set with uniqueArray, avoiding core-js polyfilling
	if (SYSTEM_SCRIPT_LIST.includes(userName)) {
		return;
	}

	const timestamp = await getTimestamp(userName);

	if (!timestamp) {
		return;
	}

	for (const $element of $elements) {
		$(getLastActiveMarker(timestamp, true)).insertAfter($element);
	}
};

const appendMarkerToUserPage = async (userName: string) => {
	if (SYSTEM_SCRIPT_LIST.includes(userName)) {
		return;
	}

	const timestamp = await getTimestamp(userName);

	if (!timestamp) {
		return;
	}

	appendFooterNotice(getLastActiveMarker(timestamp, false));
};

export {appendMarkerToUserLinks, appendMarkerToUserPage};
