import {initMwApi} from '../../util';

const groups: Record<string, string[]> = {
	// 全站管理型权限
	qiuwen: [],
	steward: [],
	checkuser: [],
	suppress: [],
	sysop: [],
	'interface-admin': [],
	templateeditor: [],
	transwiki: [],
	// 页面管理型权限
	patroller: [],
	autoreviewer: [],
	senioreditor: [],
	// 大量操作型权限
	eventsponsor: [],
	'massmessage-sender': [],
	// 确认权限
	confirmed: [],
	autoconfirmed: [],
	// 机器权限
	bot: [],
	flood: [],
	// 豁免
	// 'ipblock-exempt': [],
	'rnrsverify-exempt': [],
};

export const markUserRights = ($content: JQuery): void => {
	const $userLinks: JQuery = $content.find('a.mw-userlink:not(.mw-anonuserlink)');
	let users: string[] = [];
	const queue: Array<typeof users> = [];
	$userLinks.each((_index: number, {textContent}: {textContent: string | null}): void => {
		const userLinkText: string | undefined = textContent?.toString();
		if (userLinkText) {
			users.push(userLinkText);
		}
		users = [...new Set(users)];
		if (users.length === 50) {
			queue.push(users);
			users = [];
		}
	});
	if (users.length > 0) {
		queue.push(users);
	}
	const getUsername = (url: string): string => {
		if (!url) {
			return '';
		}
		const username: string | null = mw.util.getParamValue('title', url);
		const decode = (string: string, replace: (_string: string) => string): string => {
			return decodeURIComponent(
				(() => {
					try {
						return decodeURIComponent(replace(string));
					} catch {
						return replace(string).replace(/%(?!\d+)/g, '%25');
					}
				})()
			);
		};
		if (username) {
			return decode(username, (string) => {
				return string.replace('User:', '').replace(/_/g, ' ');
			});
		}
		const usernameMatch: RegExpMatchArray | null = url.match(/\/wiki\/User:(.+?)$/);
		if (usernameMatch?.[1]) {
			return decode(usernameMatch[1], (string) => {
				return string.replace(/_/g, ' ');
			});
		}
		return '';
	};
	const done = (): void => {
		$userLinks.each((_index: number, element: HTMLElement): void => {
			const $element: JQuery = $(element);
			const username: string = getUsername($element.attr('href') ?? '');
			if (!username) {
				return;
			}
			for (const group in groups) {
				if (Object.hasOwn(groups, group)) {
					const groupsGroup: string[] = groups[group] ?? [];
					if (groupsGroup.includes(username)) {
						const className = `markrights-${group}`;
						if (!$element.find('sup').hasClass(className)) {
							$element.append(`<sup class="${className}"></sup>`);
						}
					}
				}
			}
		});
	};
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (MarkRights/1.1; ${mw.config.get('wgWikiID')})`);
	for (const ususers of queue) {
		const params: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			usprop: 'groups',
			ususers,
		};
		api.get(params).done((response) => {
			const _users: {groups: string; name: string}[] = response['query']?.users ?? [];
			for (const user of _users) {
				if (user.groups) {
					for (const group in groups) {
						if (Object.hasOwn(groups, group)) {
							const groupsGroup = groups[group];
							if (user.groups.includes(group)) {
								groupsGroup?.push(user.name);
							}
						}
					}
				}
			}
			done();
		});
	}
};
