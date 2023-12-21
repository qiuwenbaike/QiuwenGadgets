import {getMessage} from './i18n';

export const markBlockedUser = ($container: JQuery): void => {
	// Collect all the links in the page's content
	const $contentLinks: JQuery<HTMLAnchorElement> = $container.find('a');
	const markBlockedTooltip: string = getMessage('Blocked');
	// Get all aliases for user: & user_talk:
	const userNamespace: string[] = [];
	for (const namespace in mw.config.get('wgNamespaceIds')) {
		if ([2, 3].includes(mw.config.get('wgNamespaceIds')[namespace] as number)) {
			userNamespace.push(`${mw.util.escapeRegExp(namespace.replace(/_/g, ' '))}:`);
		}
	}
	// Let wikis that are importing this gadget specify the local alias of Special:Contributions
	const specialContribs: string = 'Special:Contributions';
	// RegExp for all titles that are  User:| User_talk: | Special:Contributions/ (for userscripts)
	const userTitleRegex: RegExp = new RegExp(`^(${userNamespace.join('|')}|${specialContribs}\\/)+([^\\/#]+)$`, 'i');
	// RegExp for links
	// articleRegex also matches external links in order to support the noping template
	const articleRegex: RegExp = new RegExp(`${mw.config.get('wgArticlePath').replace('$1', '')}([^#]+)`);
	const scriptRegex: RegExp = new RegExp(`^${mw.config.get('wgScript')}\\?title=([^#&]+)`);
	const userLinks: Record<string, HTMLAnchorElement[]> = {};
	let user: string;
	let userExecArray: RegExpExecArray | null;
	let url: string | undefined;
	let match: RegExpExecArray;
	let pageTitle: string;
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	$contentLinks.each((_index: number, link: HTMLAnchorElement): void => {
		const $link: JQuery<HTMLAnchorElement> = $(link);
		if (
			$link.hasClass('mw-changeslist-date') ||
			$link.parent('span').hasClass('mw-history-undo') ||
			$link.parent('span').hasClass('mw-rollback-link')
		) {
			return;
		}
		url = $link.attr('href');
		if (!url) {
			return;
		}
		if (mw.util.isIPv6Address(url.replace(/^(?:https?:\/\/)/i, ''))) {
			return;
		}
		if (new URL(url, location.origin).origin !== location.origin) {
			return;
		}
		if (articleRegex.test(url)) {
			match = articleRegex.exec(url) as RegExpExecArray;
			pageTitle = match[1] as string;
		} else if (scriptRegex.test(url)) {
			match = scriptRegex.exec(url) as RegExpExecArray;
			pageTitle = match[1] as string;
		} else {
			return;
		}
		pageTitle = decodeURIComponent(pageTitle).replace(/_/g, ' ');
		userExecArray = userTitleRegex.exec(pageTitle);
		if (!userExecArray || typeof userExecArray[2] !== 'string') {
			return;
		}
		user = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
		if (mw.util.isIPv6Address(user)) {
			user = user.toUpperCase();
		}
		$link.addClass('userlink');
		if (!userLinks[user]) {
			userLinks[user] = [];
		}
		(userLinks[user] as HTMLAnchorElement[]).push(link);
	});
	// Convert users into array
	const users: string[] = [];
	for (const u in userLinks) {
		if (!Object.hasOwn(userLinks, u)) {
			continue;
		}
		users.push(u);
	}
	if (!users.length) {
		return;
	}
	// API request
	let serverTime: number;
	let apiRequests: number = 0;
	// --------AUX functions
	// 20081226220605  or  2008-01-26T06:34:19Z   -> number
	const parseTS = (string: string): number => {
		const m: RegExpMatchArray = string
			.replace(/\D/g, '')
			.match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/) as RegExpMatchArray;
		return new Date(
			Date.UTC(
				+(m[1] as string),
				+(m[2] as string) - 1,
				+(m[3] as string),
				+(m[4] as string),
				+(m[5] as string),
				+(m[6] as string)
			)
		).getTime();
	};
	const zz = (v: number): string => {
		let _v: string = String(v);
		if (v <= 9) {
			_v = `0${v}`;
		}
		return _v;
	};
	const inHours = (ms: number): string => {
		let mm: number = Math.floor(ms / 6e4);
		if (!mm) {
			return `${Math.floor(ms / 1e3)}${getMessage('s')}`;
		}
		let hh: number = Math.floor(mm / 60);
		mm %= 60;
		const dd: number = Math.floor(hh / 24);
		hh %= 24;
		if (dd) {
			return `${dd + (dd < 10 ? `.${zz(hh)}` : '')}${getMessage('d')}`;
		}
		return `${hh}:${zz(mm)}`;
	};
	// Callback: receive data and mark links
	const markLinks = (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		response: Record<string, any>,
		_status: JQuery.Ajax.SuccessTextStatus,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		xhr: JQuery.jqXHR<any>
	): void => {
		if (!response['query']?.blocks) {
			return;
		}
		serverTime = new Date(xhr.getResponseHeader('Date') as string).getTime();
		let tip: string = markBlockedTooltip;
		for (const block of response['query'].blocks) {
			const isPartialBlcok: string = block.restrictions && !Array.isArray(block.restrictions); // Partial block
			let cssClass: string = 'user-blocked-partial';
			let blockTime: string;
			if (block.expiry.startsWith('in')) {
				if (!isPartialBlcok) {
					cssClass = 'user-blocked-indef';
				}
				blockTime = getMessage('infinity');
			} else {
				if (!isPartialBlcok) {
					cssClass = 'user-blocked-temp';
				}
				blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
			}
			tip = tip
				.replace('$1', blockTime)
				.replace('$2', block.by)
				.replace('$3', block.reason)
				.replace('$4', inHours(serverTime - parseTS(block.timestamp)));
			tip = isPartialBlcok ? tip.replace('$5', getMessage('partial')) : tip.replace('$5', '');
			const links: HTMLAnchorElement[] | undefined = userLinks[block.user];
			let $link: JQuery<HTMLAnchorElement>;
			if (links) {
				for (const link of links) {
					$link = $(link);
					// The following classes are used here:
					// * user-blocked-partial
					// * user-blocked-indef
					// * user-blocked-temp
					$link = $link.addClass(cssClass);
					$link.attr('title', $link.attr('title') + tip);
				}
			}
		}
		if (--apiRequests === 0) {
			const $body: JQuery<HTMLBodyElement> = $('body');
			// last response
			$container.removeClass('markblocked-loading');
			$body.find('#ca-showblocks').parent().remove(); // remove added portlet link
		}
	};
	$container.addClass('markblocked-loading');
	while (users.length > 0) {
		apiRequests++;
		$.post(
			`${mw.util.wikiScript('api')}?action=query&format=json&formatversion=2`,
			{
				list: 'blocks',
				bklimit: 100,
				bkusers: users.splice(0, 50).join('|'),
				bkprop: 'user|by|timestamp|expiry|reason|restrictions',
				// no need for 'id|flags'
			},
			markLinks
		);
	}
};
