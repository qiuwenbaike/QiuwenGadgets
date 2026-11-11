// 本文件由 Navigation_popups 原版 core.js 的 navlinks.js 段落拆分而来，保留原有实现。
import {Title, isInMainNamespace, isInStrippableNamespace, safeDecodeURI} from './titles';
import {
	arinLink,
	editCounterLink,
	editorListLink,
	magicHistoryLink,
	magicWatchLink,
	popupMenuLink,
	specialLink,
	titledDiffLink,
	titledWikiLink,
	wikiLink,
} from './links';
import {popupString, tprintf} from './strings';
import type {WikiParams} from './types';
import {addPopupShortcut} from './shortcutkeys';
import {autoClickToken} from './autoedit';
import {getValueOf} from './options';
import {pg} from './pg';

const defaultNavlinkSpec = () => {
	let str = '';
	str += '<b><<mainlink|shortcut= >></b>';
	if (getValueOf('popupLastEditLink')) {
		str += '*<<lastEdit|shortcut=/>>|<<lastContrib>>|<<sinceMe>>if(oldid){|<<oldEdit>>|<<diffCur>>}';
	}
	// user links
	// contribs - log - count - email - block
	// count only if applicable; block only if popupAdminLinks
	str += 'if(user){<br><<contribs|shortcut=c>>*<<userlog|shortcut=L|log>>';
	str += 'if(ipuser){*<<arin>>}if(wikimedia){*<<count|shortcut=#>>}';
	str += 'if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>|<<blocklog|log>>}}';
	// editing links
	// talkpage   -> edit|new - history - un|watch - article|edit
	// other page -> edit - history - un|watch - talk|edit|new
	const editstr = '<<edit|shortcut=e>>';
	const editOldidStr = `if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{${editstr}}`;
	const historystr = '<<history|shortcut=h>>|<<editors|shortcut=E|>>';
	const watchstr = '<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>';
	str +=
		`<br>if(talk){${editOldidStr}|<<new|shortcut=+>>` +
		`*${historystr}*${watchstr}*` +
		'<b><<article|shortcut=a>></b>|<<editArticle|edit>>' +
		`}else{${
			// not a talk page
			editOldidStr
		}*${historystr}*${watchstr}*` +
		'<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}';
	// misc links
	str += '<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>*<<move|shortcut=m>>';
	// admin links
	str +=
		'if(admin){<br><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>>*' +
		'<<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>>}';
	return str;
};
const navLinksHTML = (article: Title, _hint: any, params: WikiParams) => {
	// oldid, rcid) {
	const str = `<span class="popupNavLinks">${defaultNavlinkSpec()}</span>`;
	// BAM
	return navlinkStringToHTML(str, article, params);
};
const expandConditionalNavlinkString = function expandConditionalNavlinkString(
	s: string,
	article: Title,
	z: any,
	recursionCount?: number
) {
	const {oldid} = z;
	const {rcid} = z;
	const {diff} = z;
	// nested conditionals (up to 10 deep) are ok, hopefully! (work from the inside out)
	recursionCount ||= 0;
	// (1	 if	\\(	(2	2)	\\)	  {(3	3)}  (4   else	  {(5	 5)}  4)1)
	const conditionalSplitRegex = /(;?\s*if\s*\(\s*(\w*)\s*\)\s*{([^{}]*)}(\s*else\s*{([^{}]*?)}|))/i;
	const splitted = s.split(conditionalSplitRegex);
	// $1: whole conditional
	// $2: test condition
	// $3: true expansion
	// $4: else clause (possibly empty)
	// $5: false expansion (possibly null)
	const numParens = 5;
	let ret: any = splitted[0];
	for (let i = 1; i < splitted.length; i = i + numParens + 1) {
		const testString = splitted[i + 1];
		const trueString = splitted[i + 2];
		let falseString = splitted[i + 4];
		if (falseString === undefined || !falseString) {
			falseString = '';
		}
		let testResult;
		switch (testString) {
			case 'user':
				testResult = !!article.userName();
				break;
			case 'talk':
				testResult = !article.talkPage(); // talkPage converts _articles_ to talkPages
				break;
			case 'admin':
				testResult = !!getValueOf('popupAdminLinks');
				break;
			case 'oldid':
				testResult = !!(oldid !== undefined && oldid);
				break;
			case 'rcid':
				testResult = !!(rcid !== undefined && rcid);
				break;
			case 'ipuser':
				testResult = !!article.isIpUser();
				break;
			case 'mainspace_en':
				testResult = isInMainNamespace(article) && pg.wiki.hostname === 'en.wikipedia.org';
				break;
			case 'wikimedia':
				testResult = !!pg.wiki.wikimedia;
				break;
			case 'diff':
				testResult = !!(diff !== undefined && diff);
				break;
		}
		switch (testResult) {
			case null:
				ret += splitted[i];
				break;
			case true:
				ret += trueString;
				break;
			case false:
				ret += falseString;
				break;
		}
		// append non-conditional string
		ret += splitted[i + numParens];
	}
	if (conditionalSplitRegex.test(ret) && recursionCount < 10) {
		return expandConditionalNavlinkString(ret, article, z, recursionCount + 1);
	}
	return ret;
};
const navlinkStringToArray = (s: string, article: Title, params: WikiParams) => {
	s = expandConditionalNavlinkString(s, article, params);
	const splitted = s.split(/<<(.*?)>>/);
	const ret = [];
	for (const [i, element] of splitted.entries()) {
		if (i % 2) {
			// i odd, so s is a tag
			const t = new navlinkTag();
			const ss = element.split('|');
			[t.id] = ss;
			for (let j = 1; j < ss.length; ++j) {
				const sss = ss[j]!.split('=');
				if (sss.length > 1) {
					[, t[sss[0] as string]] = sss;
				} else {
					// no assignment (no "="), so treat this as a title (overwriting the last one)
					t.text = popupString(sss[0] as string);
				}
			}
			t.article = article;
			const {oldid} = params;
			const {rcid} = params;
			const {diff} = params;
			if (oldid !== undefined && oldid !== null) {
				t.oldid = oldid;
			}
			if (rcid !== undefined && rcid !== null) {
				t.rcid = rcid;
			}
			if (diff !== undefined && diff !== null) {
				t.diff = diff;
			}
			if (!t.text && t.id !== 'mainlink') {
				t.text = popupString(t.id);
			}
			ret.push(t);
		} else {
			// plain HTML
			ret.push(element);
		}
	}
	return ret;
};
const navlinkSubstituteHTML = (s: string) => {
	return s
		.split('*')
		.join(getValueOf('popupNavLinkSeparator'))
		.split('<menurow>')
		.join('<li class="popup_menu_row">')
		.split('</menurow>')
		.join('</li>')
		.split('<menu>')
		.join('<ul class="popup_menu">')
		.split('</menu>')
		.join('</ul>');
};
const navlinkDepth = (magic: any, s: string) => {
	return s.split(`<${magic}>`).length - s.split(`</${magic}>`).length;
};
const navlinkStringToHTML = (s: string, article: Title, params: WikiParams) => {
	// limitAlert(navlinkStringToHTML, 5, 'navlinkStringToHTML\n' + article + '\n' + (typeof article));
	const p = navlinkStringToArray(s, article, params);
	let html = '';
	let menudepth = 0; // nested menus not currently allowed, but doesn't do any harm to code for it
	let menurowdepth = 0;
	for (const element of p) {
		if (typeof element === 'string') {
			html += navlinkSubstituteHTML(element);
			menudepth += navlinkDepth('menu', element);
			menurowdepth += navlinkDepth('menurow', element);
			//			if (menudepth === 0) {
			//				tagType='span';
			//			} else if (menurowdepth === 0) {
			//				tagType='li';
			//			} else {
			//				tagType = null;
			//			}
		} else if (element instanceof navlinkTag) {
			html +=
				menudepth > 0 && menurowdepth === 0
					? `<li class="popup_menu_item">${element.html()}</li>`
					: element.html();
		}
	}
	return html;
};
class navlinkTag {
	[key: string]: any;
	type: string;
	id?: any;
	text?: any;
	title?: any;
	shortcut?: string;
	article: any;
	print?: (tag: navlinkTag) => string | null;
	specialpage?: string;
	sep?: string;
	action?: string;
	oldid?: any;
	rcid?: any;
	diff?: any;
	newWin?: any;
	noPopup?: any;
	from?: string;
	to?: any;
	constructor() {
		this.type = 'navlinkTag';
	}
	html() {
		this.getNewWin();
		this.getPrintFunction();
		let html: any = '';
		let opening;
		let closing;
		const tagType = 'span';
		if (tagType) {
			opening = `<${tagType} class="popup_${this.id}">`;
			closing = `</${tagType}>`;
		} else {
			opening = '';
			closing = '';
		}
		if (typeof this.print === 'function') {
			html = this.print(this);
			if (typeof html !== 'string') {
				html = '';
			} else if (this.shortcut !== undefined) {
				html = addPopupShortcut(html, this.shortcut);
			}
		} else {
			errlog(`Oh dear - invalid print function for a navlinkTag, id=${this.id}`);
		}
		return opening + html + closing;
	}
	getNewWin() {
		getValueOf('popupLinksNewWindow');
		if (pg.option.popupLinksNewWindow[this.id!] === undefined) {
			this.newWin = null;
		}
		this.newWin = pg.option.popupLinksNewWindow[this.id!];
	}
	getPrintFunction() {
		// think about this some more
		// this.id and this.article should already be defined
		if (typeof this.id !== typeof '' || typeof this.article !== typeof {}) {
			return;
		}
		this.noPopup = 1;
		switch (this.id) {
			case 'contribs':
			case 'history':
			case 'whatLinksHere':
			case 'userPage':
			case 'userTalk':
			case 'talk':
			case 'article':
			case 'lastEdit':
				this.noPopup = null;
		}
		switch (this.id) {
			case 'email':
			case 'contribs':
			case 'block':
			case 'unblock':
			case 'userlog':
			case 'userSpace':
			case 'deletedContribs':
				this.article = this.article.userName();
		}
		switch (this.id) {
			case 'userTalk':
			case 'newUserTalk':
			case 'editUserTalk':
			case 'userPage':
			case 'blocklog':
				this.article = this.article.userName(true);
				delete this.oldid;
				break;
			case 'pagelog':
			case 'deletelog':
			case 'protectlog':
				delete this.oldid;
		}
		if (this.id !== 'mainlink') {
			// FIXME anchor handling should be done differently with Title object
			this.article = this.article.removeAnchor();
			// if (typeof this.text=='undefined') { this.text=popupString(this.id); }
		}
		switch (this.id) {
			case 'undelete':
				this.print = specialLink;
				this.specialpage = 'Undelete';
				this.sep = '/';
				break;
			case 'whatLinksHere':
				this.print = specialLink;
				this.specialpage = 'Whatlinkshere';
				break;
			case 'relatedChanges':
				this.print = specialLink;
				this.specialpage = 'Recentchangeslinked';
				break;
			case 'move':
				this.print = specialLink;
				this.specialpage = 'Movepage';
				break;
			case 'contribs':
				this.print = specialLink;
				this.specialpage = 'Contributions';
				break;
			case 'deletedContribs':
				this.print = specialLink;
				this.specialpage = 'Deletedcontributions';
				break;
			case 'email':
				this.print = specialLink;
				this.specialpage = 'EmailUser';
				this.sep = '/';
				break;
			case 'block':
				this.print = specialLink;
				this.specialpage = 'Blockip';
				this.sep = '&ip=';
				break;
			case 'unblock':
				this.print = specialLink;
				this.specialpage = 'Ipblocklist';
				this.sep = '&action=unblock&ip=';
				break;
			case 'userlog':
				this.print = specialLink;
				this.specialpage = 'Log';
				this.sep = '&user=';
				break;
			case 'blocklog':
				this.print = specialLink;
				this.specialpage = 'Log';
				this.sep = '&type=block&page=';
				break;
			case 'pagelog':
				this.print = specialLink;
				this.specialpage = 'Log';
				this.sep = '&page=';
				break;
			case 'protectlog':
				this.print = specialLink;
				this.specialpage = 'Log';
				this.sep = '&type=protect&page=';
				break;
			case 'deletelog':
				this.print = specialLink;
				this.specialpage = 'Log';
				this.sep = '&type=delete&page=';
				break;
			case 'userSpace':
				this.print = specialLink;
				this.specialpage = 'PrefixIndex';
				this.sep = '&namespace=2&prefix=';
				break;
			case 'search':
				this.print = specialLink;
				this.specialpage = 'Search';
				this.sep = '&fulltext=Search&search=';
				break;
			case 'thank':
				this.print = specialLink;
				this.specialpage = 'Thanks';
				this.sep = '/';
				this.article.value = this.diff === 'prev' ? this.oldid : this.diff;
				break;
			case 'unwatch':
			case 'watch':
				this.print = magicWatchLink;
				this.action = `${this.id}&autowatchlist=1&autoimpl=${popupString(
					'autoedit_version'
				)}&actoken=${autoClickToken()}`;
				break;
			case 'history':
			case 'historyfeed':
			case 'unprotect':
			case 'protect':
				this.print = wikiLink;
				this.action = this.id;
				break;
			case 'delete':
				this.print = wikiLink;
				this.action = 'delete';
				if (this.article.namespaceId() === pg.nsImageId) {
					const img = this.article.stripNamespace();
					this.action += `&image=${img}`;
				}
				break;
			case 'markpatrolled':
			case 'edit':
				// editOld should keep the oldid, but edit should not.
				delete this.oldid;
				this.print = wikiLink;
				this.action = this.id;
				break;
			case 'view':
			case 'purge':
			case 'render':
				this.print = wikiLink;
				this.action = this.id;
				break;
			case 'raw':
				this.print = wikiLink;
				this.action = 'raw';
				break;
			case 'new':
				this.print = wikiLink;
				this.action = 'edit&section=new';
				break;
			case 'mainlink':
				if (this.text === undefined) {
					this.text = this.article.toString().entify();
				}
				if (getValueOf('popupSimplifyMainLink') && isInStrippableNamespace(this.article)) {
					// only show the /subpage part of the title text
					const s = this.text.split('/');
					this.text = s.at(-1);
					if (this.text === '' && s.length > 1) {
						this.text = s.at(-2);
					}
				}
				this.print = titledWikiLink;
				if (this.title === undefined && pg.current.link && pg.current.link.href !== undefined) {
					this.title = safeDecodeURI(pg.current.link.originalTitle ?? this.article);
					if (this.oldid !== undefined && this.oldid) {
						this.title = tprintf('Revision %s of %s', [this.oldid, this.title]);
					}
				}
				this.action = 'view';
				break;
			case 'userPage':
			case 'article':
			case 'editArticle':
				delete this.oldid;
				// mw.notify(`${this.id}\n${this.article}\n${typeof this.article}`, {tag: 'popups', type: 'warn'});
				this.article = this.article.articleFromTalkOrArticle();
				// mw.notify(`${this.id}\n${this.article}\n${typeof this.article}`, {tag: 'popups', type: 'warn'});
				this.print = wikiLink;
				this.action = this.id.indexOf('edit') === 0 ? 'edit' : 'view';
				break;
			case 'userTalk':
			case 'talk':
				this.article = this.article.talkPage();
				delete this.oldid;
				this.print = wikiLink;
				this.action = 'view';
				break;
			case 'arin':
				this.print = arinLink;
				break;
			case 'count':
				this.print = editCounterLink;
				break;
			case 'editors':
				this.print = editorListLink;
				break;
			case 'lastEdit':
				this.print = titledDiffLink;
				this.title = popupString('Show the last edit');
				this.from = 'prev';
				this.to = 'cur';
				break;
			case 'oldEdit':
				this.print = titledDiffLink;
				this.title = `${popupString('Show the edit made to get revision')} ${this.oldid}`;
				this.from = 'prev';
				this.to = this.oldid;
				break;
			case 'editOld':
				this.print = wikiLink;
				this.action = 'edit';
				break;
			case 'undo':
				this.print = wikiLink;
				this.action = 'edit&undo=';
				break;
			case 'revert':
				this.print = wikiLink;
				this.action = 'revert';
				break;
			case 'nullEdit':
				this.print = wikiLink;
				this.action = 'nullEdit';
				break;
			case 'diffCur':
				this.print = titledDiffLink;
				this.title = tprintf('Show changes since revision %s', [this.oldid]);
				this.from = this.oldid;
				this.to = 'cur';
				break;
			case 'editUserTalk':
			case 'editTalk':
				delete this.oldid;
				this.article = this.article.talkPage();
				this.action = 'edit';
				this.print = wikiLink;
				break;
			case 'newUserTalk':
			case 'newTalk':
				this.article = this.article.talkPage();
				this.action = 'edit&section=new';
				this.print = wikiLink;
				break;
			case 'lastContrib':
			case 'sinceMe':
				this.print = magicHistoryLink;
				break;
			case 'togglePreviews':
			case 'disablePopups':
			case 'purgePopups':
				if (this.id === 'togglePreviews') {
					this.text = popupString(pg.option.simplePopups ? 'enable previews' : 'disable previews');
				}
				this.print = popupMenuLink;
				break;
			default:
				this.print = () => `Unknown navlink type: ${this.id}`;
		}
	}
}

export {
	defaultNavlinkSpec,
	expandConditionalNavlinkString,
	navLinksHTML,
	navlinkDepth,
	navlinkStringToArray,
	navlinkStringToHTML,
	navlinkSubstituteHTML,
	navlinkTag,
};
