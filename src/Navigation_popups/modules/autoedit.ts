// 本文件由 Navigation_popups 原版 core.js 的 autoedit.js 段落拆分而来，保留原有实现。
import {anyChild, getJsObj, simplePrintf} from './tools';
import {popupString, tprintf} from './strings';
import {pg} from './pg';
import {setupPopups} from './init';
import {startDownload} from './downloader';

const substitute = (data: any, cmdBody: any) => {
	// mw.notify(`sub\nfrom: ${cmdBody.from}\nto: ${cmdBody.to}\nflags: ${cmdBody.flags}`, {tag: 'popups', type: 'warn'});
	const fromRe = new RegExp(cmdBody.from, cmdBody.flags);
	return data.replace(fromRe, cmdBody.to);
};
const execCmds = (data: any, cmdList: any) => {
	for (const element of cmdList) {
		data = element.action(data, element);
	}
	return data;
};
const parseCmd = function parseCmd(str: string): any {
	// returns a list of commands
	if (str.length === 0) {
		return [];
	}
	let p: any = false;
	switch (str.charAt(0)) {
		case 's':
			p = parseSubstitute(str);
			break;
		default:
			return false;
	}
	if (p) {
		return [p, parseCmd(p.remainder)];
	}
	return false;
};
const unEscape = (str: string, sep: any) => {
	return str
		.split('\\\\')
		.join('\\')
		.split(`\\${sep}`)
		.join(sep)
		.split(String.raw`\n`)
		.join('\n');
};
const parseSubstitute = (str: string) => {
	// takes a string like s/a/b/flags;othercmds and parses it
	let from;
	let to;
	let flags;
	let tmp: any;
	if (str.length < 4) {
		return false;
	}
	const sep = str.charAt(1);
	str = str.slice(2);
	tmp = skipOver(str, sep);
	if (tmp) {
		from = tmp.segment;
		str = tmp.remainder;
	} else {
		return false;
	}
	tmp = skipOver(str, sep);
	if (tmp) {
		to = tmp.segment;
		str = tmp.remainder;
	} else {
		return false;
	}
	flags = '';
	if (str.length > 0) {
		tmp = skipOver(str, ';') || skipToEnd(str, ';');
		if (tmp) {
			flags = tmp.segment;
			str = tmp.remainder;
		}
	}
	return {
		action: substitute,
		from,
		to,
		flags,
		remainder: str,
	};
};
const skipOver = (str: string, sep: any) => {
	const endSegment = findNext(str, sep);
	if (endSegment < 0) {
		return false;
	}
	const segment = unEscape(str.slice(0, Math.max(0, endSegment)), sep);
	return {
		segment,
		remainder: str.slice(Math.max(0, endSegment + 1)),
	};
};
const skipToEnd = (str: string, _sep: any) => {
	return {
		segment: str,
		remainder: '',
	};
};
const findNext = (str: string, ch: any) => {
	for (let i = 0; i < str.length; ++i) {
		if (str.charAt(i) === '\\') {
			i += 2;
		}
		if (str.charAt(i) === ch) {
			return i;
		}
	}
	return -1;
};
const setCheckbox = (param: any, box: any) => {
	const val = mw.util.getParamValue(param);
	if (val) {
		switch (val) {
			case '1':
			case 'yes':
			case 'true':
				box.checked = true;
				break;
			case '0':
			case 'no':
			case 'false':
				box.checked = false;
		}
	}
};
let autoEditAlreadyRan = false;
const autoEdit = function autoEdit(): void {
	setupPopups((): boolean | undefined => {
		if (mw.util.getParamValue('autoimpl') !== popupString('autoedit_version')) {
			return false;
		}
		if (mw.util.getParamValue('autowatchlist') && mw.util.getParamValue('actoken') === autoClickToken()) {
			pg.fn.modifyWatchlist(mw.util.getParamValue('title'), mw.util.getParamValue('action'));
		}
		if (!document.editform) {
			return false;
		}
		if (autoEditAlreadyRan) {
			return false;
		}
		autoEditAlreadyRan = true;
		const cmdString = mw.util.getParamValue('autoedit');
		if (cmdString) {
			try {
				const editbox = document.editform.wpTextbox1!;
				const cmdList = parseCmd(cmdString);
				const input = editbox.value;
				const output = execCmds(input, cmdList);
				editbox.value = output;
			} catch {
				return false;
			}
		}
		setCheckbox('autominor', document.editform.wpMinoredit!);
		setCheckbox('autowatch', document.editform.wpWatchthis!);
		const rvid = mw.util.getParamValue('autorv');
		if (rvid) {
			const url = `${pg.wiki.apiwikibase}?action=query&format=json&formatversion=2&prop=revisions&revids=${rvid}`;
			startDownload(url, null, autoEdit2);
		} else {
			autoEdit2();
		}
		return false;
	});
};
const autoEdit2 = (d?: any) => {
	let summary: any = mw.util.getParamValue('autosummary');
	let summaryprompt: any = mw.util.getParamValue('autosummaryprompt');
	let summarynotice: any = '';
	if (d && d.data && mw.util.getParamValue('autorv')) {
		const s = getRvSummary(summary, d.data);
		if (s === false) {
			summaryprompt = true;
			summarynotice = popupString('Failed to get revision information, please edit manually.\n\n');
			summary = simplePrintf(summary, [mw.util.getParamValue('autorv'), '(unknown)', '(unknown)']);
		} else {
			summary = s;
		}
	}
	if (summaryprompt) {
		const txt = summarynotice + popupString('Enter a non-empty edit summary or press cancel to abort');
		const response = prompt(txt, summary);
		if (response) {
			summary = response;
		} else {
			return;
		}
	}
	if (summary) {
		document.editform!.wpSummary!.value = summary;
	}
	// Attempt to avoid possible premature clicking of the save button
	// (maybe delays in updates to the DOM are to blame?? or a red herring)
	setTimeout(autoEdit3, 100);
};
const autoClickToken = () => {
	return mw.user.sessionId();
};
const autoEdit3 = () => {
	if (mw.util.getParamValue('actoken') !== autoClickToken()) {
		return;
	}
	const btn = mw.util.getParamValue('autoclick');
	if (btn) {
		if (document.editform && document.editform[btn]) {
			const button = document.editform[btn];
			const msg = tprintf(
				'The %s button has been automatically clicked. Please wait for the next page to load.',
				[button.value]
			);
			bannerMessage(msg);
			document.title = `(${document.title})`;
			button.click();
		} else {
			void mw.notify(
				tprintf('Could not find button %s. Please check the settings in your javascript file.', [btn]),
				{tag: 'popups', type: 'error'}
			);
		}
	}
};
const bannerMessage = (s: string) => {
	const headings = document.querySelectorAll('h1');
	if (headings) {
		const div = document.createElement('div');
		div.innerHTML = `<font size=+1><b>${pg.escapeQuotesHTML(s)}</b></font>`;
		headings[0]!.parentNode!.insertBefore(div, headings[0]!);
	}
};
const getRvSummary = (template: any, json: any) => {
	try {
		const o = getJsObj(json);
		const [edit] = anyChild(o.query.pages).revisions;
		const timestamp = edit.timestamp
			.split(/[A-Z]/g)
			.join(' ')
			.replace(/^ *| *$/g, '');
		return simplePrintf(template, [edit.revid, timestamp, edit.userhidden ? '(hidden)' : edit.user]);
	} catch {
		return false;
	}
};

export {
	autoClickToken,
	autoEdit,
	autoEdit2,
	autoEdit3,
	bannerMessage,
	execCmds,
	findNext,
	getRvSummary,
	parseCmd,
	parseSubstitute,
	setCheckbox,
	skipOver,
	skipToEnd,
	substitute,
	unEscape,
};
