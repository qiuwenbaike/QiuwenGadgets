// 本文件由 Navigation_popups 原版 core.js 的 tools.js 段落拆分而来，保留原有实现。

const getJsObj = (json: any) => {
	try {
		const json_ret = JSON.parse(json);
		if (json_ret.warnings) {
			for (let w = 0; w < json_ret.warnings.length; w++) {
				if (json_ret.warnings[w]['*']) {
					log(json_ret.warnings[w]['*']);
				} else {
					log(json_ret.warnings[w].warnings);
				}
			}
		} else if (json_ret.error) {
			errlog(`${json_ret.error.code}: ${json_ret.error.info}`);
		}
		return json_ret;
	} catch {
		errlog(`Something went wrong with getJsObj, json=${json}`);
		return 1;
	}
};
const anyChild = (obj: any) => {
	for (const p in obj) {
		if (!Object.hasOwn(obj, p)) {
			continue;
		}
		return obj[p];
	}
	return null;
};
const upcaseFirst = (str: string): string | undefined => {
	if (typeof str !== 'string' || str === '') {
		return;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
};
const findInArray = (arr: any, foo: any) => {
	if (!arr || arr.length === 0) {
		return -1;
	}
	const len = arr.length;
	for (let i = 0; i < len; ++i) {
		if (arr[i] === foo) {
			return i;
		}
	}
	return -1;
};
const nextOne = (array: any, value: any) => {
	// NB if the array has two consecutive entries equal
	//	then this will loop on successive calls
	const i = findInArray(array, value);
	if (i < 0) {
		return null;
	}
	return array[i + 1];
};
const literalizeRegex = (str: string) => {
	return mw.util.escapeRegExp(str);
};
String.prototype.entify = function (this: string) {
	// let shy = '&shy;';
	return this.split('&')
		.join('&amp;')
		.split('<')
		.join('&lt;')
		.split('>')
		.join('&gt;' /* +shy */)
		.split('"')
		.join('&quot;');
};
const removeNulls = (val: any) => {
	return val !== null;
};
const joinPath = (list: any) => {
	return list.filter(removeNulls).join('/');
};
const simplePrintf = (str: any, subs: any) => {
	if (!str || !subs) {
		return str;
	}
	const ret = [];
	const s = str.split(/(%s|\$\d+)/);
	let i = 0;
	do {
		ret.push(s.shift());
		if (s.length === 0) {
			break;
		}
		const cmd = s.shift();
		if (cmd === '%s') {
			if (i < subs.length) {
				ret.push(subs[i]);
			} else {
				ret.push(cmd);
			}
			++i;
		} else {
			const j = Number.parseInt(cmd.replace('$', ''), 10) - 1;
			if (j > -1 && j < subs.length) {
				ret.push(subs[j]);
			} else {
				ret.push(cmd);
			}
		}
	} while (s.length > 0);
	return ret.join('');
};
const isString = (x: any): x is string => {
	return typeof x === 'string' || x instanceof String;
};
const isNumber = (x: any) => {
	return typeof x === 'number' || x instanceof Number;
};
const isRegExp = (x: any): x is RegExp => {
	return x instanceof RegExp;
};
const isArray = (x: any) => {
	return Array.isArray(x);
};
const isObject = (x: any) => {
	return x instanceof Object;
};
const isFunction = (x: any) => {
	return !isRegExp(x) && (typeof x === 'function' || x instanceof Function);
};
const repeatString = (s: string, mult: any) => {
	let ret = '';
	for (let i = 0; i < mult; ++i) {
		ret += s;
	}
	return ret;
};
const zeroFill = (s: any, min: any) => {
	min ||= 2;
	const t = s.toString();
	return repeatString('0', min - t.length) + t;
};
const map = (f: any, o: any): any => {
	if (isArray(o)) {
		return map_array(f, o);
	}
	return map_object(f, o);
};
const map_array = (f: any, o: any) => {
	const ret = [];
	for (const element of o) {
		ret.push(f(element));
	}
	return ret;
};
const map_object = (f: any, o: any) => {
	const ret: any = {};
	for (const i in o) {
		if (!Object.hasOwn(o, i)) {
			continue;
		}
		ret[o] = f(o[i]);
	}
	return ret;
};
export {
	anyChild,
	findInArray,
	getJsObj,
	isArray,
	isFunction,
	isNumber,
	isObject,
	isRegExp,
	isString,
	joinPath,
	literalizeRegex,
	map,
	map_array,
	map_object,
	nextOne,
	removeNulls,
	repeatString,
	simplePrintf,
	upcaseFirst,
	zeroFill,
};
