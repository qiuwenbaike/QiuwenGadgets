type InitMwApi = (userAgent?: string, apiUri?: string) => mw.Api | mw.ForeignApi;

/**
 * @requires mediawiki.apiUri
 * @param {string} [userAgent]
 * @param {string} [apiUri]
 * @return {mw.Api|mw.ForeignApi}
 */
const initMwApi: InitMwApi = (userAgent, apiUri) => {
	if (apiUri) {
		return new mw.ForeignApi(apiUri, {
			ajax: {
				headers: {
					'Api-User-Agent': userAgent ? `Qiuwen/1.1 (${userAgent})` : 'Qiuwen/1.1',
				},
			},
		});
	}
	return new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': userAgent ? `Qiuwen/1.1 (${userAgent})` : 'Qiuwen/1.1',
			},
		},
	});
};

export {type InitMwApi, initMwApi};
