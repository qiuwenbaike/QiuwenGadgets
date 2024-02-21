import * as OPTIONS from '../options.json';
import {getLastActiveMarker} from './getLastActiveMarker';
import {initMwApi} from 'ext.gadget.Util';

export const whoIsActive = ($body: JQuery<HTMLBodyElement>): void => {
	const api: mw.Api = initMwApi('WhoIsActive/1.1');
	const filteredLinks: {username: string; element: JQuery}[] = [];
	const {2: localizedUserNamespace} = mw.config.get('wgFormattedNamespaces');
	$body
		.find('.mw-body-content')
		.find(
			`a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"]), a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`
		)
		.each((_index: number, element: HTMLElement) => {
			const link: JQuery = $(element);
			const href: string = decodeURI(link.attr('href') ?? '');
			const userRegex: RegExp = new RegExp(`((User)|(${localizedUserNamespace})):(.*?)(?=&|$)`);
			const username: RegExpMatchArray | null = href.match(userRegex);
			if (username) {
				const index: number = username[0].indexOf('/');
				if (index === -1) {
					filteredLinks.push({
						username: username[0],
						element: link,
					});
				}
			}
		});
	if (filteredLinks.length === 0) {
		return;
	}
	for (const item of filteredLinks) {
		const {username} = item;
		const {element} = item;
		const params: ApiQueryUserContribsParams = {
			action: 'query',
			list: 'usercontribs',
			uclimit: 1,
			ucuser: username,
		};
		void api.get(params).then((result): void => {
			if (result['query'].usercontribs.length > 0) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const [{timestamp}] = result['query'].usercontribs;
				$(getLastActiveMarker(timestamp as string, true)).insertAfter(element);
			}
		});
	}
	const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');
	if (wgRelevantUserName && mw.config.get('wgNamespaceNumber') === 2 && mw.config.get('wgAction') === 'view') {
		const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
		const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();
		if (relevantUserPageName === pageName) {
			const params: ApiQueryUserContribsParams = {
				action: 'query',
				list: 'usercontribs',
				uclimit: 1,
				ucuser: wgRelevantUserName,
			};
			void api.get(params).then((result): void => {
				if (result['query'].usercontribs.length > 0) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					const [{timestamp}] = result['query'].usercontribs;
					(document.querySelectorAll(OPTIONS.mountPointSelector)[0] as HTMLElement).prepend(
						getLastActiveMarker(timestamp as string, false)
					);
				}
			});
		}
	}
};
