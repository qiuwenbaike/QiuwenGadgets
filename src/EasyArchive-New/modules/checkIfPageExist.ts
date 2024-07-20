import {api} from './api';

const checkIfPageExist = async (archiveTo: string) => {
	const params: ApiQueryInfoParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'info',
		titles: archiveTo,
	};

	const {pages} = await api.get(params);

	if (pages[0]?.missing) {
		return false;
	}
	return true;
};

export {checkIfPageExist};
