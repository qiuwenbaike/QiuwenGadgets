import type {
	ApiClientLoginParams as _ApiClientLoginParams,
	ApiComparePagesParams as _ApiComparePagesParams,
	ApiEditPageParams as _ApiEditPageParams,
	ApiImportParams as _ApiImportParams,
	ApiParseParams as _ApiParseParams,
	ApiPurgeParams as _ApiPurgeParams,
	ApiQueryLogEventsParams as _ApiQueryLogEventsParams,
	ApiQueryParams as _ApiQueryParams,
	ApiQueryRecentChangesParams as _ApiQueryRecentChangesParams,
	ApiQueryRevisionsParams as _ApiQueryRevisionsParams,
	ApiQueryUserContribsParams as _ApiQueryUserContribsParams,
	ApiQueryUsersParams as _ApiQueryUsersParams,
	ApiUploadParams as _ApiUploadParams,
	UrlShortenerApiShortenUrlParams as _UrlShortenerApiShortenUrlParams,
} from 'types-mediawiki-renovate/api_params';

import type {SettingGlobal as CatALotSetting} from './Cat-a-lot/modules/types'; // Cat-a-lot

import type _ClipboardJS from 'clipboard';
import type {Tippy as _Tippy} from 'tippy.js';
import type _Toastify from 'toastify-js';

declare global {
	type ApiClientLoginParams = _ApiClientLoginParams;
	type ApiComparePagesParams = _ApiComparePagesParams;
	type ApiEditPageParams = _ApiEditPageParams;
	type ApiImportParams = _ApiImportParams;
	type ApiParseParams = _ApiParseParams;
	type ApiPurgeParams = _ApiPurgeParams;
	type ApiQueryLogEventsParams = _ApiQueryLogEventsParams;
	type ApiQueryParams = _ApiQueryParams;
	type ApiQueryRecentChangesParams = _ApiQueryRecentChangesParams;
	type ApiQueryRevisionsParams = _ApiQueryRevisionsParams;
	type ApiQueryUserContribsParams = _ApiQueryUserContribsParams;
	type ApiQueryUsersParams = _ApiQueryUsersParams;
	type ApiUploadParams = _ApiUploadParams;
	type UrlShortenerApiShortenUrlParams = _UrlShortenerApiShortenUrlParams;

	type GeoInfo = {
		country?: string;
		countryOrArea: string;
		region: string;
		city: string;
	};

	// npm packages
	const ClipboardJS: typeof window.ClipboardJS; // Clipboard clipboard.js
	const tippy: typeof window.tippy; // Tippy tippy.js
	const toastify: typeof window.toastify; // Toastify toastify-js
	type ToastifyInstance = ReturnType<typeof toastify>; // Toastify toastify-js

	interface Window {
		readonly CatALotPrefs?: CatALotSetting | unknown; // Cat-a-lot
		readonly DiffLink?: unknown[]; // DiffLink
		readonly UTCLiveClockTimeZone?: unknown; // UTCLiveClock
		geo(): Promise<GeoInfo>; // Geo
		geoCountryOrAreaName(): Record<string, string>; // GeoLocationName
		geoRegionName(): Record<string, string>; // GeoLocationName
		// npm packages
		ClipboardJS: typeof _ClipboardJS; // Clipboard clipboard.js
		tippy: _Tippy; // Tippy tippy.js
		toastify: (
			options: _Toastify.Options,
			type?: 'info' | 'success' | 'warning' | 'error'
		) => {
			hideToast: () => void;
		}; // Toastify toastify-js
	}
}

export {};
