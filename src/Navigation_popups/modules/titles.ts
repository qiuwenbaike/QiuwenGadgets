// 本文件由 Navigation_popups 原版 core.js 的 titles.js 段落拆分而来，保留原有实现。
import type {WikiParams} from './types';
import {getValueOf} from './options';
import {pg} from './pg';

class Stringwrapper {
	// null 表示“未设置/已失效”（fromURL 失败、toTalkPage 转换失败等），其余为标题字符串
	value: string | null = null;
	/**
	 * Wrapper for this.toString().indexOf()
	 *
	 * @param {string} x
	 * @type integer
	 */
	indexOf(x: string): number {
		return this.toString().indexOf(x);
	}
	/**
	 * Returns this.value.
	 *
	 * @type String
	 */
	toString(): string {
		// 调用方保证 setUtf 已执行（否则原版行为即为返回 null）
		return this.value as string;
	}
	/**
	 * Wrapper for {@source String#parenSplit} applied to this.toString()
	 *
	 * @param {string | RegExp} x
	 * @type Array
	 */
	split(x: string | RegExp): string[] {
		return this.toString().split(x);
	}
	/**
	 * Wrapper for this.toString().substring()
	 *
	 * @param {number} x
	 * @param {number} y (optional)
	 * @type String
	 */
	substring(x: number, y?: number): string {
		if (y === undefined) {
			return this.toString().slice(Math.max(0, x));
		}
		return this.toString().substring(x, y);
	}
	/**
	 * Wrapper for this.toString().replace()
	 *
	 * @param {string | RegExp} x
	 * @param {string} y
	 * @type String
	 */
	replace(x: string | RegExp, y: string): string {
		return this.toString().replace(x, y);
	}
}
class Title extends Stringwrapper {
	anchor: string;
	ns?: null;
	oldid?: string | null;
	// 目前全仓库无写入点，读取点（diffpreview 的 fromtitle 分支）恒为 undefined
	title?: string | undefined;
	static fromURL = (h: unknown) => {
		return new Title().fromURL(h);
	};
	static fromAnchor = (a: HTMLAnchorElement) => {
		return new Title().fromAnchor(a);
	};
	static fromWikiText = (txt: string) => {
		return new Title().fromWikiText(txt);
	};
	constructor(val?: string | Title | null) {
		super();
		/**
		 * The canonical article title. This must be in UTF-8 with no
		 * entities, escaping or nasties. Also, underscores should be
		 * replaced with spaces.
		 *
		 * @type String
		 * @private
		 */
		this.value = null;
		/**
		 * The canonical form of the anchor. This should be exactly as
		 * it appears in the URL, i.e. with the .C3.0A bits in.
		 *
		 * @type String
		 */
		this.anchor = '';
		this.setUtf(val);
	}
	/**
	 * Returns the canonical representation of the article title, optionally without anchor.
	 *
	 * @param {boolean} omitAnchor
	 * @fixme Decide specs for anchor
	 * @return String The article title and the anchor.
	 */
	override toString(omitAnchor?: boolean): string {
		return this.value + (!omitAnchor && this.anchor ? `#${this.anchorString()}` : '');
	}
	anchorString() {
		if (!this.anchor) {
			return '';
		}
		const split = this.anchor.split(/((?:\.[\dA-F]{2})+)/);
		const len = split.length;
		let value = '';
		for (let j = 1; j < len; j += 2) {
			// FIXME s/decodeURI/decodeURIComponent/g ?
			value = split[j]!.split('.').join('%');
			try {
				value = decodeURIComponent(value);
			} catch {
				// cannot decode
			}
			split[j] = value.split('_').join(' ');
		}
		return split.join('');
	}
	urlAnchor() {
		const split = this.anchor.split('/((?:[%][0-9A-F]{2})+)/');
		const len = split.length;
		for (let j = 1; j < len; j += 2) {
			split[j] = split[j]!.split('%').join('.');
		}
		return split.join('');
	}
	anchorFromUtf(str: string) {
		this.anchor = encodeURIComponent(str.split(' ').join('_'))
			.split('%3A')
			.join(':')
			.split("'")
			.join('%27')
			.split('%')
			.join('.');
	}
	fromURL(h: unknown) {
		if (typeof h !== 'string') {
			this.value = null;
			return this;
		}
		// NOTE: fix up & in the query string, just in case.
		const splitted = h.split('?');
		splitted[0] = splitted[0]!.split('&').join('%26');
		const url = splitted.join('?');
		const contribs = pg.re.contribs.exec(url);
		if (contribs) {
			if (contribs[1] === 'title=') {
				contribs[3] = contribs[3]!.split('+').join(' ');
			}
			const u = new Title(contribs[3]);
			this.setUtf(
				Title.decodeNasties(`${mw.config.get('wgFormattedNamespaces')[pg.nsUserId!]}:${u.stripNamespace()}`)
			);
			return this;
		}
		const email = pg.re.email.exec(url);
		if (email) {
			this.setUtf(
				Title.decodeNasties(
					`${mw.config.get('wgFormattedNamespaces')[pg.nsUserId!]}:${new Title(email[3]!).stripNamespace()}`
				)
			);
			return this;
		}
		const backlinks = pg.re.backlinks.exec(url);
		if (backlinks) {
			this.setUtf(Title.decodeNasties(new Title(backlinks[3]!)));
			return this;
		}
		// A dummy title object for a Special:Diff link.
		const specialdiff = pg.re.specialdiff.exec(url);
		if (specialdiff) {
			this.setUtf(
				Title.decodeNasties(new Title(`${mw.config.get('wgFormattedNamespaces')[pg.nsSpecialId!]}:Diff`))
			);
			return this;
		}
		// no more special cases to check --
		// hopefully it's not a disguised user-related or specially treated special page
		// Includes references
		const m = pg.re.main.exec(url);
		if (m === null) {
			this.value = null;
		} else {
			const fromBotInterface = /\?(.+&)?title=/.test(url);
			if (fromBotInterface) {
				m[2] = m[2]!.split('+').join('_');
			}
			const extracted = m[2] + (m[3] ? `#${m[3]}` : '');
			this.setUtf(Title.decodeNasties(extracted));
		}
		return this;
	}
	static decodeNasties(txt: string | Title) {
		// myDecodeURI uses decodeExtras, which removes _,
		// thus ruining citations previews, which are formated as "cite_note-1"
		// Title 实参先归一化（原版经鸭子类型调用其 split 方法，等价）
		try {
			let ret = decodeURI(Title.decodeEscapes(txt.toString()));
			ret = ret.replace(/[ _]*$/, '');
			return ret;
		} catch {
			return txt.toString(); // cannot decode
		}
	}
	// Decode valid %-encodings, otherwise escape them
	static decodeEscapes(txt: string) {
		const split = txt.split(/((?:%[\dA-Fa-f]{2})+)/);
		const len = split.length;
		// No %-encoded items found, so replace the literal %
		if (len === 1) {
			return split[0]!.replace(/%(?![\dA-Fa-f]{2})/g, '%25');
		}
		for (let i = 1; i < len; i += 2) {
			split[i] = decodeURIComponent(split[i]!);
		}
		return split.join('');
	}
	fromAnchor(a: HTMLAnchorElement) {
		if (!a) {
			this.value = null;
			return this;
		}
		return this.fromURL(a.href);
	}
	fromWikiText(txt: string) {
		// FIXME - testing needed
		txt = myDecodeURI(txt);
		this.setUtf(txt);
		return this;
	}
	hintValue() {
		if (!this.value) {
			return '';
		}
		return safeDecodeURI(this.value);
	}
	toUserName(withNs: unknown) {
		if (this.namespaceId() !== pg.nsUserId && this.namespaceId() !== pg.nsUsertalkId) {
			this.value = null;
			return;
		}
		this.value =
			(withNs ? `${mw.config.get('wgFormattedNamespaces')[pg.nsUserId!]}:` : '') +
			this.stripNamespace().split('/')[0]!;
	}
	userName(withNs?: unknown) {
		const t = new Title(this.value);
		t.toUserName(withNs);
		if (t.value) {
			return t;
		}
		return null;
	}
	toTalkPage() {
		// convert article to a talk page, or if we can't, return null
		// In other words: return null if this ALREADY IS a talk page
		// and return the corresponding talk page otherwise
		//
		// Per {@link https://www.mediawiki.org/wiki/Manual:Namespace#Subject_and_talk_namespaces}
		// * All discussion namespaces have odd-integer indices
		// * The discussion namespace index for a specific namespace with index n is n + 1
		if (this.value === null) {
			return null;
		}
		const namespaceId = this.namespaceId();
		if (namespaceId >= 0 && namespaceId % 2 === 0) {
			// non-special and subject namespace
			const localizedNamespace = mw.config.get('wgFormattedNamespaces')[namespaceId + 1];
			if (localizedNamespace !== undefined) {
				this.value =
					localizedNamespace === ''
						? this.stripNamespace()
						: `${localizedNamespace.split(' ').join('_')}:${this.stripNamespace()}`;
				return this.value;
			}
		}
		this.value = null;
		return null;
	}
	// Return canonical, localized namespace
	namespace() {
		return mw.config.get('wgFormattedNamespaces')[this.namespaceId()];
	}
	namespaceId() {
		// 调用方保证 setUtf 已执行，value 此时为字符串
		const value = this.value!;
		const n = value.indexOf(':');
		if (n === -1) {
			return 0; // mainspace
		}
		const namespaceId =
			mw.config.get('wgNamespaceIds')[value.slice(0, Math.max(0, n)).split(' ').join('_').toLowerCase()];
		if (namespaceId === undefined) {
			return 0; // mainspace
		}
		return namespaceId;
	}
	talkPage() {
		const t = new Title(this.value);
		t.toTalkPage();
		if (t.value) {
			return t;
		}
		return null;
	}
	isTalkPage() {
		if (this.talkPage() === null) {
			return true;
		}
		return false;
	}
	toArticleFromTalkPage() {
		// largely copy/paste from toTalkPage above.
		if (this.value === null) {
			return null;
		}
		const namespaceId = this.namespaceId();
		if (namespaceId >= 0 && namespaceId % 2 === 1) {
			// non-special and talk namespace
			const localizedNamespace = mw.config.get('wgFormattedNamespaces')[namespaceId - 1];
			if (localizedNamespace !== undefined) {
				this.value =
					localizedNamespace === ''
						? this.stripNamespace()
						: `${localizedNamespace.split(' ').join('_')}:${this.stripNamespace()}`;
				return this.value;
			}
		}
		this.value = null;
		return null;
	}
	articleFromTalkPage() {
		const t = new Title(this.value);
		t.toArticleFromTalkPage();
		if (t.value) {
			return t;
		}
		return null;
	}
	articleFromTalkOrArticle() {
		const t = new Title(this.value);
		if (t.toArticleFromTalkPage()) {
			return t;
		}
		return this;
	}
	isIpUser() {
		// userName() 为 null 时与原版隐式转 "null" 一样不会匹配 IP 正则
		return pg.re.ipUser.test(this.userName()?.toString() ?? '');
	}

	stripNamespace() {
		// returns a string, not a Title
		const value = this.value!;
		const n = value.indexOf(':');
		if (n === -1) {
			return value;
		}
		const namespaceId = this.namespaceId();
		if (namespaceId === pg.nsMainspaceId!) {
			return value;
		}
		return value.slice(Math.max(0, n + 1));
	}
	setUtf(value: string | Title | null | undefined) {
		// Title 实参先归一化为字符串：原版通过鸭子类型调用其字符串方法，
		// 但 Title 无 slice 方法，含锚点时会运行时崩溃——归一化后各路径行为一致且更健壮
		const val = typeof value === 'string' ? value : (value?.toString() ?? '');
		if (!val) {
			this.value = '';
			return;
		}
		const anch = val.indexOf('#');
		if (anch === -1) {
			this.value = val.split('_').join(' ');
			this.anchor = '';
			return;
		}
		this.value = val.slice(0, Math.max(0, anch)).split('_').join(' ');
		this.anchor = val.slice(Math.max(0, anch + 1));
		this.ns = null; // wait until namespace() is called
	}
	setUrl(urlfrag: string) {
		const anch = urlfrag.indexOf('#');
		this.value = safeDecodeURI(urlfrag.slice(0, Math.max(0, anch)));
		this.anchor = this.value.slice(Math.max(0, anch + 1));
	}
	append(x: string) {
		this.setUtf(this.value + x);
	}
	urlString(x?: {omitAnchor?: boolean; keepSpaces?: boolean}) {
		x ||= {};
		let v = this.toString(true);
		if (!x.omitAnchor && this.anchor) {
			v += `#${this.urlAnchor()}`;
		}
		if (!x.keepSpaces) {
			v = v.split(' ').join('_');
		}
		return encodeURI(v).split('&').join('%26').split('?').join('%3F').split('+').join('%2B');
	}
	removeAnchor() {
		return new Title(this.toString(true));
	}
	toUrl() {
		return pg.wiki.titlebase + this.urlString();
	}
}
const parseParams = (url: string): WikiParams => {
	const specialDiff = pg.re.specialdiff.exec(url);
	if (specialDiff) {
		const split = specialDiff[1]!.split('/');
		if (split.length === 1) {
			return {
				oldid: split[0]!,
				diff: 'prev',
			};
		} else if (split.length === 2) {
			return {
				oldid: split[0]!,
				diff: split[1]!,
			};
		}
	}
	const ret: WikiParams = {};
	if (!url.includes('?')) {
		return ret;
	}
	url = url.split('#')[0]!;
	const s = url.split('?').slice(1).join(',');
	const t = s.split('&');
	for (const element of t) {
		const z: (string | null)[] = element.split('=');
		// 补一个 null 占位：无 '=' 的参数段取 z[1] 时得到 null 而非 undefined
		z.push(null);
		ret[z[0]!] = z[1];
	}
	// Diff revision with no oldid is interpreted as a diff to the previous revision by MediaWiki
	if (ret.diff && ret.oldid === undefined) {
		ret.oldid = 'prev';
	}
	// Documentation seems to say something different, but oldid can also accept prev/next, and
	// Echo is emitting such URLs. Simple fixup during parameter decoding:
	if (ret.oldid && (ret.oldid === 'prev' || ret.oldid === 'next' || ret.oldid === 'cur')) {
		const helper = ret.diff;
		ret.diff = ret.oldid;
		ret.oldid = helper;
	}
	return ret;
};
const myDecodeURI = (str: string) => {
	let ret;
	// FIXME decodeURIComponent??
	try {
		ret = decodeURI(str.toString());
	} catch {
		return str;
	}
	for (let i = 0; i < pg.misc.decodeExtras!.length; ++i) {
		const {from} = pg.misc.decodeExtras[i]!;
		const {to} = pg.misc.decodeExtras[i]!;
		ret = ret.split(from).join(to);
	}
	return ret;
};
const safeDecodeURI = (str: string) => {
	const ret = myDecodeURI(str);
	return ret || str;
};
const isDisambig = (data: string, article: Title) => {
	if (!getValueOf('popupAllDabsStubs') && article.namespace()) {
		return false;
	}
	return !article.isTalkPage() && pg.re.disambig.test(data);
};
const stubCount = (data: string, article: Title) => {
	if (!getValueOf('popupAllDabsStubs') && article.namespace()) {
		return false;
	}
	let sectStub = 0;
	let realStub = 0;
	if (pg.re.stub.test(data)) {
		const s = data.split(pg.re.stub);
		for (let i = 1; i < s.length; i += 2) {
			if (s[i]) {
				++sectStub;
			} else {
				++realStub;
			}
		}
	}
	return {
		real: realStub,
		sect: sectStub,
	};
};
const isValidImageName = (str: string) => {
	return !str.includes('{');
};
const isInStrippableNamespace = (article: Title) => {
	return article.namespaceId() !== 0;
};
const isInMainNamespace = (article: Title) => {
	return article.namespaceId() === 0;
};
const anchorContainsImage = (a: HTMLAnchorElement) => {
	// iterate over children of anchor a
	// see if any are images
	if (a === null) {
		return false;
	}
	const kids = a.childNodes;
	for (const kid of kids) {
		if (kid.nodeName === 'IMG') {
			return true;
		}
	}
	return false;
};
let markNopopupSpanLinksDone = false;
const isPopupLink = (a: HTMLAnchorElement) => {
	// NB for performance reasons, TOC links generally return true
	// they should be stripped out later
	if (!markNopopupSpanLinksDone) {
		markNopopupSpanLinks();
	}
	if (a.inNopopupSpan) {
		return false;
	}
	// FIXME is this faster inline?
	if (a.onmousedown || a.getAttribute('nopopup')) {
		return false;
	}
	const h = a.href;
	if (h === `${document.location.href}#`) {
		return false;
	}
	if (!pg.re.basenames.test(h)) {
		return false;
	}
	if (!pg.re.urlNoPopup.test(h)) {
		return true;
	}
	return (
		(pg.re.email.test(h) || pg.re.contribs.test(h) || pg.re.backlinks.test(h) || pg.re.specialdiff.test(h)) &&
		!h.includes('&limit=')
	);
};
const markNopopupSpanLinks = function markNopopupSpanLinks() {
	if (!getValueOf('popupOnlyArticleLinks')) {
		fixVectorMenuPopups();
	}
	const $body = $('body');
	const s = $body.find('.nopopups').toArray();
	for (const element of s) {
		const as = element.querySelectorAll('a');
		for (const a of as) {
			a.inNopopupSpan = true;
		}
	}
	markNopopupSpanLinksDone = true;
};
const fixVectorMenuPopups = () => {
	const $body = $('body');
	$body.find('nav.vector-menu h3:first a:first').prop('inNopopupSpan', true);
};

export {
	Stringwrapper,
	Title,
	anchorContainsImage,
	fixVectorMenuPopups,
	isDisambig,
	isInMainNamespace,
	isInStrippableNamespace,
	isPopupLink,
	isValidImageName,
	markNopopupSpanLinks,
	myDecodeURI,
	parseParams,
	safeDecodeURI,
	stubCount,
};
