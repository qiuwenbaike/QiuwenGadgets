import {IGNORE_LIST, WEBMASTER_LIST} from './modules/constant';
import {getMessage} from './modules/i18n';
import {initMwApi} from '../util';

(async function geoLocation(): Promise<void> {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (GeoLocation/2.0; ${mw.config.get('wgWikiID')})`);
	const {country, countryOrArea, region} = await window.geo();
	const wgUserGroups: string[] = mw.config.get('wgUserGroups') ?? ['*'];
	const wgUserName: string | null = mw.config.get('wgUserName');

	const storeLocation = async (): Promise<void> => {
		if (!(country ?? countryOrArea) || !wgUserName) {
			return;
		}
		if (IGNORE_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
			return;
		}
		if (
			wgUserGroups.includes('bot') ||
			wgUserGroups.includes('qiuwen') ||
			!(wgUserGroups.includes('autoconfirmed') || wgUserGroups.includes('confirmed'))
		) {
			return;
		}
		try {
			const params: ApiQueryRevisionsParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				titles: `User:${wgUserName}/GeoIP.json`,
				prop: 'revisions',
				rvprop: 'content',
				rvslots: 'main',
			};
			const response: GeoInfo = await api.get(params).then((data) => {
				return JSON.parse(data['query'].pages[0].revisions[0].slots.main.content);
			});
			if (
				(response.country ?? response.countryOrArea) === (country ?? countryOrArea) &&
				(response.region === region || (response.region !== '' && region === '')) &&
				!response.country
			) {
				return;
			}
		} catch {}
		try {
			const params: ApiEditPageParams = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				contentformat: 'application/json',
				contentmodel: 'json',
				title: `User:${wgUserName}/GeoIP.json`,
				text: `{"countryOrArea":"${country ?? countryOrArea}","region":"${region}"}`,
				summary: getMessage('Update'),
				minor: true,
				recreate: true,
				watchlist: 'unwatch',
				token: mw.user.tokens.get('csrfToken'),
				tags: 'GeoLocation',
			};
			await api.postWithEditToken(params);
		} catch {}
	};
	storeLocation();
})();
