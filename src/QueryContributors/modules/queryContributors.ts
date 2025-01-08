import {api} from './api';

const queryContributors = async (titles: string, pccontinue?: string) => {
	const params: ApiQueryContributorsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'contributors',
		pcexcludegroup: ['bot'],
		pclimit: 5000,
		titles,
		smaxage: 600,
		maxage: 600,
	};

	if (pccontinue) {
		params.pccontinue = pccontinue;
	}

	const response = await api.get(params);

	return response;
};

export {queryContributors};
