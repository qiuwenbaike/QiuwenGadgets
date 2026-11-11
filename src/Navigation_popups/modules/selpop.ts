// 本文件由 Navigation_popups 原版 core.js 的 selpop.js 段落拆分而来，保留原有实现。
import {mouseOverWikiLink2, newNavpopup, prepPreviewmaker} from './actions';
import {Title} from './titles';
import {getValueOf} from './options';
import {pg} from './pg';
import {popTipsSoonFn} from './htmloutput';
import {runStopPopupTimer} from './mouseout';

const getEditboxSelection = () => {
	let editbox: HTMLTextAreaElement | undefined;
	try {
		editbox = document.editform?.wpTextbox1;
	} catch {
		return;
	}
	const selStart = editbox!.selectionStart;
	const selEnd = editbox!.selectionEnd;
	return editbox!.value.substring(selStart, selEnd);
};
const doSelectionPopup = () => {
	// popup if the selection looks like [[foo|anything afterwards at all
	// or [[foo|bar]]text without ']]'
	// or [[foo|bar]]
	const sel = getEditboxSelection() as string;
	const open = sel.indexOf('[[');
	const pipe = sel.indexOf('|');
	const close = sel.indexOf(']]');
	if (open === -1 || (pipe === -1 && close === -1)) {
		return;
	}
	if ((pipe !== -1 && open > pipe) || (close !== -1 && open > close)) {
		return;
	}
	const article = new Title(sel.substring(open + 2, pipe < 0 ? close : pipe));
	if (getValueOf('popupOnEditSelection') === 'boxpreview') {
		return doSeparateSelectionPopup(sel, article);
	}
	if (close > 0 && sel.slice(Math.max(0, close + 2)).includes('[[')) {
		return;
	}
	const a = document.createElement('a');
	a.href = pg.wiki.titlebase + article.urlString();
	mouseOverWikiLink2(a);
	if (a.navpopup) {
		a.navpopup.addHook(
			() => {
				runStopPopupTimer(a.navpopup);
			},
			'unhide',
			'after'
		);
	}
};
const doSeparateSelectionPopup = (str: string, article: Title) => {
	let div: HTMLElement | null = document.querySelector('#selectionPreview');
	if (!div) {
		div = document.createElement('div');
		div.id = 'selectionPreview';
		try {
			const box = document.editform!.wpTextbox1!;
			box.parentNode!.insertBefore(div, box);
		} catch {
			return;
		}
	}
	const p = prepPreviewmaker(str, article, newNavpopup(document.createElement('a'), article));
	p.makePreview();
	if (p.html) {
		div.innerHTML = p.html;
	}
	div.ranSetupTooltipsAlready = false;
	popTipsSoonFn('selectionPreview')();
};

export {doSelectionPopup, doSeparateSelectionPopup, getEditboxSelection};
