// 本文件由 Navigation_popups 原版 core.js 的 htmloutput.js 段落拆分而来，保留原有实现。
import type {PgStructureArgs, PopData, WikiParams} from './types';
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
	str: string | Node,
	elementId: string,
	popupId?: number,
	onSuccess?: (() => void) | null,
	append?: boolean
): boolean | null {
	const id = popupId ?? pg.idNumber;
	const popupElement = document.getElementById(`${elementId}${id}`);
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
		setPopupHTML(str, elementId, id, onSuccess);
	}, 600);
	return null;
};
const setPopupTrailer = (str: string, id?: number) => {
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
	let article: Title;
	let hint: string | undefined;
	let oldid: string | null | undefined;
	let params: WikiParams = {};
	if (redir && typeof args.redirTarget === 'object') {
		article = args.redirTarget;
		// hint=article.hintValue();
	} else {
		article = new Title().fromAnchor(a);
		hint = a.originalTitle || article.hintValue();
		params = parseParams(a.href);
		oldid = getValueOf('popupHistoricalLinks') ? params.oldid : null;
		({rcid} = params);
	}
	const x: PgStructureArgs = {
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
		const span = spans[i]!;
		if (typeof span !== 'string') {
			// 数组项在 structure 中无对应键，与原版取值 undefined 后跳过等价
			continue;
		}
		const found = redirs && redirs.includes(span);
		if ((found && !redir) || (!found && redir)) {
			continue;
		}
		const structurefn = structure[span];
		if (structurefn === undefined) {
			// nothing to do for this structure part
			continue;
		}
		let setfn: (str: string | Node, elementId: string, popupId?: number) => boolean | null | void = setPopupHTML;
		if (
			getValueOf('popupActiveNavlinks') &&
			(span.startsWith('popupTopLinks') || span.startsWith('popupRedirTopLinks'))
		) {
			setfn = setPopupTipsAndHTML;
		}
		switch (typeof structurefn) {
			case 'function':
				log(`running ${span}({
						article:${x.article}, hint:${x.hint}, oldid: ${x.oldid}})`);
				// spans 遍历键不含 popupLayout/popupRedirSpans，此处恒为 span 生成函数
				setfn(
					(structurefn as (x: PgStructureArgs, shorter?: boolean) => string)(x),
					span,
					args.navpopup.idNumber
				);
				break;
			case 'string':
				setfn(structurefn, span, args.navpopup.idNumber);
				break;
			default:
				errlog(`unknown thing with label ${span} (span index was ${i})`);
				break;
		}
	}
};
// popupLayout 的元素结构：span 名字符串或（嵌套的）span 名数组
type LayoutItem = string | LayoutItem[];
const flatten = function flatten(list: LayoutItem[], start?: number): LayoutItem[] {
	const ret: LayoutItem[] = [];
	if (start === undefined) {
		start = 0;
	}
	for (let i = start; i < list.length; ++i) {
		const element = list[i]!;
		if (Array.isArray(element)) {
			return [...ret, ...flatten(element), ...flatten(list, i + 1)];
		}
		ret.push(element);
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
const makeEmptySpans = function makeEmptySpans(list: LayoutItem[], navpop: Navpopup): string {
	let ret = '';
	for (const element of list) {
		if (typeof element === 'string') {
			ret += emptySpanHTML(element, navpop.idNumber, 'div');
		} else if (element.length > 0) {
			ret = ret.split(/(<\/[^>]*?>$)/).join(makeEmptySpans(element, navpop));
		}
	}
	return ret;
};
const emptySpanHTML = function emptySpanHTML(name: string, id?: number, tag?: string, classname?: string) {
	tag ||= 'span';
	classname ||= emptySpanHTMLClassAliases[name];
	classname ||= name;
	if (name === getValueOf('popupDragHandle')) {
		classname += ' popupDragHandle';
	}
	return simplePrintf('<%s id="%s" class="%s"></%s>', [tag, name + id, classname, tag]);
};
// 原版挂在 emptySpanHTML 函数对象上的属性，改为模块级常量
const emptySpanHTMLClassAliases: Record<string, string> = {
	popupSecondPreview: 'popupPreview',
};
const imageHTML = (_article: Title, idNumber?: number) => {
	return simplePrintf(
		'<a id="popupImageLink$1">' +
			'<img align="right" valign="top" id="popupImg$1" style="display:none"></img>' +
			'</a>',
		[idNumber]
	);
};
const popTipsSoonFn = (id: string, when?: number | null, popData?: PopData) => {
	when ||= 250;
	const popTips = () => {
		setupTooltips(document.getElementById(`${id}`), false, true, popData);
	};
	return () => {
		setTimeout(popTips, when, popData);
	};
};
const setPopupTipsAndHTML = (html: string | Node, divname: string, idnumber?: number, popData?: PopData) => {
	setPopupHTML(
		html,
		divname,
		idnumber,
		getValueOf('popupSubpopups') ? popTipsSoonFn(`${divname}${idnumber}`, null, popData) : null
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
