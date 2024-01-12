import React from 'ext.gadget.React';
import {WG_SKIN} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

export const whoIsActive = (): void => {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (WhoIsActive/1.1; ${mw.config.get('wgWikiID')})`);
	const filteredLinks: {username: string; element: JQuery}[] = [];
	const {2: localizedUserNamespace} = mw.config.get('wgFormattedNamespaces');
	const $body: JQuery<HTMLBodyElement> = $('body');
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
	const getLastActiveMarker = (timestamp: string, indicator: boolean) => {
		const date: number = Date.parse(timestamp);
		const now: number = Date.now();
		const diff: number = Math.floor((now - date) / (1000 * 60 * 60 * 24));
		let timespan: 'ThisWeek' | 'ThisMonth' | 'ThisYear' | 'OverAYear';
		if (diff > 365) {
			timespan = 'OverAYear';
		} else if (diff > 30) {
			timespan = 'ThisYear';
		} else if (diff > 7) {
			timespan = 'ThisMonth';
		} else {
			timespan = 'ThisWeek';
		}
		const tag =
			WG_SKIN === 'citizen' ? (
				<section className={['gadget-whoisactive__span', `gadget-whoisactive__${timespan}`]} />
			) : ['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) ? (
				<li className={['gadget-whoisactive__span', `gadget-whoisactive__${timespan}`]} />
			) : (
				<div className={['gadget-whoisactive__span', `gadget-whoisactive__${timespan}`]} />
			);
		const tagInner = (
			<>
				<span
					className={['gadget-whoisactive__icon', `gadget-whoisactive__icon__${timespan}`]}
					title={getMessage(timespan)}
				/>
				<span
					className={['gadget-whoisactive__text', indicator === true ? ', gadget-whoisactive__notext' : '']}
				>
					{getMessage(timespan) ?? ''}
				</span>
			</>
		);
		return $(tag).append(tagInner);
	};
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
				const [{timestamp}] = result['query'].usercontribs;
				getLastActiveMarker(timestamp, true).insertAfter(element);
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
					const [{timestamp}] = result['query'].usercontribs;
					getLastActiveMarker(timestamp, false).prependTo($body.find('#footer-info, .page-info'));
				}
			});
		}
	}
};
