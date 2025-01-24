import * as OPTIONS from '../../options.json';
import {Usercontribs} from '../types';
import {api} from './api';

const getUserContribsTimestamp = async (ucuser: string) => {
	let timestamp: string;

	if (mw.storage.get(OPTIONS.storageKey + ucuser)) {
		timestamp = mw.storage.get(OPTIONS.storageKey + ucuser) as string;
	} else {
		const params: ApiQueryUserContribsParams = {
			action: 'query',
			format: 'json',
			list: 'usercontribs',
			uclimit: 1,
			smaxage: 600,
			maxage: 600,
			ucuser,
		};

		const result = await api.get(params);

		const {usercontribs} = result['query'] as Usercontribs;
		if (!usercontribs.length) {
			return;
		}

		({timestamp} = usercontribs[0]!);

		// Cache for 10 minutes
		mw.storage.set(OPTIONS.storageKey + ucuser, timestamp, 10 * 60);
	}

	return timestamp;
};

export {getUserContribsTimestamp};
