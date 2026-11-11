// 本文件由 Navigation_popups 原版 core.js 的 structures.js 段落拆分而来，保留原有实现。
import {navLinksHTML, navlinkStringToHTML} from './navlinks';
import {getValueOf} from './options';
import {imageHTML} from './htmloutput';
import {pg} from './pg';
import {popupString} from './strings';

pg.structures.original = {};
pg.structures.original.popupLayout = () => {
	return [
		'popupError',
		'popupImage',
		'popupTopLinks',
		'popupTitle',
		'popupUserData',
		'popupData',
		'popupOtherLinks',
		'popupRedir',
		['popupWarnRedir', 'popupRedirTopLinks', 'popupRedirTitle', 'popupRedirData', 'popupRedirOtherLinks'],
		'popupMiscTools',
		['popupRedlink'],
		'popupPrePreviewSep',
		'popupPreview',
		'popupSecondPreview',
		'popupPreviewMore',
		'popupPostPreview',
		'popupFixDab',
	];
};
pg.structures.original.popupRedirSpans = () => {
	return [
		'popupRedir',
		'popupWarnRedir',
		'popupRedirTopLinks',
		'popupRedirTitle',
		'popupRedirData',
		'popupRedirOtherLinks',
	];
};
pg.structures.original.popupTitle = (x: any) => {
	log('defaultstructure.popupTitle');
	if (!getValueOf('popupNavLinks')) {
		return navlinkStringToHTML('<b><<mainlink>></b>', x.article, x.params);
	}
	return '';
};
pg.structures.original.popupTopLinks = (x: any) => {
	log('defaultstructure.popupTopLinks');
	if (getValueOf('popupNavLinks')) {
		return navLinksHTML(x.article, x.hint, x.params);
	}
	return '';
};
pg.structures.original.popupImage = (x: any) => {
	log(`original.popupImage, x.article=${x.article}, x.navpop.idNumber=${x.navpop.idNumber}`);
	return imageHTML(x.article, x.navpop.idNumber);
};
pg.structures.original.popupRedirTitle = pg.structures.original.popupTitle;
pg.structures.original.popupRedirTopLinks = pg.structures.original.popupTopLinks;
const copyStructure = (oldStructure: any, newStructure: any) => {
	pg.structures[newStructure] = {};
	for (const prop in pg.structures[oldStructure]) {
		if (!Object.hasOwn(pg.structures[oldStructure], prop)) {
			continue;
		}
		pg.structures[newStructure][prop] = pg.structures[oldStructure][prop];
	}
};
copyStructure('original', 'nostalgia');
pg.structures.nostalgia.popupTopLinks = (x: any) => {
	let str = '';
	str += '<b><<mainlink|shortcut= >></b>';
	// user links
	// contribs - log - count - email - block
	// count only if applicable; block only if popupAdminLinks
	str += 'if(user){<br><<contribs|shortcut=c>>';
	str += 'if(wikimedia){*<<count|shortcut=#>>}';
	str += 'if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>}}';
	// editing links
	// talkpage   -> edit|new - history - un|watch - article|edit
	// other page -> edit - history - un|watch - talk|edit|new
	const editstr = '<<edit|shortcut=e>>';
	const editOldidStr = `if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{${editstr}}`;
	const historystr = '<<history|shortcut=h>>';
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
	str += '<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>';
	str += 'if(admin){<br>}else{*}<<move|shortcut=m>>';
	// admin links
	str +=
		'if(admin){*<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*' +
		'<<undelete|undeleteShort>>|<<delete|shortcut=d>>}';
	return navlinkStringToHTML(str, x.article, x.params);
};
pg.structures.nostalgia.popupRedirTopLinks = pg.structures.nostalgia.popupTopLinks;
copyStructure('original', 'fancy');
pg.structures.fancy.popupTitle = (x: any) => {
	return navlinkStringToHTML('<font size=+0><<mainlink>></font>', x.article, x.params);
};
pg.structures.fancy.popupTopLinks = (x: any) => {
	const hist = '<<history|shortcut=h|hist>>|<<lastEdit|shortcut=/|last>>|<<editors|shortcut=E|eds>>';
	const watch = '<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>';
	const move = '<<move|shortcut=m|move>>';
	return navlinkStringToHTML(
		'if(talk){' +
			`<<edit|shortcut=e>>|<<new|shortcut=+|+>>*${hist}*` +
			'<<article|shortcut=a>>|<<editArticle|edit>>' +
			`*${watch}*${move}}else{<<edit|shortcut=e>>*${hist}*<<talk|shortcut=t|>>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>` +
			`*${watch}*${move}}<br>`,
		x.article,
		x.params
	);
};
pg.structures.fancy.popupOtherLinks = (x: any) => {
	const admin =
		'<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d|del>>';
	let user = '<<contribs|shortcut=c>>if(wikimedia){|<<count|shortcut=#|#>>}';
	user += `if(ipuser){|<<arin>>}else{*<<email|shortcut=E|${popupString('email')}>>}if(admin){*<<block|shortcut=b>>}`;
	const normal = '<<whatLinksHere|shortcut=l|links here>>*<<relatedChanges|shortcut=r|related>>';
	return navlinkStringToHTML(
		`<br>if(user){${user}*}if(admin){${admin}if(user){<br>}else{*}}${normal}`,
		x.article,
		x.params
	);
};
pg.structures.fancy.popupRedirTitle = pg.structures.fancy.popupTitle;
pg.structures.fancy.popupRedirTopLinks = pg.structures.fancy.popupTopLinks;
pg.structures.fancy.popupRedirOtherLinks = pg.structures.fancy.popupOtherLinks;
copyStructure('fancy', 'fancy2');
pg.structures.fancy2.popupTopLinks = // hack out the <br> at the end and put one at the beginning
	(x: any) => {
		return `<br>${pg.structures.fancy.popupTopLinks(x).replace(/<br>$/i, '')}`;
	};
pg.structures.fancy2.popupLayout = () => {
	return [
		'popupError',
		'popupImage',
		'popupTitle',
		'popupUserData',
		'popupData',
		'popupTopLinks',
		'popupOtherLinks',
		'popupRedir',
		['popupWarnRedir', 'popupRedirTopLinks', 'popupRedirTitle', 'popupRedirData', 'popupRedirOtherLinks'],
		'popupMiscTools',
		['popupRedlink'],
		'popupPrePreviewSep',
		'popupPreview',
		'popupSecondPreview',
		'popupPreviewMore',
		'popupPostPreview',
		'popupFixDab',
	];
};
copyStructure('original', 'menus');
pg.structures.menus.popupLayout = () => {
	return [
		'popupError',
		'popupImage',
		'popupTopLinks',
		'popupTitle',
		'popupOtherLinks',
		'popupRedir',
		['popupWarnRedir', 'popupRedirTopLinks', 'popupRedirTitle', 'popupRedirData', 'popupRedirOtherLinks'],
		'popupUserData',
		'popupData',
		'popupMiscTools',
		['popupRedlink'],
		'popupPrePreviewSep',
		'popupPreview',
		'popupSecondPreview',
		'popupPreviewMore',
		'popupPostPreview',
		'popupFixDab',
	];
};
pg.structures.menus.popupTopLinks = (x: any, shorter: any) => {
	// FIXME maybe this stuff should be cached
	const s = [];
	const dropdiv = '<div class="popup_drop">';
	const enddiv = '</div>';
	let hist = '<<history|shortcut=h>>';
	if (!shorter) {
		hist = `<menurow>${hist}|<<historyfeed|rss>>|<<editors|shortcut=E>></menurow>`;
	}
	const lastedit = '<<lastEdit|shortcut=/|show last edit>>';
	const thank = 'if(diff){<<thank|send thanks>>}';
	const jsHistory = '<<lastContrib|last set of edits>><<sinceMe|changes since mine>>';
	const linkshere = '<<whatLinksHere|shortcut=l|what links here>>';
	const related = '<<relatedChanges|shortcut=r|related changes>>';
	const search = '<menurow><<search|shortcut=s>></menurow>';
	const watch = '<menurow><<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>></menurow>';
	const protect = '<menurow><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>></menurow>';
	const del = '<menurow><<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>></menurow>';
	const move = '<<move|shortcut=m|move page>>';
	const nullPurge = '<menurow><<nullEdit|shortcut=n|null edit>>|<<purge|shortcut=P>></menurow>';
	const viewOptions = '<menurow><<view|shortcut=v>>|<<render|shortcut=S>>|<<raw>></menurow>';
	const editRow =
		'if(oldid){' +
		'<menurow><<edit|shortcut=e>>|<<editOld|shortcut=e|this&nbsp;revision>></menurow>' +
		'<menurow><<revert|shortcut=v>>|<<undo>></menurow>' +
		'}else{<<edit|shortcut=e>>}';
	const markPatrolled = 'if(rcid){<<markpatrolled|mark patrolled>>}';
	const newTopic = 'if(talk){<<new|shortcut=+|new topic>>}';
	const protectDelete = `if(admin){${protect}${del}}`;
	if (getValueOf('popupActionsMenu')) {
		s.push(`<<mainlink>>*${dropdiv}${menuTitle('actions')}`);
	} else {
		s.push(`${dropdiv}<<mainlink>>`);
	}
	s.push('<menu>', editRow + markPatrolled + newTopic + hist + lastedit + thank);
	if (!shorter) {
		s.push(jsHistory);
	}
	s.push(move + linkshere + related);
	if (!shorter) {
		s.push(nullPurge + search);
	}
	if (!shorter) {
		s.push(viewOptions);
	}
	s.push(
		`<hr>${watch}${protectDelete}`,
		'<hr>' +
			'if(talk){<<article|shortcut=a|view article>><<editArticle|edit article>>}' +
			'else{<<talk|shortcut=t|talk page>><<editTalk|edit talk>>' +
			`<<newTalk|shortcut=+|new topic>>}</menu>${enddiv}`
	);
	// user menu starts here
	const email = '<<email|shortcut=E|email user>>';
	const contribs =
		'if(wikimedia){<menurow>}<<contribs|shortcut=c|contributions>>if(wikimedia){</menurow>}' +
		'if(admin){<menurow><<deletedContribs>></menurow>}';
	s.push(
		`if(user){*${dropdiv}${menuTitle('user')}`,
		'<menu>',
		'<menurow><<userPage|shortcut=u|user&nbsp;page>>|<<userSpace|space>></menurow>',
		'<<userTalk|shortcut=t|user talk>><<editUserTalk|edit user talk>>' + '<<newUserTalk|shortcut=+|leave comment>>'
	);
	if (shorter) {
		s.push(`if(ipuser){}else{${email}}`);
	} else {
		s.push(`if(ipuser){<<arin>>}else{${email}}`);
	}
	s.push(
		`<hr>${contribs}<<userlog|shortcut=L|user log>>`,
		'if(wikimedia){<<count|shortcut=#|edit counter>>}',
		'if(admin){<menurow><<unblock|unblockShort>>|<<block|shortcut=b|block user>></menurow>}',
		'<<blocklog|shortcut=B|block log>>',
		`</menu>${enddiv}}`
	);
	// popups menu starts here
	if (getValueOf('popupSetupMenu') && !x.navpop.hasPopupMenu /* FIXME: hack */) {
		x.navpop.hasPopupMenu = true;
		s.push(
			`*${dropdiv}${menuTitle('popupsMenu')}<menu>`,
			'<<togglePreviews|toggle previews>>',
			'<<purgePopups|reset>>',
			'<<disablePopups|disable>>',
			`</menu>${enddiv}`
		);
	}
	return navlinkStringToHTML(s.join(''), x.article, x.params);
};
const menuTitle = (s: string) => {
	return `<a href="#" noPopup=1>${popupString(s)}</a>`;
};
pg.structures.menus.popupRedirTitle = pg.structures.menus.popupTitle;
pg.structures.menus.popupRedirTopLinks = pg.structures.menus.popupTopLinks;
copyStructure('menus', 'shortmenus');
pg.structures.shortmenus.popupTopLinks = (x: any) => {
	return pg.structures.menus.popupTopLinks(x, true);
};
pg.structures.shortmenus.popupRedirTopLinks = pg.structures.shortmenus.popupTopLinks;
pg.structures.lite = {};
pg.structures.lite.popupLayout = () => {
	return ['popupTitle', 'popupPreview'];
};
pg.structures.lite.popupTitle = (x: any) => {
	log(`${x.article}: structures.lite.popupTitle`);
	// return navlinkStringToHTML('<b><<mainlink>></b>',x.article,x.params);
	return `<div><span class="popup_mainlink"><b>${x.article.toString()}</b></span></div>`;
};
const getPgStructures = () => {
	return pg.structures;
};

export {getPgStructures};
