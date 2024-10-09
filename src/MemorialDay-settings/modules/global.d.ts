type PageList = {
	titles: string | string[];
	dates?: number | number[];
}[];

declare module 'ext.gadget.MemorialDay-settings' {
	export const pageList: PageList;
}
