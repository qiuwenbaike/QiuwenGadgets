type InitMwApi = (userAgent?: string) => mw.Api;

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
