import type {QueryLocalAndGlobalBlocksAndLocksResponse} from './types';
import {generateUserLinks} from './util/generateUserLinks';
import {markLinks} from './util/markLinks';
import {queryGlobalUserInfo} from './util/queryGlobalUserInfo';
import {queryUserBlocks} from './util/queryUserBlocks';

const markBlockedUser = ($content: JQuery): void => {
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	const userLinks: Record<string, JQuery[]> = generateUserLinks($content);

	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	// Global Lock queires
	// Move Global Lock queries before block quries,
	// since they use Array#splice to create bulk queries,
	// and items will be removed from the array "users".
	for (const guiuser of users) {
		promises[promises.length] = async (): Promise<void> => {
			try {
				const response = (await queryGlobalUserInfo(guiuser)) as QueryLocalAndGlobalBlocksAndLocksResponse;
				markLinks({response, userLinks});
			} catch (error: unknown) {
				console.error('[MarkBlocked] Ajax error:', error);
			}
		};
	}

	// Local and Global Lock queires
	for (let i = 0; i < users.length; i++) {
		const bkusers = users.splice(0, 25);
		if (!bkusers.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			try {
				const response = (await queryUserBlocks(bkusers)) as QueryLocalAndGlobalBlocksAndLocksResponse;
				markLinks({response, userLinks});
			} catch (error: unknown) {
				console.error('[MarkBlocked] Ajax error:', error);
			}
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

export {markBlockedUser};
