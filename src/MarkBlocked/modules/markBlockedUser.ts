import {inHours, parseTS} from './util/parseTime';
import {loading, userlinkIndef, userlinkLock, userlinkPartial, userlinkTemp} from './MarkBlocked.module.less';
import {api} from './util/api';
import {generateUserLinks} from './util/generateUserLinks';
import {getMessage} from './i18n';

const markBlockedUser = ($content: JQuery): void => {
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	const userLinks: Record<string, JQuery[]> = generateUserLinks($content);

	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	// The following classes are used here:
	// * see ./Markblocked.module.less
	// * for more information
	$content.addClass(loading as string);

	// API request
	type Response = {
		query: {
			blocks?: Array<{
				by: string;
				expiry: string;
				reason: string;
				restrictions: string | string[];
				timestamp: string;
				user: string;
			}>;
			globalblocks?: Array<{
				by: string;
				expiry: string;
				reason: string;
				timestamp: string;
				target: string;
			}>;
			globaluserinfo?: {
				name?: string;
				locked?: boolean;
			};
		};
	};

	// Callback: receive data and mark links
	const markLinks = (response: Response): void => {
		if (response['query']?.blocks) {
			for (const block of response['query'].blocks) {
				const isPartialBlcok: boolean = typeof block.restrictions === 'string' && block.restrictions !== ''; // Partial block

				let className: string = userlinkPartial as string;
				let blockTime: string = '';
				if (block.expiry.startsWith('in')) {
					if (!isPartialBlcok) {
						className = userlinkIndef as string;
					}
					blockTime = getMessage('infinity');
				} else {
					if (!isPartialBlcok) {
						className = userlinkTemp as string;
					}
					blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
				}

				let tip: string = getMessage('Blocked')
					.replace('$1', blockTime)
					.replace('$2', block.by)
					.replace('$3', block.reason)
					.replace('$4', inHours(Date.now() - parseTS(block.timestamp)));
				tip = isPartialBlcok ? tip.replace('$5', getMessage('partial')) : tip.replace('$5', '');

				const $links: JQuery[] | undefined = userLinks[block.user];
				if (!$links) {
					continue;
				}

				for (const $link of $links) {
					// The following classes are used here:
					// * see ./Markblocked.module.less
					// * for more information
					$link.addClass(className).attr('title', $link.attr('title') + tip);
				}
			}
		}

		if (response['query']?.globalblocks) {
			for (const block of response['query'].globalblocks) {
				let className: string = userlinkPartial as string;
				let blockTime: string = '';
				if (block.expiry.startsWith('in')) {
					className = userlinkIndef as string;
					blockTime = getMessage('infinity');
				} else {
					className = userlinkTemp as string;
					blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
				}

				let tip: string = getMessage('Globally Blocked')
					.replace('$1', blockTime)
					.replace('$2', block.by)
					.replace('$3', block.reason)
					.replace('$4', inHours(Date.now() - parseTS(block.timestamp)));
				tip = tip.replace('$5', '');

				const $links: JQuery[] | undefined = userLinks[block.target];
				if (!$links) {
					continue;
				}

				for (const $link of $links) {
					// The following classes are used here:
					// * see ./Markblocked.module.less
					// * for more information
					$link.addClass(className).attr('title', $link.attr('title') + tip);
				}
			}
		}

		if (response['query']?.globaluserinfo) {
			const user = response['query'].globaluserinfo?.name;
			const locked = response['query'].globaluserinfo?.locked;

			if (!locked || !user) {
				return;
			}

			const tip: string = getMessage('Locked');

			const $links: JQuery[] | undefined = userLinks[user];
			if (!$links) {
				return;
			}

			const className = userlinkLock as string;

			for (const $link of $links) {
				// The following classes are used here:
				// * see ./Markblocked.module.less
				// * for more information
				$link.addClass(className).attr('title', $link.attr('title') + tip);
			}
		}
	};

	const promises: (() => Promise<void>)[] = [];

	type Bgprop = 'address' | 'by' | 'expiry' | 'id' | 'range' | 'reason' | 'target' | 'timestamp';

	type ApiQueryGlobalBlocksParamsRedefined = Omit<ApiQueryGlobalBlocksParams, 'bgprop'> & {
		bgtargets?: string | string[];
		bgprop?: Bgprop | Bgprop[];
	};

	// Local and Global Lock
	for (let i = 0; i < users.length; i++) {
		const bkusers = users.splice(0, 25);
		if (!bkusers.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			const params: ApiQueryBlocksParams & ApiQueryGlobalBlocksParamsRedefined = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				list: ['blocks', 'globalblocks'],
				bkusers,
				bgtargets: bkusers,
				bklimit: 100,
				bglimit: 100,
				bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
				bgprop: ['by', 'expiry', 'reason', 'timestamp'],
				smaxage: 600,
				maxage: 600,
			};

			try {
				const response = await api.get(params);
				markLinks(response as Response);
			} catch (error: unknown) {
				console.error('[MarkBlocked] Ajax error:', error);
			}
		};
	}

	// Global Lock
	for (const guiuser of users) {
		promises[promises.length] = async (): Promise<void> => {
			const params: ApiQueryGlobalUserInfoResponse = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				meta: ['globaluserinfo'],
				guiuser,
				smaxage: 600,
				maxage: 600,
			};

			try {
				const response = await api.get(params);
				markLinks(response as Response);
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
	})().then(() => {
		// The following classes are used here:
		// * see ./Markblocked.module.less
		// * for more information
		$content.removeClass(loading as string);
	});
};

export {markBlockedUser};
