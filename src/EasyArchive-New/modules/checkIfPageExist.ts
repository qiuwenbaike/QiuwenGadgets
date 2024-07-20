import {api} from './api';

const checkIfPageExist = async (archiveTo: string) => {
	const params: ApiQueryInfoParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'info',
		titles: archiveTo,
	};

	const response = await api.get(params);

	if (response['pages'][0].missing === true) {
		return false;
	}
	return true;
};

export {checkIfPageExist};
