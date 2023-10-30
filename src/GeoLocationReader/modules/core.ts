import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import {geoCountryName, geoRegionName} from './name';
import {getMessage} from './i18n';

const countryList = geoCountryName;
const regionList = geoRegionName;
const _countryList: Record<string, string> = countryList();
const _regionList: Record<string, string> = regionList();
const getCountryName = (key: string) => {
	return _countryList[key] || key;
};
const getRegionName = (key: string) => {
	return _regionList[key] || key;
};

export const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');

export const getLocation = (): void => {
	if (!wgRelevantUserName) {
		return;
	}
	const ipGeoLocationDesc: string = getMessage('Location');
	const appendIcon = (indicatorText: string, spanClass: string, icon: string, indicator?: boolean): void => {
		const elementName =
			indicator === true
				? 'div'
				: mw.config.get('skin') === 'citizen'
				? 'section'
				: ['vector', 'vector-2022', 'gongbi', 'write'].includes(mw.config.get('skin'))
				? 'li'
				: 'div';
		// The following classes are used here:
		// * mw-geolocation-green
		// * mw-geolocation-blue
		// * mw-geolocation-orange
		const $indicator: JQuery = $(`<${elementName}>`)
			.addClass(`${indicator === true ? 'mw-indicator ' : ''}mw-geolocation mw-geolocation-${spanClass}`)
			.append(
				$('<span>')
					.addClass(`mw-geolocation-icon mw-geolocation-icon-${icon ?? 'globe'}`)
					.attr({
						alt:
							icon === 'globe'
								? `${ipGeoLocationDesc}${getMessage(':')}${indicatorText}`
								: indicatorText ?? '',
						title:
							icon === 'globe'
								? `${ipGeoLocationDesc}${getMessage(':')}${indicatorText}`
								: indicatorText ?? '',
					})
			)
			.append(
				$('<span>')
					.addClass('mw-geolocation-text')
					.text(
						icon === 'globe'
							? `${ipGeoLocationDesc}${getMessage(':')}${indicatorText}`
							: indicatorText ?? ''
					)
			);
		$((): void => {
			if (indicator === true) {
				$indicator.appendTo($('.mw-indicators'));
			} else {
				$indicator.prependTo($('#footer-info, .page-info'));
			}
		});
	};
	const api: mw.Api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (GeoLocationReader/1.0; ${mw.config.get('wgWikiID')})`,
			},
		},
	});
	const getUserGeoIP = (): void => {
		const propRevisionsParams: ApiQueryRevisionsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			titles: `User:${wgRelevantUserName}/GeoIP.json`,
			prop: 'revisions',
			rvprop: 'content',
			rvslots: 'main',
		};
		api.get(propRevisionsParams)
			.then((data): void => {
				const response: GeoInfo = JSON.parse(data['query'].pages[0].revisions[0].slots.main.content);
				const countryText: string = getCountryName(response.country) ?? getMessage('Unknown');
				const regionText: string = response.country === 'CN' ? getRegionName(response.region) ?? '' : '';
				const indicatorText = `${countryText}${regionText}`;
				const spanClass = 'green';
				appendIcon(indicatorText, spanClass, 'globe');
			})
			.catch((): void => {
				const indicatorText = getMessage('Unknown');
				const spanClass = 'orange';
				appendIcon(indicatorText, spanClass, 'helpNotice');
			});
	};
	const listUsersParams: ApiQueryUsersParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		ususers: wgRelevantUserName,
		usprop: 'groups',
	};
	api.get(listUsersParams).then((response): void => {
		const [{groups}]: [{groups: string[]}] = response['query'].users;
		if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName) || groups.includes('bot')) {
			appendIcon(getMessage('Bot'), 'blue', 'settings');
		} else if (WEBMASTER_LIST.includes(wgRelevantUserName) || groups.includes('qiuwen')) {
			appendIcon(getMessage('Webmaster'), 'blue', 'userAvatar');
		} else {
			getUserGeoIP();
		}
	});
};
