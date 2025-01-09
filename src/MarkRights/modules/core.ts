import {queryGlobalUserGroups, queryUserGroups} from './util/query';
import {appendUserRightsMark} from './util/appendUserRightsMark';
import {generateUserLinks} from './util/generateUserLinks';

const markUserRights = ($content: JQuery): void => {
	const userLinks = generateUserLinks($content);

	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const $userLinks = Object.values(userLinks).reduce((previousValue, currentValue) => {
		return [...previousValue, ...currentValue];
	});
	if (!$userLinks.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	for (let i = 0; i < users.length; i++) {
		const ususers = users.splice(0, 25).filter((element) => {
			return !(mw.util.isIPv4Address(element) || mw.util.isIPv6Address(element));
		});
		if (!ususers.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			const userGroups: Record<string, string[]> = {};

			try {
				const response = await queryUserGroups(ususers);
				const {users: queryUsers} = response['query'] as {
					users: {groups: string[]; name: string}[];
				};

				for (const user of queryUsers) {
					if (!user?.name || !user?.groups) {
						continue;
					}

					const {name, groups} = user;

					userGroups[name] ??= [];

					userGroups[name] = [
						...userGroups[name],
						...groups.filter((element) => {
							return element !== '*';
						}),
					];
				}
			} catch (error: unknown) {
				console.error('[MarkRights] Ajax error:', error);
			}

			appendUserRightsMark($userLinks, userGroups);
		};

		promises[promises.length] = async (): Promise<void> => {
			const userGroups: Record<string, string[]> = {};

			for (const user of ususers) {
				try {
					const response = await queryGlobalUserGroups(user);
					const {globaluserinfo} = response['query'] as {
						globaluserinfo: {groups: string[]};
					};

					if (!globaluserinfo?.groups) {
						continue;
					}

					const {groups} = globaluserinfo;

					userGroups[user] ??= [];

					userGroups[user] = [...userGroups[user], ...groups];
				} catch (error: unknown) {
					console.error('[MarkRights] Ajax error:', error);
				}
			}

			appendUserRightsMark($userLinks, userGroups);
		};
	}

	void (async () => {
		for (const promise of promises) {
			try {
				await promise();
			} catch {}
		}
	})();
};

export {markUserRights};
