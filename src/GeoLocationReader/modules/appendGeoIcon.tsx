import {type CountryOrAreaNameList, type RegionNameList, getCountryOrAreaName, getRegionName} from './util/getName';
import type {StoreGeoInfo} from './types';
import {api} from './api';
import {appendIcon} from './util/appendIcon';
import {getMessage} from './i18n';

const appendGeoIcon = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();
	const storePageTitle: string = `User:${wgRelevantUserName}/GeoIP.json`;

	try {
		const params: ApiQueryRevisionsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			titles: [storePageTitle],
			prop: ['revisions'],
			rvprop: ['content'],
			rvslots: 'main',
		};

		const data = await api.get(params);

		const {
			country,
			countryOrArea,
			region,
		}: StoreGeoInfo & {
			country?: string;
		} = JSON.parse(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			data['query'].pages[0].revisions[0].slots.main.content
		);

		const location: StoreGeoInfo['countryOrArea'] = country ?? countryOrArea ?? '';
		const countryOrAreaName: string =
			getCountryOrAreaName(location as keyof CountryOrAreaNameList) ?? getMessage('Unknown');
		const regionName: string = location === 'CN' ? getRegionName(region as keyof RegionNameList) ?? '' : '';

		appendIcon({
			icon: 'globe',
			indicatorText: countryOrAreaName + regionName,
			spanClass: 'green',
		});
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `appendGeoIcon` method:', error);
		appendIcon({
			icon: 'helpNotice',
			indicatorText: getMessage('Unknown'),
			spanClass: 'orange',
		});
	}
};

export {appendGeoIcon};
