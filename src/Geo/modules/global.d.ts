type GeoInfo = import('./types').GeoInfo;

declare module 'ext.gadget.Geo' {
	export function geo(): Promise<GeoInfo>;
}
