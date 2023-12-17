import * as OPTIONS from '../options.json';
import {WG_SCRIPT, WG_USER_NAME} from './constant';
import type {StoreGeoInfo} from './types';
import {api} from './api';
import {getMessage} from './i18n';

const storeLocation = async ({countryOrArea, region}: StoreGeoInfo): Promise<void> => {
	const storePageTitle: string = `User:${WG_USER_NAME}/GeoIP.json`;

	try {
		const response: Partial<StoreGeoInfo> = await $.getJSON(
			new mw.Uri(WG_SCRIPT)
				.extend({
					action: 'raw',
					title: storePageTitle,
				})
				.toString()
		);
		if (response.countryOrArea === countryOrArea && (response.region === region || (!response.region && !region))) {
			return;
		}
	} catch {}

	const geoInfo: StoreGeoInfo = {
		countryOrArea,
		region,
	};
	const params: ApiEditPageParams = {
		action: 'edit',
		format: 'json',
		formatversion: '2',
		contentformat: 'application/json',
		contentmodel: 'json',
		title: storePageTitle,
		text: JSON.stringify(geoInfo),
		summary: getMessage('Update'),
		minor: true,
		recreate: true,
		watchlist: 'unwatch',
		tags: OPTIONS.apiTag,
	};

	try {
		await api.postWithEditToken(params);
	} catch (error: unknown) {
		console.error('[GeoLocation] Ajax error:', error);
	}
};

export {storeLocation};
