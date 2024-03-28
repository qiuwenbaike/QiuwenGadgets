import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './modules/constant';
import {getGeoInfo} from 'ext.gadget.Geo';
import {storeLocation} from './modules/storeLocation';

(async function geoLocation(): Promise<void> {
	const {wgUserName, wgUserGroups, wgUserEditCount} = mw.config.get();

	if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName) || !wgUserName) {
		return;
	}

	if (!wgUserGroups || wgUserGroups.includes('bot') || wgUserGroups.includes('qiuwen') || !(wgUserEditCount || 0)) {
		return;
	}

	const {countryOrArea, region} = await getGeoInfo();
	if (!countryOrArea) {
		return;
	}

	void storeLocation({
		countryOrArea,
		region,
	});
})();
