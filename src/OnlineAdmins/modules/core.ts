import {groupListElement, listTitle} from './components/groupList';
import {BLACK_LIST} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

export const onlineAdmins = (): void => {
	// Create portlet link
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const portletLinkOnline: HTMLLIElement | null = mw.util.addPortletLink(
		portletId,
		'#',
		getMessage('Online'),
		't-onlineadmin'
	);
	const api: mw.Api = initMwApi('OnlineAdmins/1.1');
	const doClick = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
		event.preventDefault();
		let users: string[] = [];
		const usersExt: string[] = [];
		const stewards: string[] = [];
		const admins: string[] = [];
		const patrollers: string[] = [];
		// 最近更改30分钟内的编辑用户
		const time: Date = new Date();
		const rcstart: string = time.toISOString();
		time.setMinutes(time.getMinutes() - 30);
		const rcend: string = time.toISOString();
		try {
			const recentchangesParams: ApiQueryRecentChangesParams = {
				action: 'query',
				formatversion: '2',
				list: 'recentchanges',
				rcprop: 'user',
				rcshow: ['!bot', '!anon'],
				rclimit: 500,
				rcstart,
				rcend,
			};
			const recentchanges = await api.get(recentchangesParams);

			for (const {user} of recentchanges['query'].recentchanges as {user: string}[]) {
				users[users.length] = user; // Replace `[].push()` to avoid polyfilling core-js
			}
			const logeventsParams: ApiQueryLogEventsParams = {
				action: 'query',
				formatversion: '2',
				list: 'logevents',
				leprop: 'user',
				lelimit: 500,
				lestart: rcstart,
				leend: rcend,
			};
			const logevents = await api.get(logeventsParams);

			for (const {user} of logevents['query'].logevents as {user: string}[]) {
				usersExt[usersExt.length] = user;
			}
			// 用户名列表合并、去重、分割
			users = [...new Set([...users, ...usersExt])];
			const promises: (() => Promise<void>)[] = [];
			for (let i: number = 0; i < (users.length + 50) / 50; i++) {
				promises[promises.length] = async (): Promise<void> => {
					const params: ApiQueryUsersParams = {
						action: 'query',
						format: 'json',
						formatversion: '2',
						list: 'users',
						ususers: users.slice(i * 50, (i + 1) * 50).join('|'),
						usprop: 'groups',
					};
					const response = await api.get(params);

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
			// 查询用户权限
			for (const promise of promises) {
				await promise();
			}
			if (stewards.length + admins.length + patrollers.length > 0) {
				const elements: Element[] = [listTitle()];
				if (stewards.length > 0) {
					elements[elements.length] = groupListElement(getMessage('Stewards'), stewards);
				}
				if (admins.length > 0) {
					elements[elements.length] = groupListElement(getMessage('Admins'), admins);
				}
				if (patrollers.length > 0) {
					elements[elements.length] = groupListElement(getMessage('Patrollers'), patrollers);
				}
				void mw.notify($('<div>').append(elements), {tag: 'onlineAdmins'});
			} else {
				void mw.notify(getMessage('NoOnline'), {
					tag: 'onlineAdmins',
					type: 'warn',
				});
			}
		} catch {
			void mw.notify(getMessage('Network error'), {tag: 'onlineAdmins', type: 'error'});
		}
	};
	// Bind click listener
	if (!portletLinkOnline) {
		return;
	}
	$(portletLinkOnline)
		.find('a')
		.on('click', (event) => {
			void doClick(event);
		});
};
