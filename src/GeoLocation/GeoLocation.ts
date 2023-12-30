import {USER_SCRIPT_LIST, USER_WEBMASTER_LIST, WG_USER_GROUPS, WG_USER_NAME} from './modules/constant';
import {geo} from 'ext.gadget.Geo';
import {storeLocation} from './modules/storeLocation';

(async function geoLocation(): Promise<void> {
	if (USER_SCRIPT_LIST.includes(WG_USER_NAME) || USER_WEBMASTER_LIST.includes(WG_USER_NAME) || !WG_USER_NAME) {
		return;
	}

	if (
		WG_USER_GROUPS.includes('bot') ||
		WG_USER_GROUPS.includes('qiuwen') ||
		!(WG_USER_GROUPS.includes('autoconfirmed') || WG_USER_GROUPS.includes('confirmed'))
	) {
		return;
	}

	const {countryOrArea, region} = await geo();
	if (!countryOrArea) {
		return;
	}

	void storeLocation({
		countryOrArea,
		region,
	});
})();
