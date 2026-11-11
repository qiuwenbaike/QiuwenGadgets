// 本文件由 Navigation_popups 原版 core.js 的 htmloutput.js 段落拆分而来，保留原有实现。
import type {PopData, WikiParams} from './types';
import {Title, parseParams} from './titles';
import {isString, simplePrintf} from './tools';
import type {Navpopup} from './navpopup';
import {checkPopupPosition} from './mouseout';
import {getPgStructures} from './structures';
import {getValueOf} from './options';
import {pg} from './pg';
import {setupTooltips} from './actions';

pg.structures = getPgStructures();
const setPopupHTML = function setPopupHTML(
	str: any,
	elementId: any,
	popupId: any,
	onSuccess?: any,
	append?: boolean
): boolean | null {
	if (popupId === undefined) {
		// console.error('[Popups] popupId is not defined in setPopupHTML, html='+str.substring(0,100));
		popupId = pg.idNumber;
	}
	const popupElement = document.getElementById(`${elementId}${popupId}`);
	if (popupElement) {
		if (!append) {
			popupElement.innerHTML = '';
		}
		if (isString(str)) {
			popupElement.innerHTML += str;
		} else {
			popupElement.append(str);
		}
		if (onSuccess) {
			onSuccess();
		}
		setTimeout(checkPopupPosition, 100);
		return true;
	}
	// call this function again in a little while...
	setTimeout(() => {
		setPopupHTML(str, elementId, popupId, onSuccess);
	}, 600);
	return null;
};
const setPopupTrailer = (str: string, id: any) => {
	return setPopupHTML(str, 'popupData', id);
};
const fillEmptySpans = (args: {redir?: boolean; redirTarget?: Title; navpopup: Navpopup}) => {
	// if redir is present and true then redirTarget is mandatory
	let redir = true;
	let rcid;
	if (typeof args !== 'object' || args.redir === undefined || !args.redir) {
		redir = false;
	}
	const a = args.navpopup.parentAnchor!;
	let article;
	let hint;
	let oldid;
	let params: WikiParams = {};
	if (redir && typeof args.redirTarget === typeof {}) {
		article = args.redirTarget;
		// hint=article.hintValue();
	} else {
		article = new Title().fromAnchor(a);
		hint = a.originalTitle || article.hintValue();
		params = parseParams(a.href);
		oldid = getValueOf('popupHistoricalLinks') ? params.oldid : null;
		({rcid} = params);
	}
	const x = {
		article,
		hint,
		oldid,
		rcid,
		navpop: args.navpopup,
		params,
	};
	const structure = pg.structures[getValueOf('popupStructure')];
	if (typeof structure !== 'object') {
		setPopupHTML(
			'popupError',
			`Unknown structure (this should never happen): ${pg.option.popupStructure}`,
			args.navpopup.idNumber
		);
		return;
	}
	const spans = flatten(pg.misc.layout);
	const numspans = spans.length;
	const redirs = pg.misc.redirSpans;
	for (let i = 0; i < numspans; ++i) {
		const found = redirs && redirs.includes(spans[i]);
		// log('redir=' + redir + ', found=' + found + ', spans[i]=' + spans[i]);
		if ((found && !redir) || (!found && redir)) {
			// log('skipping this set of the loop');
			continue;
		}
		const structurefn = structure[spans[i]];
		if (structurefn === undefined) {
			// nothing to do for this structure part
			continue;
		}
		let setfn: any = setPopupHTML;
		if (
			getValueOf('popupActiveNavlinks') &&
			(spans[i].indexOf('popupTopLinks') === 0 || spans[i].indexOf('popupRedirTopLinks') === 0)
		) {
			setfn = setPopupTipsAndHTML;
		}
		switch (typeof structurefn) {
			case 'function':
				log(`running ${spans[i]}({
						article:${x.article}, hint:${x.hint}, oldid: ${x.oldid}})`);
				setfn(structurefn(x), spans[i], args.navpopup.idNumber);
				break;
			case 'string':
				setfn(structurefn, spans[i], args.navpopup.idNumber);
				break;
			default:
				errlog(`unknown thing with label ${spans[i]} (span index was ${i})`);
				break;
		}
	}
};
const flatten = function flatten(list: any, start?: number): any[] {
	const ret = [];
	if (start === undefined) {
		start = 0;
	}
	for (let i = start; i < list.length; ++i) {
		if (typeof list[i] === typeof []) {
			return [...ret, ...flatten(list[i]), ...flatten(list, i + 1)];
		}
		ret.push(list[i]);
	}
	return ret;
};
const popupHTML = function popupHTML(a: HTMLAnchorElement) {
	let structureName = getValueOf('popupStructure');
	let structure = pg.structures[structureName];
	if (!structure || typeof structure !== 'object') {
		structureName = pg.optionDefault.popupStructure;
		structure = pg.structures[structureName];
		if (!structure || typeof structure !== 'object') {
			structureName = 'original';
			structure = pg.structures[structureName];
		}
		pg.option.popupStructure = structureName;
	}
	if (!structure || typeof structure.popupLayout !== 'function') {
		return 'Bad layout';
	}
	pg.misc.layout = structure.popupLayout();
	pg.misc.redirSpans = typeof structure.popupRedirSpans === 'function' ? structure.popupRedirSpans() : [];
	return makeEmptySpans(pg.misc.layout, a.navpopup);
};
const makeEmptySpans = function makeEmptySpans(list: any, navpop: Navpopup) {
	let ret = '';
	for (const element of list) {
		if (typeof element === typeof '') {
			ret += emptySpanHTML(element, navpop.idNumber, 'div');
		} else if (typeof element === typeof [] && element.length > 0) {
			ret = ret.split(/(<\/[^>]*?>$)/).join(makeEmptySpans(element, navpop));
		} else if (typeof element === typeof {} && element.nodeType) {
			ret += emptySpanHTML(element.name, navpop.idNumber, element.nodeType);
		}
	}
	return ret;
};
const emptySpanHTML = function emptySpanHTML(name: any, id: any, tag: any, classname?: any) {
	tag ||= 'span';
	classname ||= (emptySpanHTML as any).classAliases[name];
	classname ||= name;
	if (name === getValueOf('popupDragHandle')) {
		classname += ' popupDragHandle';
	}
	return simplePrintf('<%s id="%s" class="%s"></%s>', [tag, name + id, classname, tag]);
};
emptySpanHTML.classAliases = {
	popupSecondPreview: 'popupPreview',
};
const imageHTML = (_article: Title, idNumber: any) => {
	return simplePrintf(
		'<a id="popupImageLink$1">' +
			'<img align="right" valign="top" id="popupImg$1" style="display:none"></img>' +
			'</a>',
		[idNumber]
	);
};
const popTipsSoonFn = (id: any, when?: any, popData?: PopData) => {
	when ||= 250;
	const popTips = () => {
		setupTooltips(document.getElementById(`${id}`), false, true, popData);
	};
	return () => {
		setTimeout(popTips, when, popData);
	};
};
const setPopupTipsAndHTML = (html: any, divname: any, idnumber: any, popData?: PopData) => {
	setPopupHTML(
		html,
		divname,
		idnumber,
		getValueOf('popupSubpopups') ? popTipsSoonFn(divname + idnumber, null, popData) : null
	);
};

export {
	emptySpanHTML,
	fillEmptySpans,
	flatten,
	imageHTML,
	makeEmptySpans,
	popTipsSoonFn,
	popupHTML,
	setPopupHTML,
	setPopupTipsAndHTML,
	setPopupTrailer,
};
