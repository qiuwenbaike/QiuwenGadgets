// 本文件由 Navigation_popups 原版 core.js 的 actions.js 段落拆分而来，保留原有实现。
import type {Dow, PopData} from './types';
import {Title, anchorContainsImage, isPopupLink, parseParams} from './titles';
import {addPopupShortcuts, rmPopupShortcuts} from './shortcutkeys';
import {checkPopupPosition, mouseOutWikiLink} from './mouseout';
import {entify, joinPath, literalizeRegex, simplePrintf} from './tools';
import {fillEmptySpans, popupHTML, setPopupHTML, setPopupTrailer} from './htmloutput';
import {getValidImageFromWikiText, loadImage} from './images';
import {getValueOf, setDefault} from './options';
import {makeFixDabs, popupRedlinkHTML} from './dab';
import {Navpopup} from './navpopup';
import {Previewmaker} from './previewmaker';
import {abortAllDownloads} from './downloader';
import {doSelectionPopup} from './selpop';
import {getPageInfo} from './pageinfo';
import {loadAPIPreview} from './querypreview';
import {loadDiff} from './diffpreview';
import {pg} from './pg';
import {popupString} from './strings';
import {redirLink} from './links';

const setupTooltips = (container?: Element | Document | null, remove?: boolean, force?: boolean, popData?: PopData) => {
	log(`setupTooltips, container=${container}, remove=${remove}`);
	if (!container) {
		// the main initial call
		if (getValueOf('popupOnEditSelection') && document && document.editform && document.editform.wpTextbox1) {
			document.editform.wpTextbox1.onmouseup = doSelectionPopup;
		}
		// article/content is a structure-dependent thing
		container = defaultPopupsContainer();
	}
	if (!remove && !force && container.ranSetupTooltipsAlready) {
		return;
	}
	container.ranSetupTooltipsAlready = !remove;
	const anchors = container.querySelectorAll('a');
	setupTooltipsLoop(anchors, 0, 250, 100, remove, popData);
};
const defaultPopupsContainer = () => {
	if (getValueOf('popupOnlyArticleLinks')) {
		return (
			document.querySelector('.skin-vector-2022 .vector-body') ||
			document.querySelector('#mw_content') ||
			document.querySelector('#content') ||
			document.querySelector('#article') ||
			document
		);
	}
	return document;
};
const setupTooltipsLoop = function setupTooltipsLoop(
	anchors: NodeListOf<HTMLAnchorElement>,
	begin: number,
	howmany: number,
	sleep: number,
	remove?: boolean,
	popData?: PopData,
	...args: unknown[]
) {
	log(simplePrintf('setupTooltipsLoop(%s,%s,%s,%s,%s)', [anchors, begin, howmany, sleep, remove, popData, ...args]));
	const finish = begin + howmany;
	const loopend = Math.min(finish, anchors.length);
	let j = loopend - begin;
	log(
		`setupTooltips: anchors.length=${anchors.length}, begin=${begin}, howmany=${howmany}, loopend=${loopend}, remove=${remove}`
	);
	const doTooltip: (a: HTMLAnchorElement, data?: PopData) => void = remove ? removeTooltip : addTooltip;
	// try a faster (?) loop construct
	if (j > 0) {
		do {
			const a = anchors[loopend - j];
			if (a === undefined || !a || !a.href) {
				log(`got null anchor at index ${loopend - j}`);
				continue;
			}
			doTooltip(a, popData);
		} while (--j);
	}
	if (finish < anchors.length) {
		setTimeout(() => {
			setupTooltipsLoop(anchors, finish, howmany, sleep, remove, popData);
		}, sleep);
	} else {
		if (!remove && !getValueOf('popupTocLinks')) {
			rmTocTooltips();
		}
		pg.flag.finishedLoading = true;
	}
};
const rmTocTooltips = () => {
	const toc = document.querySelector('#toc');
	if (toc) {
		const tocLinks = toc.querySelectorAll('a');
		const tocLen = tocLinks.length;
		for (let j = 0; j < tocLen; ++j) {
			removeTooltip(tocLinks[j]!);
		}
	}
};
const addTooltip = (a: HTMLAnchorElement, popData?: PopData) => {
	if (!isPopupLink(a)) {
		return;
	}
	a.onmouseover = mouseOverWikiLink;
	a.onmouseout = mouseOutWikiLink;
	a.onmousedown = killPopup;
	a.hasPopup = true;
	a.popData = popData;
};
const removeTooltip = (a: HTMLAnchorElement) => {
	if (!a.hasPopup) {
		return;
	}
	a.onmouseover = null;
	a.onmouseout = null;
	if (a.originalTitle) {
		a.title = a.originalTitle;
	}
	a.hasPopup = false;
};
const removeTitle = (a: HTMLAnchorElement) => {
	a.originalTitle ||= a.title;
	a.title = '';
};
const restoreTitle = (a: HTMLAnchorElement) => {
	if (a.title || !a.originalTitle) {
		return;
	}
	a.title = a.originalTitle;
};
const registerHooks = (np: Navpopup) => {
	const popupMaxWidth = getValueOf('popupMaxWidth');
	if (typeof popupMaxWidth === 'number') {
		const setMaxWidth = () => {
			np.mainDiv.style.maxWidth = `${popupMaxWidth}px`;
			np.maxWidth = popupMaxWidth;
		};
		np.addHook(setMaxWidth, 'unhide', 'before');
	}
	np.addHook(addPopupShortcuts, 'unhide', 'after');
	np.addHook(rmPopupShortcuts, 'hide', 'before');
};
const removeModifierKeyListener = (a?: HTMLAnchorElement | null) => {
	// remove listeners for modifier key if any that were added in mouseOverWikiLink
	const listener = a?.modifierKeyListener;
	if (!listener) {
		return;
	}
	document.removeEventListener('keydown', listener, false);
	document.removeEventListener('keyup', listener, false);
};
const mouseOverWikiLink = function mouseOverWikiLink(this: GlobalEventHandlers, evt?: MouseEvent) {
	// if the modifier is needed, listen for it,
	// we will remove the listener when we mouseout of this link or kill popup.
	if (getValueOf('popupModifier')) {
		// if popupModifierAction = enable, we should popup when the modifier is pressed
		// if popupModifierAction = disable, we should popup unless the modifier is pressed
		const action = getValueOf('popupModifierAction');
		const key = action === 'disable' ? 'keyup' : 'keydown';
		// 实际绑定于 <a> 元素（见 addTooltip 的 a.onmouseover），此处收窄以访问扩展属性
		const self = this as HTMLAnchorElement;
		self.modifierKeyListener = (evt: Event) => {
			mouseOverWikiLink2(self, evt);
		};
		document.addEventListener(key, self.modifierKeyListener, false);
	}
	return mouseOverWikiLink2(this as HTMLAnchorElement, evt);
};
const footnoteTarget = (a: HTMLAnchorElement) => {
	const aTitle = Title.fromAnchor(a);
	// We want ".3A" rather than "%3A" or "?" here, so use the anchor property directly
	const anch = aTitle.anchor;
	if (!/^(cite_note-|_note-|endnote)/.test(anch)) {
		return false;
	}
	const lTitle = Title.fromURL(location.href);
	if (lTitle.toString(true) !== aTitle.toString(true)) {
		return false;
	}
	let el: HTMLElement | null = document.getElementById(`${anch}`);
	while (el && typeof el.nodeName === 'string') {
		const nt = el.nodeName.toLowerCase();
		if (nt === 'li') {
			return el;
		} else if (nt === 'body') {
			return false;
		} else if (el.parentNode) {
			el = el.parentNode as HTMLElement;
		} else {
			return false;
		}
	}
	return false;
};
const footnotePreview = (x: HTMLElement, navpop: Navpopup) => {
	setPopupHTML(`<hr>${x.innerHTML}`, 'popupPreview', navpop.idNumber);
};
const modifierPressed = (evt?: Event) => {
	const mod = getValueOf('popupModifier');
	if (!mod) {
		return false;
	}
	// popupModifier 为 'shift'/'ctrl'/'alt' 等修饰键名，对应 evt 的 *Key 布尔属性
	return Boolean(evt && (evt as unknown as Record<string, boolean | undefined>)[`${mod.toLowerCase()}Key`]);
};
const isCorrectModifier = (_a: HTMLAnchorElement, evt?: Event) => {
	if (!getValueOf('popupModifier')) {
		return true;
	}
	// if popupModifierAction = enable, we should popup when the modifier is pressed
	// if popupModifierAction = disable, we should popup unless the modifier is pressed
	const action = getValueOf('popupModifierAction');
	return (action === 'enable' && modifierPressed(evt)) || (action === 'disable' && !modifierPressed(evt));
};
const mouseOverWikiLink2 = (a: HTMLAnchorElement, evt?: Event) => {
	if (!isCorrectModifier(a, evt)) {
		return;
	}
	if (getValueOf('removeTitles')) {
		removeTitle(a);
	}
	if (a === pg.current.link && a.navpopup && a.navpopup.isVisible()) {
		return;
	}
	pg.current.link = a;
	if (getValueOf('simplePopups') && !pg.option.popupStructure) {
		// reset *default value* of popupStructure
		setDefault('popupStructure', 'original');
	}
	const article = new Title().fromAnchor(a);
	// set global variable (ugh) to hold article (wikipage)
	pg.current.article = article;
	if (!a.navpopup) {
		a.navpopup = newNavpopup(a, article);
		pg.current.linksHash[a.href] = a.navpopup;
		pg.current.links.push(a);
	}
	if (a.navpopup.pending === null || a.navpopup.pending !== 0) {
		// either fresh popups or those with unfinshed business are redone from scratch
		simplePopupContent(a, article);
	}
	a.navpopup.showSoonIfStable(a.navpopup.delay!);
	clearInterval(pg.timer.checkPopupPosition ?? undefined);
	pg.timer.checkPopupPosition = setInterval(checkPopupPosition, 600);
	if (getValueOf('simplePopups') && getValueOf('popupPreviewButton') && !a.simpleNoMore) {
		const d = document.createElement('div');
		d.className = 'popupPreviewButtonDiv';
		const s = document.createElement('span');
		d.append(s);
		s.className = 'popupPreviewButton';
		(s as unknown as Record<string, () => void>)[`on${getValueOf('popupPreviewButtonEvent')}`] = () => {
			a.simpleNoMore = true;
			d.style.display = 'none';
			nonsimplePopupContent(a, article);
		};
		s.innerHTML = popupString('show preview');
		setPopupHTML(d, 'popupPreview', a.navpopup.idNumber);
	}
	if (a.navpopup.pending !== 0) {
		nonsimplePopupContent(a, article);
	}
};
const simplePopupContent = (a: HTMLAnchorElement, article: Title) => {
	/* FIXME hack */
	a.navpopup.hasPopupMenu = false;
	a.navpopup.setInnerHTML(popupHTML(a));
	fillEmptySpans({
		navpopup: a.navpopup,
	});
	if (getValueOf('popupDraggable')) {
		let dragHandle = getValueOf('popupDragHandle') || null;
		if (dragHandle && dragHandle !== 'all') {
			dragHandle += a.navpopup.idNumber;
		}
		setTimeout(() => {
			a.navpopup.makeDraggable(dragHandle);
		}, 150);
	}
	if (getValueOf('popupRedlinkRemoval') && a.className === 'new') {
		setPopupHTML(`<br>${popupRedlinkHTML(article)}`, 'popupRedlink', a.navpopup.idNumber);
	}
};
const debugData = (navpopup: Navpopup) => {
	if (getValueOf('popupDebugging') && navpopup.idNumber) {
		setPopupHTML(`idNumber=${navpopup.idNumber}, pending=${navpopup.pending}`, 'popupError', navpopup.idNumber);
	}
};
const newNavpopup = (a: HTMLAnchorElement, article: Title) => {
	const navpopup = new Navpopup();
	navpopup.fuzz = 5;
	navpopup.delay = getValueOf('popupDelay') * 1000;
	// increment global counter now
	pg.idNumber = (pg.idNumber ?? 0) + 1;
	navpopup.idNumber = pg.idNumber;
	navpopup.parentAnchor = a;
	if (a.popData?.owner) {
		navpopup.parentPopup = a.popData.owner;
	}
	navpopup.article = article;
	registerHooks(navpopup);
	return navpopup;
};
const shouldShowNonSimple = (a: HTMLAnchorElement) => {
	return !getValueOf('simplePopups') || a.simpleNoMore;
};
const shouldShow = (a: HTMLAnchorElement, option: string) => {
	if (shouldShowNonSimple(a)) {
		return getValueOf(option);
	}
	// 选项值同时挂在全局 window 上（options.ts 兼容旧版行为）
	return (window as unknown as Record<string, unknown>)[option] !== undefined;
};
const nonsimplePopupContent = (a: HTMLAnchorElement, article: Title) => {
	let diff;
	let history;
	const params = parseParams(a.href);
	const oldid = params.oldid === undefined ? null : params.oldid;
	if (shouldShow(a, 'popupPreviewDiffs')) {
		({diff} = params);
	}
	if (shouldShow(a, 'popupPreviewHistory')) {
		history = params.action === 'history';
	}
	a.navpopup.pending = 0;
	const referenceElement = footnoteTarget(a);
	if (referenceElement) {
		footnotePreview(referenceElement, a.navpopup);
	} else if (diff) {
		loadDiff(article, oldid, diff, a.navpopup);
	} else if (history) {
		loadAPIPreview('history', article, a.navpopup);
	} else if (shouldShowNonSimple(a) && pg.re.contribs.test(a.href)) {
		loadAPIPreview('contribs', article, a.navpopup);
	} else if (shouldShowNonSimple(a) && pg.re.backlinks.test(a.href)) {
		loadAPIPreview('backlinks', article, a.navpopup);
	} else if (
		// FIXME should be able to get all preview combinations with options
		article.namespaceId() === pg.nsImageId &&
		(shouldShow(a, 'imagePopupsForImages') || !anchorContainsImage(a))
	) {
		loadAPIPreview('imagepagepreview', article, a.navpopup);
		loadImage(article, a.navpopup);
	} else {
		if (article.namespaceId() === pg.nsCategoryId && shouldShow(a, 'popupCategoryMembers')) {
			loadAPIPreview('category', article, a.navpopup);
		} else if (
			(article.namespaceId() === pg.nsUserId || article.namespaceId() === pg.nsUsertalkId) &&
			shouldShow(a, 'popupUserInfo')
		) {
			loadAPIPreview('userinfo', article, a.navpopup);
		}
		if (shouldShowNonSimple(a)) {
			startArticlePreview(article, oldid, a.navpopup);
		}
	}
};
const pendingNavpopTask = (navpop: Navpopup) => {
	if (navpop && navpop.pending === null) {
		navpop.pending = 0;
	}
	navpop.pending = (navpop.pending ?? 0) + 1;
	debugData(navpop);
};
const completedNavpopTask = (navpop: Navpopup) => {
	if (navpop && navpop.pending) {
		--navpop.pending;
	}
	debugData(navpop);
};
const startArticlePreview = (article: Title, oldid: string | null, navpop: Navpopup) => {
	navpop.redir = 0;
	loadPreview(article, oldid, navpop);
};
const loadPreview = (article: Title, oldid: string | null, navpop: Navpopup) => {
	if (!navpop.redir) {
		navpop.originalArticle = article;
	}
	article.oldid = oldid;
	loadAPIPreview('revision', article, navpop);
};
const loadPreviewFromRedir = (redirMatch: RegExpExecArray, navpop: Navpopup) => {
	// redirMatch is a regex match
	const target = new Title().fromWikiText(redirMatch[2]!);
	// overwrite (or add) anchor from original target
	// mediawiki does overwrite
	if (navpop.article.anchor) {
		target.anchor = navpop.article.anchor;
	}
	navpop.redir++;
	navpop.redirTarget = target;
	// 原版传入重定向目标的 wikiText 字符串（内部分支会再次 fromWikiText/safeDecodeURI）
	const warnRedir = redirLink(redirMatch[2]!, navpop.article);
	setPopupHTML(warnRedir, 'popupWarnRedir', navpop.idNumber);
	navpop.article = target;
	fillEmptySpans({
		redir: true,
		redirTarget: target,
		navpopup: navpop,
	});
	return loadPreview(target, null, navpop);
};
const insertPreview = (download: Dow) => {
	if (!download.owner) {
		return;
	}
	const redirMatch = pg.re.redirect.exec(download.data!);
	if (download.owner.redir === 0 && redirMatch) {
		loadPreviewFromRedir(redirMatch, download.owner);
		return;
	}
	if (download.owner.visible || !getValueOf('popupLazyPreviews')) {
		insertPreviewNow(download);
	} else {
		const id = download.owner.redir ? 'PREVIEW_REDIR_HOOK' : 'PREVIEW_HOOK';
		download.owner.addHook(
			() => {
				insertPreviewNow(download);
				return true;
			},
			'unhide',
			'after',
			id
		);
	}
};
const insertPreviewNow = (download: Dow) => {
	if (!download.owner) {
		return;
	}
	// download.data 由 HTTP 回调填充，运行时恒为 string（空响应为 ''）
	const wikiText = download.data ?? '';
	const navpop = download.owner;
	const art = navpop.redirTarget || navpop.originalArticle;
	makeFixDabs(wikiText, navpop);
	if (getValueOf('popupSummaryData')) {
		getPageInfo(wikiText, download);
		setPopupTrailer(getPageInfo(wikiText, download), navpop.idNumber);
	}
	// getValidImageFromWikiText 无有效图名时返回 null，下方 truthy 守卫与原版一致
	let imagePage: string | null = '';
	imagePage = art.namespaceId() === pg.nsImageId ? art.toString() : getValidImageFromWikiText(wikiText);
	if (imagePage) {
		loadImage(Title.fromWikiText(imagePage), navpop);
	}
	if (getValueOf('popupPreviews')) {
		insertArticlePreview(download, art, navpop);
	}
};
const insertArticlePreview = (download: Dow, art: Title, navpop: Navpopup) => {
	if (download && typeof download.data === 'string') {
		if (art.namespaceId() === pg.nsTemplateId && getValueOf('popupPreviewRawTemplates')) {
			// FIXME compare/consolidate with diff escaping code for wikitext
			const h = `<hr><span style="font-family: monospace;">${entify(download.data)
				.split(String.raw`\n`)
				.join(String.raw`<br>\n`)}</span>`;
			setPopupHTML(h, 'popupPreview', navpop.idNumber);
		} else {
			const p = prepPreviewmaker(download.data, art, navpop);
			p.showPreview();
		}
	}
};
const prepPreviewmaker = (data: string, article: Title, navpop: Navpopup) => {
	// deal with tricksy anchors
	const d = anchorize(data, article.anchorString());
	const urlBase = joinPath([pg.wiki.articlebase, article.urlString()]);
	const p = new Previewmaker(d, urlBase, navpop);
	return p;
};
const anchorize = (d: string, anch: string) => {
	if (!anch) {
		return d;
	}
	const anchRe = new RegExp(
		`(?:=+\\s*${literalizeRegex(anch).replace(/[ _]/g, '[_ ]')}\\s*=+|\\{\\{\\s*${getValueOf(
			'popupAnchorRegexp'
		)}\\s*(?:\\|[^|}]*)*?\\s*${literalizeRegex(anch)}\\s*(?:\\|[^}]*)?}})`
	);
	const match = d.match(anchRe);
	if (match && match.length > 0 && match[0]) {
		return d.slice(Math.max(0, d.indexOf(match[0])));
	}
	// now try to deal with === foo [[bar|baz]] boom === -> #foo_baz_boom
	const lines = d.split('\n');
	for (let i = 0; i < lines.length; ++i) {
		const line = lines[i]!;
		const cleaned = line
			.replace(/\[{2}([^\]|]*?\|)?(.*?)]{2}/g, '$2')
			.replace(/'''([^'])/g, '$1')
			.replace(/''([^'])/g, '$1');
		lines[i] = cleaned;
		if (anchRe.test(cleaned)) {
			return d
				.split('\n')
				.slice(i)
				.join('\n')
				.replace(/^[^=]*/, '');
		}
	}
	return d;
};
// this 声明为 GlobalEventHandlers | undefined：兼容 onmousedown 绑定与 shortcutkeys 的裸调用
const killPopup = function killPopup(this: GlobalEventHandlers | undefined) {
	removeModifierKeyListener(this as HTMLAnchorElement | undefined);
	if (getValueOf('popupShortcutKeys')) {
		rmPopupShortcuts();
	}
	if (!pg) {
		return;
	}
	if (pg.current.link && pg.current.link.navpopup) {
		pg.current.link.navpopup.banish();
	}
	pg.current.link = null;
	abortAllDownloads();
	if (pg.timer.checkPopupPosition) {
		clearInterval(pg.timer.checkPopupPosition);
		pg.timer.checkPopupPosition = null;
	}
	return true; // preserve default action
};

export {
	addTooltip,
	anchorize,
	completedNavpopTask,
	debugData,
	defaultPopupsContainer,
	footnotePreview,
	footnoteTarget,
	insertArticlePreview,
	insertPreview,
	insertPreviewNow,
	isCorrectModifier,
	killPopup,
	loadPreview,
	loadPreviewFromRedir,
	modifierPressed,
	mouseOverWikiLink,
	mouseOverWikiLink2,
	newNavpopup,
	nonsimplePopupContent,
	pendingNavpopTask,
	prepPreviewmaker,
	registerHooks,
	removeModifierKeyListener,
	removeTitle,
	removeTooltip,
	restoreTitle,
	rmTocTooltips,
	setupTooltips,
	setupTooltipsLoop,
	shouldShow,
	shouldShowNonSimple,
	simplePopupContent,
	startArticlePreview,
};
