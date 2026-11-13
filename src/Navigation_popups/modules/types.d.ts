// Navigation popups 的共享类型定义
import type {Downloader} from './downloader';
import type {Navpopup} from './navpopup';
import type {Title} from './titles';

// 由 URL 解析出的页面参数（如 oldid、diff 等）
export interface WikiParams {
	oldid?: string | undefined;
	diff?: string;
	title?: string;
	fromtitle?: string | undefined;
	fromrev?: string | number;
	torev?: string | number;
	torelative?: string;
	unwatch?: string | boolean | number;
	revids?: string | number;
	revid?: string | number | undefined;
	action?: string;
	comment?: string;
	prop?: string[];
	format?: string;
	formatversion?: string;
	smaxage?: number;
	maxage?: number;
	rcid?: string;
	page?: string;
	target?: string;
	// URL 查询参数解析（parseParams）写入任意键，值域为 string | null
	[key: string]: unknown;
}

// 传入 setupTooltips 的附加数据（通常仅含 owner）
export interface PopData {
	owner?: Navpopup;
}

// 下载任务对象（Downloader 及其附加字段）
export type Dow = Downloader & {
	// HTTP 响应文本（JSON/HTML），由 startDownload 填充
	data?: string | undefined;
	owner?: Navpopup | null | undefined;
	id?: string | number | null | undefined;
	lastModified?: Date | string | null | undefined;
};

// 修订版本信息（diff 预览用）
export interface Revision {
	revid: number | string;
	content: string;
	timestamp: string;
	user?: string;
	comment?: string;
	minor?: string;
	patrolled?: string;
	size?: number;
	// API 原样透传的其余字段
	[key: string]: unknown;
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
	client: mw.Api;
	userAgent: string;
}

// 页面下载缓存记录（getpage.ts 的 addPageToCache 只保留三个字段）
export interface PgCachedPage {
	url?: string | undefined;
	data?: string | undefined;
	lastModified?: Date | string | null | undefined;
}

export interface PgCache {
	pages: PgCachedPage[];
}

export interface PgCounter {
	loop: number;
}

export interface PgCurrent {
	article: Title;
	link: HTMLAnchorElement | null;
	links: HTMLElement[];
	linksHash: Record<string, Navpopup>;
}

export interface PgFlag {
	finishedLoading: boolean;
}

export interface PgFn {
	// JSONP 回调，obj 为 commons API 响应（结构见 querypreview.ts 的 ApiPage）
	APIsharedImagePagePreviewHTML: (obj: {requestid: number}) => void;
	disablePopups: () => void;
	getDiffSinceMyEdit: (wikipage: string, newWin: Window | null) => void;
	getLastContrib: (wikipage: string, newWin: Window | null) => void;
	modifyWatchlist: (title: string, action: string) => Promise<void>;
	purgePopups: () => void;
	togglePreviews: () => void;
}

// popupLayout 的元素：span 名字符串或（嵌套的）span 名数组
export type LayoutItem = string | LayoutItem[];

export interface PgMisc {
	decodeExtras: {from: string; to: string}[];
	defaultNavlinkClassname?: string;
	downloadsInProgress: Record<string, Downloader>;
	layout: LayoutItem[];
	redirSpans: string[];
}

export interface PgOption {
	popupDiffContextLines: number;
	popupDiffMaxLines: number;
	popupLinksNewWindow: Record<string, boolean>;
	popupStructure: string;
	simplePopups: boolean;
	// 动态选项桶（options.ts 的 newOption 按名写入、getValueOf 按名读取），
	// 收窄需 getValueOf 泛型化，暂保留 any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export interface PgOptionDefault {
	popupStructure: string;
	// 同 PgOption：newOption 按名写入
	[key: string]: unknown;
}

export interface PgRe {
	backlinks: RegExp;
	basenames: RegExp;
	category: RegExp;
	categoryBracketCount: number;
	contribs: RegExp;
	diff: RegExp;
	disambig: RegExp;
	email: RegExp;
	image: RegExp;
	imageBracketCount: number;
	interwiki: RegExp;
	ipUser: RegExp;
	main: RegExp;
	oldid: RegExp;
	redirect: RegExp;
	specialdiff: RegExp;
	stub: RegExp;
	urlNoPopup: RegExp;
}

export interface PgString {
	[key: string]: string;
}

// fillEmptySpans 组装的上下文对象，传入各结构的 span 生成函数
export interface PgStructureArgs {
	article: Title;
	hint?: string | undefined;
	oldid?: string | null | undefined;
	rcid?: string | undefined;
	navpop: Navpopup;
	params: WikiParams;
}
// 结构：布局/重定向 span 列表 + 按 span 名注册的生成函数（单参或带 shorter 第二参）或静态 HTML 串
// 显式列出实际使用的 span 生成键（结构成员以点访问注册）
export interface PgStructure {
	popupLayout?: () => LayoutItem[];
	popupRedirSpans?: () => string[];
	popupTitle?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	popupTopLinks?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	popupImage?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	popupOtherLinks?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	popupRedirTitle?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	popupRedirTopLinks?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	popupRedirOtherLinks?: ((x: PgStructureArgs, shorter?: boolean) => string) | string | undefined;
	[span: string]:
		((x: PgStructureArgs, shorter?: boolean) => string) | (() => LayoutItem[] | string[]) | string | undefined;
}
export interface PgStructures {
	fancy: PgStructure;
	fancy2: PgStructure;
	lite: PgStructure;
	menus: PgStructure;
	nostalgia: PgStructure;
	original: PgStructure;
	shortmenus: PgStructure;
	[key: string]: PgStructure;
}

export interface PgTimer {
	checkPopupPosition: ReturnType<typeof setInterval> | null;
}

export interface PgUser {
	canReview: boolean;
	locales: string[];
	timeZone: string;
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
	// namespaces.ts 填充：qiuwen 站点为 'zh|mnc'，否则 null
	interwiki: string | null;
	lang: string;
	sitebase: string;
	specialpagealiases: {realname: string; aliases: string[]}[];
	titlebase: string;
	wikibase: string;
	qiuwen: boolean;
}

declare global {
	interface Window {
		// pg 的全局类型由 morebits.ts 的弱声明（pg?: {re?: {diff?: unknown}}）提供——
		// 同名全局声明必须完全一致，此处若声明 pg: Pg 会与之冲突（TS2717）；
		// Pg → 弱类型结构兼容，run.ts 的 window.pg = pg 赋值不受影响
		popupDebug?: boolean;
		popupLocalDebug?: boolean;
		log: (...args: unknown[]) => void;
		errlog: (...args: unknown[]) => void;
	}

	function log(...args: unknown[]): void;
	function errlog(...args: unknown[]): void;

	interface Element {
		ranSetupTooltipsAlready?: boolean;
	}

	interface Document {
		// defaultPopupsContainer 可能回退到 document 本体，同样需要该标志
		ranSetupTooltipsAlready?: boolean;
	}

	interface HTMLElement {
		/* Tooltip 相关扩展属性 */
		popData?: PopData | undefined;
		hasPopup?: boolean;
		originalTitle?: string;
		inNopopupSpan?: boolean;
		navpopup: Navpopup;
		modifierKeyListener?: (evt: Event) => void;
		simpleNoMore?: boolean;

		/* Drag（domdrag）相关扩展属性 */
		dragging?: boolean;
		popups_draggable?: boolean;
		hmode?: boolean;
		vmode?: boolean;
		root?: HTMLElement;
		lastMouseX?: number;
		lastMouseY?: number;
		onmousemoveDefault?: typeof document.onmousemove;
		onthisStart?: (x: number, y: number) => void;
		onthisEnd?: (x: number, y: number) => void;
		onthis?: (x: number, y: number) => void;
	}

	interface Document {
		oldPopupOnkeypress?: typeof document.onkeypress;
	}

	interface HTMLFormElement {
		wpMinoredit?: HTMLInputElement;
		wpWatchthis?: HTMLInputElement;
	}
}

export {};
