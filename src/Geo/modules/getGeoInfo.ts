import * as OPTIONS from '../options.json';
import type {GeoInfo} from '../modules/types';
import {STORAGE_KEY} from '../modules/constant';

const getGeoInfo = async (): Promise<GeoInfo> => {
	const storeGeoInfo: GeoInfo | null = mw.storage.getObject(STORAGE_KEY);
	if (storeGeoInfo) {
		return storeGeoInfo;
	}

	try {
		const response: Partial<GeoInfo> & {country?: string} = await $.getJSON('/rest.php/geo');
		const geoInfo: GeoInfo = {
			countryOrArea: response.country ?? response.countryOrArea ?? '',
			region: response.region ?? '',
			city: response.city ?? '',
		};

		mw.storage.setObject(STORAGE_KEY, geoInfo, 60 * 60 * 1000);

		return geoInfo;
	} catch {
		return OPTIONS.defaultGeoInfo;
	}
};

export {getGeoInfo};
