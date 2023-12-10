import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import {geoCountryOrAreaName, geoRegionName} from './name';
import {GeoInfo} from '~/Geo/modules/types';
import {getMessage} from './i18n';
import {initMwApi} from '~/util';

const _countryOrAreaList: Record<string, string> = geoCountryOrAreaName();
const _regionList: Record<string, string> = geoRegionName();
const getCountryOrAreaName = (key: string) => {
	return _countryOrAreaList[key] || key;
};
const getRegionName = (key: string) => {
	return _regionList[key] || key;
};

export const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');

export const getLocation = async (): Promise<void> => {
	if (!wgRelevantUserName) {
		return;
	}
	const ipGeoLocationDesc: string = getMessage('Location');
	const appendIcon = (indicatorText: string, spanClass: string, icon: string, indicator?: boolean): void => {
		const elementName: 'div' | 'li' | 'section' =
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
		const $body: JQuery<HTMLBodyElement> = $('body');
		if (indicator === true) {
			$indicator.appendTo($body.find('.mw-indicators'));
		} else {
			$indicator.prependTo($body.find('#footer-info, .page-info'));
		}
	};
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (GeoLocationReader/1.0; ${mw.config.get('wgWikiID')})`);
	const getUserGeoIP = async (): Promise<void> => {
		try {
			const propRevisionsParams: ApiQueryRevisionsParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				titles: `User:${wgRelevantUserName}/GeoIP.json`,
				prop: 'revisions',
				rvprop: 'content',
				rvslots: 'main',
			};
			const {query} = await api.get(propRevisionsParams);
			const {country, countryOrArea, region}: GeoInfo = JSON.parse(
				query.pages[0].revisions[0].slots.main.content
			);
			const countryOrAreaText: string = getCountryOrAreaName(country ?? countryOrArea) ?? getMessage('Unknown');
			const regionText: string = (country ?? countryOrArea) === 'CN' ? getRegionName(region) ?? '' : '';
			const indicatorText: string = `${countryOrAreaText}${regionText}`;
			const spanClass: string = 'green';
			appendIcon(indicatorText, spanClass, 'globe');
		} catch {
			const indicatorText: string = getMessage('Unknown');
			const spanClass: string = 'orange';
			appendIcon(indicatorText, spanClass, 'helpNotice');
		}
	};
	try {
		const listUsersParams: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			ususers: wgRelevantUserName,
			usprop: 'groups',
		};
		const {query} = await api.get(listUsersParams);
		const [{groups}]: [{groups: string[]}] = query.users;
		if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName) || groups.includes('bot')) {
			appendIcon(getMessage('Bot'), 'blue', 'settings');
		} else if (WEBMASTER_LIST.includes(wgRelevantUserName) || groups.includes('qiuwen')) {
			appendIcon(getMessage('Webmaster'), 'blue', 'userAvatar');
		} else {
			getUserGeoIP();
		}
	} catch {}
};
