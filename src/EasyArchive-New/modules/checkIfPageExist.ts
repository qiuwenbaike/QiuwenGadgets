import {api} from './api';

const checkIfPageExist = async (archiveTo: string) => {
	const params: ApiQueryInfoParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'info',
		titles: archiveTo,
	};

	const {query} = await api.get(params);

	if (query.pages[0]?.missing) {
		return false;
	}
	return true;
};

export {checkIfPageExist};
