declare global {
	interface Window {
		geoCountryOrAreaName(): Record<string, string>;
		geoRegionName(): Record<string, string>;
	}
}

export default global;
