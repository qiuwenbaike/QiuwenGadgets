// 本文件由 Navigation_popups 原版 core.js 的 main.js 段落拆分而来，保留原有实现。
import type {Pg} from './types';

// 全局状态对象（原 main.js）
const pg: Pg = {
	api: {} as import('./types').PgApi,
	re: {} as import('./types').PgRe,
	ns: {},
	string: {} as import('./types').PgString,
	wiki: {} as import('./types').PgWiki,
	user: {} as import('./types').PgUser,
	misc: {} as import('./types').PgMisc,
	option: {} as import('./types').PgOption,
	optionDefault: {} as import('./types').PgOptionDefault,
	flag: {} as import('./types').PgFlag,
	cache: {} as import('./types').PgCache,
	structures: {} as import('./types').PgStructures,
	timer: {} as import('./types').PgTimer,
	counter: {} as import('./types').PgCounter,
	current: {} as import('./types').PgCurrent,
	fn: {} as import('./types').PgFn,
	escapeQuotesHTML: (text: string) => {
		return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	},
	unescapeQuotesHTML: (html: string) => {
		// From {@link https://stackoverflow.com/a/7394787}
		// This seems to be implemented correctly on all major browsers now, so we
		// don't have to make our own function.
		const txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	},
	endoflist: null,
};

export {pg};
