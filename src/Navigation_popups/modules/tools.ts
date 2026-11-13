// 本文件由 Navigation_popups 原版 core.js 的 tools.js 段落拆分而来，保留原有实现。

const getJsObj = (json: string) => {
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
// T[keyof T] 即“对象属性值的类型”：T 为 any 时结果仍为 any（与原版行为一致），
// 传入 Record<string, X> 时精确推断为 X——无需 any 默认类型参数即可兼容两类调用方
const anyChild = <T extends object>(obj: T): T[keyof T] | null => {
	const record = obj as unknown as Record<string, T[keyof T]>;
	for (const p in record) {
		if (!Object.hasOwn(record, p)) {
			continue;
		}
		return record[p]!; // Object.hasOwn 已确认属性存在
	}
	return null;
};
const upcaseFirst = (str: string): string | undefined => {
	if (typeof str !== 'string' || str === '') {
		return;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
};
const findInArray = (arr: unknown[], foo: unknown): number => {
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
const nextOne = (array: unknown[], value: unknown) => {
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
const entify = (str: string): string => {
	// let shy = '&shy;';
	return str
		.split('&')
		.join('&amp;')
		.split('<')
		.join('&lt;')
		.split('>')
		.join('&gt;' /* +shy */)
		.split('"')
		.join('&quot;');
};
const removeNulls = (val: unknown) => {
	return val !== null;
};
const joinPath = (list: unknown[]) => {
	return list.filter(removeNulls).join('/');
};
const simplePrintf = (str: string, subs: unknown[]) => {
	if (!str || !subs) {
		return str;
	}
	const ret: unknown[] = [];
	const s = str.split(/(%s|\$\d+)/);
	let i = 0;
	do {
		ret.push(s.shift());
		if (s.length === 0) {
			break;
		}
		const cmd = s.shift()!; // 上一分支已确认 s 非空
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
const isString = (x: unknown): x is string => {
	return typeof x === 'string' || x instanceof String;
};
const isNumber = (x: unknown) => {
	return typeof x === 'number' || x instanceof Number;
};
const isRegExp = (x: unknown): x is RegExp => {
	return x instanceof RegExp;
};
const isArray = (x: unknown): x is unknown[] => {
	return Array.isArray(x);
};
const isObject = (x: unknown) => {
	return x instanceof Object;
};
const isFunction = (x: unknown) => {
	return !isRegExp(x) && (typeof x === 'function' || x instanceof Function);
};
const repeatString = (s: string, mult: number) => {
	let ret = '';
	for (let i = 0; i < mult; ++i) {
		ret += s;
	}
	return ret;
};
const zeroFill = (s: number | string, min?: number) => {
	min ||= 2;
	const t = s.toString();
	return repeatString('0', min - t.length) + t;
};
// 重载而非联合参数：数组字面量实参会对 Record<string, T> 产生错误推断
//（数组的方法属性如 join 会成为 T 的推断候选），重载保证数组实参走第一签名
function map<T, R>(f: (value: T) => R, o: T[]): R[];
function map<T, R>(f: (value: T) => R, o: Record<string, T>): Record<string, R>;
function map<T, R>(f: (value: T) => R, o: T[] | Record<string, T>): R[] | Record<string, R> {
	if (isArray(o)) {
		return map_array(f, o);
	}
	return map_object(f, o);
}
const map_array = <T, R>(f: (value: T) => R, o: T[]): R[] => {
	const ret: R[] = [];
	for (const element of o) {
		ret.push(f(element));
	}
	return ret;
};
const map_object = <T, R>(f: (value: T) => R, o: Record<string, T>): Record<string, R> => {
	const ret: Record<string, R> = {};
	for (const i in o) {
		if (!Object.hasOwn(o, i)) {
			continue;
		}
		// 原版 core.js 为 ret[i] = f(o[i])，迁移时误写为 ret[o]，此处修正
		ret[i] = f(o[i]!);
	}
	return ret;
};
export {
	anyChild,
	entify,
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
