import type {
	ApiClientLoginParams as _ApiClientLoginParams,
	ApiComparePagesParams as _ApiComparePagesParams,
	ApiEditPageParams as _ApiEditPageParams,
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
} from 'types-mediawiki/api_params';

import tippy from 'tippy.js';

type I18nCandidatesKey =
	| 'en'
	| 'ja'
	| 'zh'
	| 'zh-hans'
	| 'zh-hant'
	| 'zh-cn'
	| 'zh-sg'
	| 'zh-my'
	| 'zh-tw'
	| 'zh-hk'
	| 'zh-mo';
type I18nMessages = {
	readonly [message: string]: string | undefined;
};

declare global {
	type ApiClientLoginParams = _ApiClientLoginParams;
	type ApiComparePagesParams = _ApiComparePagesParams;
	type ApiEditPageParams = _ApiEditPageParams;
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

	/**
	 * @param {string} message message here should be safe html, beacuse you can write <button>Buttons</button> in this
	 * @param {string} type "info": dark blue/black, "warning": red/white, "success": green/white, "default": light blue/black (background/text)
	 * @param {number|'long'} ttl number of microseconds before ding element disappears, "long" if the ding should not disappear after a timeout
	 * @param {boolean} persist If the element should go away when user clicks anywhere on it. If persist= true && ttl= long, make sure to include a button to allow the user to remove the banner
	 */
	function DingExposedInterface(
		message: string,
		type?: 'default' | 'info' | 'success' | 'warning',
		ttl?: number | 'long',
		persist?: boolean
	): void;

	type GeoInfo = {
		country: string;
		region: string;
		city: string;
	};

	type I18nCandidates = Partial<Record<I18nCandidatesKey, string>>;
	type GetI18nMessages = () => I18nMessages;
	namespace i18n {
		function content(candidates: I18nCandidates): string;
		function localize(candidates: I18nCandidates): string;
		function vary(candidates: I18nCandidates): string;
	}

	interface Window {
		readonly CatALotPrefs: unknown; // Cat-a-lot
		readonly DiffLink?: unknown[]; // DiffLink
		readonly UTCLiveClockTimeZone?: unknown; // UTCLiveClock
		geo(): Promise<GeoInfo>; // Geo
		geoCountryName(): Record<string, string>; // GeoLocationName
		geoRegionName(): Record<string, string>; // GeoLocationName
		wgUCS(
			hans?: string,
			hant?: string,
			cn?: string,
			tw?: string,
			hk?: string,
			sg?: string,
			zh?: string,
			mo?: string,
			my?: string,
			en?: string
		): string;
		wgULS(
			hans?: string,
			hant?: string,
			cn?: string,
			tw?: string,
			hk?: string,
			sg?: string,
			zh?: string,
			mo?: string,
			my?: string,
			en?: string
		): string;
		wgUVS(
			hans?: string,
			hant?: string,
			cn?: string,
			tw?: string,
			hk?: string,
			sg?: string,
			zh?: string,
			mo?: string,
			my?: string,
			en?: string
		): string;
		ClipboardJS: typeof ClipboardJS; // Clipboard
		tippy: typeof tippy; // Tippy
		LogFilterInstalled: boolean; // LogFilter
		RefToolbarInstalled: boolean; // RefToolbar
		SiteCommonInstalled: boolean; // SiteCommon
		UserJSInstalled: boolean; // UserJS
	}
}

export {};
