import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './modules/constant';
import {getGeoInfo} from 'ext.gadget.Geo';
import {storeLocation} from './modules/storeLocation';
import {userHasRight} from 'ext.gadget.Util';

(async function geoLocation(): Promise<void> {
	const {wgUserName} = mw.config.get();

	if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
		return;
	}

	// Disabled for official users and experienced users
	if (userHasRight('bot') || userHasRight('officialprotected')) {
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
