type RefreshPage = import('./core').RefreshPage;
type DetectIfFileRedirect = import('./core').DetectIfFileRedirect;

declare module 'ext.gadget.QuickImport' {
	export const refreshPage: RefreshPage;
	export const detectIfFileRedirect: DetectIfFileRedirect;
}
