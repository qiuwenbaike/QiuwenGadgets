import {BLACK_LIST} from './constant';
import {getMessage} from './i18n';

export const onlineAdmins = (): void => {
	// Create portlet link
	const portletLinkOnline: HTMLLIElement | null = mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		'#',
		getMessage('Online'),
		't-onlineadmin'
	);
	const api: mw.Api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (OnlineAdmins/1.1; ${mw.config.get('wgWikiID')})`,
			},
		},
	});
	const doClick = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
		event.preventDefault();
		let users: string[] = [];
		const usersExt: object[] = [];
		let stewards: string[] = [];
		let admins: string[] = [];
		let patrollers: string[] = [];
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
			recentchanges['query'].recentchanges.forEach(({user}: {user: string}): void => {
				users.push(user);
			});
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
			logevents['query'].logevents.forEach(({user}: {user: object}): void => {
				usersExt.push(user);
			});
			Array.prototype.push.apply(users, usersExt);
			// 用户名去重与分割
			users = [...new Set(users)];
			const promises: (() => Promise<void>)[] = [];
			for (let i = 0; i < (users.length + 50) / 50; i++) {
				// eslint-disable-next-line no-loop-func
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
					response['query'].users.forEach(({groups, name}: {groups: string[]; name: string}): void => {
						// 找到管理人员，去除adminbot
						if (!groups.includes('bot') && !BLACK_LIST.includes(name)) {
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
					});
				});
			}
			// 查询用户权限
			for (const promise of promises) {
				await promise();
			}
			// 消除空值
			const filter = (string: string): string => {
				return string;
			};
			stewards = stewards.filter((element: string): string => {
				return filter(element);
			});
			admins = admins.filter((element: string): string => {
				return filter(element);
			});
			patrollers = patrollers.filter((element: string): string => {
				return filter(element);
			});
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
