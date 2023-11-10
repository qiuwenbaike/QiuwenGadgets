import {getMessage} from './i18n';
import {initMwApi} from '../../util';

export const whoIsActive = (): void => {
	const api = initMwApi(`Qiuwen/1.1 (WhoIsActive/1.1; ${mw.config.get('wgWikiID')})`);
	const filteredLinks: {username: string; element: JQuery}[] = [];
	const {2: localizedUserNamespace} = mw.config.get('wgFormattedNamespaces');
	$('.mw-body-content')
		.find(
			`a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"]), a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`
		)
		.each((_index: number, element: HTMLElement) => {
			const link = $(element);
			const href = decodeURI(link.attr('href') ?? '');
			const userRegex = new RegExp(`((User)|(${localizedUserNamespace})):(.*?)(?=&|$)`);
			const username = href.match(userRegex);
			if (username) {
				const index = username[0].indexOf('/');
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
	const getLastActiveMarker = (timestamp: string, indicator?: boolean) => {
		const date = Date.parse(timestamp);
		const now = Date.now();
		const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
		let timespan: string;
		if (diff > 365) {
			timespan = 'OverAYear';
		} else if (diff > 30) {
			timespan = 'ThisYear';
		} else if (diff > 7) {
			timespan = 'ThisMonth';
		} else {
			timespan = 'ThisWeek';
		}
		const elementName =
			indicator === true
				? 'div'
				: mw.config.get('skin') === 'citizen'
				? 'section'
				: ['vector', 'vector-2022', 'gongbi', 'write'].includes(mw.config.get('skin'))
				? 'li'
				: 'div';
		// The following classes are used here:
		// * gadget-whoisactive__OverAYear
		// * gadget-whoisactive__ThisYear
		// * gadget-whoisactive__ThisMonth
		// * gadget-whoisactive__ThisWeek
		const $icon: JQuery = $(`<${elementName}>`)
			.addClass(`gadget-whoisactive__span gadget-whoisactive__${timespan}`)
			.append(
				$('<span>')
					.addClass(`gadget-whoisactive__icon gadget-whoisactive__icon__${timespan}`)
					.attr({
						alt: getMessage(timespan),
						title: getMessage(timespan),
					})
			)
			.append(
				$('<span>')
					.addClass(`gadget-whoisactive__text${indicator === true ? '  gadget-whoisactive__notext' : ''}`)
					.text(getMessage(timespan))
			);
		return $icon;
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
		api.get(params).then((result) => {
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
			api.get(params).then((result) => {
				if (result['query'].usercontribs.length > 0) {
					const [{timestamp}] = result['query'].usercontribs;
					getLastActiveMarker(timestamp, false).prependTo($('#footer-info, .page-info'));
				}
			});
		}
	}
};
