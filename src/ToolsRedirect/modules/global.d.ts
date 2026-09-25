declare module 'ext.gadget.ToolsRedirect' {
	export const findRedirectCallback: (
		...args: ((pageName: string, $content: JQuery) => string[])[]
	) => ToolsRedirectApi;
	export const findRedirectBySelector: (selector: string) => ToolsRedirectApi;
	export const setRedirectTextSuffix: (title: string, suffix: string, flag?: number) => void;
}
