import {queryGlobalUserGroups, queryUserGroups} from './query';
import {appendUserRightsMark} from './util/appendUserRightsMark';
import {generateUserLinks} from './util/generateUserLinks';

const markUserRights = ($content: JQuery): void => {
	const {users, $userLinks} = generateUserLinks($content);

	const promises: (() => Promise<void>)[] = [];

	for (let i = 0; i < users.length; i++) {
		const ususers = users.splice(0, 25);
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
