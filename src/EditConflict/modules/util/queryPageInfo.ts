import {api} from '../api';

interface PageInfo {
	query?: {
		pages: {
			missing?: boolean;
			revisions: {
				revid: number;
			}[];
		}[];
	};
}

const params: ApiQueryRevisionsParams = {
	action: 'query',
	format: 'json',
	formatversion: '2',
	prop: 'revisions',
	rvprop: 'ids',
};

const queryPageInfo = async (title: string): Promise<PageInfo> => {
	try {
		return await api.get({
			...params,
			titles: title,
		} as typeof params);
	} catch (error: unknown) {
		console.error('[EditConflict] Ajax error:', error);
		return {};
	}
};

export {queryPageInfo};
