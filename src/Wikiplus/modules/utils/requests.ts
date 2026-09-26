import Constants from '../utils/constants';

const Requests = {
	base: `${location.protocol}//${location.host}${Constants.scriptPath}/api.php`,
	async get(query: ApiQueryParams | ApiParseParams | ApiEditPageParams) {
		const url = new URL(Requests.base);
		for (const key of Object.keys(query)) {
			url.searchParams.append(key, query[key]);
		}
		const response = await fetch(url, {
			credentials: 'same-origin',
			headers: {
				'Api-User-Agent': Constants.userAgent,
			},
		});
		return await response.json();
	},
	async post(payload: ApiQueryParams | ApiParseParams | ApiEditPageParams) {
		const url = new URL(Requests.base);
		const form = new FormData();
		for (const [key, value] of Object.entries(payload)) {
			form.append(key, value as string);
		}
		const response = await fetch(url, {
			method: 'POST',
			body: form,
			credentials: 'same-origin',
			headers: {
				'Api-User-Agent': Constants.userAgent,
			},
		});
		return await response.json();
	},
};

export default Requests;
