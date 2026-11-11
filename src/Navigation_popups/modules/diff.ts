// 本文件由 Navigation_popups 原版 core.js 的 diff.js 段落拆分而来，保留原有实现。
const delFmt = (x: any) => {
	if (x.length === 0) {
		return '';
	}
	return `<del class='popupDiff'>${x.join('')}</del>`;
};
const insFmt = (x: any) => {
	if (x.length === 0) {
		return '';
	}
	return `<ins class='popupDiff'>${x.join('')}</ins>`;
};
const countCrossings = (a: any[], b: any[], i: number, eject: any) => {
	// count the crossings on the edge starting at b[i]
	if (!b[i]!.row && b[i]!.row !== 0) {
		return -1;
	}
	let count = 0;
	for (const [j, element] of a.entries()) {
		if (!element.row && element.row !== 0) {
			continue;
		}
		if ((j - b[i]!.row) * (i - element.row) > 0) {
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
const diffString = (o: any, n: any) => {
	//  We need to split the strings o and n first, and entify() the parts
	//  individually, so that the HTML entities are never cut apart. (AxelBoldt)
	let i;
	const oSplitted = o.split(/\b/);
	const nSplitted = n.split(/\b/);
	for (i = 0; i < oSplitted.length; ++i) {
		oSplitted[i] = oSplitted[i].entify();
	}
	for (i = 0; i < nSplitted.length; ++i) {
		nSplitted[i] = nSplitted[i].entify();
	}
	const out = diff(oSplitted, nSplitted);
	let str = '';
	let acc = []; // accumulator for prettier output

	// crossing pairings -- eg 'A B' vs 'B A' -- cause problems, so let's iron them out
	// this doesn't always do things optimally but it should be fast enough
	let maxOutputPair = 0;
	for (i = 0; i < out.n.length; ++i) {
		if (out.n[i].paired) {
			if (maxOutputPair > out.n[i].row) {
				// tangle - delete pairing
				out.o[out.n[i].row] = out.o[out.n[i].row].text;
				out.n[i] = out.n[i].text;
			}
			if (maxOutputPair < out.n[i].row) {
				maxOutputPair = out.n[i].row;
			}
		}
	}
	// output the stuff preceding the first paired old line
	for (i = 0; i < out.o.length && !out.o[i].paired; ++i) {
		acc.push(out.o[i]);
	}
	str += delFmt(acc);
	acc = [];
	// main loop
	for (i = 0; i < out.n.length; ++i) {
		// output unpaired new "lines"
		while (i < out.n.length && !out.n[i].paired) {
			acc.push(out.n[i++]);
		}
		str += insFmt(acc);
		acc = [];
		if (i < out.n.length) {
			// this new "line" is paired with the (out.n[i].row)th old "line"
			str += out.n[i].text;
			// output unpaired old rows starting after this new line's partner
			let m = out.n[i].row + 1;
			while (m < out.o.length && !out.o[m].paired) {
				acc.push(out.o[m++]);
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
const makeDiffHashtable = (src: any) => {
	const ret: Record<string, number[]> = {};
	for (let i = 0; i < src.length; i++) {
		if (jsReservedProperties.test(src[i])) {
			src[i] += '<!-- -->';
		}
		ret[src[i]] ??= [];
		try {
			ret[src[i]]!.push(i);
		} catch {
			diffBugAlert(src[i]);
		}
	}
	return ret;
};
const diff = (o: any, n: any) => {
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
				text: n[nsi[0]!],
				row: osi[0]!,
				paired: true,
			};
			o[osi[0]!] = {
				text: o[osi[0]!],
				row: nsi[0]!,
				paired: true,
			};
		}
	}
	// pass 4: pair matching rows immediately following paired rows (not necessarily unique)
	for (i = 0; i < n.length - 1; i++) {
		if (
			n[i].paired &&
			!n[i + 1].paired &&
			n[i].row + 1 < o.length &&
			!o[n[i].row + 1].paired &&
			n[i + 1] === o[n[i].row + 1]
		) {
			n[i + 1] = {
				text: n[i + 1],
				row: n[i].row + 1,
				paired: true,
			};
			o[n[i].row + 1] = {
				text: o[n[i].row + 1],
				row: i + 1,
				paired: true,
			};
		}
	}
	// pass 5: pair matching rows immediately preceding paired rows (not necessarily unique)
	for (i = n.length - 1; i > 0; i--) {
		if (
			n[i].paired &&
			!n[i - 1].paired &&
			n[i].row > 0 &&
			!o[n[i].row - 1].paired &&
			n[i - 1] === o[n[i].row - 1]
		) {
			n[i - 1] = {
				text: n[i - 1],
				row: n[i].row - 1,
				paired: true,
			};
			o[n[i].row - 1] = {
				text: o[n[i].row - 1],
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
