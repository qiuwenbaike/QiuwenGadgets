type PageList = {
	titles: string | string[];
	dates?: string | number | (string | number)[];
}[];

declare module 'ext.gadget.MemorialDay-settings' {
	export const pageList: PageList;
}
