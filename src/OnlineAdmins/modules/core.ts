import {BLACK_LIST} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from '../../util';

export const onlineAdmins = (): void => {
	// Create portlet link
	const portletLinkOnline: HTMLLIElement | null = mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		'#',
		getMessage('Online'),
		't-onlineadmin'
	);
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (OnlineAdmins/1.1; ${mw.config.get('wgWikiID')})`);
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
			for (const {user} of recentchanges['query'].recentchanges) {
				users.push(user);
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
			for (const {user} of logevents['query'].logevents) {
				usersExt.push(user);
			}
			// 用户名列表合并、去重、分割
			users = [...new Set([...users, ...usersExt])];
			const promises: (() => Promise<void>)[] = [];
			for (let i = 0; i < (users.length + 50) / 50; i++) {
				promises.push(async () => {
					const params: ApiQueryUsersParams = {
						action: 'query',
						format: 'json',
						formatversion: '2',
						list: 'users',
						ususers: users.slice(i * 50, (i + 1) * 50).join('|'),
						usprop: 'groups',
					};
					const response = await api.get(params);
					for (const {groups, name} of response['query'].users) {
						// 找到管理人员，去除adminbot
						// !!name可用于消除name的空值
						if (!!name && !groups.includes('bot') && !BLACK_LIST.includes(name)) {
							if (groups.includes('steward')) {
								stewards.push(name);
							}
							if (groups.includes('sysop')) {
								admins.push(name);
							}
							if (groups.includes('patroller')) {
								patrollers.push(name);
							}
						}
					}
				});
			}
			// 查询用户权限
			for (const promise of promises) {
				await promise();
			}
			const userlink = (user: string): string => {
				const _user = user
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&lt;')
					.replace(/"/g, '&quot;');
				return `<li><a href="/wiki/User:${_user}" rel="noopener" target="_blank">${_user}</a>&nbsp;<span style="font-size: 90%">（<a href="/wiki/User talk:${_user}" rel="noopener" target="_blank">留言</a>）</span></li>`;
			};
			if (stewards.length + admins.length + patrollers.length > 0) {
				const adminsstring: string[] = [`<p>${getMessage('OnlineWithin30Minutes')}</p>`];
				const onlineCountText: string = getMessage(' ($1 online):');
				if (stewards.length > 0) {
					adminsstring.push(
						`<div class="onlineadmin-section">${getMessage('Stewards')}${onlineCountText.replace(
							'$1',
							String(stewards.length)
						)}<ul class="onlineadmin-list">`
					);
					for (const element of stewards) {
						adminsstring.push(userlink(element));
					}
					adminsstring.push('</ul></div>');
				}
				if (admins.length > 0) {
					adminsstring.push(
						`<div class="onlineadmin-section">${getMessage('Admins')}${onlineCountText.replace(
							'$1',
							String(admins.length)
						)}<ul class="onlineadmin-list">`
					);
					for (const element of admins) {
						adminsstring.push(userlink(element));
					}
					adminsstring.push('</ul></div>');
				}
				if (patrollers.length > 0) {
					adminsstring.push(
						`<div class="onlineadmin-section">${getMessage('Patrollers')}${onlineCountText.replace(
							'$1',
							String(patrollers.length)
						)}<ul class="onlineadmin-list">`
					);
					for (const element of patrollers) {
						adminsstring.push(userlink(element));
					}
					adminsstring.push('</ul></div>');
				}
				mw.notify($(adminsstring.join('')), {tag: 'onlineAdmins'});
			} else {
				mw.notify(getMessage('NoOnline'), {
					tag: 'onlineAdmins',
					type: 'warn',
				});
			}
		} catch {
			mw.notify(getMessage('Network error'), {tag: 'onlineAdmins', type: 'error'});
		}
	};
	// Bind click listener
	if (!portletLinkOnline) {
		return;
	}
	$(portletLinkOnline).find('a').on('click', doClick);
};
