import {STORAGE_ITEM_NAME} from './modules/constant';

const defaultGeoInfo: {
	country?: string;
	countryOrArea: string;
	region: string;
	city: string;
} = {
	country: '',
	countryOrArea: '',
	region: '',
	city: '',
};

/**
 * Parse geo data in storageValue and return an object with properties from
 * the fields therein. Returns null if the value couldn't be parsed or
 * doesn't contain location data.
 *
 * The storage item will look like one of the following:
 * - "CN-SH-Shanghai"
 * - "CN-SH-"
 * - "CN--"
 * - "--"
 *
 * @param {string} storageValue
 * @return {GeoInfo}
 */
const parseStorageValue = (storageValue: string): GeoInfo => {
	// TODO Verify that these Regexes are optimal. (Why no anchors? Why the
	// semicolon in the last group?)
	// Parse storage item
	const matches: RegExpMatchArray | null = storageValue.match(/([^-]*)-([^-]*)-([^-]*)/);
	// No matches...? Boo, no data.
	if (!matches) {
		return defaultGeoInfo;
	}
	// There was no info found if there's no country field or
	// countryOrArea, or if it's empty
	if (typeof matches[1] !== 'string' || !matches[1].length) {
		return defaultGeoInfo;
	}
	// Return a juicy Geo object
	return {
		country: matches[1],
		countryOrArea: matches[1],
		region: matches[2] ?? '',
		city: matches[3] ?? '',
	};
};

/**
 * Request geo data and store it in the local storage
 */
const storeGeoInStorage = async (): Promise<GeoInfo> => {
	try {
		const data: GeoInfo = await $.getJSON('/rest.php/geo');
		const parts: string[] = [data.country ?? data.countryOrArea, data.region, data.city];
		const storageValue: string = parts.join('-');
		mw.storage.set(STORAGE_ITEM_NAME, storageValue, 3600); // 1 hour
		// Return Geo object
		return parseStorageValue(storageValue);
	} catch {
		return defaultGeoInfo;
	}
};

window.geo = async (): Promise<GeoInfo> => {
	return await storeGeoInStorage();
};
