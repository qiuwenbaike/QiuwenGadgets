import * as OPTIONS from '../options.json';
import type {GeoInfo} from '../modules/types';
import {STORAGE_KEY} from '../modules/constant';
import {parseStorageValue} from './util/parseStorageValue';

/**
 * Request geo data and store it in the local storage
 *
 * @return {Promise<GeoInfo>}
 */
const getGeoInfo = async (): Promise<GeoInfo> => {
	try {
		const data: GeoInfo = await $.getJSON('/rest.php/geo');
		const parts: string[] = [data.country ?? data.countryOrArea, data.region, data.city];

		const storageValue: string = parts.join('-');
		mw.storage.set(STORAGE_KEY, storageValue, 3600); // 1 hour

		// Return Geo object
		return parseStorageValue(storageValue);
	} catch {
		return OPTIONS.defaultGeoInfo;
	}
};

export {getGeoInfo};
