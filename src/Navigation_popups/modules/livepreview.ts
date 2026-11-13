// 本文件由 Navigation_popups 原版 core.js 的 livepreview.js 段落拆分而来，保留原有实现。
import {pg} from './pg';

// Insta（内嵌 wiki→HTML 转换器）的配置
interface InstaConf {
	baseUrl: string;
	user: {name: string; signature: string};
	wiki: {lang: string; interwiki: string | null; default_thumb_width: number};
	paths: {articles: string; math: string; images: string; images_fallback: string};
	locale: {user: string | undefined; image: string | undefined; category: string | undefined; months: string[]};
}
interface InstaLib {
	conf: InstaConf;
	BLOCK_IMAGE: RegExp;
	dump(from: string | HTMLInputElement | null, to: HTMLElement | null): void;
	convert(wiki: string | string[]): string;
}
// conf 与 BLOCK_IMAGE 由 setupLivePreview() 在运行时填充
const Insta = {} as InstaLib;
const setupLivePreview = () => {
	// options
	Insta.conf = {
		baseUrl: '',
		user: {name: '', signature: ''},
		wiki: {
			lang: pg.wiki.lang,
			interwiki: pg.wiki.interwiki,
			default_thumb_width: 180,
		},
		paths: {
			articles: `${pg.wiki.articlePath}/`,
			// Only used for Insta previews with images. (not in popups)
			math: '/math/',
			images: 'https://tu.zhongwen.wiki/images/qiuwenbaike/zh/',
			images_fallback: '//wm.zhongwen.wiki/commons/',
		},
		locale: {
			user: mw.config.get('wgFormattedNamespaces')[pg.nsUserId!],
			image: mw.config.get('wgFormattedNamespaces')[pg.nsImageId!],
			category: mw.config.get('wgFormattedNamespaces')[pg.nsCategoryId!],
			// shouldn't be used in popup previews, i think
			months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
	};
	// options with default values or backreferences
	Insta.conf.user.name ||= 'Qiuwen Baike contributors';
	Insta.conf.user.signature = `[[${Insta.conf.locale.user}:${Insta.conf.user.name}|${Insta.conf.user.name}]]`;
	// define constants
	Insta.BLOCK_IMAGE = new RegExp(
		`^\\[\\[(?:File|Image|${Insta.conf.locale.image}):.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)`,
		'i'
	);
};
Insta.dump = function (this: InstaLib, from: string | HTMLInputElement | null, to: HTMLElement | null) {
	if (typeof from === 'string') {
		// dump 面向表单输入元素（取 .value），实际无调用点，保留原实现
		from = document.getElementById(`${from}`) as HTMLInputElement | null;
	}
	if (typeof to === 'string') {
		to = document.getElementById(`${to}`);
	}
	to!.innerHTML = this.convert(from!.value);
};
Insta.convert = (wiki: string | string[]) => {
	const ll: string[] = typeof wiki === 'string' ? wiki.replace(/\r/g, '').split(/\n/) : wiki; // lines of wikicode
	let o = ''; // result of passing a regexp to compareLineStringOrReg()
	let p: boolean | number = 0;
	// 空行时字符串分支短路赋 ''，消费点均在正则匹配成功分支内
	let r: string | RegExpMatchArray | null | undefined;
	// some shorthands
	const remain = () => {
		return ll.length;
	};
	const sh = () => {
		return ll.shift();
	}; // shift
	const ps = (s: string) => {
		o += s;
	}; // push

	// similar to C's printf, uses ? as placeholders, ?? to escape question marks
	const f = function f(...args: unknown[]) {
		let i = 1;
		const a = args;
		let fmt = a[0] as string;
		let o = '';
		let c;
		let p;
		for (; i < a.length; i++) {
			if ((p = fmt.indexOf('?')) + 1) {
				// allow character escaping
				c = fmt.charAt(p + 1) === '?' ? 1 : 0;
				i -= c;
				// 原版直接拼接（undefined 字符串化后同形），以 String 归一
				o += fmt.slice(0, Math.max(0, p)) + (c ? '?' : String(a[i]));
				fmt = fmt.slice(p + 1 + c);
			} else {
				break;
			}
		}
		return o + fmt;
	};
	const html_entities = (s: string) => {
		return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
	// Wiki text parsing to html is a nightmare.
	// The below functions deliberately don't escape the ampersand since this would make it more
	// difficult, and we don't absolutely need to for how we need it. This means that any
	// unescaped ampersands in wikitext will remain unescaped and can cause invalid HTML.
	// Browsers should all be able to handle it though. We also escape significant wikimarkup
	// characters to prevent further matching on the processed text.
	const htmlescape_text = (s: string) => {
		return s
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/:/g, '&#58;')
			.replace(/\[/g, '&#91;')
			.replace(/]/g, '&#93;');
	};
	const htmlescape_attr = (s: string) => {
		return htmlescape_text(s).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
	};
	// return the first non matching character position between two strings
	const str_imatch = (a: string, b: string) => {
		let i;
		let l;
		for (i = 0, l = Math.min(a.length, b.length); i < l; i++) {
			if (a.charAt(i) !== b.charAt(i)) {
				break;
			}
		}
		return i;
	};
	// compare current line against a string or regexp
	// if passed a string it will compare only the first string.length characters
	// if passed a regexp the result is stored in r
	const compareLineStringOrReg = (c: string | RegExp) => {
		return typeof c === 'string' ? ll[0] && ll[0].slice(0, c.length) === c : (r = ll[0] && ll[0].match(c));
	};
	const compareLineString = (c: string) => {
		return ll[0] === c;
	}; // compare current line against a string
	const charAtPoint = (p: number) => {
		return ll[0]!.charAt(p);
	}; // return char at pos p
	const endl = (s: string) => {
		ps(s);
		sh();
	};
	const parse_list = () => {
		let prev = '';
		while (remain() && compareLineStringOrReg(/^([#*:;]+)(.*)$/)) {
			// 正则分支恒真后 r 为匹配结果，组 1/2 恒匹配
			const l_match = r!;
			sh();
			const ipos = str_imatch(prev, l_match[1]!);
			// close uncontinued lists
			for (let prevPos = prev.length - 1; prevPos >= ipos; prevPos--) {
				const pi = prev.charAt(prevPos);
				if (pi === '*') {
					ps('</ul>');
				} else if (pi === '#') {
					ps('</ol>');
				} else if (['', '*', '#'].indexOf(l_match[1]!.charAt(prevPos))) {
					// close a dl only if the new item is not a dl item (:, ; or empty)
					ps('</dl>');
				}
			}
			// open new lists
			for (let matchPos = ipos; matchPos < l_match[1]!.length; matchPos++) {
				const li = l_match[1]!.charAt(matchPos);
				if (li === '*') {
					ps('<ul>');
				} else if (li === '#') {
					ps('<ol>');
				} else if (['', '*', '#'].indexOf(prev.charAt(matchPos))) {
					// open a new dl only if the prev item is not a dl item (:, ; or empty)
					ps('<dl>');
				}
			}
			switch (l_match[1]!.at(-1)) {
				case '*':
				case '#':
					ps(`<li>${parse_inline_nowiki(l_match[2]!)}`);
					break;
				case ';': {
					ps('<dt>');
					const dt_match = l_match[2]!.match(/(.*?)(:.*?)$/);
					// handle ;dt :dd format
					if (dt_match) {
						ps(parse_inline_nowiki(dt_match[1]!));
						ll.unshift(dt_match[2]!);
					} else {
						ps(parse_inline_nowiki(l_match[2]!));
					}
					break;
				}
				case ':':
					ps(`<dd>${parse_inline_nowiki(l_match[2]!)}`);
			}
			prev = l_match[2]!;
		}
		// close remaining lists
		for (let i = prev.length - 1; i >= 0; i--) {
			ps(f('</?>', prev.charAt(i) === '*' ? 'ul' : prev.charAt(i) === '#' ? 'ol' : 'dl'));
		}
	};
	const parse_table = () => {
		endl(f('<table>', compareLineStringOrReg(/^{\|( .*)$/) ? (r as RegExpMatchArray)[1]! : ''));
		for (; remain();) {
			if (compareLineStringOrReg('|')) {
				switch (charAtPoint(1)) {
					case '}':
						endl('</table>');
						return;
					case '-':
						endl(f('<tr>', (compareLineStringOrReg(/\|-*(.*)/) as RegExpMatchArray)[1]));
						break;
					default:
						parse_table_data();
				}
			} else if (compareLineStringOrReg('!')) {
				parse_table_data();
			} else {
				sh();
			}
		}
	};
	const parse_table_data = () => {
		let td_line: string[];
		let match_i: number;
		// 1: "|+", '|' or '+'
		// 2: ??
		// 3: attributes ??
		// TODO: finish commenting this regexp
		const td_match = sh()!.match(/^(\|\+|\||!)((?:([^[|]*?)\|(?!\|))?(.*))$/)!;
		if (td_match[1] === '|+') {
			ps('<caption');
		} else {
			ps(`<t${td_match[1] === '|' ? 'd' : 'h'}`);
		}
		if (td_match[3]) {
			// ps(' ' + td_match[3])
			match_i = 4;
		} else {
			match_i = 2;
		}
		ps('>');
		if (td_match[1] === '|+') {
			ps(parse_inline_nowiki(td_match[match_i]!));
		} else {
			// use || or !! as a cell separator depending on context
			// NOTE: when split() is passed a regexp make sure to use non-capturing brackets
			td_line = td_match[match_i]!.split(td_match[1] === '|' ? '||' : /\|\||!!/);
			ps(parse_inline_nowiki(td_line.shift()!));
			while (td_line.length > 0) {
				ll.unshift(td_match[1]! + td_line.pop()!);
			}
		}
		let tc = 0;
		const td: string[] = [];
		while (remain()) {
			td.push(sh()!);
			if (compareLineStringOrReg('|')) {
				if (!tc) {
					break;
				} else if (charAtPoint(1) === '}') {
					// we're at the outer-most level (no nested tables), skip to td parse
					tc--;
				}
			} else if (!tc && compareLineStringOrReg('!')) {
				break;
			} else if (compareLineStringOrReg('{|')) {
				tc++;
			}
		}
		if (td.length > 0) {
			ps(Insta.convert(td));
		}
	};
	const parse_pre = () => {
		ps('<pre>');
		do {
			endl(`${parse_inline_nowiki(ll[0]!.slice(1))}\n`);
		} while (remain() && compareLineStringOrReg(' '));
		ps('</pre>');
	};
	const parse_block_image = () => {
		ps(parse_image(sh()!));
	};
	const parse_image = (str: string) => {
		// get what's in between "[[Image:" and "]]"
		let tag = str.substring(str.indexOf(':') + 1, str.length - 2);
		let _width: string | undefined;
		let attr: string[] = [];
		let _filename: string | undefined;
		let _caption: string | undefined;
		let _thumb: boolean | number = 0;
		let _frame: boolean | number = 0;
		let _center: boolean | number = 0;
		let _align: string | undefined;
		if (/\|/.test(tag)) {
			// manage nested links
			let nesting = 0;
			let last_attr: string | undefined;
			for (let i = tag.length - 1; i > 0; i--) {
				if (tag.charAt(i) === '|' && !nesting) {
					last_attr = tag.slice(i + 1);
					tag = tag.slice(0, Math.max(0, i));
					break;
				} else {
					switch (tag.slice(i - 1, i - 1 + 2)) {
						case ']]':
							nesting++;
							i--;
							break;
						case '[[':
							nesting--;
							i--;
					}
				}
			}
			attr = tag.split(/\s*\|\s*/);
			attr.push(last_attr!);
			_filename = attr.shift();
			let w_match;
			for (; attr.length > 0; attr.shift()) {
				w_match = attr[0]!.match(/^(\d*)(?:[px]*\d*)?px$/);
				if (w_match) {
					[, _width] = w_match;
				} else {
					switch (attr[0]!) {
						case 'thumb':
						case 'thumbnail':
							_thumb = true;
							_frame = true;
							break;
						case 'frame':
							_frame = true;
							break;
						case 'none':
						case 'right':
						case 'left':
							_center = false;
							[_align] = attr;
							break;
						case 'center':
							_center = true;
							_align = 'none';
							break;
						default:
							if (attr.length === 1) {
								[_caption] = attr;
							}
					}
				}
			}
		} else {
			_filename = tag;
		}
		// 保留计算过程以兼容原有行为，但结果不用于渲染
		void [_width, _filename, _caption, _thumb, _frame, _center, _align];
		return '';
	};
	const parse_inline_nowiki = (str: string) => {
		let start: number;
		let lastend = 0;
		let substart = 0;
		let nestlev = 0;
		let open: number;
		let close: number;
		let subloop: boolean;
		let html = '';
		while ((start = str.indexOf('<no'.concat('wiki', '>'), substart)) !== -1) {
			html += parse_inline_wiki(str.substring(lastend, start));
			start += 8;
			substart = start;
			subloop = true;
			do {
				open = str.indexOf('<no'.concat('wiki', '>'), substart);
				close = str.indexOf('</no'.concat('wiki', '>'), substart);
				if (close <= open || open === -1) {
					if (close === -1) {
						return html + html_entities(str.slice(start));
					}
					substart = close + 9;
					if (nestlev) {
						nestlev--;
					} else {
						lastend = substart;
						html += html_entities(str.substring(start, lastend - 9));
						subloop = false;
					}
				} else {
					substart = open + 8;
					nestlev++;
				}
			} while (subloop);
		}
		return html + parse_inline_wiki(str.slice(lastend));
	};
	const parse_inline_images = (str: string) => {
		let start: number;
		let substart = 0;
		let nestlev = 0;
		let loop: boolean;
		let close: number;
		let open: number;
		let wiki: string;
		let html: string;
		while ((start = str.indexOf('[[', substart)) !== -1) {
			if (new RegExp(`^(Image|File|${Insta.conf.locale.image}):`, 'i').test(str.slice(start + 2))) {
				loop = true;
				substart = start;
				do {
					substart += 2;
					close = str.indexOf(']]', substart);
					open = str.indexOf('[[', substart);
					if (close <= open || open === -1) {
						if (close === -1) {
							return str;
						}
						substart = close;
						if (nestlev) {
							nestlev--;
						} else {
							wiki = str.substring(start, close + 2);
							html = parse_image(wiki);
							str = str.replace(wiki, html);
							substart = start + html.length;
							loop = false;
						}
					} else {
						substart = open;
						nestlev++;
					}
				} while (loop);
			} else {
				break;
			}
		}
		return str;
	};
	// the output of this function doesn't respect the FILO structure of HTML
	// but since most browsers can handle it I'll save myself the hassle
	const parse_inline_formatting = (str: string) => {
		let em: boolean | undefined;
		let st: boolean | undefined;
		let i;
		let li = 0;
		let o = '';
		while ((i = str.indexOf("''", li)) + 1) {
			o += str.substring(li, i);
			li = i + 2;
			if (str.charAt(i + 2) === "'") {
				li++;
				st = !st;
				o += st ? '<strong>' : '</strong>';
			} else {
				em = !em;
				o += em ? '<em>' : '</em>';
			}
		}
		return o + str.slice(li);
	};
	const parse_inline_wiki = (str: string) => {
		str = parse_inline_images(str);
		str = parse_inline_formatting(str);
		// math
		str = str.replace(/<math>(.*?)<\/math>/gi, '');
		// Build a Mediawiki-formatted date string
		const now = new Date();
		let minutes: number | string = now.getUTCMinutes();
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		const date = f(
			'?:?, ? ? ? (UTC)',
			now.getUTCHours(),
			minutes,
			now.getUTCDate(),
			(Insta.conf.locale.months as string[])[now.getUTCMonth()],
			now.getUTCFullYear()
		);
		// text formatting
		return (
			str
				// signatures
				.replace(/~{5}(?!~)/g, date)
				.replace(/~{4}(?!~)/g, `${Insta.conf.user.name} ${date}`)
				.replace(/~{3}(?!~)/g, Insta.conf.user.name)
				// [[:Category:...]], [[:Image:...]], etc...
				.replace(
					new RegExp(
						`\\[\\[:((?:${Insta.conf.locale.category}|Image|File|${Insta.conf.locale.image}|${Insta.conf.wiki.interwiki}):[^|]*?)\\]\\](\\w*)`,
						'gi'
					),
					(_$0, $1, $2) => {
						return f(
							"<a href='?'>?</a>",
							Insta.conf.paths.articles + htmlescape_attr($1),
							htmlescape_text($1) + htmlescape_text($2)
						);
					}
				)
				// remove straight category and interwiki tags
				.replace(
					new RegExp(`\\[\\[(?:${Insta.conf.locale.category}|${Insta.conf.wiki.interwiki}):.*?\\]\\]`, 'gi'),
					''
				)
				// [[:Category:...|Links]], [[:Image:...|Links]], etc...
				.replace(
					new RegExp(
						`\\[\\[:((?:${Insta.conf.locale.category}|Image|File|${Insta.conf.locale.image}|${Insta.conf.wiki.interwiki}):.*?)\\|([^\\]]+?)\\]\\](\\w*)`,
						'gi'
					),
					(_$0, $1, $2, $3) => {
						return f(
							"<a href='?'>?</a>",
							Insta.conf.paths.articles + htmlescape_attr($1),
							htmlescape_text($2) + htmlescape_text($3)
						);
					}
				)
				// [[/Relative links]]
				.replace(/\[\[(\/[^|]*?)]]/g, (_$0, $1) => {
					return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($1));
				})
				// [[/Replaced|Relative links]]
				.replace(/\[\[(\/.*?)\|(.+?)]]/g, (_$0, $1, $2) => {
					return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($2));
				})
				// [[Common links]]
				.replace(/\[\[([^[|]*?)]](\w*)/g, (_$0, $1, $2) => {
					return f(
						"<a href='?'>?</a>",
						Insta.conf.paths.articles + htmlescape_attr($1),
						htmlescape_text($1) + htmlescape_text($2)
					);
				})
				// [[Replaced|Links]]
				.replace(/\[\[([^[]*?)\|([^\]]+?)]](\w*)/g, (_$0, $1, $2, $3) => {
					return f(
						"<a href='?'>?</a>",
						Insta.conf.paths.articles + htmlescape_attr($1),
						htmlescape_text($2) + htmlescape_text($3)
					);
				})
				// [[Stripped:Namespace|Namespace]]
				.replace(/\[\[([^\]]*?:)?(.*?)( *\(.*?\))?\|]]/g, (_$0, $1, $2, $3) => {
					return f(
						"<a href='?'>?</a>",
						Insta.conf.paths.articles + htmlescape_attr($1) + htmlescape_attr($2) + htmlescape_attr($3),
						htmlescape_text($2)
					);
				})
				// External links
				.replace(/\[(https?|news|ftp|mailto|gopher|irc):(\/*)([^\]]*?) (.*?)]/g, (_$0, $1, $2, $3, $4) => {
					return f(
						"<a class='external' href='?:?'>?</a>",
						htmlescape_attr($1),
						htmlescape_attr($2) + htmlescape_attr($3),
						htmlescape_text($4)
					);
				})
				.replace(/\[http:\/\/(.*?)]/g, (_$0, $1) => {
					return f("<a class='external' href='http://?'>[#]</a>", htmlescape_attr($1));
				})
				.replace(/\[(news|ftp|mailto|gopher|irc):(\/*)(.*?)]/g, (_$0, $1, $2, $3) => {
					return f(
						"<a class='external' href='?:?'>?:?</a>",
						htmlescape_attr($1),
						htmlescape_attr($2) + htmlescape_attr($3),
						htmlescape_text($1),
						htmlescape_text($2) + htmlescape_text($3)
					);
				})
				.replace(
					/(^| )(https?|news|ftp|mailto|gopher|irc):(\/*)([^ $]*[^ !$,.:;?])/g,
					(_$0, $1, $2, $3, $4) => {
						return f(
							"?<a class='external' href='?:?'>?:?</a>",
							htmlescape_text($1),
							htmlescape_attr($2),
							htmlescape_attr($3) + htmlescape_attr($4),
							htmlescape_text($2),
							htmlescape_text($3) + htmlescape_text($4)
						);
					}
				)
				.replace('__NOTOC__', '')
				.replace('__NOINDEX__', '')
				.replace('__INDEX__', '')
				.replace('__NOEDITSECTION__', '')
		);
	};
	// begin parsing
	for (; remain();) {
		if (compareLineStringOrReg(/^(={1,6})(.*)\1(.*)$/)) {
			p = 0;
			const heading = r as RegExpMatchArray;
			endl(
				f('<h?>?</h?>?', heading[1]!.length, parse_inline_nowiki(heading[2]!), heading[1]!.length, heading[3]!)
			);
		} else if (compareLineStringOrReg(/^[#*:;]/)) {
			p = 0;
			parse_list();
		} else if (compareLineStringOrReg(' ')) {
			p = 0;
			parse_pre();
		} else if (compareLineStringOrReg('{|')) {
			p = 0;
			parse_table();
		} else if (compareLineStringOrReg(/^----+$/)) {
			p = 0;
			endl('<hr>');
		} else if (compareLineStringOrReg(Insta.BLOCK_IMAGE)) {
			p = 0;
			parse_block_image();
		} else {
			// handle paragraphs
			if (compareLineString('')) {
				p = remain() > 1 && ll[1] === '';
				if (p) {
					endl('<p><br>');
				}
			} else {
				if (!p) {
					ps('<p>');
					p = 1;
				}
				ps(`${parse_inline_nowiki(ll[0]!)} `);
			}
			sh();
		}
	}
	return o;
};
const wiki2html = (txt: string, baseurl: string) => {
	Insta.conf.baseUrl = baseurl;
	return Insta.convert(txt);
};

export {Insta, setupLivePreview, wiki2html};
