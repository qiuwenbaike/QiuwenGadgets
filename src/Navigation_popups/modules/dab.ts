// 本文件由 Navigation_popups 原版 core.js 的 dab.js 段落拆分而来，保留原有实现。
import {Title, isDisambig} from './titles';
import {popupString, tprintf} from './strings';
import type {Navpopup} from './navpopup';
import {changeLinkTargetLink} from './links';
import {getValueOf} from './options';
import {pg} from './pg';
import {setPopupHTML} from './htmloutput';
import {simplePrintf} from './tools';

const retargetDab = (newTarget: string, oldTarget: Title, friendlyCurrentArticleName: string, titleToEdit?: string) => {
	log(`retargetDab: newTarget=${newTarget} oldTarget=${oldTarget}`);
	return changeLinkTargetLink({
		newTarget,
		text: newTarget.split(' ').join('&nbsp;'),
		hint: tprintf('disambigHint', [newTarget]),
		summary: simplePrintf(getValueOf('popupFixDabsSummary'), [friendlyCurrentArticleName, newTarget]),
		clickButton: getValueOf('popupDabsAutoClick'),
		minor: true,
		// 原版传 Title 经 escapeRegExp/decodeURIComponent 隐式字符串化，等价于 toString()
		oldTarget: oldTarget.toString(),
		watch: getValueOf('popupWatchDisambiggedPages'),
		title: titleToEdit,
	});
};
const listLinks = (wikitext: string, oldTarget: Title, titleToEdit?: string) => {
	// mediawiki strips trailing spaces, so we do the same
	// testcase: {@link https://en.wikipedia.org/w/index.php?title=Radial&oldid=97365633}
	const reg = /\[\[([^|]*?) *(\||]])/gi;
	// changeLinkTargetLink 在 URL 无法解析时返回 null（原版行为）
	let ret: (string | null)[] = [];
	const splitted = wikitext.split(reg);
	// ^[a-z]+ should match interwiki links, hopefully (case-insensitive)
	// and ^[a-z]* should match those and [[:Category...]] style links too
	const omitRegex = /^[a-z]*:|^[Ss]pecial:|^[Ii]mage|^[Cc]ategory/;
	const friendlyCurrentArticleName = oldTarget.toString();
	const wikPos = getValueOf('popupDabWiktionary');
	for (let i = 1; i < splitted.length; i += 3) {
		const s = splitted[i];
		if (typeof s === 'string' && s.length > 0 && !omitRegex.test(s)) {
			ret.push(retargetDab(s, oldTarget, friendlyCurrentArticleName, titleToEdit));
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
			oldTarget: oldTarget.toString(),
			summary: simplePrintf(getValueOf('popupRmDabLinkSummary'), [friendlyCurrentArticleName]),
			watch: getValueOf('popupWatchDisambiggedPages'),
			title: titleToEdit,
		})
	);
	return ret;
};
const rmDupesFromSortedList = (list: (string | null)[]) => {
	const ret: (string | null)[] = [];
	for (const element of list) {
		if (ret.length === 0 || element !== ret.at(-1)) {
			ret.push(element);
		}
	}
	return ret;
};
const makeFixDab = (data: string, navpop: Navpopup) => {
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
		// makeFixDab 返回 null 表示无消歧义链接；原版 append(null) 会渲染字面量 "null" 文本，此处修正为静默跳过
		setPopupHTML(makeFixDab(wikiText, navpop) ?? '', 'popupFixDab', navpop.idNumber);
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
