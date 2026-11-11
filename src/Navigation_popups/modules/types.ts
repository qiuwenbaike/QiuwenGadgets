// Navigation popups 的共享类型定义
import type {Downloader} from './downloader';
import type {Navpopup} from './navpopup';
import type {Title} from './titles';

// 由 URL 解析出的页面参数（如 oldid、diff 等）
export interface WikiParams {
	oldid?: any;
	diff?: any;
	title?: string;
	fromtitle?: string;
	fromrev?: any;
	torev?: any;
	torelative?: any;
	unwatch?: any;
	revids?: any;
	revid?: any;
	action?: string;
	comment?: any;
	prop?: string[];
	format?: string;
	formatversion?: string;
	smaxage?: number;
	maxage?: number;
	rcid?: any;
	page?: any;
	target?: any;
	[key: string]: any;
}

// 传入 setupTooltips 的附加数据（通常仅含 owner）
export interface PopData {
	owner?: Navpopup;
}

// 下载任务对象（Downloader 及其附加字段）
export type Dow = Downloader & {
	data?: any;
	owner?: Navpopup;
	id?: any;
	lastModified?: Date | string | null;
};

// 修订版本信息（diff 预览用）
export interface Revision {
	revid: number | string;
	content: string;
	timestamp?: string;
	user?: string;
	comment?: string;
	minor?: string;
	patrolled?: string;
	size?: number;
	[key: string]: any;
}

export interface DiffData {
	oldRev: {
		revid?: number | string;
		revision?: Revision;
	};
	newRev: {
		revid?: number | string;
		revision?: Revision;
	};
}

export interface Pg {
	// 直接挂载在 pg 上的杂项属性（在运行期由各模块填充）
	escapeQuotesHTML: (s: string) => string;
	unescapeQuotesHTML: (text: string, quotes?: string) => string;
	idNumber?: number;
	nsCategoryId?: number;
	nsImageId?: number;
	nsMainspaceId?: number;
	nsSpecialId?: number;
	nsTemplateId?: number;
	nsUserId?: number;
	nsUsertalkId?: number;

	api: PgApi;
	cache: PgCache;
	counter: PgCounter;
	current: PgCurrent;
	flag: PgFlag;
	fn: PgFn;
	misc: PgMisc;
	ns: PgEmpty;
	option: PgOption;
	optionDefault: PgOptionDefault;
	re: PgRe;
	string: PgString;
	structures: PgStructures;
	timer: PgTimer;
	user: PgUser;
	wiki: PgWiki;
	endoflist: null;
}

interface PgEmpty {}

export interface PgApi {
	client: any;
	userAgent: string;
}

export interface PgCache {
	pages: any;
}

export interface PgCounter {
	loop: number;
}

export interface PgCurrent {
	article: Title;
	link: HTMLAnchorElement | null;
	links: HTMLElement[];
	linksHash: any;
}

export interface PgFlag {
	finishedLoading: boolean;
}

export interface PgFn {
	APIsharedImagePagePreviewHTML: any;
	disablePopups: any;
	getDiffSinceMyEdit: any;
	getLastContrib: any;
	modifyWatchlist: any;
	purgePopups: any;
	togglePreviews: any;
}

export interface PgMisc {
	decodeExtras: {from: string; to: string}[];
	defaultNavlinkClassname: any;
	downloadsInProgress: any;
	layout: any;
	redirSpans: any;
}

export interface PgOption {
	popupDiffContextLines: number;
	popupDiffMaxLines: number;
	popupLinksNewWindow: any;
	popupStructure: string;
	simplePopups: boolean;
	[key: string]: any;
}

export interface PgOptionDefault {
	popupStructure: string;
	[key: string]: any;
}

export interface PgRe {
	backlinks: RegExp;
	basenames: any;
	category: RegExp;
	categoryBracketCount: number;
	contribs: RegExp;
	diff: RegExp;
	disambig: RegExp;
	email: RegExp;
	image: RegExp;
	imageBracketCount: number;
	interwiki: any;
	ipUser: RegExp;
	main: RegExp;
	oldid: RegExp;
	redirect: RegExp;
	specialdiff: RegExp;
	stub: RegExp;
	urlNoPopup: RegExp;
	[key: string]: any;
}

export interface PgString {
	[key: string]: string;
}

export interface PgStructures {
	fancy: any;
	fancy2: any;
	lite: any;
	menus: any;
	nostalgia: any;
	original: any;
	shortmenus: any;
	[key: string]: any;
}

export interface PgTimer {
	checkPopupPosition: any;
}

export interface PgUser {
	canReview: boolean;
	locales: any;
	timeZone: any;
}

export interface PgWiki {
	APIPath: string;
	apicommonsbase: string;
	apiwikibase: string;
	articlePath: string;
	articlebase: string;
	botInterfacePath: string;
	commons: string | null;
	commonsbase: string;
	hostname: string;
	interwiki: any;
	isLocal: boolean;
	lang: string;
	sitebase: string;
	specialpagealiases: any;
	titlebase: string;
	wikia: boolean;
	wikibase: string;
	wikimedia: boolean;
	[key: string]: any;
}

declare global {
	interface String {
		entify(): string;
	}

	interface Window {
		popupDebug?: boolean;
		popupLocalDebug?: boolean;
		log: (...args: any[]) => void;
		errlog: (...args: any[]) => void;
	}

	function log(...args: any[]): void;
	function errlog(...args: any[]): void;

	interface Element {
		ranSetupTooltipsAlready?: boolean;
	}

	interface HTMLElement {
		/* Tooltip 相关扩展属性 */
		popData?: PopData | undefined;
		hasPopup?: boolean;
		originalTitle?: string;
		inNopopupSpan?: boolean;
		navpopup: Navpopup;
		modifierKeyListener?: any;
		simpleNoMore?: boolean;

		/* Drag（domdrag）相关扩展属性 */
		dragging?: boolean;
		popups_draggable?: boolean;
		hmode?: boolean;
		vmode?: boolean;
		root?: HTMLElement;
		lastMouseX?: number;
		lastMouseY?: number;
		onmousemoveDefault?: any;
		onthisStart?: (x: number, y: number) => void;
		onthisEnd?: (x: number, y: number) => void;
		onthis?: (x: number, y: number) => void;
	}

	interface Document {
		oldPopupOnkeypress?: any;
	}

	interface HTMLFormElement {
		wpMinoredit?: HTMLInputElement;
		wpWatchthis?: HTMLInputElement;
	}
}

export {};
