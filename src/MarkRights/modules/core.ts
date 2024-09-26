import type {UserRights} from './types';
import {api} from './api';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const userGroupMap = new Map();
const globalUserGroupMap = new Map();

const getUsername = (url: string): string => {
	if (!url) {
		return '';
	}

	const username: string | null = mw.util.getParamValue('title', url);

	const decode = (string: string, replace: (_string: string) => string): string => {
		return decodeURIComponent(
			((): string => {
				try {
					return decodeURIComponent(replace(string));
				} catch {
					return replace(string).replace(/%(?!\d+)/g, '%25');
				}
			})()
		);
	};

	if (username) {
		return decode(username, (string: string): string => {
			return string.replace('User:', '').replace(/_/g, ' ');
		});
	}
	const usernameMatch: RegExpMatchArray | null = url.match(/\/wiki\/User:(.+?)$/);
	if (usernameMatch?.[1]) {
		return decode(usernameMatch[1], (string: string): string => {
			return string.replace(/_/g, ' ');
		});
	}
	return '';
};

const queryUserGroups = async (ususers: string | string[]) => {
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

const queryGlobalUserGroups = async (user: string) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		meta: 'globaluserinfo',
		guiuser: user,
		guiprop: 'groups',
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const done = ($userLinks: JQuery<HTMLElement>): void => {
	$userLinks.each((_index: number, element: HTMLElement): void => {
		const $element: JQuery = $(element);
		if ($element.parents('li').find('.gadgets-markrights').length) {
			return;
		}
		const username: string = getUsername($element.attr('href') ?? '');
		if (!username) {
			return;
		}
		const groups = (userGroupMap.get(username) as string[] | undefined) ?? [];
		const globalGroups = (globalUserGroupMap.get(username) as string[] | undefined) ?? [];
		if (!groups) {
			return;
		}
		const $sups: JQuery = $('<span>').addClass('gadgets-markrights');
		for (const group of uniqueArray([...groups, ...globalGroups])) {
			const className: string = `gadgets-markrights__${group}`;
			if ($sups.find('sup').hasClass(className)) {
				return;
			}
			$sups.append(
				// The following classes are used here:
				// * gadget-markrights__qiuwen
				// * gadget-markrights__steward
				// * gadget-markrights__checkuser
				// * gadget-markrights__suppress
				// * gadget-markrights__sysop
				// * gadget-markrights__interface-admin
				// * gadget-markrights__templateeditor
				// * gadget-markrights__transwiki
				// * gadget-markrights__patroller
				// * gadget-markrights__autoreviewer
				// * gadget-markrights__senioreditor
				// * gadget-markrights__eventsponsor
				// * gadget-markrights__massmessage-sender
				// * gadget-markrights__confirmed
				// * gadget-markrights__autoconfirmed
				// * gadget-markrights__bot
				// * gadget-markrights__flood
				// * gadget-markrights__ipblock-exempt
				// * gadget-markrights__rnrsverify-exempt
				$('<sup>')
					.addClass(className)
					.attr({
						alt: getMessage(group as UserRights),
						title: getMessage(group as UserRights),
					})
			);
		}
		$element.after($sups);
	});
};

const markUserRights = async ($content: JQuery): Promise<void> => {
	const $userLinks: JQuery = $content.find('a.mw-userlink:not(.mw-anonuserlink)');
	let users: string[] = [];
	const queue: Array<typeof users> = [];

	$userLinks.each((_index: number, {textContent}: {textContent: string | null}): void => {
		const userLinkText: string | undefined = textContent?.toString();
		if (userLinkText) {
			users[users.length] = userLinkText; // Replace `[].push()` to avoid polyfilling core-js
		}

		// 用户名列表去重
		users = uniqueArray(users); // Replace `[...new Set()]` to avoid polyfilling core-js

		if (users.length === 25) {
			queue[queue.length] = users; // Replace `[].push()` to avoid polyfilling core-js
			users = [];
		}
	});

	if (users.length > 0) {
		queue[queue.length] = users; // Replace `[].push()` to avoid polyfilling core-js
	}

	for (const ususers of queue) {
		try {
			const queryUserResponse = await queryUserGroups(ususers);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const {users: queryUsers}: {users: {groups: string[]; name: string}[]} = queryUserResponse['query'];

			for (const user of queryUsers) {
				if (!user || !user.groups) {
					continue;
				}
				userGroupMap.set(
					user.name,
					user.groups.filter((element) => {
						return element !== '*';
					})
				);
			}

			for (const user of ususers) {
				const queryGlobalUserInfoResponse = await queryGlobalUserGroups(user);
				if (queryGlobalUserInfoResponse['query'] && queryGlobalUserInfoResponse['query'].globaluserinfo) {
					const {groups: globalgroups}: {groups: string[]} = queryGlobalUserInfoResponse['query']
						.globaluserinfo as {groups: string[]};
					globalUserGroupMap.set(user, globalgroups);
				}
			}

			done($userLinks);
		} catch {}
	}
};

export {queryUserGroups, queryGlobalUserGroups, markUserRights};
