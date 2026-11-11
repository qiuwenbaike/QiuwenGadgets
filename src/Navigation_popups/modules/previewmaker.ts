// 本文件由 Navigation_popups 原版 core.js 的 previewmaker.js 段落拆分而来，保留原有实现。
import {Insta, wiki2html} from './livepreview';
import {isRegExp, isString, literalizeRegex} from './tools';
import {setPopupHTML, setPopupTipsAndHTML} from './htmloutput';
import {Title} from './titles';
import {getValueOf} from './options';
import {pg} from './pg';
import {popupString} from './strings';

class Previewmaker {
	originalData: string;
	baseUrl: string;
	owner: any;
	maxCharacters: any;
	maxSentences: any;
	fullLength?: number;
	data!: string;
	html!: string;
	constructor(wikiText: string, baseUrl?: any, owner?: any) {
		/** The wikitext which is manipulated to generate the preview. */
		this.originalData = wikiText;
		this.baseUrl = baseUrl;
		this.owner = owner;
		this.maxCharacters = getValueOf('popupMaxPreviewCharacters');
		this.maxSentences = getValueOf('popupMaxPreviewSentences');
		this.setData();
	}
	setData() {
		const maxSize = Math.max(1e4, 2 * this.maxCharacters);
		this.data = this.originalData.slice(0, Math.max(0, maxSize));
	}
	/**
	 * Remove HTML comments
	 *
	 * @private
	 */
	killComments() {
		// this also kills one trailing newline, eg [[diamyo]]
		this.data = this.data.replace(/^<!--[^$]*?-->\n|\n<!--[^$]*?-->(?=\n)|<!--[^$]*?-->/g, '');
	}
	/**
	 * @private
	 */
	killDivs() {
		// say goodbye, divs (can be nested, so use * not *?)
		this.data = this.data.replace(/< *div[^>]* *>[\S\s]*?< *\/ *div *>/gi, '');
	}
	/**
	 * @private
	 */
	killGalleries() {
		this.data = this.data.replace(/< *gallery[^>]* *>[\S\s]*?< *\/ *gallery *>/gi, '');
	}
	/**
	 * @param {Object} opening
	 * @param {Object} closing
	 * @param {Object} subopening
	 * @param {Object} subclosing
	 * @param {Object} repl
	 * @private
	 */
	kill(opening: any, closing: any, subopening?: any, subclosing?: any, repl?: any) {
		let oldk = this.data;
		let k = Previewmaker.killStuff(this.data, opening, closing, subopening, subclosing, repl) as string;
		while (k.length < oldk.length) {
			oldk = k;
			k = Previewmaker.killStuff(k, opening, closing, subopening, subclosing, repl) as string;
		}
		this.data = k;
	}
	/**
	 * @param {Object} txt
	 * @param {Object} opening
	 * @param {Object} closing
	 * @param {Object} subopening
	 * @param {Object} subclosing
	 * @param {Object} repl
	 * @private
	 */
	static killStuff(txt: string, opening: any, closing: any, subopening: any, subclosing: any, repl: any) {
		const op = Previewmaker.makeRegexp(opening);
		const cl = Previewmaker.makeRegexp(closing, '^');
		const sb = subopening ? Previewmaker.makeRegexp(subopening, '^') : null;
		const sc = subclosing ? Previewmaker.makeRegexp(subclosing, '^') : cl;
		if (!op || !cl) {
			void mw.notify('Navigation Popups error: op or cl is null! something is wrong.', {
				tag: 'popups',
				type: 'error',
			});
			return;
		}
		if (!op.test(txt)) {
			return txt;
		}
		let ret = '';
		const opResult = op.exec(txt)!;
		ret = txt.slice(0, Math.max(0, opResult.index));
		txt = txt.slice(Math.max(0, opResult.index + opResult[0].length));
		let depth = 1;
		while (txt.length > 0) {
			let removal = 0;
			if (depth === 1 && cl.test(txt)) {
				depth--;
				removal = cl.exec(txt)![0].length;
			} else if (depth > 1 && sc!.test(txt)) {
				depth--;
				removal = sc!.exec(txt)![0].length;
			} else if (sb && sb.test(txt)) {
				depth++;
				removal = sb.exec(txt)![0].length;
			}
			removal ||= 1;
			txt = txt.slice(Math.max(0, removal));
			if (depth === 0) {
				break;
			}
		}
		return ret + (repl || '') + txt;
	}
	/**
	 * @param {string|RegExp} x
	 * @param {string|RegExp} prefix
	 * @param {string|RegExp} suffix
	 * @private
	 */
	static makeRegexp(x: any, prefix?: any, suffix?: any) {
		prefix ||= '';
		suffix ||= '';
		let reStr = '';
		let flags = '';
		if (isString(x)) {
			reStr = prefix + literalizeRegex(x) + suffix;
		} else if (isRegExp(x)) {
			let s = x.toString().slice(1);
			const sp = s.split('/');
			flags = sp.at(-1) as any;
			sp[sp.length - 1] = '';
			s = sp.join('/');
			s = s.slice(0, Math.max(0, s.length - 1));
			reStr = prefix + s + suffix;
		} else {
			log('makeRegexp failed');
		}
		log(`makeRegexp: got reStr=${reStr}, flags=${flags}`);
		return new RegExp(reStr, flags);
	}
	/**
	 * @private
	 */
	killBoxTemplates() {
		// taxobox removal... in fact, there's a saudiprincebox_begin, so let's be more general
		// also, have float_begin, ... float_end
		this.kill(/{{[^\s{|}]*?(float|box)[ _](begin|start)/i, /}}\s*/, '{{');
		// infoboxes etc
		// from Zyxw: kill frames too
		this.kill(/{{[^\s{|}]*?(infobox|elementbox|frame)[ _]/i, /}}\s*/, '{{');
	}
	/**
	 * @private
	 */
	killTemplates() {
		this.kill('{{', '}}', '{', '}', ' ');
	}
	/**
	 * @private
	 */
	killTables() {
		// tables are bad, too
		// this can be slow, but it's an inprovement over a browser hang
		// torture test: [[Comparison_of_Intel_Central_Processing_Units]]
		this.kill('{|', /\|}\s*/, '{|');
		this.kill(/<table.*?>/i, /<\/table.*?>/i, /<table.*?>/i);
		// remove lines starting with a pipe for the hell of it (?)
		this.data = this.data.replace(/^\|.*$/gm, '');
	}
	/**
	 * @private
	 */
	killImages() {
		const forbiddenNamespaceAliases = [];
		for (const [localizedNamespaceLc, namespaceId] of Object.entries(mw.config.get('wgNamespaceIds'))) {
			if (namespaceId !== pg.nsImageId && namespaceId !== pg.nsCategoryId) {
				return;
			}
			forbiddenNamespaceAliases.push(localizedNamespaceLc.split(' ').join('[ _]')); // todo: escape regexp fragments!
		}
		// images and categories are a nono
		this.kill(new RegExp(`[[][[]\\s*(${forbiddenNamespaceAliases.join('|')})\\s*:`, 'i'), /]]\s*/, '[', ']');
	}
	/**
	 * @private
	 */
	killHTML() {
		// kill <ref ...>...</ref>
		this.kill(/<ref\b[^/>]*?>/i, /<\/ref>/i);
		// let's also delete entire lines starting with <. it's worth a try.
		this.data = this.data.replace(/(^|\n) *<.*/g, '\n');
		// and those pesky html tags, but not nowiki or blockquote tags
		const splitted = this.data.split(/(<[\W\w]*?(?:>|$|(?=<)))/);
		const len = splitted.length;
		for (let i = 1; i < len; i += 2) {
			switch (splitted[i]) {
				case '<no'.concat('wiki', '>'):
				case '</no'.concat('wiki', '>'):
				case '<block'.concat('quote', '>'):
				case '</block'.concat('quote', '>'):
					break;
				default:
					splitted[i] = '';
			}
		}
		this.data = splitted.join('');
	}
	/**
	 * @private
	 */
	killChunks() {
		// heuristics alert
		// chunks of italic text? you crazy, man?
		const italicChunkRegex = /((^|\n)\s*:*\s*''[^']([^']|'''|'[^']){20}(.|\n[^\n])*''[\s!.?]*\n)+/g;
		// keep stuff separated, though, so stick in \n (fixes [[Union Jack]]?
		this.data = this.data.replace(italicChunkRegex, '\n');
	}
	/**
	 * @private
	 */
	mopup() {
		// we simply *can't* be doing with horizontal rules right now
		this.data = this.data.replace(/^-{4,}/gm, '');
		// no indented lines
		this.data = this.data.replace(/(^|\n) *:[^\n]*/g, '');
		// replace __TOC__, __NOTOC__ and whatever else there is
		// this'll probably do
		this.data = this.data.replace(/^__[_a-z]*__ *$/gim, '');
	}
	/**
	 * @private
	 */
	firstBit() {
		// dont't be givin' me no subsequent paragraphs, you hear me?
		// / first we "normalize" section headings, removing whitespace after, adding before
		let d: any = this.data;
		if (getValueOf('popupPreviewCutHeadings')) {
			this.data = this.data.replace(/\s*(==+[^=]*==+)\s*/g, '\n\n$1 ');
			// / then we want to get rid of paragraph breaks whose text ends badly
			this.data = this.data.replace(/([:;]) *\n{2,}/g, '$1\n');
			this.data = this.data.replace(/^\s*/, '');
			const stuff = /^([^\n]|\n\S)*/.exec(this.data);
			if (stuff) {
				[d] = stuff as [string];
			}
			if (!getValueOf('popupPreviewFirstParOnly')) {
				d = this.data;
			}
			// / now put \n\n after sections so that bullets and numbered lists work
			d = d.replace(/(==+[^=]*==+)\s*/g, '$1\n\n');
		}
		// Split sentences. Superfluous sentences are RIGHT OUT.
		// note: exactly 1 set of parens here needed to make the slice work
		d = d.split(/([!.?]+["']*\s)/g);
		// leading space is bad, mmkay?
		d[0] = d[0]!.replace(/^\s*/, '');
		const notSentenceEnds = /([^.][a-z]\. *[a-z]|etc|sic|dr|mr|mrs|ms|st|no|op|cit|\[[^\]]*|\s[a-z])$/i;
		d = this.fixSentenceEnds(d, notSentenceEnds);
		this.fullLength = d.join('').length;
		let n = this.maxSentences;
		let dd: any = Previewmaker.firstSentences(d, n);
		do {
			dd = Previewmaker.firstSentences(d, n);
			--n;
		} while (dd.length > this.maxCharacters && n !== 0);
		this.data = dd;
	}
	/**
	 * @param {string} strs
	 * @param {RegExp} reg
	 * @private
	 */
	fixSentenceEnds(strs: any, reg: any): any[] {
		// take an array of strings, strs
		// join strs[i] to strs[i+1] & strs[i+2] if strs[i] matches regex reg
		for (let i = 0; i < strs.length - 2; ++i) {
			if (reg.test(strs[i])) {
				const a = [];
				for (let j = 0; j < strs.length; ++j) {
					if (j < i) {
						a[j] = strs[j];
					}
					if (j === i) {
						a[i] = strs[i] + strs[i + 1] + strs[i + 2];
					}
					if (j > i + 2) {
						a[j - 2] = strs[j];
					}
				}
				return this.fixSentenceEnds(a, reg);
			}
		}
		return strs;
	}
	/**
	 * @param {string[]} strs
	 * @param {number} howmany
	 * @private
	 */
	static firstSentences(strs: any, howmany: any) {
		const t = strs.slice(0, 2 * howmany);
		return t.join('');
	}
	/**
	 * @private
	 */
	killBadWhitespace() {
		// also cleans up isolated ''''
		this.data = this.data.replace(/^ *'+ *$/gm, '');
	}
	/**
	 * Runs the various methods to generate the preview.
	 * The preview is stored in the <code>html</html> field.
	 *
	 * @private
	 */
	makePreview() {
		if (this.owner.article.namespaceId() !== pg.nsTemplateId && this.owner.article.namespaceId() !== pg.nsImageId) {
			this.killComments();
			this.killDivs();
			this.killGalleries();
			this.killBoxTemplates();
			if (getValueOf('popupPreviewKillTemplates')) {
				this.killTemplates();
			} else {
				this.killMultilineTemplates();
			}
			this.killTables();
			this.killImages();
			this.killHTML();
			this.killChunks();
			this.mopup();
			this.firstBit();
			this.killBadWhitespace();
		} else {
			this.killHTML();
		}
		this.html = wiki2html(this.data, this.baseUrl); // needs livepreview
		this.fixHTML();
		this.stripLongTemplates();
	}
	/**
	 * @param {string} data
	 * @private
	 */
	static esWiki2HtmlPart(data: any) {
		const reLinks = /(?:\[\[([^\]|]*)(?:\|([^\]|]*))*]]([a-z]*))/gi; // match a wikilink
		reLinks.lastIndex = 0; // reset regex
		let match;
		let result = '';
		let postfixIndex = 0;
		while ((match = reLinks.exec(data)) !== null) {
			// match all wikilinks
			// FIXME: the way that link is built here isn't perfect. It is clickable, but popups preview won't recognize it in some cases.
			result += `${pg.escapeQuotesHTML(data.substring(postfixIndex, match.index))}<a href="${
				Insta.conf.paths.articles
			}${pg.escapeQuotesHTML(match[1]!)}">${pg.escapeQuotesHTML(((match[2] ?? match[1]) as any) + match[3]!)}</a>`;
			postfixIndex = reLinks.lastIndex;
		}
		// append the rest
		result += pg.escapeQuotesHTML(data.slice(Math.max(0, postfixIndex)));
		return result;
	}
	editSummaryPreview() {
		const reAes = /\/\* *(.*?) *\*\//g; // match the first section marker
		reAes.lastIndex = 0; // reset regex
		const match = reAes.exec(this.data);
		if (match) {
			// we have a section link. Split it, process it, combine it.
			const prefix = this.data.slice(0, Math.max(0, match.index - 1));
			const [, section] = match;
			const postfix = this.data.slice(Math.max(0, reAes.lastIndex));
			let start = "<span class='autocomment'>";
			let end = '</span>';
			if (prefix.length > 0) {
				start = `${Previewmaker.esWiki2HtmlPart(prefix)} ${start}- `;
			}
			if (postfix.length > 0) {
				end = `: ${end}${Previewmaker.esWiki2HtmlPart(postfix)}`;
			}
			const t = new Title().fromURL(this.baseUrl);
			t.anchorFromUtf(section!);
			const sectionLink = `${
				Insta.conf.paths.articles + pg.escapeQuotesHTML(t.toString(true))
			}#${pg.escapeQuotesHTML(t.anchor)}`;
			return `${start}<a href="${sectionLink}">&rarr;</a> ${pg.escapeQuotesHTML(section!)}${end}`;
		}
		// else there's no section link, htmlify the whole thing.
		return Previewmaker.esWiki2HtmlPart(this.data);
	}
	/**
	 * Works around livepreview bugs.
	 *
	 * @private
	 */
	fixHTML() {
		if (!this.html) {
			return;
		}
		let ret = this.html;
		// fix question marks in wiki links
		// maybe this'll break some stuff :-(
		ret = ret.replace(new RegExp(`(<a href="${pg.wiki.articlePath}/[^"]*)[?](.*?")`, 'g'), '$1%3F$2');
		ret = ret.replace(new RegExp(`(<a href='${pg.wiki.articlePath}/[^']*)[?](.*?')`, 'g'), '$1%3F$2');
		// FIXME fix up % too
		this.html = ret;
	}
	/**
	 * Generates the preview and displays it in the current popup.
	 * Does nothing if the generated preview is invalid or consists of whitespace only.
	 * Also activates wikilinks in the preview for subpopups if the popupSubpopups option is true.
	 */
	showPreview() {
		this.makePreview();
		if (typeof this.html !== typeof '') {
			return;
		}
		if (/^\s*$/.test(this.html)) {
			return;
		}
		setPopupHTML('<hr>', 'popupPrePreviewSep', this.owner.idNumber);
		setPopupTipsAndHTML(this.html, 'popupPreview', this.owner.idNumber, {
			owner: this.owner,
		});
		const more = this.fullLength! > this.data.length ? this.moreLink() : '';
		setPopupHTML(more, 'popupPreviewMore', this.owner.idNumber);
	}
	/**
	 * @private
	 */
	moreLink() {
		const a = document.createElement('a');
		a.className = 'popupMoreLink';
		a.innerHTML = popupString('more...');
		const self = this;
		a.onclick = () => {
			self.maxCharacters += 2000;
			self.maxSentences += 20;
			self.setData();
			self.showPreview();
		};
		return a;
	}
	/**
	 * @private
	 */
	stripLongTemplates() {
		// operates on the HTML!
		this.html = this.html.replace(/^.{0,1000}{{[^}]*?(<(p|br)( \/)?>\s*){2,}([^{}]*?}})?/gi, '');
		this.html = this.html.split('\n').join(' '); // workaround for <pre> templates
		this.html = this.html.replace(/{{[^}]*<pre>[^}]*}}/gi, '');
	}
	/**
	 * @private
	 */
	killMultilineTemplates() {
		this.kill('{{{', '}}}');
		this.kill(/\s*{{[^{}]*\n/, '}}', '{{');
	}
}

export {Previewmaker};
