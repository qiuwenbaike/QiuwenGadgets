import {api} from './api';

const queryGlobalUserInfo = async (guiuser: string) => {
	const params: ApiQueryGlobalUserInfoResponse = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		meta: ['globaluserinfo'],
		guiuser,
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

export {queryGlobalUserInfo};
