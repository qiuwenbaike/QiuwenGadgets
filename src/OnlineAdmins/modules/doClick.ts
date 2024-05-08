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
	};
	const response = await api.post(params);

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
	};
	const response = await api.post(params);

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
	};
	const response = await api.post(params);

	return response;
};

const doClick = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
	event.preventDefault();

	let users: string[] = [];
	const usersExt: string[] = [];
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
			users[users.length] = user; // Replace `[].push()` to avoid polyfilling core-js
		}

		const logevents = await queryLogEvents(rcstart, rcend);

		for (const {user} of logevents['query'].logevents as {user: string}[]) {
			usersExt[usersExt.length] = user;
		}

		// 用户名列表合并、去重、分割
		users = uniqueArray([...users, ...usersExt]); // Replace `[...new Set()]` to avoid polyfilling core-js

		const promises: (() => Promise<void>)[] = [];

		for (let i = 0; i < users.length; i++) {
			const ususers = users.splice(0, 50);
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
