// 本文件由 Navigation_popups 原版 core.js 的 links.js 段落拆分而来，保留原有实现。
import type {Dow, WikiParams} from './types';
import {Title, parseParams, safeDecodeURI} from './titles';
import {abortAllDownloads, startDownload} from './downloader';
import {anyChild, getJsObj, simplePrintf} from './tools';
import {getMwApi, setupCache} from './init';
import {popupString, tprintf} from './strings';
import type {Navpopup} from './navpopup';
import {addPopupShortcut} from './shortcutkeys';
import {autoClickToken} from './autoedit';
import {getValueOf} from './options';
import {pg} from './pg';
import {setupTooltips} from './actions';

const titledDiffLink = (l: any) => {
	return titledWikiLink({
		article: l.article,
		action: `${l.to}&oldid=${l.from}`,
		newWin: l.newWin,
		noPopup: l.noPopup,
		text: l.text,
		title: l.title,
		/* hack: no oldid here */
		actionName: 'diff',
	});
};
const wikiLink = (l: any) => {
	// {article:article, action:action, text:text, oldid, newid}) {
	if (!(typeof l.article === typeof {} && typeof l.action === typeof '' && typeof l.text === typeof '')) {
		return null;
	}
	if (l.oldid === undefined) {
		l.oldid = null;
	}
	const savedOldid = l.oldid;
	if (!/^(edit|view|revert|render)$|^raw/.test(l.action)) {
		l.oldid = null;
	}
	let hint = popupString(`${l.action}Hint`); // revertHint etc etc etc
	const oldidData = [l.oldid, safeDecodeURI(l.article)];
	let revisionString = tprintf('revision %s of %s', oldidData);
	log(`revisionString=${revisionString}`);
	switch (l.action) {
		case 'edit&section=new':
			hint = popupString('newSectionHint');
			break;
		case 'edit&undo=':
			if (l.diff && l.diff !== 'prev' && savedOldid) {
				l.action += `${l.diff}&undoafter=${savedOldid}`;
			} else if (savedOldid) {
				l.action += savedOldid;
			}
			hint = popupString('undoHint');
			break;
		case 'raw&ctype=text/css':
			hint = popupString('rawHint');
			break;
		case 'revert': {
			const p = parseParams(pg.current.link!.href);
			l.action = `edit&autoclick=wpSave&actoken=${autoClickToken()}&autoimpl=${popupString(
				'autoedit_version'
			)}&autosummary=${revertSummary(l.oldid, p.diff)}`;
			if (p.diff === 'prev') {
				l.action += '&direction=prev';
				revisionString = tprintf('the revision prior to revision %s of %s', oldidData);
			}
			if (getValueOf('popupRevertSummaryPrompt')) {
				l.action += '&autosummaryprompt=true';
			}
			if (getValueOf('popupMinorReverts')) {
				l.action += '&autominor=true';
			}
			log(`revisionString is now ${revisionString}`);
			break;
		}
		case 'nullEdit':
			l.action = `edit&autoclick=wpSave&actoken=${autoClickToken()}&autoimpl=${popupString(
				'autoedit_version'
			)}&autosummary=null`;
			break;
		case 'historyfeed':
			l.action = 'history&feed=rss';
			break;
		case 'markpatrolled':
			l.action = `markpatrolled&rcid=${l.rcid}`;
	}
	if (hint) {
		hint = l.oldid ? simplePrintf(hint, [revisionString]) : simplePrintf(hint, [safeDecodeURI(l.article)]);
	} else {
		hint = safeDecodeURI(`${l.article}&action=${l.action}`) + l.oldid ? `&oldid=${l.oldid}` : '';
	}
	return titledWikiLink({
		article: l.article,
		action: l.action,
		text: l.text,
		newWin: l.newWin,
		title: hint,
		oldid: l.oldid,
		noPopup: l.noPopup,
		onclick: l.onclick,
	});
};
const revertSummary = (oldid: string, diff: any) => {
	let ret = '';
	ret = diff === 'prev' ? getValueOf('popupQueriedRevertToPreviousSummary') : getValueOf('popupQueriedRevertSummary');
	return `${ret}&autorv=${oldid}`;
};
const titledWikiLink = (l: any) => {
	// possible properties of argument:
	// article, action, text, title, oldid, actionName, className, noPopup
	// oldid = null is fine here
	// article and action are mandatory args
	if (l.article === undefined || l.action === undefined) {
		errlog('got undefined article or action in titledWikiLink');
		return null;
	}
	const base = pg.wiki.titlebase + l.article.urlString();
	let url = base;
	if (l.actionName === undefined || !l.actionName) {
		l.actionName = 'action';
	}
	// no need to add &action=view, and this confuses anchors
	if (l.action !== 'view') {
		url = `${base}&${l.actionName}=${l.action}`;
	}
	if (l.oldid !== undefined && l.oldid) {
		url += `&oldid=${l.oldid}`;
	}
	let cssClass = pg.misc.defaultNavlinkClassname;
	if (l.className !== undefined && l.className) {
		cssClass = l.className;
	}
	return generalNavLink({
		url,
		newWin: l.newWin,
		title: l.title === undefined ? null : l.title,
		text: l.text === undefined ? null : l.text,
		className: cssClass,
		noPopup: l.noPopup,
		onclick: l.onclick,
	});
};
pg.fn.getLastContrib = (wikipage: any, newWin: Window | null) => {
	getHistoryInfo(wikipage, (x: any) => {
		processLastContribInfo(x, {page: wikipage, newWin});
	});
};
const processLastContribInfo = (info: any, stuff: any) => {
	if (!info.edits || info.edits.length === 0) {
		void mw.notify('Popups: an odd thing happened. Please retry.', {tag: 'popups', type: 'error'});
		return;
	}
	if (!info.firstNewEditor) {
		void mw.notify(tprintf('Only found one editor: %s made %s edits', [info.edits[0].editor, info.edits.length]), {
			tag: 'popups',
			type: 'error',
		});
		return;
	}
	const newUrl = `${pg.wiki.titlebase + new Title(stuff.page).urlString()}&diff=cur&oldid=${
		info.firstNewEditor.oldid
	}`;
	displayUrl(newUrl, stuff.newWin);
};
pg.fn.getDiffSinceMyEdit = (wikipage: any, newWin: Window | null) => {
	getHistoryInfo(wikipage, (x: any) => {
		processDiffSinceMyEdit(x, {page: wikipage, newWin});
	});
};
const processDiffSinceMyEdit = (info: any, stuff: any) => {
	if (!info.edits || info.edits.length === 0) {
		void mw.notify('Popups: something fishy happened. Please try again.', {tag: 'popups', type: 'error'});
		return;
	}
	const friendlyName = stuff.page.split('_').join(' ');
	if (!info.myLastEdit) {
		void mw.notify(
			tprintf("Couldn't find an edit by %s\nin the last %s edits to\n%s", [
				info.userName,
				getValueOf('popupHistoryLimit'),
				friendlyName,
			]),
			{tag: 'popups', type: 'error'}
		);
		return;
	}
	if (info.myLastEdit.index === 0) {
		void mw.notify(tprintf('%s seems to be the last editor to the page %s', [info.userName, friendlyName]), {
			type: 'error',
		});
		return;
	}
	const newUrl = `${pg.wiki.titlebase + new Title(stuff.page).urlString()}&diff=cur&oldid=${info.myLastEdit.oldid}`;
	displayUrl(newUrl, stuff.newWin);
};
const displayUrl = (url: string, newWin: Window | null) => {
	if (newWin) {
		window.open(url);
	} else {
		document.location = url;
	}
};
pg.fn.purgePopups = () => {
	processAllPopups(true);
	setupCache(); // deletes all cached items (not browser cached, though...)
	pg.option = {} as import('./types').PgOption;
	abortAllDownloads();
};
const processAllPopups = (nullify: any, banish?: any) => {
	for (let i = 0; pg.current.links && i < pg.current.links.length; ++i) {
		if (!pg.current.links[i]!.navpopup) {
			continue;
		}
		if (nullify || banish) {
			pg.current.links[i]!.navpopup.banish();
		}
		pg.current.links[i]!.simpleNoMore = false;
		if (nullify) {
			pg.current.links[i]!.navpopup = null as unknown as Navpopup;
		}
	}
};
pg.fn.disablePopups = () => {
	processAllPopups(false, true);
	setupTooltips(null, true);
};
pg.fn.togglePreviews = () => {
	processAllPopups(true, true);
	pg.option.simplePopups = !pg.option.simplePopups;
	abortAllDownloads();
};
const magicWatchLink = function magicWatchLink(this: any, l: any) {
	// Yuck!! Would require a thorough redesign to add this as a click event though ...
	l.onclick = simplePrintf("pg.fn.modifyWatchlist('%s','%s');return false;", [
		l.article
			.toString(true)
			.split('\\')
			.join('\\\\')
			.split("'")
			.join(String.raw`\'`),
		this.id,
	]);
	return wikiLink(l);
};
pg.fn.modifyWatchlist = async (title: string, action: any) => {
	const reqData: WikiParams = {
		action: 'watch',
		formatversion: '2',
		titles: title,
		uselang: mw.config.get('wgUserLanguage'),
	};
	if (action === 'unwatch') {
		reqData.unwatch = true;
	}
	// Load the Addedwatchtext or Removedwatchtext message and show it
	const mwTitle = mw.Title.newFromText(title);
	let messageName;
	if (mwTitle && mwTitle.getNamespaceId() > 0 && mwTitle.getNamespaceId() % 2 === 1) {
		messageName = action === 'watch' ? 'addedwatchtext-talk' : 'removedwatchtext-talk';
	} else {
		messageName = action === 'watch' ? 'addedwatchtext' : 'removedwatchtext';
	}
	await getMwApi().postWithToken('watch', reqData);
	await getMwApi().loadMessagesIfMissing([messageName]);
	// Messages that can be used here:
	// * see string.js
	// * for more information
	void mw.notify(mw.message(messageName, title).parseDom() as any, {tag: 'popups'});
};
const magicHistoryLink = (l: any) => {
	let title = '';
	let onClick = '';
	switch (l.id) {
		case 'lastContrib':
			onClick = simplePrintf("pg.fn.getLastContrib('%s',%s)", [
				l.article
					.toString(true)
					.split('\\')
					.join('\\\\')
					.split("'")
					.join(String.raw`\'`),
				l.newWin,
			]);
			title = popupString('lastContribHint');
			break;
		case 'sinceMe':
			onClick = simplePrintf("pg.fn.getDiffSinceMyEdit('%s',%s)", [
				l.article
					.toString(true)
					.split('\\')
					.join('\\\\')
					.split("'")
					.join(String.raw`\'`),
				l.newWin,
			]);
			title = popupString('sinceMeHint');
			break;
	}
	onClick += ';return false;';
	return generalNavLink({
		newWin: false,
		title,
		text: l.text,
		noPopup: l.noPopup,
		onclick: onClick,
	});
};
const popupMenuLink = (l: any) => {
	const title = popupString(simplePrintf('%sHint', [l.id]));
	const onClick = simplePrintf('pg.fn.%s();return false;', [l.id]);
	return generalNavLink({
		newWin: false,
		title,
		text: l.text,
		noPopup: l.noPopup,
		onclick: onClick,
	});
};
const specialLink = (l: any) => {
	// properties: article, specialpage, text, sep
	if (l.specialpage === undefined || !l.specialpage) {
		return null;
	}
	const base = `${pg.wiki.titlebase + mw.config.get('wgFormattedNamespaces')[pg.nsSpecialId!]}:${l.specialpage}`;
	l.sep ??= '&target=';
	let article = l.article.urlString({
		keepSpaces: l.specialpage === 'Search',
	});
	let hint = popupString(`${l.specialpage}Hint`);
	switch (l.specialpage) {
		case 'Log':
			switch (l.sep) {
				case '&user=':
					hint = popupString('userLogHint');
					break;
				case '&type=block&page=':
					hint = popupString('blockLogHint');
					break;
				case '&page=':
					hint = popupString('pageLogHint');
					break;
				case '&type=protect&page=':
					hint = popupString('protectLogHint');
					break;
				case '&type=delete&page=':
					hint = popupString('deleteLogHint');
					break;
				default:
					log(`Unknown log type, sep=${l.sep}`);
					hint = 'Missing hint (FIXME)';
			}
			break;
		case 'PrefixIndex':
			article += '/';
			break;
	}
	hint = hint ? simplePrintf(hint, [safeDecodeURI(l.article)]) : safeDecodeURI(`${l.specialpage}:${l.article}`);
	const url = base + l.sep + article;
	return generalNavLink({
		url,
		title: hint,
		text: l.text,
		newWin: l.newWin,
		noPopup: l.noPopup,
	});
};
const generalLink = (l: any) => {
	// l.url, l.text, l.title, l.newWin, l.className, l.noPopup, l.onclick
	let ret = '<a';
	if (l.url) {
		// only quotation marks in the url can screw us up now... I think
		const url = l.url.split('"').join('%22');
		ret += ` href="${url}"`;
	}
	if (l.title !== undefined && l.title) {
		ret += ` title="${pg.escapeQuotesHTML(l.title)}"`;
	}
	if (l.onclick !== undefined && l.onclick) {
		ret += ` onclick="${pg.escapeQuotesHTML(l.onclick)}"`;
	}
	if (l.noPopup) {
		ret += ' noPopup=1';
	}
	let newWin;
	if (l.newWin === undefined || l.newWin === null) {
		newWin = getValueOf('popupNewWindows');
	} else {
		({newWin} = l);
	}
	if (newWin) {
		ret += ' rel="noopener" target="_blank"';
	}
	if (l.className !== undefined && l.className) {
		ret += ` class="${l.className}"`;
	}
	ret += '>';
	if (typeof l.text === typeof '') {
		// We need to HTML-escape this to avoid XSS, but we also want to
		// display any existing HTML entities correctly, so unescape it first.
		// For example, the display text of the user page menu item is defined
		// as "user&nbsp;page", so we need to unescape first to avoid it being
		// escaped to "user&amp;nbsp;page".
		ret += pg.escapeQuotesHTML(pg.unescapeQuotesHTML(l.text));
	}
	ret += '</a>';
	return ret;
};
const appendParamsToLink = (linkstr: any, params: any) => {
	const sp = linkstr.split(/(href="[^"]+?)"/i);
	if (sp.length < 2) {
		return null;
	}
	let ret = sp.shift() + sp.shift();
	ret += `&${params}"`;
	ret += sp.join('');
	return ret;
};
const changeLinkTargetLink = (x: any) => {
	// newTarget, text, hint, summary, clickButton, minor, title (optional), alsoChangeLabel {
	if (x.newTarget) {
		log(`changeLinkTargetLink: newTarget=${x.newTarget}`);
	}
	if (x.oldTarget !== decodeURIComponent(x.oldTarget)) {
		log(`This might be an input problem: ${x.oldTarget}`);
	}
	// FIXME: first character of page title as well as namespace should be case insensitive
	// eg [[:category:X1]] and [[:Category:X1]] are equivalent
	// this'll break if charAt(0) is nasty
	const cA = mw.util.escapeRegExp(x.oldTarget);
	let chs = cA.charAt(0).toUpperCase();
	chs = `[${chs}${chs.toLowerCase()}]`;
	let currentArticleRegexBit = chs + cA.slice(1);
	currentArticleRegexBit = currentArticleRegexBit
		.split(/[ _]+|%20/g)
		.join('(?:[_ ]+|%20)')
		.split(String.raw`\(`)
		.join(String.raw`(?:%28|\()`)
		.split(String.raw`\)`)
		.join(String.raw`(?:%29|\))`); // why does this need to match encoded strings ? links in the document ?

	// leading and trailing space should be ignored, and anchor bits optional:
	currentArticleRegexBit = `\\s*(${currentArticleRegexBit}(?:#[^\\[\\|]*)?)\\s*`;
	// e.g. Computer (archaic) -> \s*([Cc]omputer[_ ](?:%2528|\()archaic(?:%2528|\)))\s*
	// autoedit=s~\[\[([Cc]ad)\]\]~[[Computer-aided%20design|$1]]~g;s~\[\[([Cc]AD)[|]~[[Computer-aided%20design|~g
	const title = x.title || mw.config.get('wgPageName').split('_').join(' ');
	const lk = titledWikiLink({
		article: new Title(title),
		newWin: x.newWin,
		action: 'edit',
		text: x.text,
		title: x.hint,
		className: 'popup_change_title_link',
	});
	let cmd = '';
	if (x.newTarget) {
		// escape '&' and other nasties
		const t = x.newTarget;
		const s = mw.util.escapeRegExp(x.newTarget);
		if (x.alsoChangeLabel) {
			cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~[[${t}]]~g;`;
			cmd += `s~\\[\\[${currentArticleRegexBit}[|]~[[${t}|~g;`;
			cmd += `s~\\[\\[${s}\\|${s}\\]\\]~[[${t}]]~g`;
		} else {
			cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~[[${t}|$1]]~g;`;
			cmd += `s~\\[\\[${currentArticleRegexBit}[|]~[[${t}|~g;`;
			cmd += `s~\\[\\[${s}\\|${s}\\]\\]~[[${t}]]~g`;
		}
	} else {
		cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~$1~g;`;
		cmd += `s~\\[\\[${currentArticleRegexBit}[|](.*?)\\]\\]~$2~g`;
	}
	// Build query
	cmd = `autoedit=${encodeURIComponent(cmd)}`;
	cmd += `&autoclick=${encodeURIComponent(x.clickButton)}&actoken=${encodeURIComponent(autoClickToken())}`;
	cmd += x.minor === null ? '' : `&autominor=${encodeURIComponent(x.minor)}`;
	cmd += x.watch === null ? '' : `&autowatch=${encodeURIComponent(x.watch)}`;
	cmd += `&autosummary=${encodeURIComponent(x.summary)}`;
	cmd += `&autoimpl=${encodeURIComponent(popupString('autoedit_version'))}`;
	return appendParamsToLink(lk, cmd);
};
const redirLink = (redirMatch: any, article: Title) => {
	// NB redirMatch is in wikiText
	let ret = '';
	if (getValueOf('popupAppendRedirNavLinks') && getValueOf('popupNavLinks')) {
		ret += '<hr>';
		if (getValueOf('popupFixRedirs')) {
			ret += popupString('Redirects to: (Fix ');
			log(`redirLink: newTarget=${redirMatch}`);
			ret += addPopupShortcut(
				changeLinkTargetLink({
					newTarget: redirMatch,
					text: popupString('target'),
					hint: popupString('Fix this redirect, changing just the link target'),
					summary: simplePrintf(getValueOf('popupFixRedirsSummary'), [article.toString(), redirMatch]),
					oldTarget: article.toString(),
					clickButton: getValueOf('popupRedirAutoClick'),
					minor: true,
					watch: getValueOf('popupWatchRedirredPages'),
				}),
				'R'
			);
			ret += popupString(' or ');
			ret += addPopupShortcut(
				changeLinkTargetLink({
					newTarget: redirMatch,
					text: popupString('target & label'),
					hint: popupString('Fix this redirect, changing the link target and label'),
					summary: simplePrintf(getValueOf('popupFixRedirsSummary'), [article.toString(), redirMatch]),
					oldTarget: article.toString(),
					clickButton: getValueOf('popupRedirAutoClick'),
					minor: true,
					watch: getValueOf('popupWatchRedirredPages'),
					alsoChangeLabel: true,
				}),
				'R'
			);
			ret += popupString(')');
		} else {
			ret += popupString('Redirects') + popupString(' to ');
		}
		return ret;
	}
	return `<br> ${popupString('Redirects')}${popupString(' to ')}${titledWikiLink({
		article: new Title().fromWikiText(redirMatch),
		action: 'view' /* FIXME: newWin */,
		text: safeDecodeURI(redirMatch),
		title: popupString('Bypass redirect'),
	})}`;
};
const arinLink = (l: any) => {
	if (!saneLinkCheck(l)) {
		return null;
	}
	if (!l.article.isIpUser() || !pg.wiki.wikimedia) {
		return null;
	}
	const uN = l.article.userName();
	return generalNavLink({
		url: `http://ws.arin.net/cgi-bin/whois.pl?queryinput=${encodeURIComponent(uN)}`,
		newWin: l.newWin,
		title: tprintf('Look up %s in ARIN whois database', [uN]),
		text: l.text,
		noPopup: 1,
	});
};
const toolDbName = (cookieStyle?: any) => {
	let ret = mw.config.get('wgDBname');
	if (!cookieStyle) {
		ret += '_p';
	}
	return ret;
};
const saneLinkCheck = (l: any) => {
	if (typeof l.article !== typeof {} || typeof l.text !== typeof '') {
		return false;
	}
	return true;
};
const editCounterLink = (l: any) => {
	if (!saneLinkCheck(l)) {
		return null;
	}
	if (!pg.wiki.wikimedia) {
		return null;
	}
	const uN = l.article.userName();
	const tool = getValueOf('popupEditCounterTool');
	let url;
	const defaultToolUrl = '//tools.wmflabs.org/supercount/index.php?user=$1&project=$2.$3';
	switch (tool) {
		case 'custom':
			url = simplePrintf(getValueOf('popupEditCounterUrl'), [encodeURIComponent(uN as any), toolDbName()]);
			break;
		default: {
			const theWiki = pg.wiki.hostname.split('.');
			url = simplePrintf(defaultToolUrl, [encodeURIComponent(uN), theWiki[0], theWiki[1]]);
		}
	}
	return generalNavLink({
		url,
		title: tprintf('editCounterLinkHint', [uN]),
		newWin: l.newWin,
		text: l.text,
		noPopup: 1,
	});
};
const editorListLink = (l: any) => {
	if (!saneLinkCheck(l)) {
		return null;
	}
	const article = l.article.articleFromTalkPage() || l.article;
	const url = `https://xtools.wmflabs.org/articleinfo/${encodeURI(
		pg.wiki.hostname
	)}/${article.urlString()}?uselang=${mw.config.get('wgUserLanguage')}`;
	return generalNavLink({
		url,
		title: tprintf('editorListHint', [article]),
		newWin: l.newWin,
		text: l.text,
		noPopup: 1,
	});
};
const generalNavLink = (l: any) => {
	l.className = l.className === null ? 'popupNavLink' : l.className;
	return generalLink(l);
};
const getHistoryInfo = (wikipage: any, whatNext: any) => {
	log('getHistoryInfo');
	getHistory(
		wikipage,
		whatNext
			? (d: any) => {
					whatNext(processHistory(d));
				}
			: processHistory
	);
};
const getHistory = (wikipage: any, onComplete: any) => {
	log('getHistory');
	const url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&prop=revisions&titles=${new Title(
		wikipage
	).urlString()}&rvlimit=${getValueOf('popupHistoryLimit')}`;
	log(`getHistory: url=${url}`);
	return startDownload(url, `${pg.idNumber}history`, onComplete);
};
const processHistory = (download: Dow) => {
	const jsobj = getJsObj(download.data);
	try {
		const {revisions} = anyChild(jsobj.query.pages);
		const edits = [];
		for (const revision of revisions) {
			edits.push({
				oldid: revision.revid,
				editor: revision.user,
			});
		}
		log(`processed ${edits.length} edits`);
		return finishProcessHistory(edits, mw.config.get('wgUserName'));
	} catch {
		log('Something went wrong with JSON business');
		return finishProcessHistory([]);
	}
};
const finishProcessHistory = (edits: any, userName?: any) => {
	const histInfo: any = {};
	histInfo.edits = edits;
	histInfo.userName = userName;
	for (let i = 0; i < edits.length; ++i) {
		if (histInfo.myLastEdit === undefined && userName && edits[i].editor === userName) {
			histInfo.myLastEdit = {
				index: i,
				oldid: edits[i].oldid,
				previd: i === 0 ? null : edits[i - 1].oldid,
			};
		}
		if (histInfo.firstNewEditor === undefined && edits[i].editor !== edits[0].editor) {
			histInfo.firstNewEditor = {
				index: i,
				oldid: edits[i].oldid,
				previd: i === 0 ? null : edits[i - 1].oldid,
			};
		}
	}
	// pg.misc.historyInfo=histInfo;
	return histInfo;
};

export {
	appendParamsToLink,
	arinLink,
	changeLinkTargetLink,
	displayUrl,
	editCounterLink,
	editorListLink,
	finishProcessHistory,
	generalLink,
	generalNavLink,
	getHistory,
	getHistoryInfo,
	magicHistoryLink,
	magicWatchLink,
	popupMenuLink,
	processAllPopups,
	processDiffSinceMyEdit,
	processHistory,
	processLastContribInfo,
	redirLink,
	revertSummary,
	saneLinkCheck,
	specialLink,
	titledDiffLink,
	titledWikiLink,
	toolDbName,
	wikiLink,
};
