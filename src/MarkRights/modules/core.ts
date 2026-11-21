import * as OPTIONS from '../options.json';
import {getGlobalUserGroups, getLocalUserGroups} from './util/getUserGroups';
import {appendUserRightsMark} from './util/appendUserRightsMark';
import {generateUserLinks} from './util/generateUserLinks';

/**
 * The maximum number of users the API accepts per `list=users` request
 */
const BATCH_SIZE = 25;

/**
 * Special pages whose content is a long list of (mostly) user links. Querying the global groups of
 * every editor there costs one API request per user (`meta=globaluserinfo` cannot be batched) and
 * re-runs the DOM marking after every response.
 */
const LIST_SPECIAL_PAGES: string[] = [
	'AbuseLog',
	'Contributions',
	'Log',
	'Newfiles',
	'Newpages',
	'Prefixindex',
	'Recentchanges',
	'Recentchangeslinked',
	'Watchlist',
];

const isListPage = (userCount: number): boolean => {
	if (userCount >= OPTIONS.listPageUserLinkThreshold) {
		return true;
	}

	const {wgCanonicalSpecialPageName} = mw.config.get();

	return Boolean(wgCanonicalSpecialPageName && LIST_SPECIAL_PAGES.includes(wgCanonicalSpecialPageName));
};

const runWithConcurrency = async (tasks: (() => Promise<void>)[], limit: number): Promise<void> => {
	let nextIndex = 0;
	const workers = Array.from({length: Math.min(limit, tasks.length)}, async (): Promise<void> => {
		for (;;) {
			const index = nextIndex++;
			if (index >= tasks.length) {
				return;
			}
			await tasks[index]!();
		}
	});

	await Promise.all(workers);
};

const markUserRights = async ($content: JQuery): Promise<void> => {
	const userLinks = generateUserLinks($content);
	const users = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	// Local groups are batched (25 users per request) and marked as soon as each batch resolves,
	// so the icons show up progressively instead of after all requests have finished.
	for (let i = 0; i < users.length; i += BATCH_SIZE) {
		const batch = users.slice(i, i + BATCH_SIZE);
		const localGroups = await getLocalUserGroups(batch);
		appendUserRightsMark(userLinks, localGroups);
	}

	// Global groups: one request per user, therefore list pages only query the first N users.
	const globalUsers = users.slice(0, isListPage(users.length) ? OPTIONS.maxGlobalUsersOnListPages : users.length);
	const globalBatches: string[][] = [];
	for (let i = 0; i < globalUsers.length; i += BATCH_SIZE) {
		globalBatches.push(globalUsers.slice(i, i + BATCH_SIZE));
	}

	await runWithConcurrency(
		globalBatches.map((batch) => {
			return async (): Promise<void> => {
				const globalGroups = await getGlobalUserGroups(batch);
				appendUserRightsMark(userLinks, globalGroups);
			};
		}),
		OPTIONS.maxConcurrentGlobalBatches
	);
};

export {markUserRights};
