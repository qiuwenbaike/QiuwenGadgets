import * as OPTIONS from '../../options.json';
import type {GeoInfo} from '../types';

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
		return OPTIONS.defaultGeoInfo;
	}
	// There was no info found if there's no country field or
	// countryOrArea, or if it's empty
	if (!matches[1]?.length) {
		return OPTIONS.defaultGeoInfo;
	}

	// Return a juicy Geo object
	return {
		country: matches[1],
		countryOrArea: matches[1],
		region: matches[2] ?? '',
		city: matches[3] ?? '',
	};
};

export {parseStorageValue};
