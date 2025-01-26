import * as OPTIONS from '../../options.json';
import {Logevents, Usercontribs} from '../types';
import {api} from './api';

const getUserContribsTimestamp = async (ucuser: string) => {
	let timestamp: string;

	try {
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
	} catch (error: unknown) {
		timestamp = '0';
		console.error('[WhoIsActive] Ajax error:', error);
	}

	return timestamp;
};

const getLogEventsTimestamp = async (leuser: string) => {
	let timestamp: string;

	try {
		const params: ApiQueryLogEventsParams = {
			leuser,
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'logevents',
			lelimit: 1,
			leprop: 'timestamp',
			smaxage: 600,
			maxage: 600,
		};

		const result = await api.get(params);

		const {logevents} = result['query'] as Logevents;
		if (!logevents.length) {
			return;
		}

		({timestamp} = logevents[0]!);
	} catch (error: unknown) {
		timestamp = '0';
		console.error('[WhoIsActive] Ajax error:', error);
	}

	return timestamp;
};

const getTimestamp = async (username: string) => {
	let timestamp: string;

	if (mw.storage.get(OPTIONS.storageKey + username)) {
		timestamp = mw.storage.get(OPTIONS.storageKey + username) as string;
	} else {
		const ucTimestamp = (await getUserContribsTimestamp(username)) ?? '0';
		const leTimestamp = (await getLogEventsTimestamp(username)) ?? '0';
		timestamp = Number.parseInt(ucTimestamp, 10) > Number.parseInt(leTimestamp, 10) ? ucTimestamp : leTimestamp;

		// Cache for 10 minutes
		mw.storage.set(OPTIONS.storageKey + username, timestamp, 10 * 60);
	}

	return timestamp;
};

export {getTimestamp};
