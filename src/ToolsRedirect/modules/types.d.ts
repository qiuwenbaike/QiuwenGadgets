/* eslint-disable @typescript-eslint/no-explicit-any */
type MessageKey =
	| 'toolsredirect-btntitle'
	| 'toolsredirect-btndesc'
	| 'toolsredirect-dlgtitle'
	| 'toolsredirect-rediloading'
	| 'toolsredirect-rediedit'
	| 'toolsredirect-selectall'
	| 'toolsredirect-selectinverse'
	| 'toolsredirect-tabviewtitle'
	| 'toolsredirect-tabviewdesc'
	| 'toolsredirect-tabviewnotfound'
	| 'toolsredirect-tabviewmulti'
	| 'toolsredirect-tabviewfix'
	| 'toolsredirect-fixloading'
	| 'toolsredirect-fixtext'
	| 'toolsredirect-fixsummary'
	| 'toolsredirect-tabcreatetitle'
	| 'toolsredirect-tabcreatedesc'
	| 'toolsredirect-tabcreatenotfound'
	| 'toolsredirect-tabcreateall'
	| 'toolsredirect-createloading'
	| 'toolsredirect-createtext'
	| 'toolsredirect-createtext-category'
	| 'toolsredirect-createsummary'
	| 'toolsredirect-errcycleredirect'
	| 'toolsredirect-refresh';

declare global {
	interface Window {
		toolsRedirect: ToolsRedirectApi;
	}
}

type RedirectCallback = (
	pageName: string,
	content: JQuery,
	titles?: string[]
) => string[] | JQuery<any> | JQuery.Promise<any>;
type RedirectTabName = 'view' | 'create';
type RedirectTab = {cont: JQuery; loaded: boolean};
type RedirectMethod = {
	href: string;
	title: string;
	classname?: string;
	click?: (event: JQuery.ClickEvent) => void;
};
type RedirectLoaded = Record<string, boolean>;

interface ToolsRedirectApi {
	variants: readonly string[];
	tabs: Record<RedirectTabName, RedirectTab>;
	init($body: JQuery<HTMLBodyElement>, onOpen: () => void): void;
	attachContainers(viewContainer: HTMLElement, createContainer: HTMLElement): void;
	fix(pagenames: string[]): void;
	create(pagenames: string[]): void;
	addRedirectTextSuffix(title: string, text: string): string;
	bulkEdit(titles: string[], text: string, summary: string): JQuery.Promise<any>;
	bulkEditByRegex(titles: string[], regex: RegExp, text: string, summary: string): JQuery.Promise<any>;
	loadTabCont(tabname: RedirectTabName, callback: () => JQuery.Promise<any>, reload?: boolean): void;
	loading(container: JQuery): void;
	loaded(container: JQuery): void;
	selectAll(cont: JQuery): void;
	selectInverse(cont: JQuery): void;
	selectAction(cont: JQuery, cb: (pagenames: string[]) => void): void;
	clickAction(cont: JQuery, cb: (pagenames: string[]) => void): void;
	buildLink(method: RedirectMethod): JQuery;
	addMethods(parent: JQuery, methods: RedirectMethod[]): void;
	buildSelection(main: RedirectMethod, methods: RedirectMethod[], pageTitle: string, disabled: boolean): JQuery;
	loadView(reload?: boolean): void;
	loadCreate(reload?: boolean): void;
	loadRedirect(pagename: string, container: JQuery, deep: number, loaded?: RedirectLoaded): JQuery.Promise<any>;
	findVariants(pagename: string, titles: string[]): JQuery.Promise<string[]>;
	findNotExists(titles: string[]): JQuery.Promise<string[]>;
	findRedirect(pagename: string): JQuery.Promise<string[]>;
}

export default global;

export type {
	MessageKey,
	ToolsRedirect,
	RedirectCallback,
	RedirectTabName,
	RedirectTab,
	RedirectMethod,
	RedirectLoaded,
	ToolsRedirectApi,
};
