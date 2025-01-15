import {groupListElement, listTitle} from './components/groupList';
import {BLACK_LIST} from './constant';
import {api} from './api';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const queryRecentChanges = async (rcstart: string, rcend: string) => {
	const params: ApiQueryRecentChangesParams = {
		rcstart,
		rcend,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'recentchanges',
		rcprop: 'user',
		rcshow: ['!bot', '!anon'],
		rclimit: 500,
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const queryLogEvents = async (lestart: string, leend: string) => {
	const params: ApiQueryLogEventsParams = {
		lestart,
		leend,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'logevents',
		leprop: 'user',
		lelimit: 500,
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const queryUserProps = async (ususers: string | string[]) => {
	const params: ApiQueryUsersParams = {
		ususers,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		usprop: 'groups',
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const doClick = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
	event.preventDefault();

	let usersAll: string[] = [];
	const usersRC: string[] = [];
	const usersLE: string[] = [];
	const stewards: string[] = [];
	const admins: string[] = [];
	const patrollers: string[] = [];

	const time: Date = new Date();
	const rcstart: string = time.toISOString();
	time.setMinutes(time.getMinutes() - 30); // 最近更改30分钟内的编辑用户
	const rcend: string = time.toISOString();

	try {
		const recentchanges = await queryRecentChanges(rcstart, rcend);

		for (const {user} of recentchanges['query'].recentchanges as {user: string}[]) {
			usersRC[usersRC.length] = user; // Replace Array#push to avoid core-js polyfilling
		}

		const logevents = await queryLogEvents(rcstart, rcend);

		for (const {user} of logevents['query'].logevents as {user: string}[]) {
			usersLE[usersLE.length] = user;
		}

		// 用户名列表合并、去重、分割
		usersAll = uniqueArray([...usersRC, ...usersLE]); // Replace Set with uniqueArray, avoiding core-js polyfilling

		const promises: (() => Promise<void>)[] = [];

		for (let i = 0; i < usersAll.length; i++) {
			const ususers = usersAll.splice(0, 25);
			if (!ususers.length) {
				continue;
			}

			promises[promises.length] = async (): Promise<void> => {
				const response = await queryUserProps(ususers);

				for (const {groups, name} of response['query'].users as {groups: string[]; name: string}[]) {
					// 找到管理人员，去除机器人，消除name的空值
					if (groups.includes('bot') || BLACK_LIST.includes(name) || !name) {
						continue;
					}
					if (groups.includes('steward')) {
						stewards[stewards.length] = name;
					}
					if (groups.includes('sysop')) {
						admins[admins.length] = name;
					}
					if (groups.includes('patroller')) {
						patrollers[patrollers.length] = name;
					}
				}
			};
		}

		void (async () => {
			// 查询用户权限
			for (const promise of promises) {
				try {
					await promise();
				} catch {}
			}
		})().then(() => {
			if (stewards.length + admins.length + patrollers.length) {
				const elements: Element[] = [listTitle()];

				if (stewards.length) {
					elements[elements.length] = groupListElement(getMessage('Stewards'), stewards);
				}
				if (admins.length) {
					elements[elements.length] = groupListElement(getMessage('Admins'), admins);
				}
				if (patrollers.length) {
					elements[elements.length] = groupListElement(getMessage('Patrollers'), patrollers);
				}
				void mw.notify($('<div>').append(elements), {tag: 'onlineAdmins'});
			} else {
				void mw.notify(getMessage('NoOnline'), {
					tag: 'onlineAdmins',
					type: 'warn',
				});
			}
		});
	} catch {
		void mw.notify(getMessage('Network error'), {tag: 'onlineAdmins', type: 'error'});
	}
};

export {doClick};
