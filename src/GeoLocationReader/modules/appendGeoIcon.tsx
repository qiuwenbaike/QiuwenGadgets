import {appendIcon} from './util/appendIcon';
import {getLocation} from './util/getLocation';
import {getMessage} from './i18n';

const appendGeoIcon = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();
	if (!wgRelevantUserName) {
		return;
	}

	try {
		const {countryOrAreaName, regionName} = await getLocation(wgRelevantUserName);

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
