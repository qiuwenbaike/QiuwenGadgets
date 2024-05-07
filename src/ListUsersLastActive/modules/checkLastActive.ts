import {adjustTime} from './util/adjustTime';
import {api} from './api';
import {getMessage} from './i18n';

const queryUserContribs = async (ucuser: string) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'usercontribs',
		ucdir: 'older',
		uclimit: 1,
		ucprop: 'timestamp',
		ucuser,
	} as const satisfies ApiQueryUserContribsParams;
	const response = await api.post(params);

	return response;
};

const queryLogEvents = async (leuser: string) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'logevents',
		lelimit: 1,
		leprop: 'timestamp',
		leuser,
	} as const satisfies ApiQueryLogEventsParams;
	const response = await api.post(params);

	return response;
};

const checkLastActive = async ($element: JQuery): Promise<void> => {
	const userName: string = $element.find('.mw-userlink > bdi').text();
	let maxDate: Date | undefined;

	try {
		const userContribs = await queryUserContribs(userName);
		if (userContribs['query'].usercontribs[0]) {
			maxDate = new Date(userContribs['query'].usercontribs[0].timestamp as number);
		}

		const logEvents = await queryLogEvents(userName);
		if (logEvents['query'].logevents[0]) {
			const date: Date = new Date(logEvents['query'].logevents[0].timestamp as number);
			if (!maxDate || date > maxDate) {
				maxDate = date;
			}
		}

		const lastActiveMessage: string =
			getMessage('(') +
			(maxDate ? getMessage('Last active on').replace('$1', adjustTime(maxDate)) : getMessage('Never active')) +
			getMessage(')');

		$element.append(lastActiveMessage);
	} catch (error: unknown) {
		console.error('[ListUsersLastActive] Ajax error:', error);
	}
};

export {checkLastActive};
