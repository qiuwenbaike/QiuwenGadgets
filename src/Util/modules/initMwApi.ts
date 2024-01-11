type InitMwApi = (userAgent?: string) => mw.Api;

/**
 * @requires mediawiki.api
 * @param {string} [userAgent]
 * @return {mw.Api}
 */
const initMwApi: InitMwApi = (userAgent) => {
	return new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': userAgent,
			},
		},
	});
};

export {type InitMwApi, initMwApi};
