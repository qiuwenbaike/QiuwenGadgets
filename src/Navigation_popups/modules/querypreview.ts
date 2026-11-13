// 本文件由 Navigation_popups 原版 core.js 的 querypreview.js 段落拆分而来，保留原有实现。
import {anyChild, entify, getJsObj, map, zeroFill} from './tools';
import {completedNavpopTask, insertPreview, pendingNavpopTask, prepPreviewmaker} from './actions';
import {popupString, tprintf} from './strings';
import {setPopupHTML, setPopupTipsAndHTML, setPopupTrailer} from './htmloutput';
import type {Dow} from './types';
import type {Navpopup} from './navpopup';
import {Previewmaker} from './previewmaker';
import {Title} from './titles';
import {getMwApi} from './init';
import {getPageInfo} from './pageinfo';
import {getPageWithCaching} from './getpage';
import {getValueOf} from './options';
import {pg} from './pg';
import {wikiLink} from './links';

// loadAPIPreview / showAPIPreview 支持的查询类型
type QueryPreviewType =
	'backlinks' | 'category' | 'contribs' | 'history' | 'imagepagepreview' | 'imagelinks' | 'revision' | 'userinfo';
// MediaWiki API 返回的 revision 对象（formatversion=2，本模块消费的最小字段集）
interface ApiRevision {
	comment?: string;
	commenthidden?: boolean;
	content?: string;
	contentmodel?: string;
	minor?: boolean;
	revid: number;
	timestamp: string;
	title: string;
	user?: string;
	userhidden?: boolean;
}
interface ApiPage {
	imagerepository?: string;
	revisions?: ApiRevision[];
}
// action=query&list=users|usercontribs|blocks 响应（userinfo 预览）的最小结构
interface ApiUserInfo {
	blockedby?: string;
	blockpartial?: boolean;
	editcount?: number;
	gender?: string;
	groups?: string[];
	invalid?: string;
	missing?: string;
	registration?: string;
}
interface ApiGlobalUserInfo {
	groups?: string[];
	unattached?: {wiki: string}[];
}
interface ApiBlock {
	rangeend: string;
	rangestart: string;
	restrictions?: string | string[];
}
interface ApiUserInfoQuery {
	blocks?: ApiBlock[];
	globaluserinfo?: ApiGlobalUserInfo;
	users?: ApiUserInfo[];
	usercontribs?: {timestamp: string}[];
}

const loadAPIPreview = (queryType: QueryPreviewType, article: Title, navpop: Navpopup) => {
	const art = new Title(article).urlString();
	let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&`;
	let htmlGenerator: (
		article: Title,
		download: Dow,
		navpop: Navpopup,
		reallyContribs?: boolean
	) => string | undefined = () => {
		void mw.notify('invalid html generator', {tag: 'popups', type: 'error'});
		return undefined;
	};
	let usernameart = '';
	switch (queryType) {
		case 'history':
			url += `titles=${art}&prop=revisions&rvlimit=${getValueOf('popupHistoryPreviewLimit')}`;
			htmlGenerator = APIhistoryPreviewHTML;
			break;
		case 'category':
			url += `list=categorymembers&cmtitle=${art}`;
			htmlGenerator = APIcategoryPreviewHTML;
			break;
		case 'userinfo': {
			const username = new Title(article).userName();
			// userName() 为 null 时与原版隐式转 "null" 一样不构成有效用户链接，回退空串
			usernameart = encodeURIComponent(username?.toString() ?? '');
			url += pg.re.ipUser.test(username?.toString() ?? '')
				? `list=blocks&bkprop=range|restrictions&bkip=${usernameart}`
				: `list=users|usercontribs&usprop=blockinfo|groups|editcount|registration|gender&ususers=${usernameart}&meta=globaluserinfo&guiprop=groups|unattached&guiuser=${usernameart}&uclimit=1&ucprop=timestamp&ucuser=${usernameart}`;
			htmlGenerator = APIuserInfoPreviewHTML;
			break;
		}
		case 'contribs':
			usernameart = encodeURIComponent(new Title(article).userName()?.toString() ?? '');
			url += `list=usercontribs&ucuser=${usernameart}&uclimit=${getValueOf('popupContribsPreviewLimit')}`;
			htmlGenerator = APIcontribsPreviewHTML;
			break;
		case 'imagepagepreview': {
			let trail = '';
			if (getValueOf('popupImageLinks')) {
				trail = `&list=imageusage&iutitle=${art}`;
			}
			url += `titles=${art}&prop=revisions|imageinfo&rvprop=content${trail}`;
			htmlGenerator = APIimagepagePreviewHTML;
			break;
		}
		case 'backlinks':
			url += `list=backlinks&bltitle=${art}`;
			htmlGenerator = APIbacklinksPreviewHTML;
			break;
		case 'revision':
			url += article.oldid ? `revids=${article.oldid}` : `titles=${article.removeAnchor().urlString()}`;
			url +=
				'&prop=revisions|pageprops|info|images|categories&rvprop=ids|timestamp|flags|comment|user|content&cllimit=max&imlimit=max';
			htmlGenerator = APIrevisionPreviewHTML;
			break;
	}
	pendingNavpopTask(navpop);
	const callback = (d: Dow) => {
		log('callback of API functions was hit');
		if (queryType === 'userinfo') {
			// We need to do another API request
			fetchUserGroupNames(d.data!).then(() => {
				showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber!, navpop, d);
			});
			return;
		}
		showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber!, navpop, d);
	};
	const go = () => {
		getPageWithCaching(url, callback, navpop);
		return true;
	};
	if (navpop.visible || !getValueOf('popupLazyDownloads')) {
		go();
	} else {
		navpop.addHook(go, 'unhide', 'before', `DOWNLOAD_${queryType}_QUERY_DATA`);
	}
};
const linkList = (list: string[]) => {
	list.sort((x, y) => {
		return x === y ? 0 : x < y ? -1 : 1;
	});
	const buf = [];
	for (const element of list) {
		buf.push(
			wikiLink({
				article: new Title(element),
				text: element.split(' ').join('&nbsp;'),
				action: 'view',
			})
		);
	}
	return buf.join(', ');
};
const getTimeOffset = () => {
	const tz = mw.user.options.get('timecorrection');
	if (tz && tz.includes('|')) {
		// New format
		return Number.parseInt(tz.split('|')[1], 10);
	}
	return 0;
};
const getTimeZone = () => {
	if (!pg.user.timeZone) {
		const tz = mw.user.options.get('timecorrection');
		pg.user.timeZone = 'UTC';
		if (tz) {
			const tzComponents = tz.split('|');
			if (tzComponents.length === 3 && tzComponents[0] === 'ZoneInfo') {
				[, , pg.user.timeZone] = tzComponents;
			} else {
				errlog(`Unexpected timezone information: ${tz}`);
			}
		}
	}
	return pg.user.timeZone;
};
const useTimeOffset = () => {
	const tz = mw.user.options.get('timecorrection');
	if (tz && !tz.includes('ZoneInfo|')) {
		// System| Default system time, default for users who didn't configure timezone
		// Offset| Manual defined offset by user
		return true;
	}
	return false;
};
const getLocales = () => {
	if (!pg.user.locales) {
		let userLanguage: string = document.querySelector('html')!.getAttribute('lang') ?? ''; // make sure we have HTML locale
		if (getValueOf('popupLocale')) {
			userLanguage = getValueOf('popupLocale');
		} else if (userLanguage === 'en') {
			// en.wp tends to treat this as international english / unspecified
			// but we have more specific settings in user options
			userLanguage = getMWDateFormat() === 'mdy' ? 'en-US' : 'en-GB';
		}
		pg.user.locales = Intl.DateTimeFormat.supportedLocalesOf([userLanguage, navigator.language]);
	}
	return pg.user.locales;
};
const getMWDateFormat = () => {
	return mw.user.options.get('date');
};
const editPreviewTable = (article: Title, h: ApiRevision[], reallyContribs?: boolean) => {
	let html = ['<table>'];
	let day;
	let curart = article;
	let page;
	let makeFirstColumnLinks;
	if (reallyContribs) {
		// We're showing user contributions, so make (diff | hist) links
		makeFirstColumnLinks = (currentRevision: ApiRevision) => {
			let result = '(';
			result +=
				`<a href="${pg.wiki.titlebase}${new Title(currentRevision.title).urlString()}&diff=prev` +
				`&oldid=${currentRevision.revid}">${popupString('diff')}</a>`;
			result += '&nbsp;|&nbsp;';
			result += `<a href="${pg.wiki.titlebase}${new Title(
				currentRevision.title
			).urlString()}&action=history">${popupString('hist')}</a>`;
			result += ')';
			return result;
		};
	} else {
		// It's a regular history page, so make (cur | last) links
		const firstRevid = h[0]!.revid;
		makeFirstColumnLinks = (currentRevision: ApiRevision) => {
			let result = '(';
			result += `<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&diff=${firstRevid}&oldid=${
				currentRevision.revid
			}">${popupString('cur')}</a>`;
			result += '&nbsp;|&nbsp;';
			result += `<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&diff=prev&oldid=${
				currentRevision.revid
			}">${popupString('last')}</a>`;
			result += ')';
			return result;
		};
	}
	for (const [i, element] of h.entries()) {
		if (reallyContribs) {
			page = element.title;
			curart = new Title(page);
		}
		const minor = element.minor ? '<b>m </b>' : '';
		const editDate = new Date(element.timestamp);
		let thisDay = formattedDate(editDate);
		const thisTime = formattedTime(editDate);
		if (thisDay === day) {
			thisDay = '';
		} else {
			day = thisDay;
		}
		if (thisDay) {
			html.push(`<tr><td colspan=3><span class="popup_history_date">${thisDay}</span></td></tr>`);
		}
		html.push(
			`<tr class="popup_history_row_${i % 2 ? 'odd' : 'even'}">`,
			`<td>${makeFirstColumnLinks(element)}</td>`,
			'<td>' +
				`<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&oldid=${
					element.revid
				}">${thisTime}</a></td>`
		);
		let col3url = '';
		let col3txt = '';
		if (reallyContribs) {
			col3url = pg.wiki.titlebase + curart.urlString();
			col3txt = pg.escapeQuotesHTML(page ?? '');
		} else {
			const {user} = element;
			if (element.userhidden) {
				col3url = getValueOf('popupRevDelUrl');
				col3txt = pg.escapeQuotesHTML(popupString('revdel'));
			} else {
				col3url = pg.re.ipUser.test(user ?? '')
					? `${
							pg.wiki.titlebase + mw.config.get('wgFormattedNamespaces')[pg.nsSpecialId!]
						}:Contributions&target=${new Title(user).urlString()}`
					: `${pg.wiki.titlebase + mw.config.get('wgFormattedNamespaces')[pg.nsUserId!]}:${new Title(
							user
						).urlString()}`;
				col3txt = pg.escapeQuotesHTML(user ?? '');
			}
		}
		html.push(`<td>${reallyContribs ? minor : ''}<a href="${col3url}">${col3txt}</a></td>`);
		let comment = '';
		const c = element.comment || element.content;
		if (c) {
			comment = new Previewmaker(c, new Title(curart).toUrl()).editSummaryPreview();
		} else if (element.commenthidden) {
			comment = popupString('revdel');
		}
		html.push(`<td>${reallyContribs ? '' : minor}${comment}</td>`, '</tr>');
		html = [html.join('')];
	}
	html.push('</table>');
	return html.join('');
};
const adjustDate = (d: Date, offset: number) => {
	// offset is in minutes
	const o = offset * 60 * 1000;
	return new Date(+d + o);
};
const convertTimeZone = (date: Date, timeZone: string) => {
	return new Date(date.toLocaleString('en-US', {timeZone}));
};
const formattedDateTime = (date: Date) => {
	// fallback for IE11 and unknown timezones
	if (useTimeOffset()) {
		return `${formattedDate(date)} ${formattedTime(date)}`;
	}
	if (getMWDateFormat() === 'ISO 8601') {
		const d2 = convertTimeZone(date, getTimeZone());
		return `${map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join('-')}T${map(zeroFill, [
			d2.getHours(),
			d2.getMinutes(),
			d2.getSeconds(),
		]).join(':')}`;
	}
	const options = getValueOf('popupDateTimeFormatterOptions');
	options.timeZone = getTimeZone();
	return date.toLocaleString(getLocales(), options);
};
const formattedDate = (date: Date) => {
	let d2: Date;
	// fallback for IE11 and unknown timezones
	if (useTimeOffset()) {
		// we adjust the UTC time, so we print the adjusted UTC, but not really UTC values
		d2 = adjustDate(date, getTimeOffset());
		return map(zeroFill, [d2.getUTCFullYear(), d2.getUTCMonth() + 1, d2.getUTCDate()]).join('-');
	}
	if (getMWDateFormat() === 'ISO 8601') {
		d2 = convertTimeZone(date, getTimeZone());
		return map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join('-');
	}
	const options = getValueOf('popupDateFormatterOptions');
	options.timeZone = getTimeZone();
	return date.toLocaleDateString(getLocales(), options);
};
const formattedTime = (date: Date) => {
	let d2: Date;
	// fallback for IE11 and unknown timezones
	if (useTimeOffset()) {
		// we adjust the UTC time, so we print the adjusted UTC, but not really UTC values
		d2 = adjustDate(date, getTimeOffset());
		return map(zeroFill, [d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()]).join(':');
	}
	if (getMWDateFormat() === 'ISO 8601') {
		d2 = convertTimeZone(date, getTimeZone());
		return map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(':');
	}
	const options = getValueOf('popupTimeFormatterOptions');
	options.timeZone = getTimeZone();
	return date.toLocaleTimeString(getLocales(), options);
};
const fetchUserGroupNames = (userinfoResponse: string) => {
	const queryObj = getJsObj(userinfoResponse).query;
	const user = anyChild(queryObj.users);
	const messages = [];
	if (user.groups) {
		for (const groupName of user.groups) {
			if (!['*', 'user', 'autoconfirmed'].includes(groupName)) {
				messages.push(`group-${groupName}-member`);
			}
		}
	}
	if (queryObj.globaluserinfo && queryObj.globaluserinfo.groups) {
		for (const groupName of queryObj.globaluserinfo.groups) {
			messages.push(`group-${groupName}-member`);
		}
	}
	return getMwApi().loadMessagesIfMissing(messages);
};
const showAPIPreview = (
	queryType: QueryPreviewType,
	html: string | undefined,
	id: number,
	navpop: Navpopup,
	download?: Dow
) => {
	// DJ: done
	let target = 'popupPreview';
	completedNavpopTask(navpop);
	switch (queryType) {
		case 'imagelinks':
		case 'category':
			target = 'popupPostPreview';
			break;
		case 'userinfo':
			target = 'popupUserData';
			break;
		case 'revision':
			insertPreview(download!);
			return;
	}
	setPopupTipsAndHTML(html ?? '', target, id);
};
const APIrevisionPreviewHTML = (_article: Title, download: Dow): string | undefined => {
	try {
		const jsObj = getJsObj(download.data!);
		const page = anyChild(jsObj.query.pages);
		if (page.missing) {
			// TODO we need to fix this proper later on
			download.owner = undefined;
			return;
		}
		const content =
			page && page.revisions && page.revisions[0] && page.revisions[0].content ? page.revisions[0].content : null;
		if (typeof content === 'string') {
			download.data = content;
			download.lastModified = new Date(page.revisions[0].timestamp);
		}
		return undefined;
	} catch {
		return 'Revision preview failed :(';
	}
};
const APIbacklinksPreviewHTML = (_article: Title, download: Dow /* , navpop */) => {
	try {
		const jsObj = getJsObj(download.data!);
		const list = jsObj.query.backlinks;
		if (!list) {
			return popupString('No backlinks found');
		}
		const parts: string[] = [];
		for (const element of list) {
			const t = new Title(element.title);
			parts.push(`<a href="${pg.wiki.titlebase}${t.urlString()}">${entify(t.toString())}</a>`);
		}
		let html = parts.join(', ');
		if (jsObj.continue && jsObj.continue.blcontinue) {
			html += popupString(' and more');
		}
		return html;
	} catch {
		return 'backlinksPreviewHTML went wonky';
	}
};
pg.fn.APIsharedImagePagePreviewHTML = (obj: {query?: {pages?: Record<string, ApiPage>}; requestid: number}) => {
	log('APIsharedImagePagePreviewHTML');
	const popupid = obj.requestid;
	if (obj.query && obj.query.pages) {
		const page = anyChild(obj.query.pages);
		const first = page?.revisions?.[0];
		const content = first && first.contentmodel === 'wikitext' ? first.content : null;
		if (typeof content === 'string' && pg && pg.current && pg.current.link && pg.current.link.navpopup) {
			/* Not entirely safe, but the best we can do */
			// 原版传 Title 对象，经 JS 隐式字符串化等价于 toString()
			const p = new Previewmaker(content, pg.current.link.navpopup.article.toString(), pg.current.link.navpopup);
			p.makePreview();
			setPopupHTML(p.html, 'popupSecondPreview', popupid);
		}
	}
};
const APIimagepagePreviewHTML = (article: Title, download: Dow, navpop: Navpopup) => {
	try {
		const jsObj = getJsObj(download.data!);
		const page = anyChild(jsObj.query.pages);
		const content =
			page && page.revisions && page.revisions[0].contentmodel === 'wikitext' ? page.revisions[0].content : null;
		let ret = '';
		let alt: string | undefined = '';
		try {
			alt = (navpop.parentAnchor!.childNodes[0] as HTMLImageElement | undefined)?.alt;
		} catch {
			/* empty */
		}
		if (alt) {
			ret = `${ret}<hr><b>${popupString('Alt text:')}</b> ${pg.escapeQuotesHTML(alt)}`;
		}
		if (typeof content === 'string') {
			const p = prepPreviewmaker(content, article, navpop);
			p.makePreview();
			if (p.html) {
				ret += `<hr>${p.html}`;
			}
			if (getValueOf('popupSummaryData')) {
				const info = getPageInfo(content, download);
				log(info);
				setPopupTrailer(info, navpop.idNumber!);
			}
		}
		if (page && page.imagerepository === 'shared') {
			const art = new Title(article);
			const encart = encodeURIComponent(`File:${art.stripNamespace()}`);
			const shared_url =
				`${pg.wiki.apicommonsbase}?format=json&formatversion=2` +
				'&callback=pg.fn.APIsharedImagePagePreviewHTML' +
				`&requestid=${navpop.idNumber!}&action=query&prop=revisions&rvprop=content&titles=${encart}`;
			ret = `${ret}<hr>${popupString('Image from Qiuwen Baike')}: <a href="${
				pg.wiki.commonsbase
			}?title=${encart}">${popupString('Description page')}</a>`;
			mw.loader.load(shared_url);
		}
		showAPIPreview(
			'imagelinks',
			APIimagelinksPreviewHTML(article, download),
			navpop.idNumber!,
			download as unknown as Navpopup,
			download
		);
		return ret;
	} catch {
		return 'API imagepage preview failed :(';
	}
};
const APIimagelinksPreviewHTML = (_article: Title, download: Dow) => {
	try {
		const jsobj = getJsObj(download.data!);
		const list = jsobj.query.imageusage;
		if (list) {
			const ret = [];
			for (const element of list) {
				ret.push(element.title);
			}
			if (ret.length === 0) {
				return popupString('No image links found');
			}
			return `<h2>${popupString('File links')}</h2>${linkList(ret)}`;
		}
		return popupString('No image links found');
	} catch {
		return 'Image links preview generation failed :(';
	}
};
const APIcategoryPreviewHTML = (_article: Title, download: Dow) => {
	try {
		const jsobj = getJsObj(download.data!);
		const list = jsobj.query.categorymembers;
		const titles: string[] = [];
		for (const element of list) {
			titles.push(element.title);
		}
		if (titles.length === 0) {
			return popupString('Empty category');
		}
		let ret = `<h2>${tprintf('Category members (%s shown)', [titles.length])}</h2>${linkList(titles)}`;
		if (jsobj.continue && jsobj.continue.cmcontinue) {
			ret += popupString(' and more');
		}
		return ret;
	} catch {
		return 'Category preview failed :(';
	}
};
const APIuserInfoPreviewHTML = (_article: Title, download: Dow) => {
	const ret: string[] = [];
	let queryobj: ApiUserInfoQuery = {};
	try {
		queryobj = getJsObj(download.data!).query;
	} catch {
		return 'Userinfo preview failed :(';
	}
	const user = queryobj.users?.[0];
	if (user) {
		const {globaluserinfo} = queryobj;
		if (user.invalid === '') {
			ret.push(popupString('Invalid user'));
		} else if (user.missing === '') {
			ret.push(popupString('Not a registered username'));
		}
		if (user.blockedby) {
			if (user.blockpartial) {
				ret.push(`<b>${popupString('Has blocks')}</b>`);
			} else {
				ret.push(`<b>${popupString('BLOCKED')}</b>`);
			}
		}
		if (globaluserinfo && ('locked' in globaluserinfo || 'hidden' in globaluserinfo)) {
			let lockedSulAccountIsAttachedToThis = true;
			for (let i = 0; globaluserinfo.unattached && i < globaluserinfo.unattached.length; i++) {
				if (globaluserinfo.unattached[i]!.wiki === mw.config.get('wgDBname')) {
					lockedSulAccountIsAttachedToThis = false;
					break;
				}
			}
			if (lockedSulAccountIsAttachedToThis) {
				if ('locked' in globaluserinfo) {
					ret.push(`<b><i>${popupString('LOCKED')}</i></b>`);
				}
				if ('hidden' in globaluserinfo) {
					ret.push(`<b><i>${popupString('HIDDEN')}</i></b>`);
				}
			}
		}
		if (getValueOf('popupShowGender') && user.gender) {
			switch (user.gender) {
				case 'male':
					ret.push(`${popupString('he/him')} · `);
					break;
				case 'female':
					ret.push(`${popupString('she/her')} · `);
					break;
			}
		}
		if (user.groups) {
			for (const groupName of user.groups) {
				if (!['*', 'user', 'autoconfirmed'].includes(groupName)) {
					// Messages that can be used here:
					// * see [[Special:PrefixIndex/MediaWiki:Group-]]
					// * for more information
					ret.push(pg.escapeQuotesHTML(mw.message(`group-${groupName}-member`, user.gender).text()));
				}
			}
		}
		if (globaluserinfo && globaluserinfo.groups) {
			for (const groupName of globaluserinfo.groups) {
				ret.push(
					// Messages that can be used here:
					// * see [[Special:PrefixIndex/MediaWiki:Group-]]
					// * for more information
					`<i>${pg.escapeQuotesHTML(mw.message(`group-${groupName}-member`, user.gender).text())}</i>`
				);
			}
		}
		if (user.registration) {
			ret.push(
				pg.escapeQuotesHTML(
					(user.editcount ?? '0') +
						popupString(' edits since: ') +
						(user.registration ? formattedDate(new Date(user.registration)) : '')
				)
			);
		}
	}
	if (queryobj.usercontribs && queryobj.usercontribs.length > 0) {
		ret.push(popupString('last edit on ') + formattedDate(new Date(queryobj.usercontribs[0]!.timestamp)));
	}
	if (queryobj.blocks) {
		ret.push(popupString('IP user')); // we only request list=blocks for IPs
		for (let l = 0; l < queryobj.blocks.length; l++) {
			const block = queryobj.blocks[l]!;
			let rbstr = block.rangestart === block.rangeend ? 'BLOCK' : 'RANGEBLOCK';
			rbstr = Array.isArray(block.restrictions) ? `${rbstr}ED` : `Has ${rbstr.toLowerCase()}s`;
			ret.push(`<b>${popupString(rbstr)}</b>`);
		}
	}
	// if any element of ret ends with ' · ', merge it with the next element to avoid
	// the .join(', ') call inserting a comma after it
	for (let m = 0; m < ret.length - 1; m++) {
		if (ret[m]!.length > 3 && ret[m]!.slice(Math.max(0, ret[m]!.length - 3)) === ' · ') {
			ret[m] += ret[m + 1]!;
			ret.splice(m + 1, 1); // delete element at index m+1
			m--;
		}
	}
	return `<hr>${ret.join(', ')}`;
};
const APIcontribsPreviewHTML = (article: Title, download: Dow, navpop: Navpopup) => {
	return APIhistoryPreviewHTML(article, download, navpop, true);
};
const APIhistoryPreviewHTML = (article: Title, download: Dow, _navpop?: Navpopup, reallyContribs?: boolean) => {
	try {
		const jsobj = getJsObj(download.data!);
		let edits: ApiRevision[] = [];
		edits = reallyContribs ? jsobj.query.usercontribs : anyChild(jsobj.query.pages).revisions;
		const ret = editPreviewTable(article, edits, reallyContribs);
		return ret;
	} catch {
		return 'History preview failed :-(';
	}
};

export {
	APIbacklinksPreviewHTML,
	APIcategoryPreviewHTML,
	APIcontribsPreviewHTML,
	APIhistoryPreviewHTML,
	APIimagelinksPreviewHTML,
	APIimagepagePreviewHTML,
	APIrevisionPreviewHTML,
	APIuserInfoPreviewHTML,
	adjustDate,
	convertTimeZone,
	editPreviewTable,
	fetchUserGroupNames,
	formattedDate,
	formattedDateTime,
	formattedTime,
	getLocales,
	getMWDateFormat,
	getTimeOffset,
	getTimeZone,
	linkList,
	loadAPIPreview,
	showAPIPreview,
	useTimeOffset,
};
