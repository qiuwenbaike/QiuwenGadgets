// 本文件由 Navigation_popups 原版 core.js 的 diff.js 段落拆分而来，保留原有实现。
import {entify} from './tools';

// diff 算法中的行元素：初始为字符串，配对成功后原地替换为配对对象
export type PairedRow = {text: string; row: number; paired: boolean};
export type DiffRow = string | PairedRow;
export const isPairedRow = (row: DiffRow | undefined): row is PairedRow => typeof row === 'object';

const delFmt = (x: string[]) => {
	if (x.length === 0) {
		return '';
	}
	return `<del class='popupDiff'>${x.join('')}</del>`;
};
const insFmt = (x: string[]) => {
	if (x.length === 0) {
		return '';
	}
	return `<ins class='popupDiff'>${x.join('')}</ins>`;
};
const countCrossings = (a: DiffRow[], b: DiffRow[], i: number, eject: boolean) => {
	// count the crossings on the edge starting at b[i]
	// 未配对的行（字符串）与越界索引都没有 row，视为无交叉
	const start = b[i];
	if (!isPairedRow(start)) {
		return -1;
	}
	let count = 0;
	for (const [j, element] of a.entries()) {
		if (!isPairedRow(element)) {
			continue;
		}
		if ((j - start.row) * (i - element.row) > 0) {
			if (eject) {
				return true;
			}
			count++;
		}
	}
	return count;
};
const shortenDiffString = function shortenDiffString(str: string, context: number) {
	const re = /(<del[\S\s]*?<\/del>|<ins[\S\s]*?<\/ins>)/;
	const splitted = str.split(re);
	let ret = [''];
	for (let i = 0; i < splitted.length; i += 2) {
		if (splitted[i]!.length < 2 * context) {
			ret[ret.length - 1]! += splitted[i];
			if (i + 1 < splitted.length) {
				ret[ret.length - 1]! += splitted[i + 1];
			}
			continue;
		} else {
			if (i > 0) {
				ret[ret.length - 1]! += splitted[i]!.slice(0, Math.max(0, context));
			}
			if (i + 1 < splitted.length) {
				ret.push(splitted[i]!.slice(Math.max(0, splitted[i]!.length - context)) + splitted[i + 1]);
			}
		}
	}
	while (ret.length > 0 && !ret[0]) {
		ret = ret.slice(1);
	}
	return ret;
};
const diffString = (o: string, n: string) => {
	//  We need to split the strings o and n first, and entify() the parts
	//  individually, so that the HTML entities are never cut apart. (AxelBoldt)
	let i;
	const oSplitted = o.split(/\b/);
	const nSplitted = n.split(/\b/);
	for (i = 0; i < oSplitted.length; ++i) {
		oSplitted[i] = entify(oSplitted[i]!);
	}
	for (i = 0; i < nSplitted.length; ++i) {
		nSplitted[i] = entify(nSplitted[i]!);
	}
	const out = diff(oSplitted, nSplitted);
	let str = '';
	let acc: string[] = []; // accumulator for prettier output

	// crossing pairings -- eg 'A B' vs 'B A' -- cause problems, so let's iron them out
	// this doesn't always do things optimally but it should be fast enough
	let maxOutputPair = 0;
	for (i = 0; i < out.n.length; ++i) {
		const nrow = out.n[i];
		if (isPairedRow(nrow)) {
			if (maxOutputPair > nrow.row) {
				// tangle - delete pairing
				out.o[nrow.row] = (out.o[nrow.row] as PairedRow).text;
				out.n[i] = nrow.text;
			}
			if (maxOutputPair < nrow.row) {
				maxOutputPair = nrow.row;
			}
		}
	}
	// output the stuff preceding the first paired old line
	for (i = 0; i < out.o.length && !isPairedRow(out.o[i]); ++i) {
		acc.push(out.o[i] as string);
	}
	str += delFmt(acc);
	acc = [];
	// main loop
	for (i = 0; i < out.n.length; ++i) {
		// output unpaired new "lines"
		while (i < out.n.length && !isPairedRow(out.n[i])) {
			acc.push(out.n[i++] as string);
		}
		str += insFmt(acc);
		acc = [];
		if (i < out.n.length) {
			// this new "line" is paired with the (out.n[i].row)th old "line"
			const nrow = out.n[i] as PairedRow;
			str += nrow.text;
			// output unpaired old rows starting after this new line's partner
			let m = nrow.row + 1;
			while (m < out.o.length && !isPairedRow(out.o[m])) {
				acc.push(out.o[m++] as string);
			}
			str += delFmt(acc);
			acc = [];
		}
	}
	return str;
};
const jsReservedProperties = new RegExp(
	'^(constructor|prototype|__((define|lookup)[GS]etter)__' +
		'|eval|hasOwnProperty|propertyIsEnumerable' +
		'|to(Source|String|LocaleString)|(un)?watch|valueOf)$'
);
const diffBugAlert = function diffBugAlert(word: string) {
	if (!diffBugAlert.list[word]) {
		diffBugAlert.list[word] = 1;
		void mw.notify(`Bad word: ${word}\n\nPlease report this bug.`, {tag: 'popups', type: 'error'});
	}
};
diffBugAlert.list = {} as Record<string, number>;
const makeDiffHashtable = (src: DiffRow[]) => {
	const ret: Record<string, number[]> = {};
	for (let i = 0; i < src.length; i++) {
		// 调用点（diff 的 pass 1/2）在配对发生前执行，元素此时均为字符串
		const key = src[i] as string;
		if (jsReservedProperties.test(key)) {
			src[i] = `${key}<!-- -->`;
		}
		ret[src[i] as string] ??= [];
		try {
			ret[src[i] as string]!.push(i);
		} catch {
			diffBugAlert(src[i] as string);
		}
	}
	return ret;
};
const diff = (o: DiffRow[], n: DiffRow[]): {o: DiffRow[]; n: DiffRow[]} => {
	// pass 1: make hashtable ns with new rows as keys
	const ns = makeDiffHashtable(n);
	// pass 2: make hashtable os with old rows as keys
	const os = makeDiffHashtable(o);
	// pass 3: pair unique new rows and matching unique old rows
	let i;
	for (i in ns) {
		if (!Object.hasOwn(ns, i)) {
			continue;
		}
		const nsi = ns[i] as number[];
		const osi = os[i] as number[] | undefined;
		if (nsi.length === 1 && osi && osi.length === 1) {
			n[nsi[0]!] = {
				text: n[nsi[0]!] as string,
				row: osi[0]!,
				paired: true,
			};
			o[osi[0]!] = {
				text: o[osi[0]!] as string,
				row: nsi[0]!,
				paired: true,
			};
		}
	}
	// pass 4: pair matching rows immediately following paired rows (not necessarily unique)
	for (i = 0; i < n.length - 1; i++) {
		const current = n[i];
		if (!isPairedRow(current)) {
			continue;
		}
		const next = n[i + 1];
		const partner = o[current.row + 1];
		if (
			!isPairedRow(next) &&
			current.row + 1 < o.length &&
			!isPairedRow(partner) &&
			next !== undefined &&
			next === partner
		) {
			n[i + 1] = {
				text: next,
				row: current.row + 1,
				paired: true,
			};
			o[current.row + 1] = {
				text: partner as string,
				row: i + 1,
				paired: true,
			};
		}
	}
	// pass 5: pair matching rows immediately preceding paired rows (not necessarily unique)
	for (i = n.length - 1; i > 0; i--) {
		const current = n[i];
		if (!isPairedRow(current)) {
			continue;
		}
		const prev = n[i - 1];
		const partner = o[current.row - 1];
		if (!isPairedRow(prev) && current.row > 0 && !isPairedRow(partner) && prev !== undefined && prev === partner) {
			n[i - 1] = {
				text: prev,
				row: current.row - 1,
				paired: true,
			};
			o[current.row - 1] = {
				text: partner as string,
				row: i - 1,
				paired: true,
			};
		}
	}
	return {
		o,
		n,
	};
};

export {
	countCrossings,
	delFmt,
	diff,
	diffBugAlert,
	diffString,
	insFmt,
	jsReservedProperties,
	makeDiffHashtable,
	shortenDiffString,
};
