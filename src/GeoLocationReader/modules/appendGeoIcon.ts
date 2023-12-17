/* eslint-disable mediawiki/class-doc */
import * as OPTIONS from '../options.json';
import {CLASS_NAME, CLASS_NAME_ICON, CLASS_NAME_TEXT, WG_RELEVANT_USER_NAME, WG_SCRIPT, WG_SKIN} from './constant';
import {type CountryOrAreaNameList, type RegionNameList, getCountryOrAreaName, getRegionName} from './util/getName';
import type {StoreGeoInfo} from './types';
import {getMessage} from './i18n';

const ipLocationDesc: string = getMessage('Location') + getMessage(':');
const tagName: 'div' | 'li' | 'section' =
	WG_SKIN === 'citizen' ? 'section' : ['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) ? 'li' : 'div';

const appendIcon = (
	$body: JQuery<HTMLBodyElement>,
	{
		icon,
		indicatorText,
		spanClass,
	}: {
		icon: 'globe' | 'helpNotice' | 'settings' | 'userAvatar';
		indicatorText: string;
		spanClass: 'blue' | 'green' | 'orange';
	}
): void => {
	const text: string = icon === 'globe' ? ipLocationDesc + indicatorText : indicatorText ?? '';

	const $icon: JQuery = $('<span>').addClass(`${CLASS_NAME_ICON} ${CLASS_NAME_ICON}-${icon}`).attr({
		alt: text,
		'aria-label': text,
	});
	const $text: JQuery = $('<span>').addClass(CLASS_NAME_TEXT).text(text);

	const $indicator: JQuery = $(`<${tagName}>`)
		.addClass(`${CLASS_NAME} ${CLASS_NAME}-${spanClass}`)
		.append($icon, $text);

	const $target: JQuery = $body.find(OPTIONS.mountPointSelector);
	$indicator.prependTo($target);
};

const appendGeoIcon = async ($body: JQuery<HTMLBodyElement>): Promise<void> => {
	const storePageTitle: string = `User:${WG_RELEVANT_USER_NAME}/GeoIP.json`;

	try {
		const {country, countryOrArea, region}: StoreGeoInfo & {country?: string} = await $.getJSON(
			new mw.Uri(WG_SCRIPT)
				.extend({
					action: 'raw',
					title: storePageTitle,
				})
				.toString()
		);
		const location: StoreGeoInfo['countryOrArea'] = country ?? countryOrArea ?? '';

		const countryOrAreaName: string =
			getCountryOrAreaName(location as keyof CountryOrAreaNameList) ?? getMessage('Unknown');
		const regionName: string = location === 'CN' ? getRegionName(region as keyof RegionNameList) ?? '' : '';

		appendIcon($body, {
			icon: 'globe',
			indicatorText: countryOrAreaName + regionName,
			spanClass: 'green',
		});
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `appendGeoIcon` method:', error);
		appendIcon($body, {
			icon: 'helpNotice',
			indicatorText: getMessage('Unknown'),
			spanClass: 'orange',
		});
	}
};

export {appendGeoIcon, appendIcon};
