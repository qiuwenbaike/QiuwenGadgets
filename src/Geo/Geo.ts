import * as OPTIONS from './options.json';
import type {GeoInfo} from './modules/types';

const getGeoInfo = async (): Promise<GeoInfo> => {
	const storeGeoInfo = mw.storage.getObject(OPTIONS.storageKey) as GeoInfo | null;
	if (storeGeoInfo) {
		return storeGeoInfo;
	}

	try {
		const response = (await $.getJSON('/rest.php/geo')) as Partial<GeoInfo> & {
			country?: string;
		};
		const geoInfo: GeoInfo = {
			countryOrArea: response.country ?? response.countryOrArea ?? '',
			region: response.region ?? '',
			city: response.city ?? '',
		};

		mw.storage.setObject(OPTIONS.storageKey, geoInfo, 60 * 60 * 1000);

		return geoInfo;
	} catch {
		return OPTIONS.defaultGeoInfo;
	}
};

export {getGeoInfo};
