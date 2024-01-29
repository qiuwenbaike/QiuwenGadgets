import * as OPTIONS from '../options.json';
import {CLASS_NAME, CLASS_NAME_ICON, CLASS_NAME_TEXT, WG_RELEVANT_USER_NAME, WG_SCRIPT, WG_SKIN} from './constant';
import {type CountryOrAreaNameList, type RegionNameList, getCountryOrAreaName, getRegionName} from './util/getName';
import React from 'ext.gadget.React';
import type {StoreGeoInfo} from './types';
import {getMessage} from './i18n';

const appendIcon = (
	$body: JQuery<HTMLBodyElement>,
	{
		icon,
		indicatorText,
		spanClass,
	}: {
		icon: 'globe' | 'helpNotice';
		indicatorText: string;
		spanClass: 'green' | 'orange';
	}
): void => {
	const ipLocationDesc: string = getMessage('Location') + getMessage(':');
	const text: string = icon === 'globe' ? ipLocationDesc + indicatorText : indicatorText ?? '';

	const tag =
		WG_SKIN === 'citizen' ? (
			<section className={[CLASS_NAME, `${CLASS_NAME}-${spanClass}`]} />
		) : ['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) ? (
			<li className={[CLASS_NAME, `${CLASS_NAME}-${spanClass}`]} />
		) : (
			<div className={[CLASS_NAME, `${CLASS_NAME}-${spanClass}`]} />
		);
	const indicatorInner = (
		<>
			<span className={[CLASS_NAME_ICON, `${CLASS_NAME_ICON}-${icon}`]} aria-label={text}></span>
			<span className={CLASS_NAME_TEXT}>{text}</span>
		</>
	);

	const $target: JQuery = $body.find(OPTIONS.mountPointSelector);
	$(tag).append(indicatorInner).prependTo($target);
};

const appendGeoIcon = async ($body: JQuery<HTMLBodyElement>): Promise<void> => {
	const storePageTitle: string = `User:${WG_RELEVANT_USER_NAME}/GeoIP.json`;

	try {
		const {country, countryOrArea, region} = (await $.getJSON(
			new mw.Uri(WG_SCRIPT)
				.extend({
					action: 'raw',
					title: storePageTitle,
				})
				.toString()
		)) as StoreGeoInfo & {
			country?: string;
		};
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
