import {IGNORE_LIST, WEBMASTER_LIST} from './module/constant';
import {getMessage} from './module/i18n';

(async function geoLocation(): Promise<void> {
	const api: mw.Api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (GeoLocation/2.0; ${mw.config.get('wgWikiID')})`,
			},
		},
	});
	const {country, region} = await window.geo();
	const wgUserGroups: string[] = mw.config.get('wgUserGroups') ?? ['*'];
	const wgUserName: string | null = mw.config.get('wgUserName');

	const storeLocation = async (): Promise<void> => {
		if (!country || !wgUserName) {
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
				response.country === country &&
				(response.region === region || (response.region !== '' && region === ''))
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
				text: `{"country":"${country}","region":"${region}"}`,
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
