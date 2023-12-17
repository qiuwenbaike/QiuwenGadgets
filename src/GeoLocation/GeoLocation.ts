import {USER_IGNORE_LIST, WG_USER_GROUPS, WG_USER_NAME} from './modules/constant';
import {storeLocation} from './modules/storeLocation';

(async function geoLocation(): Promise<void> {
	if (USER_IGNORE_LIST.includes(WG_USER_NAME) || !WG_USER_NAME) {
		return;
	}

	if (
		WG_USER_GROUPS.includes('bot') ||
		WG_USER_GROUPS.includes('qiuwen') ||
		!(WG_USER_GROUPS.includes('autoconfirmed') || WG_USER_GROUPS.includes('confirmed'))
	) {
		return;
	}

	const {country, countryOrArea, region} = await window.geo();
	const location: string = country ?? countryOrArea;
	if (!location) {
		return;
	}

	storeLocation({
		region,
		countryOrArea: location,
	});
})();
