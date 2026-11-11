// 本文件由 Navigation_popups 原版 core.js 的 dab.js 段落拆分而来，保留原有实现。
import {Title, isDisambig} from './titles';
import {popupString, tprintf} from './strings';
import type {Navpopup} from './navpopup';
import {changeLinkTargetLink} from './links';
import {getValueOf} from './options';
import {pg} from './pg';
import {setPopupHTML} from './htmloutput';
import {simplePrintf} from './tools';

const retargetDab = (newTarget: any, oldTarget: any, friendlyCurrentArticleName: any, titleToEdit: any) => {
	log(`retargetDab: newTarget=${newTarget} oldTarget=${oldTarget}`);
	return changeLinkTargetLink({
		newTarget,
		text: newTarget.split(' ').join('&nbsp;'),
		hint: tprintf('disambigHint', [newTarget]),
		summary: simplePrintf(getValueOf('popupFixDabsSummary'), [friendlyCurrentArticleName, newTarget]),
		clickButton: getValueOf('popupDabsAutoClick'),
		minor: true,
		oldTarget,
		watch: getValueOf('popupWatchDisambiggedPages'),
		title: titleToEdit,
	});
};
const listLinks = (wikitext: any, oldTarget: any, titleToEdit: any) => {
	// mediawiki strips trailing spaces, so we do the same
	// testcase: {@link https://en.wikipedia.org/w/index.php?title=Radial&oldid=97365633}
	const reg = /\[\[([^|]*?) *(\||]])/gi;
	let ret = [];
	const splitted = wikitext.split(reg);
	// ^[a-z]+ should match interwiki links, hopefully (case-insensitive)
	// and ^[a-z]* should match those and [[:Category...]] style links too
	const omitRegex = /^[a-z]*:|^[Ss]pecial:|^[Ii]mage|^[Cc]ategory/;
	const friendlyCurrentArticleName = oldTarget.toString();
	const wikPos = getValueOf('popupDabWiktionary');
	for (let i = 1; i < splitted.length; i += 3) {
		if (typeof splitted[i] === typeof 'string' && splitted[i].length > 0 && !omitRegex.test(splitted[i])) {
			ret.push(retargetDab(splitted[i], oldTarget, friendlyCurrentArticleName, titleToEdit));
		} /* if */
	} /* for loop */
	ret = rmDupesFromSortedList(ret.sort());
	if (wikPos) {
		const wikTarget = `wiktionary:${friendlyCurrentArticleName.replace(/^(.+)\s+\([^)]+\)\s*$/, '$1')}`;
		const meth = wikPos.toLowerCase() === 'first' ? 'unshift' : 'push';
		ret[meth](retargetDab(wikTarget, oldTarget, friendlyCurrentArticleName, titleToEdit));
	}
	ret.push(
		changeLinkTargetLink({
			newTarget: null,
			text: popupString('remove this link').split(' ').join('&nbsp;'),
			hint: popupString('remove all links to this disambig page from this article'),
			clickButton: getValueOf('popupDabsAutoClick'),
			oldTarget,
			summary: simplePrintf(getValueOf('popupRmDabLinkSummary'), [friendlyCurrentArticleName]),
			watch: getValueOf('popupWatchDisambiggedPages'),
			title: titleToEdit,
		})
	);
	return ret;
};
const rmDupesFromSortedList = (list: any) => {
	const ret = [];
	for (const element of list) {
		if (ret.length === 0 || element !== ret.at(-1)) {
			ret.push(element);
		}
	}
	return ret;
};
const makeFixDab = (data: any, navpop: Navpopup) => {
	// grab title from parent popup if there is one; default exists in changeLinkTargetLink
	const titleToEdit = navpop.parentPopup && navpop.parentPopup.article.toString();
	const list = listLinks(data, navpop.originalArticle, titleToEdit);
	if (list.length === 0) {
		log('listLinks returned empty list');
		return null;
	}
	let html = `<hr>${popupString('Click to disambiguate this link to:')}<br>`;
	html += list.join(', ');
	return html;
};
const makeFixDabs = (wikiText: string, navpop: Navpopup) => {
	if (
		getValueOf('popupFixDabs') &&
		isDisambig(wikiText, navpop.article) &&
		Title.fromURL(location.href).namespaceId() !== pg.nsSpecialId &&
		navpop.article.talkPage()
	) {
		setPopupHTML(makeFixDab(wikiText, navpop), 'popupFixDab', navpop.idNumber);
	}
};
const popupRedlinkHTML = (article: Title) => {
	return changeLinkTargetLink({
		newTarget: null,
		text: popupString('remove this link').split(' ').join('&nbsp;'),
		hint: popupString('remove all links to this page from this article'),
		clickButton: getValueOf('popupRedlinkAutoClick'),
		oldTarget: article.toString(),
		summary: simplePrintf(getValueOf('popupRedlinkSummary'), [article.toString()]),
	});
};

export {listLinks, makeFixDab, makeFixDabs, popupRedlinkHTML, retargetDab, rmDupesFromSortedList};
