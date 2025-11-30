import {api} from './api';

const queryPage = async (params: ApiQueryRevisionsParams) => {
	const response = await api.get(params);
	return response;
};

const editPage = async (params: ApiEditPageParams) => {
	const response = await api.postWithEditToken(params);
	return response;
};

export {queryPage, editPage};
