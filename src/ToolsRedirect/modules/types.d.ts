declare global {
	interface Window {
		readonly toolsRedirect: {
			findRedirectCallback(...args: ((pagename: string, $content: JQuery) => string[])[]): toolsRedirect;
			findRedirectBySelector(selector: string): toolsRedirect;
			setRedirectTextSuffix(title: string, suffix: string, flag: string | number): void;
		};
	}
}

export default global;
