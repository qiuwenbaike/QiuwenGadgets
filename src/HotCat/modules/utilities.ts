import type {HotCatConfig, HotCatMwConfig} from './types';

interface Make {
	<K extends keyof HTMLElementTagNameMap>(arg: K): HTMLElementTagNameMap[K];
	(arg: string, literal: true): Text;
}

interface SubstituteOptions {
	indicator?: string;
	lbrace?: string;
	rbrace?: string;
}

type SubstituteMap = Record<string, string | ((match: string, key: string) => string) | undefined>;

export const createHotCatUtilities = (conf: HotCatMwConfig, HC: HotCatConfig) => {
	// MediaWiki treats several Unicode whitespace characters as ordinary spaces in titles.
	const wikiTextBlank = String.raw`[\t _\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]+`;
	const wikiTextBlankRE = new RegExp(wikiTextBlank, 'g');
	// Also allow bidi marks around link components, without allowing line breaks.
	const wikiTextBlankOrBidi = String.raw`[\t _\xA0\u1680\u180E\u2000-\u200B\u200E\u200F\u2028-\u202F\u205F\u3000]*`;
	const autoLocalize = (namespaceNumber: number, fallback: string): string => {
		const createRegexpStr = (name?: string): string => {
			if (!name || name.length === 0) {
				return '';
			}
			let regex_name = '';
			for (let i = 0; i < name.length; i++) {
				const initial = name.charAt(i);
				const ll = initial.toLowerCase();
				const ul = initial.toUpperCase();
				regex_name += ll === ul ? initial : `[${ll}${ul}]`;
			}
			return regex_name.replace(/([$()*+.?\\^])/g, String.raw`\$1`).replace(wikiTextBlankRE, wikiTextBlank);
		};
		fallback = fallback.toLowerCase();
		const canonical = (conf.wgFormattedNamespaces[String(namespaceNumber)] ?? '').toLowerCase();
		let regexp = createRegexpStr(canonical);
		if (fallback && canonical !== fallback) {
			regexp += `|${createRegexpStr(fallback)}`;
		}
		for (const cat_name in conf.wgNamespaceIds) {
			if (
				typeof cat_name === 'string' &&
				cat_name.toLowerCase() !== canonical &&
				cat_name.toLowerCase() !== fallback &&
				conf.wgNamespaceIds[cat_name] === namespaceNumber
			) {
				regexp += `|${createRegexpStr(cat_name)}`;
			}
		}
		return regexp;
	};
	HC.category_canonical = conf.wgFormattedNamespaces['14'] ?? '';
	HC.category_regexp = autoLocalize(14, 'category');
	if (conf.wgFormattedNamespaces['10']) {
		HC.template_regexp = autoLocalize(10, 'template');
	}
	const make = ((arg: string, literal?: boolean): Node | null => {
		if (!arg) {
			return null;
		}
		return literal ? document.createTextNode(arg) : document.createElement(arg);
	}) as Make;
	const param = (name: string, uri?: string): string | null => {
		uri ||= document.location.href;
		const re = new RegExp(`[&?]${name}=([^&#]*)`);
		const m = re.exec(uri);
		if (m && m.length > 1) {
			return decodeURIComponent(m[1] as string);
		}
		return null;
	};
	const title = (href?: string | null): string | null => {
		if (!href) {
			return null;
		}
		const script = `${conf.wgScript}?`;
		if (
			href.indexOf(script) === 0 ||
			href.indexOf(conf.wgServer + script) === 0 ||
			(conf.wgServer.slice(0, 2) === '//' &&
				href.indexOf(document.location.protocol + conf.wgServer + script) === 0)
		) {
			return param('title', href);
		}
		let prefix = conf.wgArticlePath.replace('$1', '');
		if (href.indexOf(prefix)) {
			prefix = conf.wgServer + prefix;
		}
		if (href.indexOf(prefix) && prefix.slice(0, 2) === '//') {
			prefix = document.location.protocol + prefix;
		}
		if (href.indexOf(prefix) === 0) {
			return decodeURIComponent(href.slice(prefix.length));
		}
		return null;
	};
	const hasClass = ({className}: {className: string}, name: string): boolean => {
		return ` ${className} `.includes(` ${name} `);
	};
	const setStyleProperty = (element: HTMLElement, property: string, value: string): void => {
		(element.style as unknown as Record<string, string>)[property] = value;
	};
	const capitalize = (str?: string | null): string => {
		if (!str || str.length === 0) {
			return '';
		}
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};
	const wikiPagePath = (pageName: string): string => {
		return conf.wgArticlePath.replace('$1', encodeURIComponent(pageName).replace(/%3A/g, ':').replace(/%2F/g, '/'));
	};
	const escapeRE = (str: string): string => {
		return str.replace(/([$()*+.?[\\\]^])/g, String.raw`\$1`);
	};
	const substituteFactory = (options?: SubstituteOptions): ((str: string, map?: SubstituteMap) => string) => {
		options ||= {};
		const lead = options.indicator || '$';
		const indicator = escapeRE(lead);
		const lbrace = escapeRE(options.lbrace || '{');
		const rbrace = escapeRE(options.rbrace || '}');
		const re = new RegExp(
			// $$, $0/$1, ${key}, and $key
			`(?:${indicator}(${indicator}))|` +
				`(?:${indicator}(\\d+))|` +
				`(?:${indicator}(?:${lbrace}([^${lbrace}${rbrace}]+)${rbrace}))|` +
				`(?:${indicator}(?!(?:[${indicator}${lbrace}]|\\d))(\\S+?)\\b)`,
			'g'
		);
		return (str: string, map?: SubstituteMap): string => {
			if (!map) {
				return str;
			}
			return str.replace(re, (match: string, prefix: string, idx: string, key: string, alpha: string): string => {
				if (prefix === lead) {
					return lead;
				}
				const k = alpha || key || idx;
				const replacement = typeof map[k] === 'function' ? map[k](match, k) : map[k];
				return typeof replacement === 'string' ? replacement : replacement || match;
			});
		};
	};
	const replaceShortcuts = ((): ((str: string, map?: Record<string, string> | null) => string) => {
		const replaceHash = substituteFactory({
			indicator: '#',
			lbrace: '[',
			rbrace: ']',
		});
		return (str: string, map?: Record<string, string> | null): string => {
			const s = replaceHash(str, map ?? undefined);
			return HC.capitalizePageNames ? capitalize(s) : s;
		};
	})();
	return {
		wikiTextBlank,
		wikiTextBlankRE,
		wikiTextBlankOrBidi,
		make,
		param,
		title,
		hasClass,
		setStyleProperty,
		capitalize,
		wikiPagePath,
		escapeRE,
		replaceShortcuts,
	};
};
