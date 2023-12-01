type GeoInfo = {
	country?: string;
	countryOrArea: string;
	region: string;
	city: string;
};

declare global {
	interface Window {
		geo(): Promise<GeoInfo>;
	}
}

export default global;
export type {GeoInfo};
